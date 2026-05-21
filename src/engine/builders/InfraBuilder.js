// ============================================================================
// InfraBuilder.js — Road, rail, bridge, tunnel, and ribbon geometry builders
// ============================================================================

import * as THREE               from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { getElevationAt }       from '../world/GeoMath.js';
import {
    injectBridgeSegmentToGrid,
    injectTunnelSegmentToGrid,
    getStructureAt,
    collidableGeometries,
} from '../world/SpatialGrid.js';

// ── Config constants ──────────────────────────────────────────────────────────
export const INFRA_CONFIG = {
    motorway:    { width: 14,  color: 0x333333, hasLines: true,  camber: 0 },
    trunk:       { width: 12,  color: 0x333333, hasLines: true,  camber: 0 },
    primary:     { width: 10,  color: 0x444444, hasLines: true,  camber: 0 },
    secondary:   { width: 8,   color: 0x555555, hasLines: true,  camber: 0 },
    residential: { width: 6,   color: 0x666666, hasLines: false, camber: 0 },
    railway:     { width: 5,   color: 0x222222, hasLines: false, camber: 0 },
    footway:     { width: 4,   color: 0x887766, hasLines: false, camber: 0.5 },
    pedestrian:  { width: 6,   color: 0x887766, hasLines: false, camber: 0 },
    steps:       { width: 1.5, color: 0x776655, hasLines: false, camber: 0 },
    path:        { width: 4,   color: 0x887766, hasLines: false, camber: 0.3 },
    default:     { width: 6,   color: 0x555555, hasLines: true,  camber: 0 },
};

export const LAYER_HEIGHT          = 5.0;
export const INFRA_RAMP_DISTANCE   = 30.0;
export const INFRA_PILLAR_INTERVAL = 30.0;
export const INFRA_PILLAR_TOP_GAP  = 0.2;

const easeInOutSine = (x) => -(Math.cos(Math.PI * x) - 1) / 2;

export function getInfraConfig(props) {
    if (props.railway) return INFRA_CONFIG.railway;
    const h = (props.highway || '').toLowerCase();
    if (h === 'motorway')  return INFRA_CONFIG.motorway;
    if (h === 'trunk')     return INFRA_CONFIG.trunk;
    if (h === 'primary')   return INFRA_CONFIG.primary;
    if (h === 'secondary' || h === 'tertiary') return INFRA_CONFIG.secondary;
    if (h === 'residential' || h === 'unclassified' || h === 'road' ||
        h === 'living_street' || h === 'service') return INFRA_CONFIG.residential;
    if (h === 'footway')    return INFRA_CONFIG.footway;
    if (h === 'pedestrian') return INFRA_CONFIG.pedestrian;
    if (h === 'steps')      return INFRA_CONFIG.steps;
    if (h === 'path' || h === 'cycleway' || h === 'track') return INFRA_CONFIG.path;
    return INFRA_CONFIG.default;
}

// ── OSM colour helpers ────────────────────────────────────────────────────────
export function getOSMColor(colorStr, defaultHex) {
    if (!colorStr) return defaultHex;
    const s = colorStr.toLowerCase().trim();
    const map = {
        'brick': 0x8c4a32, 'brown': 0xa52a2a, 'red': 0xcc0000,
        'white': 0xffffff, 'grey':  0x808080,  'gray': 0x808080,
        'black': 0x222222, 'blue':  0x0044cc,  'green': 0x008000,
        'yellow': 0xffd700, 'orange': 0xff8c00, 'beige': 0xf5f5dc,
        'glass': 0x88ccff, 'silver': 0xc0c0c0, 'concrete': 0x999999,
    };
    if (map[s]) return map[s];
    if (s.startsWith('#')) {
        const parsed = parseInt(s.replace('#', ''), 16);
        return isNaN(parsed) ? defaultHex : parsed;
    }
    return defaultHex;
}

export function applyVertexColors(geo, hexColor) {
    const count  = geo.attributes.position.count;
    const colors = new Float32Array(count * 3);
    const color  = new THREE.Color(hexColor);
    for (let i = 0; i < count; i++) {
        colors[i * 3]     = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}

export function getRoadHalfWidth(props) {
    if (props.width) {
        const w = parseFloat(props.width);
        if (!isNaN(w) && w > 0) return w / 2.0;
    }
    if (props.lanes) {
        const l = parseInt(props.lanes, 10);
        if (!isNaN(l) && l > 0) return (l * 3.5) / 2.0;
    }
    const h = (props.highway || '').toLowerCase();
    const isOneway = props.oneway === 'yes' || props.oneway === '-1';
    switch (h) {
        case 'motorway': case 'trunk': return isOneway ? 3.5 : 6.0;
        case 'primary':  return isOneway ? 3.0 : 5.0;
        case 'secondary': return isOneway ? 2.5 : 4.0;
        case 'tertiary':  return 3.0;
        case 'residential': case 'unclassified': case 'road': return 2.5;
        case 'living_street': case 'service': return 1.5;
        case 'pedestrian': case 'footway': case 'cycleway': case 'path': return 1.0;
        case 'steps': return 1.5;
        default: return 1.5;
    }
}

// ── Geometry utilities ────────────────────────────────────────────────────────
export function douglasPeucker(pts, epsilon) {
    if (pts.length <= 2) return pts.slice();
    const first = pts[0], last = pts[pts.length - 1];
    const dx = last.x - first.x, dy = last.y - first.y;
    const chord = Math.sqrt(dx * dx + dy * dy);
    let maxDist = 0, maxIdx = 1;
    for (let i = 1; i < pts.length - 1; i++) {
        const d = chord > 1e-9
            ? Math.abs(dx * (first.y - pts[i].y) - (first.x - pts[i].x) * dy) / chord
            : Math.hypot(pts[i].x - first.x, pts[i].y - first.y);
        if (d > maxDist) { maxDist = d; maxIdx = i; }
    }
    if (maxDist > epsilon) {
        const L = douglasPeucker(pts.slice(0, maxIdx + 1), epsilon);
        const R = douglasPeucker(pts.slice(maxIdx), epsilon);
        return [...L.slice(0, -1), ...R];
    }
    return [first, last];
}

export function cleanAndResample(projPts, maxStep, groundFn) {
    if (projPts.length < 2) return [];
    const cleanPts = [projPts[0]];
    for (let i = 1; i < projPts.length; i++) {
        if (Math.hypot(projPts[i].x - cleanPts[cleanPts.length-1].x,
                       projPts[i].y - cleanPts[cleanPts.length-1].y) > 0.1) {
            cleanPts.push(projPts[i]);
        }
    }
    if (cleanPts.length < 2) return [];

    const result = [];
    for (let i = 0; i < cleanPts.length - 1; i++) {
        const p1 = cleanPts[i], p2 = cleanPts[i+1];
        const v1 = new THREE.Vector3(p1.x, 0, -p1.y);
        v1.y = groundFn(v1.x, v1.z);
        if (i === 0) result.push(v1);
        const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
        if (dist > maxStep) {
            const steps = Math.ceil(dist / maxStep);
            for (let j = 1; j < steps; j++) {
                const t = j / steps;
                const pt = new THREE.Vector3(p1.x + (p2.x - p1.x) * t, 0, -(p1.y + (p2.y - p1.y) * t));
                pt.y = groundFn(pt.x, pt.z);
                result.push(pt);
            }
        }
        const v2 = new THREE.Vector3(p2.x, 0, -p2.y);
        v2.y = groundFn(v2.x, v2.z);
        result.push(v2);
    }
    return result;
}

export function smoothElevations(pts, passes = 3) {
    if (pts.length < 3) return pts;
    for (let p = 0; p < passes; p++) {
        const newY = new Float32Array(pts.length);
        newY[0] = pts[0].y;
        newY[pts.length - 1] = pts[pts.length - 1].y;
        for (let i = 1; i < pts.length - 1; i++) {
            newY[i] = (pts[i - 1].y + pts[i].y + pts[i + 1].y) / 3.0;
        }
        for (let i = 1; i < pts.length - 1; i++) pts[i].y = newY[i];
    }
    return pts;
}

export function buildVerticalWall(pts, height) {
    if (pts.length < 2) return null;
    const pos = [], idx = [], uv = [], ed = [];
    let dist = 0;
    for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (i > 0) dist += Math.hypot(p.x - pts[i-1].x, p.z - pts[i-1].z);
        const v = dist / 4.0;
        pos.push(p.x, p.y, p.z);        uv.push(0.0, v); ed.push(0.0);
        pos.push(p.x, p.y + height, p.z); uv.push(1.0, v); ed.push(0.0);
    }
    for (let i = 0; i < pts.length - 1; i++) {
        const a = i * 2;
        idx.push(a, a+1, a+2,   a+1, a+3, a+2);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('roadUV',   new THREE.Float32BufferAttribute(uv,  2));
    geo.setAttribute('roadED',   new THREE.Float32BufferAttribute(ed,  1));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    return geo;
}

// ── Elevated ribbon (bridges) ─────────────────────────────────────────────────
export function buildInfraElevatedRibbon(projPts, opts) {
    const {
        cfg, halfW, layer,
        taperStart, taperEnd,
        archBridge   = false,
        markings     = true,
        priorityOffset = 0,
    } = opts;

    let cleanPts = [projPts[0]];
    for (let i = 1; i < projPts.length; i++) {
        if (Math.hypot(projPts[i].x - cleanPts[cleanPts.length-1].x,
                       projPts[i].y - cleanPts[cleanPts.length-1].y) > 0.1)
            cleanPts.push(projPts[i]);
    }
    if (cleanPts.length < 2) return null;

    const STEP = 2.0;
    const resampled = [new THREE.Vector3(cleanPts[0].x, 0, -cleanPts[0].y)];
    const resDists  = [0];
    let   resTotal  = 0;

    for (let i = 0; i < cleanPts.length - 1; i++) {
        const p1 = cleanPts[i], p2 = cleanPts[i+1];
        const steps = Math.ceil(Math.hypot(p2.x - p1.x, p2.y - p1.y) / STEP);
        for (let j = 1; j <= steps; j++) {
            const s  = j / steps;
            const pt = new THREE.Vector3(p1.x + (p2.x - p1.x) * s, 0, -(p1.y + (p2.y - p1.y) * s));
            resTotal += resampled[resampled.length-1].distanceTo(pt);
            resDists.push(resTotal);
            resampled.push(pt);
        }
    }

    const effectiveLayer = (layer && layer > 0) ? layer : 1;
    const deckLift       = effectiveLayer * LAYER_HEIGHT + priorityOffset;
    const deckThickness  = 0.8;

    const startTerrainZ = getElevationAt(resampled[0].x, resampled[0].z);
    const endTerrainZ   = getElevationAt(resampled[resampled.length-1].x, resampled[resampled.length-1].z);
    const terrainZs     = resampled.map(pt => getElevationAt(pt.x, pt.z));

    const pos = [], idx = [], roadUV = [], roadED = [];

    for (let i = 0; i < resampled.length; i++) {
        const pt = resampled[i];
        let fwd = new THREE.Vector2();
        if (i === 0) {
            fwd.set(resampled[1].x - pt.x, resampled[1].z - pt.z).normalize();
        } else if (i === resampled.length - 1) {
            fwd.set(pt.x - resampled[i-1].x, pt.z - resampled[i-1].z).normalize();
        } else {
            const d1 = new THREE.Vector2(pt.x - resampled[i-1].x, pt.z - resampled[i-1].z).normalize();
            const d2 = new THREE.Vector2(resampled[i+1].x - pt.x, resampled[i+1].z - pt.z).normalize();
            fwd.addVectors(d1, d2).normalize();
            if (fwd.lengthSq() < 0.001) fwd.copy(d1);
        }

        const nx = -fwd.y * halfW, nz = fwd.x * halfW;

        const dFromStart = resDists[i];
        const dFromEnd   = resTotal - dFromStart;

        let taperFactor = 1.0;
        if (taperStart && dFromStart < INFRA_RAMP_DISTANCE)
            taperFactor *= easeInOutSine(dFromStart / INFRA_RAMP_DISTANCE);
        if (taperEnd && dFromEnd < INFRA_RAMP_DISTANCE)
            taperFactor *= easeInOutSine(dFromEnd / INFRA_RAMP_DISTANCE);

        const archZ = (archBridge && cfg.camber > 0 && resTotal > 0)
            ? Math.sin((dFromStart / resTotal) * Math.PI) * cfg.camber * taperFactor
            : 0;

        const t     = resTotal > 0 ? dFromStart / resTotal : 0;
        const baseZ = startTerrainZ * (1 - t) + endTerrainZ * t;
        let   deckY = baseZ + (deckLift * taperFactor) + archZ;
        deckY = Math.max(deckY, terrainZs[i] + 0.1);
        pt.y  = deckY;
        const yBot = deckY - deckThickness;

        const rx = pt.x + nx, rz = pt.z + nz;
        const lx = pt.x - nx, lz = pt.z - nz;
        pos.push(rx, deckY, rz,  lx, deckY, lz,  rx, yBot, rz,  lx, yBot, lz);
        pos.push(rx, deckY, rz,  rx, yBot,  rz,  lx, deckY, lz, lx, yBot, lz);

        const v  = dFromStart / 4.0;
        const ed = (markings && cfg.hasLines) ? Math.min(dFromStart, dFromEnd) : 0.0;
        roadUV.push(0,v, 1,v, 0,v, 1,v);
        roadUV.push(0,v, 0,v, 1,v, 1,v);
        for (let _v = 0; _v < 8; _v++) roadED.push(ed);
    }

    for (let i = 0; i < resampled.length - 1; i++) {
        const a = i * 8, b = (i + 1) * 8;
        idx.push(a+0, a+1, b+1,   a+0, b+1, b+0);
        idx.push(a+2, b+3, a+3,   a+2, b+2, b+3);
        idx.push(a+4, a+5, b+5,   a+4, b+5, b+4);
        idx.push(a+6, b+7, a+7,   a+6, b+6, b+7);
    }

    let deckGeo = new THREE.BufferGeometry();
    deckGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    deckGeo.setAttribute('roadUV',   new THREE.Float32BufferAttribute(roadUV, 2));
    deckGeo.setAttribute('roadED',   new THREE.Float32BufferAttribute(roadED, 1));
    deckGeo.setIndex(idx);
    deckGeo.computeVertexNormals();

    const PILLAR_R    = Math.min(0.55, halfW * 0.22);
    const PILLAR_SEGS = 10;
    const BEAM_THICK  = 0.5;
    const pillarGeos  = [];
    let   distSincePier = 0;

    for (let i = 0; i < resampled.length - 1; i++) {
        const pA = resampled[i], pB = resampled[i+1];
        distSincePier += pA.distanceTo(pB);
        if (distSincePier < INFRA_PILLAR_INTERVAL) continue;
        distSincePier = 0;

        const groundY   = getElevationAt(pA.x, pA.z);
        const deckTop   = pA.y;
        const pillarTop = deckTop - INFRA_PILLAR_TOP_GAP;
        const pierH     = pillarTop - groundY;
        if (pierH < 0.8) continue;

        const fwdX = pB.x - pA.x, fwdZ = pB.z - pA.z;
        const fwdLen = Math.hypot(fwdX, fwdZ) || 1;
        const tX = -fwdZ / fwdLen, tZ = fwdX / fwdLen;

        const pillarCount   = halfW >= 4.5 ? 3 : 2;
        const spread        = halfW * 0.72;
        const pillarCentreY = groundY + pierH * 0.5;
        const beamY         = pillarTop - BEAM_THICK * 0.5;

        for (let p = 0; p < pillarCount; p++) {
            const frac = pillarCount === 1 ? 0 : (p / (pillarCount - 1)) - 0.5;
            const offX = pA.x + tX * (frac * spread * 2);
            const offZ = pA.z + tZ * (frac * spread * 2);
            const cyl  = new THREE.CylinderGeometry(PILLAR_R, PILLAR_R * 1.15, pierH, PILLAR_SEGS);
            cyl.translate(offX, pillarCentreY, offZ);
            cyl.deleteAttribute('uv');
            pillarGeos.push(cyl);
            injectBridgeSegmentToGrid({ x: offX, y: groundY, z: offZ }, { x: offX, y: deckTop, z: offZ }, PILLAR_R + 0.15);
        }

        const beamLen = spread * 2 + PILLAR_R * 2;
        const beam = new THREE.BoxGeometry(beamLen, BEAM_THICK, PILLAR_R * 2);
        beam.rotateY(Math.atan2(tX, tZ));
        beam.translate(pA.x, beamY, pA.z);
        beam.deleteAttribute('uv');
        pillarGeos.push(beam);
    }

    let pillarGeo = null;
    if (pillarGeos.length > 0) {
        pillarGeo = BufferGeometryUtils.mergeGeometries(pillarGeos);
        pillarGeos.forEach(p => p.dispose());
        const pCount = pillarGeo.attributes.position.count;
        pillarGeo.setAttribute('roadUV', new THREE.Float32BufferAttribute(new Float32Array(pCount * 2), 2));
        pillarGeo.setAttribute('roadED', new THREE.Float32BufferAttribute(new Float32Array(pCount),     1));
    }

    for (let i = 0; i < resampled.length - 1; i++) {
        injectBridgeSegmentToGrid(resampled[i], resampled[i+1], halfW);
    }

    if (deckGeo)   collidableGeometries.push(deckGeo);
    if (pillarGeo) collidableGeometries.push(pillarGeo);

    return { deckGeo, pierGeo: pillarGeo };
}

// ── Smooth ribbon (ground roads) ──────────────────────────────────────────────
export function buildSmoothRibbon(pts, halfWidth, markings = true) {
    if (pts.length < 2) return null;
    const pos = [], idx = [], uv = [], ed = [];
    let lastTx = 1, lastTz = 0, dist = 0;
    let totalDist = 0;
    for (let i = 1; i < pts.length; i++) totalDist += Math.hypot(pts[i].x - pts[i-1].x, pts[i].z - pts[i-1].z);

    for (let i = 0; i < pts.length; i++) {
        const prev = pts[i > 0 ? i - 1 : 0];
        const next = pts[i < pts.length - 1 ? i + 1 : pts.length - 1];
        if (i > 0) dist += Math.hypot(pts[i].x - pts[i-1].x, pts[i].z - pts[i-1].z);

        let tx = next.x - prev.x, tz = next.z - prev.z;
        const len = Math.hypot(tx, tz);
        if (len < 1e-5) { tx = lastTx; tz = lastTz; }
        else { tx /= len; tz /= len; lastTx = tx; lastTz = tz; }

        const nx = -tz * halfWidth, nz = tx * halfWidth;
        const rightX = pts[i].x + nx, rightZ = pts[i].z + nz;
        const leftX  = pts[i].x - nx, leftZ  = pts[i].z - nz;

        let rightY, leftY;
        if (pts[i].isBridgeDeck) {
            rightY = leftY = pts[i].y;
        } else {
            const rBase = getElevationAt(rightX, rightZ);
            const lBase = getElevationAt(leftX,  leftZ);
            const cBase = getElevationAt(pts[i].x, pts[i].z);
            const targetOffset = pts[i].y - cBase;
            const ridgePush    = Math.max(0, cBase - (rBase + lBase) / 2);
            rightY = rBase + targetOffset + ridgePush;
            leftY  = lBase + targetOffset + ridgePush;
        }

        const v   = dist / 4.0;
        const edV = markings ? Math.min(dist, totalDist - dist) : 0.0;
        pos.push(rightX, rightY, rightZ); uv.push(0.0, v); ed.push(edV);
        pos.push(leftX,  leftY,  leftZ);  uv.push(1.0, v); ed.push(edV);
    }

    for (let i = 0; i < pts.length - 1; i++) {
        const a = i * 2;
        idx.push(a, a+2, a+1,   a+1, a+2, a+3);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('roadUV',   new THREE.Float32BufferAttribute(uv,  2));
    geo.setAttribute('roadED',   new THREE.Float32BufferAttribute(ed,  1));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    return geo;
}

// ── Staircase (steps) ─────────────────────────────────────────────────────────
export function buildStaircase(projPts, halfW) {
    if (projPts.length < 2) return null;

    const startPt   = projPts[0];
    const endPt     = projPts[projPts.length - 1];
    const startHits = getStructureAt(startPt.x, -startPt.y);
    const endHits   = getStructureAt(endPt.x,   -endPt.y);

    const bridgeHitS = startHits.find(h => h.type === 'bridge' || h.type === 'bridgePoly');
    const bridgeHitE = endHits.find(h => h.type === 'bridge' || h.type === 'bridgePoly');

    const startY = bridgeHitS ? bridgeHitS.yTop : getElevationAt(startPt.x, -startPt.y) + 0.3;
    const endY   = bridgeHitE ? bridgeHitE.yTop : getElevationAt(endPt.x,   -endPt.y)   + 0.3;
    const deltaY = endY - startY;

    let total2DDist = 0;
    for (let i = 1; i < projPts.length; i++)
        total2DDist += Math.hypot(projPts[i].x - projPts[i-1].x, projPts[i].y - projPts[i-1].y);

    const pos = [], idx = [], uv = [], ed = [];
    const sections = [];

    for (let i = 0; i < projPts.length; i++) {
        const pt       = projPts[i];
        const progress = i / (projPts.length - 1);
        const currentY = startY + deltaY * progress;

        let fwdX = 0, fwdZ = 0;
        if (i === 0)                    { fwdX = projPts[1].x - pt.x;       fwdZ = projPts[1].y - pt.y; }
        else if (i === projPts.length-1){ fwdX = pt.x - projPts[i-1].x;     fwdZ = pt.y - projPts[i-1].y; }
        else                            { fwdX = (projPts[i+1].x - projPts[i-1].x) / 2; fwdZ = (projPts[i+1].y - projPts[i-1].y) / 2; }

        const fl = Math.hypot(fwdX, fwdZ) || 1;
        fwdX /= fl; fwdZ /= fl;
        const nx = -fwdZ * halfW, nz = fwdX * halfW;

        sections.push({
            bl: { x: pt.x - nx, z: -pt.y - nz, y: currentY - 0.5 },
            br: { x: pt.x + nx, z: -pt.y + nz, y: currentY - 0.5 },
            tl: { x: pt.x - nx, z: -pt.y - nz, y: currentY },
            tr: { x: pt.x + nx, z: -pt.y + nz, y: currentY },
        });
    }

    for (let i = 0; i < sections.length; i++) {
        const s = sections[i];
        const vCoord = (i / (sections.length - 1)) * total2DDist / 4.0;
        pos.push(s.bl.x, s.bl.y, s.bl.z); uv.push(0,vCoord); ed.push(0);
        pos.push(s.br.x, s.br.y, s.br.z); uv.push(1,vCoord); ed.push(0);
        pos.push(s.tl.x, s.tl.y, s.tl.z); uv.push(0,vCoord); ed.push(0);
        pos.push(s.tr.x, s.tr.y, s.tr.z); uv.push(1,vCoord); ed.push(0);
    }

    for (let i = 0; i < sections.length - 1; i++) {
        const a = i * 4, b = (i + 1) * 4;
        idx.push(a, a+1, b+1, a, b+1, b);
        idx.push(a+2, b+3, a+3, a+2, b+2, b+3);
        idx.push(a+1, b+1, b+3, a+1, b+3, a+3);
        idx.push(a, b, b+2, a, b+2, a+2);
        if (i === 0)                  idx.push(a, a+2, a+3, a, a+3, a+1);
        if (i === sections.length - 2) idx.push(b, b+1, b+3, b, b+3, b+2);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('roadUV',   new THREE.Float32BufferAttribute(uv,  2));
    geo.setAttribute('roadED',   new THREE.Float32BufferAttribute(ed,  1));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    return geo;
}

// ── Volumetric tunnel ─────────────────────────────────────────────────────────
export function buildVolumetricTunnel(projPts, halfW, clearance, depthOffset, taperStart, taperEnd, nodeStartIsTunnel = false, nodeEndIsTunnel = false) {
    let cleanPts = [projPts[0]];
    for (let i = 1; i < projPts.length; i++) {
        if (Math.hypot(projPts[i].x - cleanPts[cleanPts.length-1].x,
                       projPts[i].y - cleanPts[cleanPts.length-1].y) > 0.1)
            cleanPts.push(projPts[i]);
    }
    if (cleanPts.length < 2) return null;

    const STEP = 2.0;
    const resampled = [new THREE.Vector3(cleanPts[0].x, 0, -cleanPts[0].y)];
    const resDists  = [0];
    let   resTotal  = 0;

    for (let i = 0; i < cleanPts.length - 1; i++) {
        const p1 = cleanPts[i], p2 = cleanPts[i+1];
        const steps = Math.ceil(Math.hypot(p2.x - p1.x, p2.y - p1.y) / STEP);
        for (let j = 1; j <= steps; j++) {
            const s  = j / steps;
            const pt = new THREE.Vector3(p1.x + (p2.x - p1.x) * s, 0, -(p1.y + (p2.y - p1.y) * s));
            resTotal += resampled[resampled.length-1].distanceTo(pt);
            resDists.push(resTotal);
            resampled.push(pt);
        }
    }
    if (resampled.length < 2 || resTotal < 1.0) return null;

    const MAX_GRADIENT = 0.08;
    const RAMP_S = taperStart ? Math.min(resTotal * 0.45, depthOffset / MAX_GRADIENT) : 0;
    const RAMP_E = taperEnd   ? Math.min(resTotal * 0.45, depthOffset / MAX_GRADIENT) : 0;
    const rampFit = (RAMP_S + RAMP_E > resTotal * 0.9 && RAMP_S + RAMP_E > 0)
        ? (resTotal * 0.9) / (RAMP_S + RAMP_E) : 1.0;
    const RAMP = Math.max(RAMP_S, RAMP_E) * rampFit;

    const floorYs   = new Float32Array(resampled.length);
    const surfaceYs = new Float32Array(resampled.length);
    const taperFs   = new Float32Array(resampled.length);
    const sfR = RAMP_S * rampFit, efR = RAMP_E * rampFit;

    for (let i = 0; i < resampled.length; i++) {
        const pt          = resampled[i];
        const dist        = resDists[i];
        const distFromEnd = resTotal - dist;
        const sf = (taperStart && sfR > 0) ? Math.min(1.0, dist        / sfR) : 1.0;
        const ef = (taperEnd   && efR > 0) ? Math.min(1.0, distFromEnd / efR) : 1.0;
        const f  = Math.min(sf, ef);
        taperFs[i] = f;

        let terrainHere;
        if (f < 0.999) {
            const samples = [
                getElevationAt(pt.x + halfW, pt.z), getElevationAt(pt.x - halfW, pt.z),
                getElevationAt(pt.x, pt.z + halfW), getElevationAt(pt.x, pt.z - halfW),
                getElevationAt(pt.x + halfW*0.7, pt.z + halfW*0.7), getElevationAt(pt.x - halfW*0.7, pt.z + halfW*0.7),
                getElevationAt(pt.x + halfW*0.7, pt.z - halfW*0.7), getElevationAt(pt.x - halfW*0.7, pt.z - halfW*0.7),
            ];
            terrainHere = Math.max(getElevationAt(pt.x, pt.z), ...samples);
            const slope = Math.abs(getElevationAt(pt.x + 2, pt.z) - getElevationAt(pt.x - 2, pt.z)) / 4;
            if (slope > 0.5) terrainHere += slope * 0.5;
        } else {
            terrainHere = getElevationAt(pt.x, pt.z);
        }

        surfaceYs[i]     = terrainHere;
        const nominalFY  = terrainHere - depthOffset;
        floorYs[i]       = terrainHere - 0.05 + (nominalFY - terrainHere) * f;
        pt.y             = floorYs[i];
    }

    const pos = [], idxArr = [];
    for (let i = 0; i < resampled.length; i++) {
        const pt = resampled[i];
        const fy = floorYs[i];
        const cyCandid = fy + clearance;
        let cy;
        if (taperFs[i] >= 0.999) {
            cy = cyCandid;
        } else {
            const terrainClamped = Math.min(cyCandid, surfaceYs[i] - 0.3);
            const minCeiling     = fy + 1.0;
            const targetCeiling  = Math.max(minCeiling, terrainClamped);
            const t = taperFs[i];
            const smoothT = t * t * (3 - 2 * t);
            cy = targetCeiling + (cyCandid - targetCeiling) * smoothT;
            cy = Math.max(minCeiling, Math.min(cy, cyCandid));
        }

        let fwdX, fwdZ;
        if (i === 0) { fwdX = resampled[1].x - pt.x; fwdZ = resampled[1].z - pt.z; }
        else if (i === resampled.length - 1) { fwdX = pt.x - resampled[i-1].x; fwdZ = pt.z - resampled[i-1].z; }
        else {
            const d1x = pt.x - resampled[i-1].x, d1z = pt.z - resampled[i-1].z;
            const d2x = resampled[i+1].x - pt.x, d2z = resampled[i+1].z - pt.z;
            const l1 = Math.hypot(d1x, d1z) || 1, l2 = Math.hypot(d2x, d2z) || 1;
            fwdX = d1x/l1 + d2x/l2; fwdZ = d1z/l1 + d2z/l2;
        }
        const fl = Math.hypot(fwdX, fwdZ) || 1;
        fwdX /= fl; fwdZ /= fl;
        const nx = -fwdZ * halfW, nz = fwdX * halfW;
        pos.push(pt.x+nx, fy, pt.z+nz,  pt.x-nx, fy, pt.z-nz,  pt.x+nx, cy, pt.z+nz,  pt.x-nx, cy, pt.z-nz);
    }

    for (let i = 0; i < resampled.length - 1; i++) {
        const a = i * 4, b = (i + 1) * 4;
        idxArr.push(a+2, b+3, a+3,   a+2, b+2, b+3); // ceiling
        idxArr.push(a+0, a+1, b+1,   a+0, b+1, b+0); // floor
        idxArr.push(a+0, b+0, b+2,   a+0, b+2, a+2); // right wall
        idxArr.push(a+1, b+3, b+1,   a+1, a+3, b+3); // left wall
    }
    if (!taperStart && !nodeStartIsTunnel) {
        const a = 0; idxArr.push(a+0, a+2, a+3,  a+0, a+3, a+1);
    }
    if (!taperEnd && !nodeEndIsTunnel) {
        const a = (resampled.length - 1) * 4; idxArr.push(a+0, a+3, a+2,  a+0, a+1, a+3);
    }

    const tubeGeo = new THREE.BufferGeometry();
    tubeGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    tubeGeo.setIndex(idxArr);
    tubeGeo.computeVertexNormals();

    const stripGeos = [];
    let distSinceStrip = 10.0;
    const STRIP_INTERVAL = 20.0;

    for (let i = 0; i < resampled.length - 1; i++) {
        const pA = resampled[i], pB = resampled[i+1];
        const segLen = pA.distanceTo(pB);
        distSinceStrip += segLen;
        if (distSinceStrip < STRIP_INTERVAL) continue;
        distSinceStrip = 0;
        if ((taperStart && resDists[i] < RAMP * 0.8) || (taperEnd && (resTotal - resDists[i]) < RAMP * 0.8)) continue;
        const fwdX = (pB.x - pA.x) / segLen, fwdZ = (pB.z - pA.z) / segLen;
        const ceilY = floorYs[i] + clearance - 0.04 - 0.025;
        const sGeo  = new THREE.BoxGeometry(4.0, 0.08, 0.35);
        sGeo.rotateY(Math.atan2(fwdX, fwdZ));
        sGeo.translate(pA.x, ceilY, pA.z);
        sGeo.deleteAttribute('uv'); sGeo.deleteAttribute('normal');
        stripGeos.push(sGeo);
    }

    let stripGeo = null;
    if (stripGeos.length > 0) {
        stripGeo = BufferGeometryUtils.mergeGeometries(stripGeos);
        stripGeos.forEach(g => g.dispose());
    }

    const portalGeos = [];
    for (const endIdx of [0, resampled.length - 1]) {
        const shouldBuild = (endIdx === 0 && taperStart) || (endIdx === resampled.length - 1 && taperEnd);
        if (!shouldBuild) continue;
        const pt = resampled[endIdx];
        let fwdX, fwdZ;
        if (endIdx === 0) { fwdX = resampled[1].x - pt.x; fwdZ = resampled[1].z - pt.z; }
        else { fwdX = pt.x - resampled[endIdx-1].x; fwdZ = pt.z - resampled[endIdx-1].z; }
        const fl2 = Math.hypot(fwdX, fwdZ) || 1;
        fwdX /= fl2; fwdZ /= fl2;
        const collarW   = halfW * 4.0, collarH = clearance * 2.0;
        const collarGeo = new THREE.PlaneGeometry(collarW, collarH);
        collarGeo.rotateY(Math.atan2(-fwdZ, fwdX) + (endIdx === 0 ? Math.PI : 0));
        collarGeo.translate(pt.x, floorYs[endIdx] + collarH * 0.5 - 0.5, pt.z);
        collarGeo.deleteAttribute('uv');
        portalGeos.push(collarGeo);
    }

    let portalGeo = null;
    if (portalGeos.length > 0) {
        portalGeo = BufferGeometryUtils.mergeGeometries(portalGeos);
        portalGeos.forEach(g => g.dispose());
    }

    for (let i = 0; i < resampled.length - 1; i++) {
        injectTunnelSegmentToGrid(resampled[i], resampled[i+1], halfW, clearance);
    }

    return { tubeGeo, stripGeo, portalGeo };
}
