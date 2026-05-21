// ============================================================================
// PolygonLayer.js — Async polygon-layer mesh builder and color-key functions
// ============================================================================

import * as THREE      from 'three';
import { getElevationAt } from '../world/GeoMath.js';
import { getRings, buildShape } from '../utils/GeoUtils.js';
import { chunkAndMerge }  from './ChunkMerge.js';
import { plinthClone }    from '../shaders/ShaderInjectors.js';

// ── Color key helpers ─────────────────────────────────────────────────────────
export function parkColorKey(feature) {
    const l = (feature.properties || {}).leisure;
    if (l === 'nature_reserve') return 'nature_reserve';
    if (l === 'stadium' || l === 'sports_centre') return 'stadium';
    if (l === 'pitch' || l === 'track' || l === 'golf_course' ||
        l === 'miniature_golf' || l === 'disc_golf_course') return 'pitch';
    return 'park';
}

export function vegColorKey(feature) {
    const p  = feature.properties || {};
    const nat = p.natural, lu = p.landuse;
    if (nat === 'wood' || lu === 'forest')                               return 'forest';
    if (nat === 'bare_rock' || nat === 'cliff')                          return 'terrain';
    if (nat === 'sand' || nat === 'beach' || nat === 'dune')             return 'sand';
    if (nat === 'scrub' || nat === 'heath' || nat === 'wetland')         return 'scrub';
    if (lu === 'farmland' || lu === 'orchard' || lu === 'vineyard')      return 'farmland';
    if (lu === 'grass' || lu === 'meadow' || lu === 'greenfield' ||
        nat === 'grassland' || nat === 'fell' || nat === 'moor' || nat === 'tundra') return 'grass';
    return 'veg';
}

export function hardscapeColorKey(feature) {
    const p = feature.properties || {};
    if (p.amenity === 'parking')      return 'parking';
    if (p.aeroway)                    return 'aeroway';
    if (p.highway === 'pedestrian')   return 'plaza';
    return null;
}

export function zoningColorKey(feature) {
    const p  = feature.properties || {};
    const lu = p.landuse, am = p.amenity;
    if (am === 'university' || am === 'college' || am === 'school' ||
        am === 'hospital'   || am === 'clinic')                           return 'institutional';
    if (lu === 'residential')                                             return 'residential';
    if (lu === 'commercial' || lu === 'retail')                          return 'commercial';
    if (lu === 'industrial'  || lu === 'quarry' || lu === 'brownfield' ||
        lu === 'construction'|| lu === 'landfill'|| lu === 'port')       return 'industrial';
    if (lu === 'cemetery')                                                return 'cemetery';
    if (lu === 'military' || p.military)                                  return 'military';
    return 'institutional';
}

// ── Polygon layer builder ─────────────────────────────────────────────────────
// Buckets feature geometries by colorKey, terrain-drapes each polygon,
// optionally extrudes, then calls chunkAndMerge per bucket.
export function buildPolygonLayer(data, targetGroup, yOffset, extrudeDepth, matFill, colorKeyFn = null, matLine = null, elevFn = null) {
    if (!data?.features) return;
    if (!elevFn) elevFn = getElevationAt;

    const fillBuckets = new Map();
    const lineBuckets = new Map();

    const yOffFn  = typeof yOffset       === 'function' ? yOffset       : () => yOffset;
    const depthFn = typeof extrudeDepth  === 'function' ? extrudeDepth  : () => extrudeDepth;

    for (const feature of data.features) {
        if (!feature.geometry) continue;
        const key = colorKeyFn ? colorKeyFn(feature) : 'default';
        if (!fillBuckets.has(key)) { fillBuckets.set(key, []); lineBuckets.set(key, []); }

        const fYOff  = yOffFn(feature);
        const fDepth = depthFn(feature);

        for (const ring of getRings(feature.geometry)) {
            const shape = buildShape(ring);
            if (!shape || shape.curves.length === 0) continue;

            let geo = fDepth > 0
                ? new THREE.ExtrudeGeometry(shape, { depth: fDepth, bevelEnabled: false, curveSegments: 1 })
                : new THREE.ShapeGeometry(shape, 24);

            geo.rotateX(-Math.PI / 2);

            const pos = geo.attributes.position;
            for (let vi = 0; vi < pos.count; vi++) {
                const vx = pos.getX(vi), vz = pos.getZ(vi), vy = pos.getY(vi);
                pos.setY(vi, elevFn(vx, vz) + fYOff + vy);
            }
            pos.needsUpdate = true;
            geo.computeVertexNormals();

            fillBuckets.get(key).push(geo);
            if (matLine) lineBuckets.get(key).push(new THREE.EdgesGeometry(geo, 30));
        }
    }

    for (const [key, geos] of fillBuckets) {
        if (geos.length === 0) continue;
        const before = targetGroup.children.length;
        chunkAndMerge(geos, plinthClone(matFill), false, targetGroup);
        for (let i = before; i < targetGroup.children.length; i++)
            targetGroup.children[i].userData.colorKey = key;
    }

    if (matLine) {
        for (const [key, geos] of lineBuckets) {
            if (geos.length === 0) continue;
            const before = targetGroup.children.length;
            chunkAndMerge(geos, plinthClone(matLine), true, targetGroup);
            for (let i = before; i < targetGroup.children.length; i++)
                targetGroup.children[i].userData.colorKey = key;
        }
    }
}
