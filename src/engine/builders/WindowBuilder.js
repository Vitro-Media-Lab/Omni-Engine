// ============================================================================
// WindowBuilder.js — Building window lines and roof geometry
// ============================================================================

import * as THREE               from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// ── Window lines ──────────────────────────────────────────────────────────────
export function buildWindowLines(pts, h, levels, minH = 0) {
    const winPts      = [];
    const floorHeight = 3.5;
    const actualLevels = levels > 0 ? levels : Math.floor((h - minH) / floorHeight);

    for (let k = 0; k < pts.length - 1; k++) {
        const p1 = pts[k], p2 = pts[k + 1];
        const dx = p2.x - p1.x, dy = p2.y - p1.y;
        const segLen = Math.hypot(dx, dy);
        if (segLen < 6 || isNaN(segLen)) continue;

        const cols = Math.floor(segLen / 16);
        for (let m = 1; m < cols; m++) {
            const ratio = m / cols;
            const px = p1.x + dx * ratio, pz = -(p1.y + dy * ratio);
            winPts.push(new THREE.Vector3(px, minH, pz), new THREE.Vector3(px, h, pz));
        }

        if (actualLevels > 4) {
            for (let lvl = 4; lvl < actualLevels; lvl += 4) {
                const ly = minH + lvl * ((h - minH) / actualLevels);
                winPts.push(new THREE.Vector3(p1.x, ly, -p1.y), new THREE.Vector3(p2.x, ly, -p2.y));
            }
        }
    }
    return winPts;
}

// ── Roof geometry ─────────────────────────────────────────────────────────────
const _ROOF_TYPE_SET = new Set([
    'vault', 'sphere', 'dome', 'shell', 'round', 'freeform',
    'barrel', 'arch', 'curved', 'onion', 'cone',
    'pyramidal', 'pyramid', 'gabled', 'gable',
    'hipped', 'hip', 'gambrel', 'mansard',
]);

function isConvex(pts, count) {
    if (count < 4) return true;
    let sign = 0;
    for (let i = 0; i < count; i++) {
        const p0 = pts[i], p1 = pts[(i+1) % count], p2 = pts[(i+2) % count];
        const ex = p1.x - p0.x, ey = p1.y - p0.y;
        const fx = p2.x - p1.x, fy = p2.y - p1.y;
        const cp    = ex * fy - ey * fx;
        const denom = (ex*ex + ey*ey) * (fx*fx + fy*fy);
        if (denom < 1e-12) continue;
        if (cp * cp > denom * 3e-4) {
            const s = cp > 0 ? 1 : -1;
            if (sign === 0) sign = s;
            else if (s !== sign) return false;
        }
    }
    return true;
}

// ── Gable / hip family ────────────────────────────────────────────────────────
// Handles: gable, gabled, hip, hipped, gambrel, mansard
//
// Algorithm
// ---------
//   1. CCW-normalise the footprint and tessellate with ShapeGeometry (same as
//      dome/barrel so any polygon shape is handled, not just rectangles).
//   2. Find the longest-span axis via O(n²) vertex-pair search — this is the
//      ridge direction.
//   3. Project every footprint vertex onto the ridge axis and its perpendicular
//      to measure the building's axial half-length and perp half-width.
//   4. Compute ridge half-length = axHalfLen × (1 − hipRatio).
//      hipRatio=0 → full-length ridge (true gable).
//      hipRatio=1 → ridge collapses to a point (pyramid).
//   5. For each tessellated vertex displace by:
//        tPerp = |perpDist from centreline| / halfPerp        (0 at ridge, 1 at eave)
//        tAx   = how far beyond the ridge endpoint toward the building corner
//        height = roofH × max(0, 1 − max(tPerp, tAx))
//      This gives a linear tent on the long faces and a linear hip taper at each end.
//   6. Rotate −90° around X, recompute normals.
function buildGableRoof(pts, h, roofH, hipRatio) {
    const n    = pts.length;
    if (n < 3) return null;

    // Deduplicate closed ring (first === last)
    const last  = n - 1;
    const count = (n > 3 && pts[0].x === pts[last].x && pts[0].y === pts[last].y) ? last : n;

    // CCW normalisation
    let area = 0;
    for (let i = 0; i < count; i++) {
        const j = (i + 1) % count;
        area += pts[i].x * pts[j].y - pts[j].x * pts[i].y;
    }
    const shape = new THREE.Shape();
    if (area >= 0) {
        for (let i = 0; i < count; i++) {
            i === 0 ? shape.moveTo(pts[i].x, pts[i].y) : shape.lineTo(pts[i].x, pts[i].y);
        }
    } else {
        for (let i = count - 1; i >= 0; i--) {
            i === count - 1 ? shape.moveTo(pts[i].x, pts[i].y) : shape.lineTo(pts[i].x, pts[i].y);
        }
    }

    const geo = new THREE.ShapeGeometry(shape);
    const pos = geo.attributes.position;
    const vc  = pos.count;

    // Longest-span axis — O(n²) vertex-pair search
    let maxSpanSq = 0;
    let axAx = pts[0].x, axAy = pts[0].y;
    let axBx = pts[count > 1 ? 1 : 0].x, axBy = pts[count > 1 ? 1 : 0].y;
    for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
            const dSq = (pts[j].x - pts[i].x) ** 2 + (pts[j].y - pts[i].y) ** 2;
            if (dSq > maxSpanSq) {
                maxSpanSq = dSq;
                axAx = pts[i].x; axAy = pts[i].y;
                axBx = pts[j].x; axBy = pts[j].y;
            }
        }
    }

    const ridgeLen = Math.sqrt(maxSpanSq) || 1e-4;
    const rdx      = (axBx - axAx) / ridgeLen;   // unit vector along ridge axis
    const rdy      = (axBy - axAy) / ridgeLen;

    // Project footprint vertices → axial and perpendicular extents
    let minAx = Infinity, maxAx = -Infinity;
    let minPerp = Infinity, maxPerp = -Infinity;
    for (let i = 0; i < count; i++) {
        const ax   =  (pts[i].x - axAx) * rdx + (pts[i].y - axAy) * rdy;
        const perp = -(pts[i].x - axAx) * rdy + (pts[i].y - axAy) * rdx;
        if (ax   < minAx)   minAx   = ax;   if (ax   > maxAx)   maxAx   = ax;
        if (perp < minPerp) minPerp = perp; if (perp > maxPerp) maxPerp = perp;
    }

    const axMid        = (minAx   + maxAx)  * 0.5;
    const axHalfLen    = (maxAx   - minAx)  * 0.5;
    const perpMid      = (minPerp + maxPerp) * 0.5;
    const halfPerp     = Math.max(1e-4, (maxPerp - minPerp) * 0.5);
    const ridgeHalfLen = axHalfLen * (1.0 - hipRatio);
    const hipInset     = axHalfLen * hipRatio;   // axial dist from ridge end → building corner

    const rh = roofH > 0 ? roofH : Math.max(1.5, halfPerp * 0.4);

    // Displace tessellated vertices
    for (let i = 0; i < vc; i++) {
        const vx = pos.getX(i), vy = pos.getY(i);
        const ax   =  (vx - axAx) * rdx + (vy - axAy) * rdy;
        const perp = -(vx - axAx) * rdy + (vy - axAy) * rdx;

        // Perpendicular factor: 0 at ridge centreline, 1 at eave
        const tPerp = Math.min(1, Math.abs(perp - perpMid) / halfPerp);
        // Axial factor: 0 inside the ridge zone, ramps to 1 at building end (hip faces)
        const axRel = Math.abs(ax - axMid) - ridgeHalfLen;
        const tAx   = hipInset > 0.01 ? Math.max(0, Math.min(1, axRel / hipInset)) : 0;

        pos.setZ(i, h + rh * Math.max(0, 1.0 - Math.max(tPerp, tAx)));
    }
    pos.needsUpdate = true;

    geo.rotateX(-Math.PI * 0.5);
    geo.computeVertexNormals();
    return geo;
}

export function buildRoofGeometry(pts, h, roofShape, roofH) {
    if (!pts || pts.length < 3) return null;
    if (!_ROOF_TYPE_SET.has(roofShape)) return null;

    // Gable family — dispatched before arch-shell check
    const isGable  = roofShape === 'gable'   || roofShape === 'gabled'
                  || roofShape === 'hip'     || roofShape === 'hipped'
                  || roofShape === 'gambrel' || roofShape === 'mansard';
    if (isGable) {
        const hipRatio = (roofShape === 'gable' || roofShape === 'gabled') ? 0.0
            : (roofShape === 'gambrel' || roofShape === 'mansard')         ? 0.15
            : 0.3;
        return buildGableRoof(pts, h, roofH, hipRatio);
    }

    const isShell  = roofShape === 'shell'  || roofShape === 'freeform' || roofShape === 'curved';
    const isDome   = roofShape === 'dome'   || roofShape === 'sphere'   || roofShape === 'round';
    const isBarrel = roofShape === 'barrel' || roofShape === 'vault'    || roofShape === 'arch';

    if (isShell || isDome || isBarrel) {
        const _n   = pts.length;
        const _last = _n - 1;
        const nPts = (_n > 3 && pts[0].x === pts[_last].x && pts[0].y === pts[_last].y) ? _last : _n;
        let area = 0;
        for (let i = 0; i < nPts; i++) {
            const j = (i + 1) % nPts;
            area += pts[i].x * pts[j].y - pts[j].x * pts[i].y;
        }
        const shape = new THREE.Shape();
        if (area >= 0) {
            for (let i = 0; i < nPts; i++) (i === 0 ? shape.moveTo : shape.lineTo).call(shape, pts[i].x, pts[i].y);
        } else {
            for (let i = nPts - 1; i >= 0; i--) (i === nPts-1 ? shape.moveTo : shape.lineTo).call(shape, pts[i].x, pts[i].y);
        }

        const geo = new THREE.ShapeGeometry(shape);
        const pos = geo.attributes.position;
        const vc  = pos.count;

        if (isShell) {
            let maxEdgeSq = 0;
            let ridgeA = pts[0], ridgeB = pts[1];
            for (let i = 0; i < nPts; i++) {
                const p1 = pts[i], p2 = pts[(i+1)%nPts];
                const d = (p2.x-p1.x)**2 + (p2.y-p1.y)**2;
                if (d > maxEdgeSq) { maxEdgeSq = d; ridgeA = p1; ridgeB = p2; }
            }
            const distSqToSeg = (px, py, vx, vy, wx, wy) => {
                const l2 = (wx-vx)**2 + (wy-vy)**2;
                if (l2 === 0) return (px-vx)**2 + (py-vy)**2;
                const t = Math.max(0, Math.min(1, ((px-vx)*(wx-vx)+(py-vy)*(wy-vy))/l2));
                return (px-(vx+t*(wx-vx)))**2 + (py-(vy+t*(wy-vy)))**2;
            };
            const dists = new Float32Array(vc);
            let maxD = 1e-4;
            for (let i = 0; i < vc; i++) {
                const d = Math.sqrt(distSqToSeg(pos.getX(i), pos.getY(i), ridgeA.x, ridgeA.y, ridgeB.x, ridgeB.y));
                dists[i] = d; if (d > maxD) maxD = d;
            }
            const rh = roofH > 0 ? roofH : Math.max(1.5, maxD * 0.8);
            for (let i = 0; i < vc; i++) pos.setZ(i, h + rh * Math.sin((1 - dists[i]/maxD) * Math.PI * 0.5));

        } else if (isDome) {
            let cx = 0, cy = 0;
            for (let i = 0; i < nPts; i++) { cx += pts[i].x; cy += pts[i].y; }
            cx /= nPts; cy /= nPts;
            let maxR = 1e-4;
            for (let i = 0; i < nPts; i++) maxR = Math.max(maxR, Math.hypot(pts[i].x-cx, pts[i].y-cy));
            const peakH = roofH > 0 ? roofH : Math.max(1.5, maxR * 0.5);
            for (let i = 0; i < vc; i++) {
                const d = Math.hypot(pos.getX(i)-cx, pos.getY(i)-cy);
                pos.setZ(i, h + peakH * Math.max(0, 1 - (d/maxR)**2));
            }
        } else {
            let maxSpanSq = 0;
            let axA = pts[0], axB = pts[1];
            for (let i = 0; i < nPts; i++) for (let j = i+1; j < nPts; j++) {
                const dSq = (pts[j].x-pts[i].x)**2 + (pts[j].y-pts[i].y)**2;
                if (dSq > maxSpanSq) { maxSpanSq = dSq; axA = pts[i]; axB = pts[j]; }
            }
            const ridgeLen = Math.sqrt(maxSpanSq) || 1e-4;
            const rdx = (axB.x-axA.x)/ridgeLen, rdy = (axB.y-axA.y)/ridgeLen;
            let minPerp = Infinity, maxPerp = -Infinity;
            for (let i = 0; i < nPts; i++) {
                const proj = -(pts[i].x-axA.x)*rdy + (pts[i].y-axA.y)*rdx;
                if (proj < minPerp) minPerp = proj; if (proj > maxPerp) maxPerp = proj;
            }
            const midPerp   = (minPerp+maxPerp)*0.5;
            const halfWidth = Math.max(1e-4, (maxPerp-minPerp)*0.5);
            const peakH     = roofH > 0 ? roofH : Math.max(1.5, halfWidth*0.6);
            for (let i = 0; i < vc; i++) {
                const proj = -(pos.getX(i)-axA.x)*rdy + (pos.getY(i)-axA.y)*rdx;
                const t    = Math.max(0, 1 - Math.abs(proj-midPerp)/halfWidth);
                pos.setZ(i, h + peakH * Math.sin(t * Math.PI * 0.5));
            }
        }

        pos.needsUpdate = true;
        geo.rotateX(-Math.PI * 0.5);
        geo.computeVertexNormals();
        return geo;
    }

    // Convex primitives
    const n     = pts.length;
    const count = (n > 3 && pts[0].x === pts[n-1].x && pts[0].y === pts[n-1].y) ? n - 1 : n;
    if (roofShape !== 'onion' && roofShape !== 'cone' && !isConvex(pts, count)) return null;

    let cx = 0, cz = 0;
    for (let i = 0; i < count; i++) { cx += pts[i].x; cz += pts[i].y; }
    cx /= count; cz /= count;
    let maxR = 0;
    for (let i = 0; i < count; i++) maxR = Math.max(maxR, Math.hypot(pts[i].x-cx, pts[i].y-cz));
    if (maxR < 0.5) return null;
    const rh = roofH > 0 ? roofH : Math.max(1.5, maxR * 0.35);

    if (roofShape === 'onion') {
        const geo = new THREE.SphereGeometry(Math.min(maxR, rh), 16, 8, 0, Math.PI*2, 0, Math.PI*0.5);
        geo.translate(cx, h, -cz);
        return geo;
    }
    if (roofShape === 'cone') {
        const geo = new THREE.ConeGeometry(maxR * 0.85, rh, 16);
        geo.translate(cx, h + rh * 0.5, -cz);
        return geo;
    }

    let area = 0;
    for (let i = 0; i < count; i++) {
        const j = (i+1)%count;
        area += pts[i].x*pts[j].y - pts[j].x*pts[i].y;
    }
    const ccw = (area >= 0);

    const verts = new Float32Array(count * 9);
    for (let i = 0; i < count; i++) {
        const a = ccw ? pts[i]              : pts[(i+1)%count];
        const b = ccw ? pts[(i+1)%count]    : pts[i];
        verts.set([a.x, h, -a.y,  b.x, h, -b.y,  cx, h+rh, -cz], i * 9);
    }
    const rawGeo = new THREE.BufferGeometry();
    rawGeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    const geo = BufferGeometryUtils.mergeVertices(rawGeo, 1e-4);
    geo.computeVertexNormals();
    return geo;
}
