// ============================================================================
// SpatialGrid.js — O(1) spatial collision and structure lookup grid
// ============================================================================

import { getElevationAt } from './GeoMath.js';

let _engine = null;
export function setEngine(e) { _engine = e; }

export const SpatialGrid       = new Map();
export const collidableGeometries = [];

export const GRID_SIZE = 50.0;

export function getGridKeys(minX, maxX, minZ, maxZ) {
    const keys   = [];
    const startC = Math.floor(minX / GRID_SIZE);
    const endC   = Math.floor(maxX / GRID_SIZE);
    const startR = Math.floor(minZ / GRID_SIZE);
    const endR   = Math.floor(maxZ / GRID_SIZE);
    for (let c = startC; c <= endC; c++) {
        for (let r = startR; r <= endR; r++) {
            keys.push(`${c}_${r}`);
        }
    }
    return keys;
}

// ── Point-in-polygon ──────────────────────────────────────────────────────────
export function pointInRing(x, z, ring) {
    let inside = false;
    const n = ring.length;
    for (let i = 0, j = n - 1; i < n; j = i++) {
        const xi = ring[i].x, zi = ring[i].z;
        const xj = ring[j].x, zj = ring[j].z;
        if (((zi > z) !== (zj > z)) && (x < (xj - xi) * (z - zi) / (zj - zi) + xi)) {
            inside = !inside;
        }
    }
    return inside;
}

// ── Bridge segment injection ──────────────────────────────────────────────────
export function injectBridgeSegmentToGrid(p1, p2, halfW) {
    const dx = p2.x - p1.x;
    const dz = p2.z - p1.z;
    const len = Math.hypot(dx, dz);
    if (len < 0.001) return;

    const radius   = halfW + 1.5;
    const minX     = Math.min(p1.x, p2.x) - radius;
    const maxX     = Math.max(p1.x, p2.x) + radius;
    const minZ     = Math.min(p1.z, p2.z) - radius;
    const maxZ     = Math.max(p1.z, p2.z) + radius;

    const bridgeData = {
        type:     'bridge',
        p1:       { x: p1.x, y: p1.y, z: p1.z },
        p2:       { x: p2.x, y: p2.y, z: p2.z },
        radiusSq: radius * radius,
    };

    for (const k of getGridKeys(minX, maxX, minZ, maxZ)) {
        if (!SpatialGrid.has(k)) SpatialGrid.set(k, []);
        SpatialGrid.get(k).push(bridgeData);
    }
}

// ── Tunnel segment injection ──────────────────────────────────────────────────
export function injectTunnelSegmentToGrid(p1, p2, halfW, clearance) {
    const len = Math.hypot(p2.x - p1.x, p2.z - p1.z);
    if (len < 0.001) return;

    const gridRadius   = halfW + 1.5;
    const gridRadiusSq = gridRadius * gridRadius;

    const minX = Math.min(p1.x, p2.x) - gridRadius;
    const maxX = Math.max(p1.x, p2.x) + gridRadius;
    const minZ = Math.min(p1.z, p2.z) - gridRadius;
    const maxZ = Math.max(p1.z, p2.z) + gridRadius;

    const tunnelData = {
        type:         'tunnel',
        p1:           { x: p1.x, y: p1.y, z: p1.z },
        p2:           { x: p2.x, y: p2.y, z: p2.z },
        halfW,
        clearance,
        gridRadiusSq,
    };

    for (const k of getGridKeys(minX, maxX, minZ, maxZ)) {
        if (!SpatialGrid.has(k)) SpatialGrid.set(k, []);
        SpatialGrid.get(k).push(tunnelData);
    }
}

// ── Cavern injection ──────────────────────────────────────────────────────────
export function injectCavernToGrid(ring, yFloor, yCeiling) {
    if (!ring || ring.length < 3) return;

    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const p of ring) {
        if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
        if (p.z < minZ) minZ = p.z; if (p.z > maxZ) maxZ = p.z;
    }

    const cavernData = { type: 'cavern', ring, yFloor, yCeiling };

    for (const k of getGridKeys(minX, maxX, minZ, maxZ)) {
        if (!SpatialGrid.has(k)) SpatialGrid.set(k, []);
        SpatialGrid.get(k).push(cavernData);
    }
}

// ── Portal holes ──────────────────────────────────────────────────────────────
export function registerPortalHole(cx, cz, radius, isSurface, topY) {
    const ph = _engine.portalHoles;
    if (ph.count >= ph.maxHoles) {
        if (ph.count === ph.maxHoles) console.warn('[Portal] Hole limit reached:', ph.maxHoles);
        return;
    }
    ph.data[ph.count].set(cx, cz, radius, topY);
    ph.count++;
    _engine.uniforms.uPortalCount.value = ph.count;
}

export function resetPortalHoles() {
    const ph = _engine.portalHoles;
    for (let i = 0; i < ph.count; i++) ph.data[i].set(0, 0, 0, 0);
    ph.count = 0;
    _engine.uniforms.uPortalCount.value = 0;
}

export function isInPortalHole(x, z) {
    const ph = _engine.portalHoles;
    if (ph.count === 0) return false;
    const d = ph.data;
    for (let i = 0; i < ph.count; i++) {
        const v = d[i];
        const dx = x - v.x, dz = z - v.y;
        if (dx * dx + dz * dz < v.z * v.z) return true;
    }
    return false;
}

// ── Structure lookup ──────────────────────────────────────────────────────────
const _hits = [];

export function getStructureAt(x, z) {
    _hits.length = 0;
    const key        = `${Math.floor(x / GRID_SIZE)}_${Math.floor(z / GRID_SIZE)}`;
    const structures = SpatialGrid.get(key);
    if (!structures) return _hits;

    for (const s of structures) {
        if (s.type === 'building') {
            if (pointInRing(x, z, s.ring)) {
                _hits.push({ type: s.type, yTop: s.yTop, yBase: s.yBase, ring: s.ring, p1: s.p1, p2: s.p2 });
            }
        } else if (s.type === 'bridge') {
            const l2 = (s.p2.x - s.p1.x) ** 2 + (s.p2.z - s.p1.z) ** 2;
            let t = 0;
            if (l2 > 0) {
                t = ((x - s.p1.x) * (s.p2.x - s.p1.x) + (z - s.p1.z) * (s.p2.z - s.p1.z)) / l2;
                t = Math.max(0, Math.min(1, t));
            }
            const projX  = s.p1.x + t * (s.p2.x - s.p1.x);
            const projZ  = s.p1.z + t * (s.p2.z - s.p1.z);
            const distSq = (x - projX) ** 2 + (z - projZ) ** 2;
            if (distSq <= s.radiusSq) {
                const yTop  = s.p1.y + t * (s.p2.y - s.p1.y);
                const yBase = yTop - 5.0;
                _hits.push({ type: s.type, yTop, yBase, p1: s.p1, p2: s.p2 });
            }
        } else if (s.type === 'tunnel') {
            const l2 = (s.p2.x - s.p1.x) ** 2 + (s.p2.z - s.p1.z) ** 2;
            let t = 0;
            if (l2 > 0) {
                t = ((x - s.p1.x) * (s.p2.x - s.p1.x) + (z - s.p1.z) * (s.p2.z - s.p1.z)) / l2;
                t = Math.max(0, Math.min(1, t));
            }
            const projX  = s.p1.x + t * (s.p2.x - s.p1.x);
            const projZ  = s.p1.z + t * (s.p2.z - s.p1.z);
            const distSq = (x - projX) ** 2 + (z - projZ) ** 2;
            if (distSq <= s.gridRadiusSq) _hits.push(s);
        } else if (s.type === 'cavern') {
            if (pointInRing(x, z, s.ring)) _hits.push(s);
        } else if (s.type === 'bridgePoly') {
            if (pointInRing(x, z, s.ring)) _hits.push(s);
        }
    }
    return _hits;
}

export function getBridgeAwareY(x, z) {
    const structs = getStructureAt(x, z);
    let bridgeY = -Infinity;
    for (const s of structs) {
        if (s.type === 'bridgePoly' && s.yTop > bridgeY) bridgeY = s.yTop;
    }
    return bridgeY > -Infinity ? bridgeY : getElevationAt(x, z);
}

export function getAdjustedBuildingElevation(cx, cz, pts, currentBaseElev) {
    let maxStructureElev = -Infinity;
    let hasPlatform      = false;
    const structs        = getStructureAt(cx, cz);
    for (const s of structs) {
        if (s.type === 'bridgePoly' && s.yTop > maxStructureElev) {
            maxStructureElev = s.yTop;
            hasPlatform      = true;
        }
    }
    if (hasPlatform && maxStructureElev > currentBaseElev + 0.5) {
        return maxStructureElev + 0.1;
    }
    return currentBaseElev;
}
