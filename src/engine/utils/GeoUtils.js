// ============================================================================
// GeoUtils.js — GeoJSON geometry helpers
// ============================================================================

import * as THREE       from 'three';
import { project }      from '../world/GeoMath.js';

let _engine = null;
export function setEngine(e) { _engine = e; }

// ── Ring/polygon extraction ───────────────────────────────────────────────────
export function getRings(geom) {
    if (geom.type === 'Polygon')      return [geom.coordinates];
    if (geom.type === 'MultiPolygon') return geom.coordinates;
    return [];
}

export function getFirstCoord(geom) {
    if (geom.type === 'Polygon'      && geom.coordinates[0])    return geom.coordinates[0][0];
    if (geom.type === 'MultiPolygon' && geom.coordinates[0][0]) return geom.coordinates[0][0][0];
    if (geom.type === 'LineString'   && geom.coordinates)       return geom.coordinates[0];
    return null;
}

// ── THREE.Shape builder from GeoJSON ring arrays ──────────────────────────────
// polyArrays[0] = outer ring, polyArrays[1..n] = holes. Applies far-field throw
// vertex trick to close open rings at the map boundary without seams.
export function buildShape(polyArrays) {
    if (!polyArrays?.[0]) return null;

    const shape     = new THREE.Shape();
    const validRing = [];

    for (const p of polyArrays[0]) {
        if (!p || p.length < 2) continue;
        const v = project(p[0], p[1]);
        if (v.valid) validRing.push(v);
    }
    if (validRing.length < 3) return null;

    const first    = validRing[0];
    const last     = validRing[validRing.length - 1];
    const gapDist  = Math.hypot(last.x - first.x, last.y - first.y);
    const mapRadius = _engine?.meta?.radius || 1000;
    const firstDist = Math.hypot(first.x, first.y);
    const lastDist  = Math.hypot(last.x, last.y);

    if (gapDist > mapRadius * 0.25 && firstDist > mapRadius * 0.8 && lastDist > mapRadius * 0.8) {
        const mx = (first.x + last.x) / 2;
        const my = (first.y + last.y) / 2;
        let distCenter = Math.hypot(mx, my);
        let dirX = mx, dirY = my;
        if (distCenter < 1) { dirX = 1; dirY = 0; }
        else { dirX /= distCenter; dirY /= distCenter; }
        const EXTENT = mapRadius * 10;
        validRing.push({ x: last.x  + dirX * EXTENT, y: last.y  + dirY * EXTENT });
        validRing.push({ x: first.x + dirX * EXTENT, y: first.y + dirY * EXTENT });
    }

    let area = 0;
    for (let i = 0; i < validRing.length; i++) {
        const j = (i + 1) % validRing.length;
        area += validRing[i].x * validRing[j].y;
        area -= validRing[j].x * validRing[i].y;
    }
    if (area < 0) validRing.reverse();
    validRing.forEach((v, i) => (i === 0 ? shape.moveTo(v.x, v.y) : shape.lineTo(v.x, v.y)));

    for (let i = 1; i < polyArrays.length; i++) {
        const validHole = [];
        for (const p of polyArrays[i]) {
            if (!p || p.length < 2) continue;
            const v = project(p[0], p[1]);
            if (v.valid) validHole.push(v);
        }
        if (validHole.length < 3) continue;

        let holeArea = 0;
        for (let k = 0; k < validHole.length; k++) {
            const j = (k + 1) % validHole.length;
            holeArea += validHole[k].x * validHole[j].y;
            holeArea -= validHole[j].x * validHole[k].y;
        }
        if (holeArea > 0) validHole.reverse();

        const hole = new THREE.Path();
        validHole.forEach((v, j) => (j === 0 ? hole.moveTo(v.x, v.y) : hole.lineTo(v.x, v.y)));
        shape.holes.push(hole);
    }
    return shape;
}
