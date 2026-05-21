// ============================================================================
// GeoMath.js — Geospatial projection and terrain elevation sampling
// ============================================================================

const _mPerDeg = 111320;

let _engine = null;
export function setEngine(e) { _engine = e; }

// ── Projection cache ──────────────────────────────────────────────────────────
let _cachedLatScale  = null;
let _cachedOriginLon = 0;
let _cachedOriginLat = 0;

export function resetProjectionCache() {
    _cachedLatScale = null;
}

// ── Topo grid state ───────────────────────────────────────────────────────────
let _topoGrid         = null;
let _topoWorldSize    = 0;
let _topoInvWorldSize = 0;
let _topoSizeMinusOne = 0;

export function setTopoGrid(gridJson, worldRadius) {
    _topoWorldSize    = 2 * (worldRadius || 1000);
    _topoInvWorldSize = 1.0 / _topoWorldSize;
    if (gridJson?.size && Array.isArray(gridJson?.data)) {
        _topoGrid         = gridJson;
        _topoSizeMinusOne = _topoGrid.size - 1;
        if (_engine) {
            _engine._topoMaxElev   = _topoGrid.data.reduce((m, v) => v > m ? v : m, 0);
            _engine._topoGrid      = _topoGrid;
            _engine._topoWorldSize = _topoWorldSize;
        }
    } else if (_engine) {
        _engine._topoWorldSize = _topoWorldSize;
    }
}

export function getTopoWorldSize() { return _topoWorldSize; }

// ── Solar time ────────────────────────────────────────────────────────────────
let _lastSolarTimeUpdate = 0;
let _cachedSolarTime     = 0;

export function getLocalSolarTime(longitude) {
    const now = Date.now();
    if (now - _lastSolarTimeUpdate < 1000) return _cachedSolarTime;
    _lastSolarTimeUpdate = now;
    const d = new Date();
    const utcHours = d.getUTCHours() + (d.getUTCMinutes() / 60) + (d.getUTCSeconds() / 3600);
    _cachedSolarTime = (utcHours + (longitude / 15) + 24) % 24;
    return _cachedSolarTime;
}

// ── Projection ────────────────────────────────────────────────────────────────
export function project(lon, lat) {
    if (_cachedLatScale === null) {
        _cachedOriginLon = _engine?.meta?.lon || 0;
        _cachedOriginLat = _engine?.meta?.lat || 0;
        _cachedLatScale  = Math.cos(_cachedOriginLat * (Math.PI / 180));
    }
    return {
        x:     (lon - _cachedOriginLon) * _mPerDeg * _cachedLatScale,
        y:     (lat - _cachedOriginLat) * _mPerDeg,
        valid: true,
    };
}

// ── Bilinear terrain elevation ────────────────────────────────────────────────
export function getElevationAt(x, z) {
    if (!_topoGrid) return 0;
    const radius = _topoWorldSize * 0.5;

    let percentX = (x + radius) * _topoInvWorldSize;
    let percentZ = (z + radius) * _topoInvWorldSize;

    if (percentX < 0) percentX = 0; else if (percentX > 1) percentX = 1;
    if (percentZ < 0) percentZ = 0; else if (percentZ > 1) percentZ = 1;

    const gi = percentX * _topoSizeMinusOne;
    const gj = percentZ * _topoSizeMinusOne;

    const x0 = Math.min(_topoSizeMinusOne - 1, gi | 0);
    const z0 = Math.min(_topoSizeMinusOne - 1, gj | 0);
    const x1 = x0 + 1;
    const z1 = z0 + 1;
    const fx = gi - x0;
    const fz = gj - z0;

    const SIZE = _topoGrid.size;
    const d    = _topoGrid.data;

    const h00 = d[z0 * SIZE + x0];
    const h10 = d[z0 * SIZE + x1];
    const h01 = d[z1 * SIZE + x0];
    const h11 = d[z1 * SIZE + x1];

    if (fx + fz <= 1.0) {
        return h00 + fx * (h10 - h00) + fz * (h01 - h00);
    } else {
        return h11 + (1.0 - fx) * (h01 - h11) + (1.0 - fz) * (h10 - h11);
    }
}
