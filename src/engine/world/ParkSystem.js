// ============================================================================
// ParkSystem.js — Orthographic GPU park-mask and poly-cache
// ============================================================================
// The enclosing park polygon is projected into world XY, simplified with
// Douglas-Peucker, then rendered from a top-down orthographic camera into a
// 2 K × 2 K single-channel render target (white inside, black outside).
// Every city fragment shader samples this texture via uParkMask / uMaskBounds
// and discards pixels outside the park boundary.
// ============================================================================

import * as THREE from 'three';
import { project } from './GeoMath.js';
import { getRings } from '../utils/GeoUtils.js';

let _engine = null;
export function setEngine(e) { _engine = e; }

// ── Poly cache ────────────────────────────────────────────────────────────────
// Rebuilt once per geoCache.pData reference; invalidated when data changes.
let _parkPolyCache    = null;
let _parkPolyCacheSrc = null;

export function invalidateParkCache() {
    _parkPolyCache    = null;
    _parkPolyCacheSrc = null;
}

function _buildParkPolyCache() {
    _parkPolyCache    = [];
    _parkPolyCacheSrc = _engine.geoCache.pData;
    const data = _engine.geoCache.pData;
    if (!data?.features) return;

    for (const feat of data.features) {
        const g = feat.geometry;
        if (!g) continue;
        if (g.type !== 'Polygon' && g.type !== 'MultiPolygon') continue;
        const polys = (g.type === 'Polygon') ? [g.coordinates] : g.coordinates;

        for (const poly of polys) {
            const outer = poly[0];
            if (!outer || outer.length < 3) continue;

            const ring = [];
            let minX =  Infinity, minZ =  Infinity;
            let maxX = -Infinity, maxZ = -Infinity;

            for (const pt of outer) {
                const p = project(pt[0], pt[1]);
                if (!p.valid) continue;
                const wx = p.x, wz = -p.y;
                ring.push({ x: wx, z: wz });
                if (wx < minX) minX = wx;  if (wx > maxX) maxX = wx;
                if (wz < minZ) minZ = wz;  if (wz > maxZ) maxZ = wz;
            }
            if (ring.length < 3) continue;

            // poly is raw GeoJSON coords ([outer, ...holes]) retained for mask triangulation
            _parkPolyCache.push({ ring, minX, maxX, minZ, maxZ, feature: feat, poly });
        }
    }
}

function _ensureParkCache() {
    if (_parkPolyCache && _parkPolyCacheSrc === _engine.geoCache.pData) return;
    _buildParkPolyCache();
}

function _pointInRing(x, z, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const xi = ring[i].x, zi = ring[i].z;
        const xj = ring[j].x, zj = ring[j].z;
        const intersects = ((zi > z) !== (zj > z)) &&
                           (x < (xj - xi) * (z - zi) / (zj - zi) + xi);
        if (intersects) inside = !inside;
    }
    return inside;
}

export function findEnclosingPark(x, z) {
    if (!_engine) return null;
    _ensureParkCache();
    for (const poly of _parkPolyCache) {
        if (x < poly.minX || x > poly.maxX || z < poly.minZ || z > poly.maxZ) continue;
        if (_pointInRing(x, z, poly.ring)) return poly;
    }
    return null;
}

// ── Douglas-Peucker simplification ───────────────────────────────────────────

function _douglasPeucker(pts, epsilon) {
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
        const L = _douglasPeucker(pts.slice(0, maxIdx + 1), epsilon);
        const R = _douglasPeucker(pts.slice(maxIdx), epsilon);
        return [...L.slice(0, -1), ...R];
    }
    return [first, last];
}

const _DP_EPSILON = 2.0; // world metres

function _projectSimplifyRing(ring) {
    const out = [];
    for (const p of ring) {
        if (!p || p.length < 2) continue;
        const v = project(p[0], p[1]);
        if (v.valid) out.push({ x: v.x, y: -v.y });
    }
    if (out.length < 3) return out;
    return _douglasPeucker(out, _DP_EPSILON);
}

// ── GPU mask ─────────────────────────────────────────────────────────────────

let _parkMaskFeature = null;
let _parkMaskAABB    = null;

export function buildParkMask(feature) {
    if (!_engine) return;

    // Clear previous mask geometry
    while (_engine.parkMaskScene.children.length)
        _engine.parkMaskScene.remove(_engine.parkMaskScene.children[0]);

    _parkMaskAABB = null;
    _engine.uniforms.uParkModeActive.value = 0.0;
    if (!feature?.geometry) return;

    let minX =  Infinity, minY =  Infinity;
    let maxX = -Infinity, maxY = -Infinity;
    let built = 0;

    const whiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });

    for (const polyArray of getRings(feature.geometry)) {
        if (!polyArray?.[0]) continue;
        const outer = _projectSimplifyRing(polyArray[0]);
        if (outer.length < 3) continue;

        const shape = new THREE.Shape();
        outer.forEach((v, i) => (i === 0 ? shape.moveTo(v.x, v.y) : shape.lineTo(v.x, v.y)));

        for (let h = 1; h < polyArray.length; h++) {
            const hole = _projectSimplifyRing(polyArray[h]);
            if (hole.length < 3) continue;
            const path = new THREE.Path();
            hole.forEach((v, j) => (j === 0 ? path.moveTo(v.x, v.y) : path.lineTo(v.x, v.y)));
            shape.holes.push(path);
        }

        const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape, 1), whiteMat);
        mesh.frustumCulled = false;
        _engine.parkMaskScene.add(mesh);
        built++;

        for (const v of outer) {
            if (v.x < minX) minX = v.x;  if (v.x > maxX) maxX = v.x;
            if (v.y < minY) minY = v.y;  if (v.y > maxY) maxY = v.y;
        }
    }

    if (built === 0) return;

    const PAD  = 10;
    const bMinX = minX - PAD, bMaxX = maxX + PAD;
    const bMinZ = minY - PAD, bMaxZ = maxY + PAD; // shape.y == world Z

    _engine.parkMaskCamera.left   = bMinX;
    _engine.parkMaskCamera.right  = bMaxX;
    _engine.parkMaskCamera.bottom = bMinZ;
    _engine.parkMaskCamera.top    = bMaxZ;
    _engine.parkMaskCamera.updateProjectionMatrix();

    _engine.uniforms.uMaskBounds.value.set(bMinX, bMinZ, bMaxX, bMaxZ);

    _engine.renderer.setRenderTarget(_engine.parkMaskTarget);
    _engine.renderer.setClearColor(0x000000, 1);
    _engine.renderer.clear();
    _engine.renderer.render(_engine.parkMaskScene, _engine.parkMaskCamera);
    _engine.renderer.setRenderTarget(null);

    _engine.uniforms.uParkModeActive.value = 1.0;
    _parkMaskAABB    = { minX: bMinX, maxX: bMaxX, minZ: bMinZ, maxZ: bMaxZ };
    _parkMaskFeature = feature;
}

export function clearParkMask() {
    if (!_engine) return;
    _engine.uniforms.uParkModeActive.value = 0.0;
    _parkMaskFeature = null;
    _parkMaskAABB    = null;
}

export function getParkMaskFeature() { return _parkMaskFeature; }
export function getParkMaskAABB()    { return _parkMaskAABB; }

// ── CPU broad-phase AABB cull ─────────────────────────────────────────────────

export function passesParkAABB(mesh, aabb) {
    if (!aabb) return true;
    if (mesh.isInstancedMesh) return true;
    const pad = 50;
    if (mesh.userData.px !== undefined && mesh.userData.pz !== undefined) {
        const x = mesh.userData.px, z = mesh.userData.pz;
        return x >= aabb.minX - pad && x <= aabb.maxX + pad &&
               z >= aabb.minZ - pad && z <= aabb.maxZ + pad;
    }
    if (!mesh.geometry) return true;
    if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
    const box = mesh.geometry.boundingBox;
    if (!box || box.isEmpty()) return true;
    return !(box.max.x < aabb.minX - pad || box.min.x > aabb.maxX + pad ||
             box.max.z < aabb.minZ - pad || box.min.z > aabb.maxZ + pad);
}
