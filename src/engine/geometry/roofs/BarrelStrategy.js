// ============================================================================
// BarrelStrategy.js — Cylindrical barrel-vault displacement
// ============================================================================
//
// Handles OSM roof:shape values: barrel | vault | arch
//
// Algorithm
// ---------
//   1. CCW normalise the footprint.
//   2. Tessellate into a flat ShapeGeometry.
//   3. Find the true longest-span axis (the ridge axis) via an O(n²) vertex
//      pair search. For well-behaved rectangular footprints this matches the
//      longest side; for irregular polygons it picks the structural spine.
//   4. Project each tessellated vertex onto the perpendicular of the ridge axis
//      to get its cross-sectional position, then normalise into [-1, +1].
//   5. Apply a sinusoidal half-arch: z_lift = peakH * sin(t * π/2)
//      where t is the normalised perpendicular distance from 0 (edge) to 1 (mid).
//      This produces a barrel vault that peaks along the ridge axis and tapers
//      smoothly to the eave edges.
//   6. Rotate -90° around X and recompute normals.
// ============================================================================

import * as THREE from 'three';

export function buildBarrelRoof(pts, h, roofH) {
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

    // ── Longest-span axis — O(n²) vertex-pair search ──────────────────────────
    // For the handful of vertices in a building footprint (typically 4–12),
    // O(n²) is cheaper than any convex-hull approach and finds the true span
    // regardless of polygon shape.
    let maxSpanSq = 0;
    let axAx = pts[0].x, axAy = pts[0].y;
    let axBx = pts[1].x, axBy = pts[1].y;

    for (let i = 0; i < nPts; i++) {
        for (let j = i + 1; j < nPts; j++) {
            const dSq = (pts[j].x - pts[i].x) ** 2 + (pts[j].y - pts[i].y) ** 2;
            if (dSq > maxSpanSq) {
                maxSpanSq = dSq;
                axAx = pts[i].x; axAy = pts[i].y;
                axBx = pts[j].x; axBy = pts[j].y;
            }
        }
    }

    const ridgeLen = Math.sqrt(maxSpanSq) || 1e-4;

    // Unit vector along the ridge axis (A→B)
    const rdx = (axBx - axAx) / ridgeLen;
    const rdy = (axBy - axAy) / ridgeLen;

    // ── Find perpendicular extents from footprint vertices ────────────────────
    // Perpendicular projection: proj = -(Δx)·rdy + (Δy)·rdx
    // (This is the component of the point's displacement perpendicular to the
    //  ridge axis, with consistent sign so min < 0 and max > 0.)
    let minPerp = Infinity, maxPerp = -Infinity;
    for (let i = 0; i < nPts; i++) {
        const proj = -(pts[i].x - axAx) * rdy + (pts[i].y - axAy) * rdx;
        if (proj < minPerp) minPerp = proj;
        if (proj > maxPerp) maxPerp = proj;
    }

    const midPerp   = (minPerp + maxPerp) * 0.5;
    const halfWidth = Math.max(1e-4, (maxPerp - minPerp) * 0.5);

    // ── Default peak height: 60% of the half-width ───────────────────────────
    // Real barrel vaults sit between 0.5–0.7× half-span; 0.6 is the median.
    const peakH = roofH > 0 ? roofH : Math.max(1.5, halfWidth * 0.6);

    // ── Sinusoidal barrel displacement ────────────────────────────────────────
    for (let i = 0; i < vc; i++) {
        const proj = -(pos.getX(i) - axAx) * rdy + (pos.getY(i) - axAy) * rdx;
        // t: 0 at both eave edges, 1 at the ridge centreline
        const t = Math.max(0, 1.0 - Math.abs(proj - midPerp) / halfWidth);
        pos.setZ(i, h + peakH * Math.sin(t * Math.PI * 0.5));
    }
    pos.needsUpdate = true;

    geo.rotateX(-Math.PI * 0.5);
    geo.computeVertexNormals();
    return geo;
}
