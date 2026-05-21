// ============================================================================
// DomeStrategy.js — Radial paraboloid dome displacement
// ============================================================================
//
// Handles OSM roof:shape values: dome | sphere | round
//
// Algorithm
// ---------
//   1. CCW normalise the footprint (same shoelace check as ShellStrategy).
//   2. Tessellate into a flat ShapeGeometry.
//   3. Compute the polygon centroid and the maximum vertex-to-centroid radius.
//   4. Displace each tessellated vertex by:
//        z_lift = peakH * max(0, 1 - (d / maxR)²)
//      This is a paraboloid: perfectly flat at the eave ring, smooth peak at
//      the centroid, no singularity at the crown.
//   5. Rotate -90° around X and recompute normals.
//
// The paraboloid (1 - (d/R)²) is mathematically simpler than a true sphere cap
// and produces visually identical results at building scale while avoiding the
// singularity that ConeGeometry's tip creates on non-circular footprints.
// ============================================================================

import * as THREE from 'three';

export function buildDomeRoof(pts, h, roofH) {
    const nPts = pts.length;
    if (nPts < 3) return null;

    // ── CCW normalisation ─────────────────────────────────────────────────────
    let area = 0;
    for (let i = 0; i < nPts; i++) {
        const j = (i + 1) % nPts;
        area += pts[i].x * pts[j].y - pts[j].x * pts[i].y;
    }

    const shape = new THREE.Shape();
    if (area >= 0) {
        for (let i = 0; i < nPts; i++) {
            i === 0 ? shape.moveTo(pts[i].x, pts[i].y) : shape.lineTo(pts[i].x, pts[i].y);
        }
    } else {
        for (let i = nPts - 1; i >= 0; i--) {
            i === nPts - 1 ? shape.moveTo(pts[i].x, pts[i].y) : shape.lineTo(pts[i].x, pts[i].y);
        }
    }

    const geo = new THREE.ShapeGeometry(shape);
    const pos = geo.attributes.position;
    const vc  = pos.count;

    // ── Centroid from footprint vertices ──────────────────────────────────────
    let cx = 0, cy = 0;
    for (let i = 0; i < nPts; i++) { cx += pts[i].x; cy += pts[i].y; }
    cx /= nPts; cy /= nPts;

    // ── Maximum radius = largest vertex-to-centroid distance ─────────────────
    let maxR = 1e-4;
    for (let i = 0; i < nPts; i++) {
        const d = Math.hypot(pts[i].x - cx, pts[i].y - cy);
        if (d > maxR) maxR = d;
    }

    // ── Proportional default peak height ─────────────────────────────────────
    // 0.5× maxR gives a pleasingly shallow dome on wide footprints; deeper on
    // narrow ones — matches real masonry dome proportions (Pantheon ≈ 0.5).
    const peakH = roofH > 0 ? roofH : Math.max(1.5, maxR * 0.5);

    // ── Paraboloid displacement ───────────────────────────────────────────────
    for (let i = 0; i < vc; i++) {
        const d  = Math.hypot(pos.getX(i) - cx, pos.getY(i) - cy);
        const t  = d / maxR;
        pos.setZ(i, h + peakH * Math.max(0, 1.0 - t * t));
    }
    pos.needsUpdate = true;

    geo.rotateX(-Math.PI * 0.5);
    geo.computeVertexNormals();
    return geo;
}
