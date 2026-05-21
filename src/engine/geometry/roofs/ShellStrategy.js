// ============================================================================
// ShellStrategy.js — "Origami Half-Sail" roof displacement
// ============================================================================
//
// Handles OSM roof:shape values: shell | freeform | curved
//
// Algorithm
// ---------
//   1. Compute signed 2-D shoelace area to detect CW vs CCW winding.
//      Three.js ShapeGeometry's ear-clipper only produces upward-facing normals
//      for CCW input, so CW footprints are reversed before tessellation.
//
//   2. Tessellate the standardised footprint into a flat ShapeGeometry.
//
//   3. Find the longest edge of the original footprint polygon — this is the
//      structural "ridge" of the half-sail. Distance of every tessellated vertex
//      from the ridge segment drives its displacement height.
//
//   4. Apply a sinusoidal lift:  z_lift = roofH * sin((1 - d/maxD) * π/2)
//      This peaks at the ridge (d=0) and tapers to zero at the far edge,
//      producing the characteristic smooth, one-sided arch silhouette.
//
//   5. Rotate -90° around X so the XY-plane geometry stands up in world-space
//      (Three.js ShapeGeometry lies in the XY plane; city geometry is in XZ).
//
//   6. computeVertexNormals() after the rotation — winding is already CCW so
//      normals face +Y without any post-hoc flip.
//
// Inputs
// ------
//   pts   — {x, y}[] footprint in projected 2-D world-space (Y = -worldZ)
//   h     — absolute world-Y of the roof base (= baseElev + wall height)
//   roofH — explicit OSM roof:height in metres; 0 triggers proportional default
//
// Returns THREE.BufferGeometry or null on degenerate input.
// ============================================================================

import * as THREE from 'three';

export function buildShellRoof(pts, h, roofH) {
    const nPts = pts.length;
    if (nPts < 3) return null;

    // ── 1. CCW normalisation ─────────────────────────────────────────────────
    // Shoelace area: positive = CCW, negative = CW when Y points up.
    let area = 0;
    for (let i = 0; i < nPts; i++) {
        const j = (i + 1) % nPts;
        area += pts[i].x * pts[j].y - pts[j].x * pts[i].y;
    }
    // area / 2 gives signed area; sign encodes winding.

    const shape = new THREE.Shape();
    if (area >= 0) {
        // Already CCW — traverse forward
        for (let i = 0; i < nPts; i++) {
            i === 0 ? shape.moveTo(pts[i].x, pts[i].y)
                    : shape.lineTo(pts[i].x, pts[i].y);
        }
    } else {
        // CW — reverse traversal restores CCW without allocating a copy
        for (let i = nPts - 1; i >= 0; i--) {
            i === nPts - 1 ? shape.moveTo(pts[i].x, pts[i].y)
                           : shape.lineTo(pts[i].x, pts[i].y);
        }
    }

    // ── 2. Tessellate ────────────────────────────────────────────────────────
    const geo = new THREE.ShapeGeometry(shape);
    const pos = geo.attributes.position;
    const vc  = pos.count;

    // ── 3. Identify the ridge — longest perimeter edge ───────────────────────
    let maxEdgeSq = 0;
    let ridgeAx = pts[0].x, ridgeAy = pts[0].y;
    let ridgeBx = pts[1].x, ridgeBy = pts[1].y;

    for (let i = 0; i < nPts; i++) {
        const p1 = pts[i];
        const p2 = pts[(i + 1) % nPts];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const d  = dx * dx + dy * dy;
        if (d > maxEdgeSq) {
            maxEdgeSq = d;
            ridgeAx = p1.x; ridgeAy = p1.y;
            ridgeBx = p2.x; ridgeBy = p2.y;
        }
    }

    // Inline squared-distance-from-point-to-segment helper to avoid allocation
    // inside the vertex loop. Clamped t keeps the projection on the segment.
    const l2 = (ridgeBx - ridgeAx) ** 2 + (ridgeBy - ridgeAy) ** 2;

    const distToRidge = (px, py) => {
        if (l2 === 0) {
            // Degenerate ridge (both points identical) — return dist to point
            return Math.sqrt((px - ridgeAx) ** 2 + (py - ridgeAy) ** 2);
        }
        const t  = Math.max(0, Math.min(1,
            ((px - ridgeAx) * (ridgeBx - ridgeAx) + (py - ridgeAy) * (ridgeBy - ridgeAy)) / l2
        ));
        const qx = ridgeAx + t * (ridgeBx - ridgeAx);
        const qy = ridgeAy + t * (ridgeBy - ridgeAy);
        return Math.sqrt((px - qx) ** 2 + (py - qy) ** 2);
    };

    // ── 4. Compute per-vertex distances and track the maximum ────────────────
    const dists = new Float32Array(vc);
    let maxD = 1e-4;
    for (let i = 0; i < vc; i++) {
        const d = distToRidge(pos.getX(i), pos.getY(i));
        dists[i] = d;
        if (d > maxD) maxD = d;
    }

    // ── 5. Apply displacement ────────────────────────────────────────────────
    // Default roof height: proportional to the maximum distance from ridge.
    // 0.8× gives a sleek, believable shell pitch on most building footprints.
    const rh = roofH > 0 ? roofH : Math.max(1.5, maxD * 0.8);

    for (let i = 0; i < vc; i++) {
        // sin curve: peak at ridge (d=0, argument = π/2), zero at far edge (d=maxD, argument = 0)
        const t = 1.0 - dists[i] / maxD;
        pos.setZ(i, h + rh * Math.sin(t * Math.PI * 0.5));
    }
    pos.needsUpdate = true;

    // ── 6. Rotate into world-space XZ plane and recompute normals ────────────
    // ShapeGeometry lives in XY. Our city geometry lives in XZ (Y = height).
    // Rotating -90° around X maps: Y_shape → Z_world, Z_shape → -Y_world.
    // But we lifted vertices along Z above in step 5, so after rotation those
    // become Y_world — exactly what we want.
    geo.rotateX(-Math.PI * 0.5);

    // CCW winding is preserved through rotation so normals face +Y automatically.
    geo.computeVertexNormals();

    return geo;
}
