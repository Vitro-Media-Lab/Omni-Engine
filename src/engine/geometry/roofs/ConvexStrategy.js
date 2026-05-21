// ============================================================================
// ConvexStrategy.js — Convex primitive roofs (pyramid, cone, onion)
// ============================================================================
//
// Handles OSM roof:shape values:
//   pyramid / pyramidal / gable / gabled / hip / hipped / gambrel / mansard
//   cone
//   onion
//
// Algorithm
// ---------
//
// ONION & CONE — analytic primitives:
//   The footprint centroid and maximum vertex radius are computed; Three.js
//   SphereGeometry (half) and ConeGeometry are placed at that centroid.
//   These shapes do not require the footprint to be convex.
//
// PYRAMID (and all hip/gable/gambrel/mansard aliases) — fan triangulation:
//   1. Verify the footprint is convex via a scale-independent cross-product test.
//      Non-convex footprints are rejected (return null) because the fan
//      centroid would produce inverted triangles on concave corners.
//   2. Compute the polygon centroid and the apex position (centroid + roofH).
//   3. Detect winding (shoelace area sign) so triangle winding is always CCW,
//      guaranteeing upward-facing normals without any post-hoc flip.
//   4. Emit one triangle per perimeter edge: [edgeA, edgeB, apex], stored
//      directly into a typed Float32Array for zero-allocation geometry creation.
//   5. mergeVertices() welds the shared apex and shared edge endpoints so
//      computeVertexNormals() can average across triangle boundaries for smooth
//      shading (without welding, every triangle gets a faceted face normal).
//
// Scale-independent convexity test
// ---------------------------------
//   The raw cross-product |e||f|sin(θ) grows with edge length, so a fixed
//   absolute threshold silently rejects large buildings whose vertices are only
//   millimetres off-axis. Instead we test:
//       cp² > |e|²·|f|²·k   where k = 3×10⁻⁴  (≈ sin²(1°))
//   This is completely length-independent — a 500 m tower and a 5 m shed are
//   judged by the same angular tolerance.
// ============================================================================

import * as THREE           from 'three';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// ── Convexity guard ───────────────────────────────────────────────────────────

function isConvex(pts, count) {
    if (count < 4) return true;
    let sign = 0;
    for (let i = 0; i < count; i++) {
        const p0 = pts[i];
        const p1 = pts[(i + 1) % count];
        const p2 = pts[(i + 2) % count];
        const ex = p1.x - p0.x, ey = p1.y - p0.y;
        const fx = p2.x - p1.x, fy = p2.y - p1.y;
        const cp    = ex * fy - ey * fx;
        const denom = (ex * ex + ey * ey) * (fx * fx + fy * fy);
        if (denom < 1e-12) continue;         // degenerate / duplicate vertex
        if (cp * cp > denom * 3e-4) {        // |sin θ| > ~1°
            const s = cp > 0 ? 1 : -1;
            if (sign === 0)    sign = s;
            else if (s !== sign) return false;
        }
    }
    return true;
}

// ── Main export ───────────────────────────────────────────────────────────────

export function buildConvexRoof(pts, h, roofShape, roofH) {
    if (!pts || pts.length < 3) return null;

    // Deduplicate a closed ring (first === last) without allocating a copy
    const n     = pts.length;
    const count = (n > 3 && pts[0].x === pts[n - 1].x && pts[0].y === pts[n - 1].y)
        ? n - 1
        : n;

    // ── Centroid and max radius ───────────────────────────────────────────────
    let cx = 0, cz = 0;
    for (let i = 0; i < count; i++) { cx += pts[i].x; cz += pts[i].y; }
    cx /= count; cz /= count;

    let maxR = 0;
    for (let i = 0; i < count; i++) {
        maxR = Math.max(maxR, Math.hypot(pts[i].x - cx, pts[i].y - cz));
    }
    if (maxR < 0.5) return null;   // footprint too small for any roof primitive

    const rh = roofH > 0 ? roofH : Math.max(1.5, maxR * 0.35);

    // ── Onion dome ────────────────────────────────────────────────────────────
    // Upper hemisphere of a sphere scaled to min(maxR, rh) so the dome never
    // balloons wider than its footprint on tight tower cross-sections.
    if (roofShape === 'onion') {
        const r   = Math.min(maxR, rh);
        const geo = new THREE.SphereGeometry(r, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.5);
        geo.translate(cx, h, -cz);
        return geo;
    }

    // ── Cone ──────────────────────────────────────────────────────────────────
    if (roofShape === 'cone') {
        const geo = new THREE.ConeGeometry(maxR * 0.85, rh, 16);
        geo.translate(cx, h + rh * 0.5, -cz);
        return geo;
    }

    // ── Pyramid / hip / gable — fan triangulation ─────────────────────────────
    if (!isConvex(pts, count)) return null;

    // Shoelace winding detection — positive = CCW (in 2-D Y-up space)
    let area = 0;
    for (let i = 0; i < count; i++) {
        const j = (i + 1) % count;
        area += pts[i].x * pts[j].y - pts[j].x * pts[i].y;
    }
    const ccw = area >= 0;

    // Pre-allocate typed buffer: count triangles × 3 verts × 3 floats
    const verts = new Float32Array(count * 9);
    const apex  = { x: cx, y: h + rh, z: -cz };   // shared apex in world-space XZ

    for (let i = 0; i < count; i++) {
        // CCW: vertex order [a, b, apex]
        // CW:  vertex order [b, a, apex]  (swapped base verts restores CCW winding)
        const a = ccw ? pts[i]               : pts[(i + 1) % count];
        const b = ccw ? pts[(i + 1) % count] : pts[i];

        const base = i * 9;
        verts[base + 0] = a.x;    verts[base + 1] = h;    verts[base + 2] = -a.y;
        verts[base + 3] = b.x;    verts[base + 4] = h;    verts[base + 5] = -b.y;
        verts[base + 6] = apex.x; verts[base + 7] = apex.y; verts[base + 8] = apex.z;
    }

    const rawGeo = new THREE.BufferGeometry();
    rawGeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));

    // mergeVertices welds the shared apex and shared base-edge endpoints so
    // computeVertexNormals can average across triangle boundaries.
    // The merge tolerance of 1e-4 m is sub-millimetre — safe for all city scales.
    const geo = BufferGeometryUtils.mergeVertices(rawGeo, 1e-4);
    rawGeo.dispose();

    geo.computeVertexNormals();
    return geo;
}
