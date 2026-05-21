// ============================================================================
// CityPipeline.js — Async city data pipeline (V1 port of loadAllLayers)
// ============================================================================

import * as THREE               from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { FontLoader }           from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry }         from 'three/examples/jsm/geometries/TextGeometry.js';
import { LineMaterial }         from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 }        from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';

import useEngineStore from '../../store/useEngineStore.js';

import { project, getElevationAt, setTopoGrid }          from './GeoMath.js';
import {
    SpatialGrid, collidableGeometries,
    getGridKeys, pointInRing,
    injectCavernToGrid, resetPortalHoles,
    getStructureAt,
    getAdjustedBuildingElevation,
} from './SpatialGrid.js';
import { getRings, buildShape }                           from '../utils/GeoUtils.js';
import {
    applyBaseShader, applyContextShader,
    applyContextShaderLine2, applyLaneLineShader,
    plinthClone, edgesToLineGeo,
} from '../shaders/ShaderInjectors.js';
import { registerCSMMaterial }                           from '../lighting/LightingSystem.js';
import { chunkAndMerge, flushMerge, yieldThread, spatialSort } from '../builders/ChunkMerge.js';
import {
    buildInfraElevatedRibbon, buildSmoothRibbon,
    buildVerticalWall, cleanAndResample, smoothElevations,
    getInfraConfig, applyVertexColors, getOSMColor, INFRA_CONFIG,
} from '../builders/InfraBuilder.js';
import { buildRoofGeometry, buildWindowLines }            from '../builders/WindowBuilder.js';
import { buildPolygonLayer }                              from '../builders/PolygonLayer.js';
import { bakeTerrainTexture }                             from '../builders/TerrainBaker.js';
import { initVegetation }                                 from '../builders/VegetationBuilder.js';

let _engine = null;
export function setEngine(e) { _engine = e; }

// ── Font promise — starts loading once at module initialisation ───────────────
const _inscriptionFontPromise = new Promise(resolve => {
    new FontLoader().load(
        'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json',
        font  => resolve(font),
        undefined,
        err   => { console.warn('[CityPipeline] Inscription font failed:', err); resolve(null); }
    );
});

// ── Loader helpers ────────────────────────────────────────────────────────────
function updateLoader(current, total, name) {
    useEngineStore.setState({
        loadingProgress: Math.round((current / total) * 100),
        loadingLayer:    name,
    });
}

function hideLoader() {
    useEngineStore.setState({ isLoading: false });
}

// ── Geometry helpers ──────────────────────────────────────────────────────────
function getFirstCoord(geom) {
    if (geom.type === 'Polygon'      && geom.coordinates[0])    return geom.coordinates[0][0];
    if (geom.type === 'MultiPolygon' && geom.coordinates[0][0]) return geom.coordinates[0][0][0];
    if (geom.type === 'LineString'   && geom.coordinates)       return geom.coordinates[0];
    return null;
}

// ── Node-registry key ─────────────────────────────────────────────────────────
const getPointKey = (lon, lat) => `${Number(lon).toFixed(4)},${Number(lat).toFixed(4)}`;

// ── Normalize lift/pylon geometries for the shared material ───────────────────
function _normalizeLiftPart(g) {
    g.deleteAttribute('uv');
    const c = g.attributes.position.count;
    g.setAttribute('roadUV', new THREE.Float32BufferAttribute(new Float32Array(c * 2), 2));
    g.setAttribute('roadED', new THREE.Float32BufferAttribute(new Float32Array(c),     1));
}

function pushPowerLinePylon(geos, wires, cx, cz, groundY, pylonH, angle) {
    const trunk   = new THREE.BoxGeometry(0.4, pylonH, 0.4);
    trunk.translate(cx, groundY + pylonH / 2, cz);
    const crossbar = new THREE.BoxGeometry(0.4, 0.4, 3);
    crossbar.translate(0, pylonH / 2, 0);
    crossbar.rotateY(angle + Math.PI / 2);
    crossbar.translate(cx, groundY + pylonH / 2, cz);
    _normalizeLiftPart(trunk); _normalizeLiftPart(crossbar);
    geos.push(trunk, crossbar);
    if (wires) { wires.push(new THREE.EdgesGeometry(trunk, 30)); wires.push(new THREE.EdgesGeometry(crossbar, 30)); }
}

function pushLiftPylon(geos, wires, cx, cz, groundY, pylonH, angle) {
    const trunk   = new THREE.BoxGeometry(0.4, pylonH, 0.4);
    trunk.translate(cx, groundY + pylonH / 2, cz);
    const crossbar = new THREE.BoxGeometry(3.0, 0.4, 0.4);
    crossbar.translate(0, pylonH / 2, 0);
    crossbar.rotateY(angle + Math.PI / 2);
    crossbar.translate(cx, groundY + pylonH / 2, cz);
    _normalizeLiftPart(trunk); _normalizeLiftPart(crossbar);
    geos.push(trunk, crossbar);
    if (wires) { wires.push(new THREE.EdgesGeometry(trunk, 30)); wires.push(new THREE.EdgesGeometry(crossbar, 30)); }
}

function pushLiftChair(geos, wires, cx, cy, cz, angle) {
    const chair = new THREE.BoxGeometry(1.2, 0.8, 0.8);
    chair.translate(0, -1.8, 0); chair.rotateY(angle); chair.translate(cx, cy, cz);
    const arm   = new THREE.CylinderGeometry(0.05, 0.05, 1.5);
    arm.translate(0, -0.75, 0); arm.rotateY(angle); arm.translate(cx, cy, cz);
    _normalizeLiftPart(chair); _normalizeLiftPart(arm);
    geos.push(chair, arm);
    if (wires) { wires.push(new THREE.EdgesGeometry(chair, 30)); wires.push(new THREE.EdgesGeometry(arm, 30)); }
}

// ── Local mass-merge helpers (inline so they close over _engine) ──────────────
async function safeMassMerge(geoArray, material, group, colorKey, castShadow) {
    if (geoArray.length === 0) return;
    spatialSort(geoArray);

    const hasIndex   = geoArray.some(g => g.index !== null);
    const hasNoIndex = geoArray.some(g => g.index === null);
    if (hasIndex && hasNoIndex) {
        for (let k = 0; k < geoArray.length; k++) {
            if (geoArray[k].index !== null) {
                const expanded = geoArray[k].toNonIndexed();
                geoArray[k].dispose();
                geoArray[k] = expanded;
            }
        }
    }

    const CHUNK_SIZE = 250;
    for (let i = 0; i < geoArray.length; i += CHUNK_SIZE) {
        const chunk  = geoArray.slice(i, i + CHUNK_SIZE);
        const merged = BufferGeometryUtils.mergeGeometries(chunk);
        chunk.forEach(g => g.dispose());
        if (merged) {
            merged.computeBoundingBox(); merged.computeBoundingSphere();
            const mesh = new THREE.Mesh(merged, material);
            mesh.castShadow    = castShadow;
            mesh.receiveShadow = true;
            mesh.matrixAutoUpdate = false; mesh.updateMatrix();
            mesh.userData.colorKey = colorKey;
            group.add(mesh);
        }
        await yieldThread();
    }
}

async function safeMassMergeWires(geoArray, material, group, colorKey) {
    if (geoArray.length === 0) return;
    spatialSort(geoArray);

    const CHUNK_SIZE = 250;
    for (let i = 0; i < geoArray.length; i += CHUNK_SIZE) {
        const chunk  = geoArray.slice(i, i + CHUNK_SIZE);
        const merged = BufferGeometryUtils.mergeGeometries(chunk);
        chunk.forEach(g => g.dispose());
        if (merged) {
            merged.computeBoundingBox(); merged.computeBoundingSphere();
            const lineGeo = new LineSegmentsGeometry();
            lineGeo.setPositions(merged.attributes.position.array);
            merged.dispose();
            const mesh = new LineSegments2(lineGeo, material);
            mesh.matrixAutoUpdate = false; mesh.updateMatrix();
            mesh.userData.colorKey = colorKey;
            group.add(mesh);
        }
        await yieldThread();
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// loadAllLayers — Main entry point
// Called by Engine.js after _init() when meta is available.
// ─────────────────────────────────────────────────────────────────────────────
export async function loadAllLayers() {
    resetPortalHoles();
    SpatialGrid.clear();
    collidableGeometries.length = 0;

    updateLoader(0, 9, 'Topography');
    const vStr = '?v=' + Date.now();

    async function fetchLayer(url) {
        try {
            const res = await fetch(url + vStr);
            if (!res.ok) return url.endsWith('.json') ? { size: 0, data: [] } : { features: [] };
            return await res.json();
        } catch (e) {
            console.warn(`[CityPipeline] Failed: ${url}`, e);
            return url.endsWith('.json') ? { size: 0, data: [] } : { features: [] };
        }
    }

    const originProj = project(_engine.meta.lon, _engine.meta.lat);
    const pfx        = './' + (_engine.meta.data_path || '') + (_engine.meta.file_prefix || '');
    let   bridgePolyRings = [];

    // ── Topography ────────────────────────────────────────────────────────────
    {
        const gridJson = await fetchLayer(pfx + 'combined_topo_grid.json');
        setTopoGrid(gridJson, _engine.meta.radius);
    }

    // ── Bridge-polygon pre-pass ───────────────────────────────────────────────
    // Inject structural platforms into the grid BEFORE buildings so
    // getAdjustedBuildingElevation() can detect them.
    updateLoader(1, 9, 'Structural Platforms');
    let skeletonData = await fetchLayer(pfx + 'combined_skeleton.geojson');

    const roadGroundGeos     = [], sidewalkGroundGeos   = [];
    const roadBridgeGeos     = [], sidewalkBridgeGeos   = [];
    const roadTunnelGeos     = [], roadTunnelPortalGeos = [], roadTunnelStripGeos = [];
    const liftCableGeos      = [], liftCableWires       = [];
    const liftPylonGeos      = [], liftPylonWires       = [];
    const DECK_THICK         = 0.5;

    if (skeletonData?.features) {
        for (const feature of skeletonData.features) {
            const gt    = feature.geometry?.type;
            if (gt !== 'Polygon' && gt !== 'MultiPolygon') continue;
            const props = feature.properties || {};

            const isBridge = props.bridge && props.bridge !== 'no';
            if (isBridge || props.man_made === 'bridge') continue;

            const isBuildingFeature = props.building || props['building:part'];
            const isCorridor        = props.highway === 'corridor';
            const isBridgePoly      = !isBuildingFeature && !isCorridor && (
                parseFloat(props.layer) >= 1 && !props.highway
            );
            if (!isBridgePoly) continue;

            const layer          = parseFloat(props.layer) || 1;
            const hType          = (props.highway || '').toLowerCase();
            const priorityOffset = (hType === 'motorway' || hType === 'trunk') ? 0.6
                : (hType === 'primary' || hType === 'secondary') ? 0.4 : 0.2;
            const hOffset        = layer > 0 ? (layer * 5.0) + priorityOffset : 5.5 + priorityOffset;

            for (const polyArray of getRings(feature.geometry)) {
                const shape = buildShape(polyArray);
                if (!shape) continue;

                const outerRing = polyArray[0];
                let   deckBaseY = -Infinity;
                const step      = Math.max(1, Math.floor(outerRing.length / 16));
                for (let i = 0; i < outerRing.length; i += step) {
                    const pt = outerRing[i];
                    if (!pt || pt.length < 2) continue;
                    const p = project(pt[0], pt[1]);
                    if (!p.valid) continue;
                    const ey = getElevationAt(p.x, -p.y);
                    if (ey > deckBaseY) deckBaseY = ey;
                }
                if (deckBaseY === -Infinity) deckBaseY = 0;
                const deckTopY = deckBaseY + hOffset;

                const geo = new THREE.ExtrudeGeometry(shape, { depth: DECK_THICK, bevelEnabled: false, curveSegments: 1 });
                geo.rotateX(-Math.PI / 2);

                const pos = geo.attributes.position;
                for (let vi = 0; vi < pos.count; vi++) pos.setY(vi, deckTopY - pos.getY(vi));
                pos.needsUpdate = true;
                geo.deleteAttribute('uv');

                const polyCount = pos.count;
                geo.setAttribute('roadUV', new THREE.Float32BufferAttribute(new Float32Array(polyCount * 2), 2));
                geo.setAttribute('roadED', new THREE.Float32BufferAttribute(new Float32Array(polyCount),     1));
                geo.computeVertexNormals();

                if (hType === 'pedestrian') {
                    const sf = 0.7;
                    let sumX = 0, sumZ = 0;
                    for (let vi = 0; vi < pos.count; vi++) { sumX += pos.getX(vi); sumZ += pos.getZ(vi); }
                    const cX = sumX / pos.count, cZ = sumZ / pos.count;
                    for (let vi = 0; vi < pos.count; vi++) {
                        pos.setX(vi, cX + (pos.getX(vi) - cX) * sf);
                        pos.setZ(vi, cZ + (pos.getZ(vi) - cZ) * sf);
                    }
                    pos.needsUpdate = true;
                }
                roadBridgeGeos.push(geo);

                let bpMinX = Infinity, bpMaxX = -Infinity, bpMinZ = Infinity, bpMaxZ = -Infinity;
                const projRing = [];
                for (const pt of outerRing) {
                    if (!pt || pt.length < 2) continue;
                    const p = project(pt[0], pt[1]);
                    if (!p.valid) continue;
                    projRing.push({ x: p.x, z: -p.y });
                    if (p.x  < bpMinX) bpMinX = p.x;  if (p.x  > bpMaxX) bpMaxX = p.x;
                    if (-p.y < bpMinZ) bpMinZ = -p.y; if (-p.y > bpMaxZ) bpMaxZ = -p.y;
                }

                if (projRing.length >= 3 && hType === 'pedestrian') {
                    const sf = 0.7;
                    let sumX = 0, sumZ = 0;
                    for (const v of projRing) { sumX += v.x; sumZ += v.z; }
                    const cX = sumX / projRing.length, cZ = sumZ / projRing.length;
                    for (let i = 0; i < projRing.length; i++) {
                        projRing[i].x = cX + (projRing[i].x - cX) * sf;
                        projRing[i].z = cZ + (projRing[i].z - cZ) * sf;
                    }
                    bpMinX = Infinity; bpMaxX = -Infinity; bpMinZ = Infinity; bpMaxZ = -Infinity;
                    for (const v of projRing) {
                        if (v.x < bpMinX) bpMinX = v.x; if (v.x > bpMaxX) bpMaxX = v.x;
                        if (v.z < bpMinZ) bpMinZ = v.z; if (v.z > bpMaxZ) bpMaxZ = v.z;
                    }
                }

                if (projRing.length >= 3) {
                    const polyData = { type: 'bridgePoly', ring: projRing, yTop: deckTopY };
                    const TOL      = 5.0;
                    for (const k of getGridKeys(bpMinX - TOL, bpMaxX + TOL, bpMinZ - TOL, bpMaxZ + TOL)) {
                        if (!SpatialGrid.has(k)) SpatialGrid.set(k, []);
                        SpatialGrid.get(k).push(polyData);
                    }
                    bridgePolyRings.push(projRing);
                }
            }
        }
    }

    // ── Buildings ─────────────────────────────────────────────────────────────
    updateLoader(2, 9, 'Buildings');
    const aviationBeaconPts = [];
    let   bData = await fetchLayer(pfx + 'combined_buildings.geojson');

    let maxH = 0;
    if (bData?.features) {
        for (const feature of bData.features) {
            if (!feature.geometry) continue;
            const gt    = feature.geometry.type;
            if (gt !== 'Polygon' && gt !== 'MultiPolygon') continue;
            const props = feature.properties || {};
            const h     = parseFloat(props.height) || (parseFloat(props['building:levels']) * 4.5) || 12;
            const coord = getFirstCoord(feature.geometry);
            if (!coord) continue;
            const p = project(coord[0], coord[1]);
            if (!p.valid) continue;
            const dist = Math.hypot(p.x - originProj.x, p.y - originProj.y);
            if (dist < 250 && h > maxH) {
                maxH = h;
                _engine.heroState.h       = h;
                _engine.heroState.feature = feature;
                _engine.heroState.found   = true;
            }
        }
    }

    // ── Materials ─────────────────────────────────────────────────────────────
    const matFill = new THREE.MeshBasicMaterial({
        transparent: true, side: THREE.DoubleSide,
        polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1,
    });
    matFill.onBeforeCompile = applyBaseShader;

    const matGroundPlane = new THREE.MeshBasicMaterial({
        transparent: true, side: THREE.DoubleSide,
        polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5,
    });
    matGroundPlane.onBeforeCompile = applyBaseShader;

    const matTopoFill = new THREE.MeshStandardMaterial({
        transparent: true, side: THREE.DoubleSide,
        roughness: 0.95, metalness: 0.0,
        polygonOffset: true, polygonOffsetFactor: 10, polygonOffsetUnits: 10,
    });
    registerCSMMaterial(matTopoFill);
    const csmCompileTopo = matTopoFill.onBeforeCompile;
    matTopoFill.onBeforeCompile = (shader, renderer) => {
        applyBaseShader(shader);
        const topoWorldSize = (_engine._topoWorldSize ?? (_engine.meta?.radius ?? 1000) * 2);
        shader.uniforms.topoHalfSize = { value: topoWorldSize / 2 };
        shader.uniforms.uPortalCount = _engine.uniforms.uPortalCount;
        shader.uniforms.uPortalHoles = _engine.uniforms.uPortalHoles;
        shader.vertexShader = `varying vec3 vTopoWorldNormal;\nvarying vec3 vTopoWorldPos;\n`
            + shader.vertexShader;
        shader.vertexShader = shader.vertexShader.replace(
            '#include <project_vertex>',
            `#include <project_vertex>
             vTopoWorldPos    = (modelMatrix * vec4(transformed, 1.0)).xyz;
             vTopoWorldNormal = normalize(mat3(modelMatrix) * normal);`
        );
        shader.fragmentShader = `
            #define VITRO_MAX_PORTAL_HOLES 128
            varying vec3 vTopoWorldNormal;
            varying vec3 vTopoWorldPos;
            uniform float topoHalfSize;
            uniform int  uPortalCount;
            uniform vec4 uPortalHoles[VITRO_MAX_PORTAL_HOLES];
        \n` + shader.fragmentShader;
        shader.fragmentShader = shader.fragmentShader.replace(
            '#include <map_fragment>',
            `#ifdef USE_MAP
                vec2 _groundUV = vec2(
                    (vTopoWorldPos.x + topoHalfSize) / (topoHalfSize * 2.0),
                    (vTopoWorldPos.z + topoHalfSize) / (topoHalfSize * 2.0)
                );
                vec4 _texSample = texture2D(map, _groundUV);
                diffuseColor.rgb = _texSample.rgb;
                diffuseColor.a  *= _texSample.a;
            #endif
            vec2 posXZ = vTopoWorldPos.xz;
            for (int _ph = 0; _ph < VITRO_MAX_PORTAL_HOLES; _ph++) {
                if (_ph >= uPortalCount) break;
                vec4 _phD = uPortalHoles[_ph];
                vec2 _phV = posXZ - _phD.xy;
                if (abs(_phV.x) > _phD.z || abs(_phV.y) > _phD.z) continue;
                if (dot(_phV, _phV) < _phD.z * _phD.z) discard;
            }`
        );
        csmCompileTopo(shader, renderer);
    };

    const _initRes = new THREE.Vector2();
    _engine.renderer.getSize(_initRes);

    const matRoadGround = new THREE.MeshStandardMaterial({
        roughness: 1.0, metalness: 0.0,
        transparent: true, side: THREE.FrontSide,
        polygonOffset: true, polygonOffsetFactor: -15, polygonOffsetUnits: -15,
        depthTest: true, depthWrite: true,
    });
    registerCSMMaterial(matRoadGround);
    const csmRoadG = matRoadGround.onBeforeCompile;
    matRoadGround.onBeforeCompile = (s, r) => { applyBaseShader(s); applyLaneLineShader(s); csmRoadG(s, r); };

    const matSidewalkGround = new THREE.MeshStandardMaterial({
        roughness: 1.0, metalness: 0.0,
        transparent: true, side: THREE.FrontSide,
        polygonOffset: true, polygonOffsetFactor: -10, polygonOffsetUnits: -10,
        depthTest: true, depthWrite: true,
    });
    registerCSMMaterial(matSidewalkGround);
    const csmSidewalkG = matSidewalkGround.onBeforeCompile;
    matSidewalkGround.onBeforeCompile = (s, r) => { applyBaseShader(s); csmSidewalkG(s, r); };

    const matRoadBridge = new THREE.MeshStandardMaterial({
        roughness: 1.0, metalness: 0.0,
        transparent: true, side: THREE.DoubleSide,
        depthTest: true, depthWrite: true,
    });
    registerCSMMaterial(matRoadBridge);
    const csmRoadB = matRoadBridge.onBeforeCompile;
    matRoadBridge.onBeforeCompile = (s, r) => { applyBaseShader(s); applyLaneLineShader(s); csmRoadB(s, r); };

    const matSidewalkBridge = new THREE.MeshStandardMaterial({
        roughness: 1.0, metalness: 0.0,
        transparent: true, side: THREE.DoubleSide,
        depthTest: true, depthWrite: true,
    });
    registerCSMMaterial(matSidewalkBridge);
    const csmSidewalkB = matSidewalkBridge.onBeforeCompile;
    matSidewalkBridge.onBeforeCompile = (s, r) => { applyBaseShader(s); csmSidewalkB(s, r); };

    const matTunnelInterior = new THREE.MeshStandardMaterial({
        color: 0x2a2a2c, roughness: 0.95, metalness: 0.0, side: THREE.DoubleSide,
    });
    const compileTunnelI = matTunnelInterior.onBeforeCompile;
    matTunnelInterior.onBeforeCompile = (s, r) => { applyBaseShader(s); if (compileTunnelI) compileTunnelI(s, r); };

    const matTunnelPortal = new THREE.MeshStandardMaterial({
        color: 0x4a4a4e, roughness: 0.88, metalness: 0.0, side: THREE.DoubleSide,
    });
    registerCSMMaterial(matTunnelPortal);
    const compileTunnelP = matTunnelPortal.onBeforeCompile;
    matTunnelPortal.onBeforeCompile = (s, r) => { applyBaseShader(s); if (compileTunnelP) compileTunnelP(s, r); };

    const matTunnelStrip = new THREE.MeshBasicMaterial({
        color: 0xfff4d8, toneMapped: false, fog: true,
    });
    _engine.matTunnelStrip    = matTunnelStrip;
    _engine.matTunnelInterior = matTunnelInterior;
    _engine.matTunnelPortal   = matTunnelPortal;

    const matRailGround = new THREE.MeshStandardMaterial({
        roughness: 1.0, metalness: 0.0,
        transparent: true, side: THREE.FrontSide,
        polygonOffset: true, polygonOffsetFactor: -20, polygonOffsetUnits: -20,
        depthTest: true, depthWrite: true,
    });
    registerCSMMaterial(matRailGround);
    const csmRailG = matRailGround.onBeforeCompile;
    matRailGround.onBeforeCompile = (s, r) => { applyBaseShader(s); csmRailG(s, r); };

    const matRailBridge = new THREE.MeshStandardMaterial({
        color: _engine.currentTheme.rail,
        roughness: 0.8, metalness: 0.4,
        transparent: true, side: THREE.DoubleSide,
    });
    registerCSMMaterial(matRailBridge);
    const csmRailB = matRailBridge.onBeforeCompile;
    matRailBridge.onBeforeCompile = (s, r) => { applyBaseShader(s); csmRailB(s, r); };

    const matSkiRun = new THREE.MeshStandardMaterial({
        roughness: 1.0, metalness: 0.0,
        transparent: true, side: THREE.DoubleSide,
        polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3,
        depthTest: true, depthWrite: true,
    });
    registerCSMMaterial(matSkiRun);
    const csmSkiRun = matSkiRun.onBeforeCompile;
    matSkiRun.onBeforeCompile = (s, r) => { applyBaseShader(s); csmSkiRun(s, r); };

    const matSkiLift = new THREE.MeshStandardMaterial({
        roughness: 1.0, metalness: 0.0, transparent: true, side: THREE.DoubleSide,
    });
    registerCSMMaterial(matSkiLift);
    const csmSkiLift = matSkiLift.onBeforeCompile;
    matSkiLift.onBeforeCompile = (s, r) => { applyBaseShader(s); csmSkiLift(s, r); };

    const matContextFill = new THREE.MeshStandardMaterial({
        transparent: true, side: THREE.DoubleSide, roughness: 0.90, metalness: 0.0,
    });
    registerCSMMaterial(matContextFill);
    const csmCompileCtx = matContextFill.onBeforeCompile;
    matContextFill.onBeforeCompile = (shader, renderer) => { applyContextShader(shader); csmCompileCtx(shader, renderer); };

    const matBuildingFill = new THREE.MeshStandardMaterial({
        transparent: false, side: THREE.DoubleSide, vertexColors: true,
        roughness: 0.88, metalness: 0.4,
        polygonOffset: true, polygonOffsetFactor: 20, polygonOffsetUnits: 20,
    });
    registerCSMMaterial(matBuildingFill);
    const csmCompileBldg = matBuildingFill.onBeforeCompile;
    matBuildingFill.onBeforeCompile = (shader, renderer) => { applyContextShader(shader); csmCompileBldg(shader, renderer); };

    const matContextLine = new LineMaterial({
        color: 0x000000, linewidth: 1.5, transparent: true, alphaToCoverage: true,
    });
    matContextLine.resolution.copy(_initRes);
    matContextLine.userData.isSketchy = { value: 0.0 };
    matContextLine.customProgramCacheKey = () => 'contextLine_sketchy_v1';
    matContextLine.onBeforeCompile = (shader, renderer) => {
        applyContextShaderLine2(shader, renderer);
        shader.uniforms.isSketchy = matContextLine.userData.isSketchy;
        shader.vertexShader = `uniform float isSketchy;\nfloat _hV(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}\n`
            + shader.vertexShader;
        shader.vertexShader = shader.vertexShader.replace(
            '#include <project_vertex>',
            `#include <project_vertex>
            if (isSketchy > 0.5) {
                vec3 _dir = normalize(instanceEnd - instanceStart);
                float _n  = _hV(transformed.xz);
                transformed += _dir * (0.5 + _n);
                transformed.x += (_hV(transformed.xz * 10.0) - 0.5) * 0.2;
                transformed.z += (_hV(transformed.zx * 10.0) - 0.5) * 0.2;
                vec4 _mv = modelViewMatrix * vec4(transformed, 1.0);
                gl_Position = projectionMatrix * _mv;
            }`
        );
        shader.fragmentShader = `uniform float isSketchy;\nfloat _hF(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}\n`
            + shader.fragmentShader;
        shader.fragmentShader = shader.fragmentShader.replace(
            '#include <premultiplied_alpha_fragment>',
            `#include <premultiplied_alpha_fragment>
            if (isSketchy > 0.5) {
                float _noise = _hF(gl_FragCoord.xy * 0.1);
                if (_noise < 0.3) discard;
                gl_FragColor.a *= (0.5 + _noise * 0.5);
            }`
        );
    };
    _engine.materials.matContextLine = matContextLine;

    const matGroundLine = new LineMaterial({
        color: 0x000000, linewidth: 1.0, transparent: true, opacity: 0.4,
        alphaToCoverage: true,
    });
    matGroundLine.resolution.copy(_initRes);
    matGroundLine.customProgramCacheKey = () => 'groundLine_v1';
    matGroundLine.onBeforeCompile = applyContextShaderLine2;

    // ── Building loop ─────────────────────────────────────────────────────────
    const mergeBgFills  = [], mergeBgWires  = [];
    const mergeRoofFill = [], mergeRoofWire = [];
    const mergeDetails  = [];
    const _mats       = { ctxFill: matContextFill, bldgFill: matBuildingFill, ctxLine: matContextLine };
    const FLUSH_EVERY = 500;
    let   _featureCount = 0;

    // Universal Overcoat Assassin — collect building:part centroids
    const partCentroids = [];
    if (bData?.features) {
        for (const f of bData.features) {
            const p = f.properties || {};
            const _isRealPart = v => v && v !== 'no';
            if (!_isRealPart(p['building:part']) && !_isRealPart(p['building_part']) && !_isRealPart(p['part'])) continue;
            if (!f.geometry?.coordinates) continue;
            let coords = null;
            if (f.geometry.type === 'Polygon') coords = f.geometry.coordinates[0];
            else if (f.geometry.type === 'MultiPolygon') coords = f.geometry.coordinates[0][0];
            if (!coords) continue;
            let cx = 0, cy = 0, vp = 0;
            for (const c of coords) {
                if (c && c.length >= 2) { cx += c[0]; cy += c[1]; vp++; }
            }
            if (vp > 0) partCentroids.push({ x: cx / vp, y: cy / vp });
        }
    }

    const isPointInPoly = (pt, poly) => {
        if (!poly || !Array.isArray(poly)) return false;
        let inside = false;
        for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
            if (!poly[i] || !poly[j]) continue;
            const xi = poly[i][0], yi = poly[i][1];
            const xj = poly[j][0], yj = poly[j][1];
            if (((yi > pt.y) !== (yj > pt.y)) && (pt.x < (xj - xi) * (pt.y - yi) / (yj - yi) + xi))
                inside = !inside;
        }
        return inside;
    };

    if (bData?.features) {
        for (const feature of bData.features) {
            if (!feature.geometry) continue;
            const gt = feature.geometry.type;
            if (gt !== 'Polygon' && gt !== 'MultiPolygon') continue;

            const coord = getFirstCoord(feature.geometry);
            if (!coord) continue;
            const p = project(coord[0], coord[1]);
            if (!p.valid) continue;
            let heroDist = Math.hypot(p.x - originProj.x, p.y - originProj.y);
            if (isNaN(heroDist)) heroDist = Infinity;

            const isGhostTarget = (feature === _engine.heroState.feature);
            const featureId     = Math.random();
            const props         = feature.properties || {};
            const _isRealPart   = v => v && v !== 'no';
            const isPart        = _isRealPart(props['building:part']) || _isRealPart(props['building_part']) || _isRealPart(props['part']);

            // Universal Assassin — skip parent envelopes that contain building:part centroids
            if (!isPart && feature.geometry?.coordinates) {
                let coords = null;
                if (gt === 'Polygon') coords = feature.geometry.coordinates[0];
                else if (gt === 'MultiPolygon') coords = feature.geometry.coordinates[0][0];
                if (coords) {
                    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
                    for (const pt of coords) {
                        if (!pt || pt.length < 2) continue;
                        if (pt[0] < minX) minX = pt[0]; if (pt[0] > maxX) maxX = pt[0];
                        if (pt[1] < minY) minY = pt[1]; if (pt[1] > maxY) maxY = pt[1];
                    }
                    let isOvercoat = false;
                    for (const pc of partCentroids) {
                        if (pc.x >= minX && pc.x <= maxX && pc.y >= minY && pc.y <= maxY && isPointInPoly(pc, coords)) {
                            isOvercoat = true; break;
                        }
                    }
                    if (isOvercoat) continue;
                }
            }

            const isBuildingPart = isPart;
            const mm  = (props.man_made  || '').toLowerCase();
            const his = (props.historic  || '').toLowerCase();
            const tou = (props.tourism   || '').toLowerCase();
            const am  = (props.amenity   || '').toLowerCase();
            const bld = (props.building  || '').toLowerCase();
            const pw  = (props.power     || '').toLowerCase();

            let defaultH = 12;
            if (isBuildingPart)                                               defaultH = 15;
            else if (mm === 'campanile')                                       defaultH = 50;
            else if (mm === 'tower' || mm === 'lighthouse')                    defaultH = 35;
            else if (mm === 'chimney' || mm === 'cooling_tower')               defaultH = 40;
            else if (mm === 'water_tower')                                     defaultH = 20;
            else if (mm === 'obelisk')                                         defaultH = 30;
            else if (mm === 'mast' || mm === 'antenna')                        defaultH = 25;
            else if (mm === 'flagpole')                                        defaultH = 15;
            else if (his === 'monument' || his === 'memorial')                 defaultH = 10;
            else if (his === 'fort' || his === 'castle')                       defaultH = 12;
            else if (am  === 'fountain')                                       defaultH =  3;
            else if (am  === 'place_of_worship')                               defaultH = 18;
            else if (bld === 'church' || bld === 'cathedral' ||
                     bld === 'mosque' || bld === 'temple')                    defaultH = 20;
            else if (pw  === 'tower')                                          defaultH = 30;

            const heightVal  = parseFloat(props.height);
            const levelsVal  = parseFloat(props['building:levels']);
            const isCorridorPoly   = props.highway === 'corridor' && (gt === 'Polygon' || gt === 'MultiPolygon');
            const isBuilding       = !!(props.building || props['building:part'] || isCorridorPoly) && !mm && !his && !tou && am !== 'fountain';
            const isUndergroundBldg = props.location === 'underground' || props.tunnel === 'yes' || props.underground === 'yes';

            if (props.tunnel === 'building_passage') continue;
            if (props.amenity === 'parking' && props.parking !== 'multi-storey') continue;
            if (!isBuilding && !mm && !his && !tou && !am && !pw) continue;

            let explicitMinH = parseFloat(props.min_height);
            if (isNaN(explicitMinH) && props.min_floor) explicitMinH = parseFloat(props.min_floor) * 3.5;
            if (isNaN(explicitMinH) && props['building:min_level']) explicitMinH = (parseFloat(props['building:min_level']) - 1) * 4.5;

            const isCatwalk    = props.bridge === 'yes' || isCorridorPoly;
            const isCanopy     = props.building === 'roof' || props.man_made === 'canopy';
            const isCsgCutout  = props.is_csg_cutout === 'yes';
            const hasExplicitMinH = (props.min_height != null && props.min_height !== '') ||
                                    (props.min_floor  != null && props.min_floor  !== '') ||
                                    (props['building:min_level'] != null && props['building:min_level'] !== '');

            if (!isBuildingPart && !isCatwalk && !isCanopy && !isCsgCutout && !hasExplicitMinH) {
                explicitMinH = 0.0;
            }
            if (isNaN(explicitMinH) || explicitMinH <= 0) {
                if (isCatwalk) { const bLayer = parseFloat(props.layer) || 0; explicitMinH = bLayer > 0 ? bLayer * 4.5 : 5.0; }
                else           { explicitMinH = 0.0; }
            }

            let minH = Math.max(0, explicitMinH || 0);
            let h;
            const isElevatedStructure = isBuildingPart || minH > 0 || parseFloat(props.layer) > 0 || parseFloat(props.level) > 1;
            let   depth               = 1.0;
            const roofHeightVal       = parseFloat(props['roof:height']);
            const isRoofPart          = (props['building:part'] || '').toLowerCase() === 'roof' || isCanopy;

            if (isRoofPart) {
                const extH = parseFloat(props.height) || parseFloat(props['roof:height']) || 5.0;
                depth = Math.max(0.5, extH);
                h     = minH + depth;
            } else if (!isNaN(heightVal)) {
                if (heightVal < minH && heightVal > 0) { depth = Math.max(0.5, heightVal); h = minH + depth; }
                else { h = Math.max(minH + 0.5, heightVal); depth = Math.max(0.5, h - minH); }
            } else if (!isNaN(levelsVal)) {
                depth = Math.max(1.0, levelsVal * 4.5); h = minH + depth;
            } else if (!isNaN(roofHeightVal)) {
                depth = Math.max(0.5, roofHeightVal); h = minH + depth;
            } else {
                if (minH > 0) { depth = 4.5; h = minH + depth; }
                else          { h = defaultH; depth = Math.max(1.0, h - minH); }
            }

            if (!isBuildingPart && depth > 3 && minH === 0 && !isCatwalk) depth -= 0.1;
            let finalDepth = depth;
            if (props.is_csg_cutout === 'yes') { finalDepth = 3.5; h = minH + finalDepth; }
            else if (isCatwalk && minH > 0)    { if (finalDepth > 4.5) finalDepth = 3.5; h = minH + finalDepth; }

            const rawRoofShape = props['roof:shape'] || props['roof_shape'] || '';
            const roofShape    = rawRoofShape.toLowerCase();
            let   roofEdgeAngle = 30;
            if (['dome','sphere','round','onion'].includes(roofShape)) roofEdgeAngle = 1;
            else if (roofShape === 'cone') roofEdgeAngle = 15;

            const rings = getRings(feature.geometry);
            let   roofH = Math.min(Math.max(0, parseFloat(props['roof:height']) || 0), finalDepth * 0.5);

            let baseColorHex = getOSMColor(props['building:color'] || props.color, 0xffffff);
            if (!isBuildingPart) {
                const c = new THREE.Color(baseColorHex); c.multiplyScalar(0.95); baseColorHex = c.getHex();
            }
            const bldgColor = baseColorHex;
            const roofColor = getOSMColor(props['roof:color'], bldgColor);
            const levels    = parseInt(props['building:levels']) || 0;

            for (const ring of rings) {
                const shape = buildShape([ring[0]]);
                if (!shape || shape.curves.length === 0) continue;

                let cx = 0, cy = 0;
                const pts = [];
                for (const pt of ring[0]) {
                    const v = project(pt[0], pt[1]);
                    if (v.valid) { cx += v.x; cy += v.y; pts.push(v); }
                }
                if (pts.length === 0) continue;
                cx /= pts.length; cy /= pts.length;

                let baseElev = getElevationAt(cx, -cy);
                if (!isBuildingPart) {
                    // For standalone buildings, minimize across vertex samples so the
                    // building sits on the lowest terrain point (avoids floating on slopes).
                    // Building:parts skip this so all parts of a multi-part structure share
                    // a consistent centroid-based reference — preventing pole/section gaps.
                    const stride = Math.max(1, Math.floor(pts.length / 8));
                    for (let pi = 0; pi < pts.length; pi += stride) {
                        baseElev = Math.min(baseElev, getElevationAt(pts[pi].x, -pts[pi].y));
                    }
                }

                let massiveMinX = Infinity, massiveMaxX = -Infinity, massiveMinZ = Infinity, massiveMaxZ = -Infinity;
                for (const pt of pts) {
                    const z = -pt.y;
                    if (pt.x < massiveMinX) massiveMinX = pt.x; if (pt.x > massiveMaxX) massiveMaxX = pt.x;
                    if (z  < massiveMinZ) massiveMinZ = z;   if (z  > massiveMaxZ) massiveMaxZ = z;
                }
                const isMassive = (massiveMaxX - massiveMinX) > 80 && (massiveMaxZ - massiveMinZ) > 80;

                if (!(isElevatedStructure && minH > 0) && !isMassive) {
                    baseElev = getAdjustedBuildingElevation(cx, -cy, pts, baseElev);
                }
                // Snap ground-level parts to 0.5m terrain increments for visual alignment.
                // Elevated parts (minH > 0) use exact elevation so stacked sections share
                // the same reference and don't produce visible seams.
                if (isBuildingPart && minH === 0) baseElev = Math.round(baseElev * 2) / 2;

                let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
                const polyRing = [];
                for (const pt of pts) {
                    const z3d = -pt.y;
                    polyRing.push({ x: pt.x, z: z3d });
                    if (pt.x < minX) minX = pt.x; if (pt.x > maxX) maxX = pt.x;
                    if (z3d < minZ)  minZ = z3d;  if (z3d > maxZ)  maxZ = z3d;
                }

                const keys = getGridKeys(minX, maxX, minZ, maxZ);

                if (isUndergroundBldg) {
                    const ugLayer  = Math.abs(parseFloat(props.layer) || 1);
                    const depthUG  = ugLayer * 6.0 + 8.0;
                    const yFloor   = baseElev - depthUG;
                    const yCeiling = yFloor + h;
                    injectCavernToGrid(polyRing, yFloor, yCeiling);
                    continue;
                }

                const physicalTop = baseElev + h;
                const bldgData    = { type: 'building', ring: polyRing, yBase: baseElev + minH, yTop: physicalTop };
                for (const k of keys) {
                    if (!SpatialGrid.has(k)) SpatialGrid.set(k, []);
                    SpatialGrid.get(k).push(bldgData);
                }

                const isObstruction = h > 100 || mm === 'mast' || mm === 'tower' || mm === 'wind_turbine' || mm === 'lighthouse' || props.aeroway === 'control_tower';
                if (isObstruction) aviationBeaconPts.push({ x: cx, y: baseElev + h, z: -cy, id: featureId });

                let _a2 = 0;
                for (let _i = 0, _j = pts.length - 1; _i < pts.length; _j = _i++) {
                    _a2 += (pts[_j].x - pts[_i].x) * (pts[_j].y + pts[_i].y);
                }
                if (Math.abs(_a2) * 0.5 > 500000) continue;

                const bldgEdgeAngle   = 55;
                const isShell         = ['shell','freeform','curved'].includes(roofShape);
                const isDome          = ['dome','sphere','round','onion'].includes(roofShape);
                const isBarrel        = ['barrel','vault','arch'].includes(roofShape);
                const isArchShell     = isShell || isDome || isBarrel;
                let   appliedDepth    = finalDepth;
                if (isArchShell) { appliedDepth = 0.1; roofH = Math.max(0.1, h - minH); }

                let rawGeo;
                if (appliedDepth <= 0) rawGeo = new THREE.ShapeGeometry(shape);
                else rawGeo = new THREE.ExtrudeGeometry(shape, { depth: appliedDepth, bevelEnabled: false });
                rawGeo.rotateX(-Math.PI / 2);
                rawGeo.translate(0, baseElev + minH, 0);

                let geo = BufferGeometryUtils.mergeVertices(rawGeo, 1e-4);
                rawGeo.dispose();

                if (!geo.attributes.position || isNaN(geo.attributes.position.array[0])) {
                    geo.dispose(); continue;
                }
                geo.computeBoundingSphere();

                const roofGeo = buildRoofGeometry(pts, isArchShell ? baseElev + minH : baseElev + h, roofShape, roofH);
                applyVertexColors(geo, bldgColor);
                if (roofGeo) applyVertexColors(roofGeo, roofColor);

                if (heroDist > _engine.FG_THRESHOLD && !isGhostTarget) {
                    mergeBgFills.push(geo);
                    mergeBgWires.push(new THREE.EdgesGeometry(geo, bldgEdgeAngle));

                    if (roofGeo) {
                        mergeRoofFill.push(roofGeo);
                        mergeRoofWire.push(new THREE.EdgesGeometry(roofGeo, roofEdgeAngle));
                    } else if (isBuilding && !isBuildingPart && h > 20 && pts.length >= 4) {
                        const acGeo = new THREE.BoxGeometry(2.5, 1.5, 2.5);
                        acGeo.translate(cx, baseElev + h + 0.75, -cy);
                        applyVertexColors(acGeo, roofColor);
                        mergeRoofFill.push(acGeo);
                        mergeRoofWire.push(new THREE.EdgesGeometry(acGeo, 30));
                    }
                    if (isBuilding && h > 15) {
                        const winPts = buildWindowLines(pts, baseElev + h, levels, baseElev + minH);
                        if (winPts.length > 1) mergeDetails.push(new THREE.BufferGeometry().setFromPoints(winPts));
                    }
                } else {
                    const ud = { isGhost: isGhostTarget, px: cx, pz: -cy, featureId, baseY: baseElev };

                    const mesh = new THREE.Mesh(geo, matBuildingFill);
                    mesh.userData = { ...ud };
                    mesh.castShadow = true; mesh.receiveShadow = true;
                    mesh.matrixAutoUpdate = false; mesh.updateMatrix();
                    _engine.groups.bFill.add(mesh);

                    const wireEdges   = new THREE.EdgesGeometry(geo, bldgEdgeAngle);
                    let   wireSource  = wireEdges;
                    if (isBuilding && h > 15) {
                        const winPts = buildWindowLines(pts, baseElev + h, levels, baseElev + minH);
                        if (winPts.length > 1) {
                            const winGeo   = new THREE.BufferGeometry().setFromPoints(winPts);
                            const combined = BufferGeometryUtils.mergeGeometries([wireEdges, winGeo]);
                            winGeo.dispose();
                            if (combined) { wireEdges.dispose(); wireSource = combined; }
                        }
                    }
                    const wire = new LineSegments2(edgesToLineGeo(wireSource), matContextLine);
                    wire.userData = { ...ud }; wire.castShadow = false; wire.receiveShadow = false;
                    wire.matrixAutoUpdate = false; wire.updateMatrix();
                    _engine.groups.bWire.add(wire);

                    if (roofGeo) {
                        const roofMesh = new THREE.Mesh(roofGeo, matBuildingFill);
                        roofMesh.userData = { ...ud }; roofMesh.castShadow = true; roofMesh.receiveShadow = true;
                        roofMesh.matrixAutoUpdate = false; roofMesh.updateMatrix();
                        _engine.groups.roofs.add(roofMesh);
                        const roofWire = new LineSegments2(edgesToLineGeo(new THREE.EdgesGeometry(roofGeo, roofEdgeAngle)), matContextLine);
                        roofWire.userData = { ...ud }; roofWire.castShadow = false; roofWire.receiveShadow = false;
                        roofWire.matrixAutoUpdate = false; roofWire.updateMatrix();
                        _engine.groups.roofs.add(roofWire);
                    } else if (isBuilding && !isBuildingPart && h > 20 && pts.length >= 4) {
                        const acGeo  = new THREE.BoxGeometry(2.5, 1.5, 2.5);
                        applyVertexColors(acGeo, roofColor);
                        const acMesh = new THREE.Mesh(acGeo, matBuildingFill);
                        acMesh.position.set(cx, baseElev + h + 0.75, -cy);
                        acMesh.userData = { ...ud }; acMesh.castShadow = false; acMesh.receiveShadow = true;
                        acMesh.matrixAutoUpdate = false; acMesh.updateMatrix();
                        _engine.groups.roofs.add(acMesh);
                        const acWire = new LineSegments2(edgesToLineGeo(new THREE.EdgesGeometry(acGeo, 30)), matContextLine);
                        acWire.position.set(cx, baseElev + h + 0.75, -cy);
                        acWire.userData = { ...ud }; acWire.castShadow = false; acWire.receiveShadow = false;
                        acWire.matrixAutoUpdate = false; acWire.updateMatrix();
                        _engine.groups.roofs.add(acWire);
                    }
                }
            }

            if (++_featureCount % FLUSH_EVERY === 0) {
                await flushMerge(mergeBgFills, mergeBgWires, mergeRoofFill, mergeRoofWire, mergeDetails, _mats);
            }
        }
        await flushMerge(mergeBgFills, mergeBgWires, mergeRoofFill, mergeRoofWire, mergeDetails, _mats);
    }
    bData = null;

    // Aviation beacons
    if (aviationBeaconPts.length > 0) {
        const canvas = document.createElement('canvas');
        canvas.width = 64; canvas.height = 64;
        const ctx  = canvas.getContext('2d');
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0,   'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.2, 'rgba(255, 50, 50, 1)');
        grad.addColorStop(1,   'rgba(255, 0, 0, 0)');
        ctx.fillStyle = grad; ctx.fillRect(0, 0, 64, 64);
        const flareTex = new THREE.CanvasTexture(canvas);

        _engine.matAviationLight = new THREE.PointsMaterial({
            size: 5, sizeAttenuation: false, map: flareTex,
            transparent: true, opacity: 0.0,
            blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true,
        });

        const positions = new Float32Array(aviationBeaconPts.length * 3);
        aviationBeaconPts.forEach((pt, i) => {
            positions[i * 3] = pt.x; positions[i * 3 + 1] = pt.y + 2.0; positions[i * 3 + 2] = pt.z;
        });
        const beaconGeo = new THREE.BufferGeometry();
        beaconGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const beaconPoints = new THREE.Points(beaconGeo, _engine.matAviationLight);
        beaconPoints.frustumCulled = false;
        _engine.groups.lights.add(beaconPoints);
    }

    // ── Roads ─────────────────────────────────────────────────────────────────
    updateLoader(3, 9, 'Roads & Bridges');
    let sData = await fetchLayer(pfx + 'combined_skeleton.geojson');

    const nodeRegistry = new Map();
    if (sData?.features) {
        for (const feature of sData.features) {
            if (!feature.geometry || !feature.geometry.type.includes('LineString')) continue;
            const props    = feature.properties || {};
            if (!props.highway && !props.railway) continue;
            const fIsBridge = props.bridge === 'yes' || props.bridge === 'aqueduct' || props.bridge === 'viaduct';
            const fIsTunnel = props.tunnel === 'yes';
            const fCoords   = feature.geometry.type === 'LineString'
                ? [feature.geometry.coordinates] : feature.geometry.coordinates;
            for (const path of fCoords) {
                for (const c of path) {
                    if (!c || c.length < 2) continue;
                    const key = getPointKey(c[0], c[1]);
                    if (!nodeRegistry.has(key)) nodeRegistry.set(key, { bridgeCount: 0, groundCount: 0 });
                    const node = nodeRegistry.get(key);
                    if (fIsBridge) node.bridgeCount++;
                    else if (!fIsTunnel) node.groundCount++;
                }
            }
        }
    }

    if (sData?.features) {
        for (const feature of sData.features) {
            if (!feature.geometry || !feature.geometry.type.includes('LineString')) continue;
            const props = feature.properties || {};

            if (props.tunnel === 'yes' || props.tunnel === true || props.tunnel === 'true' || props.tunnel === 'building_passage') continue;

            const isExplicitTunnel  = props.tunnel === 'yes';
            const isUndergroundLoc  = props.location === 'underground' || props.underground === 'yes';
            const isNegativeLayer   = parseFloat(props.layer) < 0 && props.tunnel !== 'building_passage';
            const isTunnel          = isExplicitTunnel || isUndergroundLoc || isNegativeLayer;
            const isBuildingPassage = props.tunnel === 'building_passage';
            const isCovered         = props.covered === 'yes';
            const parsedLayer       = parseFloat(props.layer);
            let   layer             = isNaN(parsedLayer) ? 0 : parsedLayer;
            if (props.highway === 'corridor' && layer === 0) layer = 2;

            const hType        = (props.highway || '').toLowerCase();
            const isPedestrian = hType === 'footway' || hType === 'path' || hType === 'pedestrian' || hType === 'cycleway';
            if (hType === 'corridor') continue;

            const isSurfaceTunnel = isBuildingPassage || isCovered || (isTunnel && layer >= 0) || (layer < 0 && isPedestrian);
            const isBridge        = props.bridge === 'yes' || props.bridge === 'aqueduct' || props.bridge === 'viaduct';
            let   forceIsBridge   = isBridge;
            let   forceIsTunnel   = isTunnel && !isSurfaceTunnel;
            if (forceIsBridge) forceIsTunnel = false;
            if (isSurfaceTunnel && layer <= 0) { forceIsBridge = false; forceIsTunnel = false; }

            const cfg            = getInfraConfig(props);
            const halfW          = cfg.width / 2 + (forceIsBridge ? 0.5 : 0);
            const hasMarkings    = cfg.hasLines;
            const priorityOffset = (hType === 'motorway' || hType === 'trunk') ? 0.6
                : (hType === 'primary' || hType === 'secondary') ? 0.4 : 0.2;

            const coordsArray = feature.geometry.type === 'LineString'
                ? [feature.geometry.coordinates] : feature.geometry.coordinates;

            for (const path of coordsArray) {
                const projPts = [];
                for (const rawPt of path) {
                    if (!rawPt || rawPt.length < 2) continue;
                    const proj = project(rawPt[0], rawPt[1]);
                    if (proj.valid) projPts.push(proj);
                }
                if (projPts.length < 2) continue;

                const isPowerLine = props.power === 'line' || props.power === 'minor_line' || props.power === 'cable';
                if (isPowerLine) {
                    const isMinor     = props.power === 'minor_line';
                    const cableHeight = isMinor ? 8.0 : 15.0;
                    const liftPts     = projPts.map(p => new THREE.Vector3(p.x, getElevationAt(p.x, -p.y) + cableHeight, -p.y));
                    const sampledPts  = [];
                    for (let i = 0; i < liftPts.length - 1; i++) {
                        const p1 = liftPts[i], p2 = liftPts[i + 1];
                        const segs = Math.max(1, Math.ceil(p1.distanceTo(p2) / 10));
                        for (let j = 0; j <= segs; j++) {
                            if (j === segs && i < liftPts.length - 2) continue;
                            const pt = new THREE.Vector3().lerpVectors(p1, p2, j / segs);
                            pt.isBridgeDeck = true; sampledPts.push(pt);
                        }
                    }
                    if (sampledPts.length >= 2) {
                        const ribbon = buildSmoothRibbon(sampledPts, 0.05, false);
                        if (ribbon) { ribbon.computeVertexNormals(); liftCableGeos.push(ribbon); }
                        let distSincePylon = 0;
                        for (let i = 0; i < sampledPts.length - 1; i++) {
                            const p1 = sampledPts[i], p2 = sampledPts[i + 1];
                            distSincePylon += p1.distanceTo(p2);
                            if (distSincePylon >= (isMinor ? 40 : 80)) {
                                distSincePylon = 0;
                                const groundY = getElevationAt(p2.x, p2.z);
                                const pylonH  = p2.y - groundY;
                                if (pylonH > 1) {
                                    const _pdir = new THREE.Vector3().subVectors(p2, p1).normalize();
                                    pushPowerLinePylon(liftPylonGeos, null, p2.x, p2.z, groundY, pylonH, Math.atan2(_pdir.x, _pdir.z));
                                }
                            }
                        }
                    }
                    continue;
                }

                if (forceIsBridge) {
                    const pStart = projPts[0];
                    if (bridgePolyRings.some(ring => pointInRing(pStart.x, -pStart.y, ring))) continue;

                    const startKey  = getPointKey(path[0][0], path[0][1]);
                    const endKey    = getPointKey(path[path.length-1][0], path[path.length-1][1]);
                    const startNode = nodeRegistry.get(startKey) || { bridgeCount: 1, groundCount: 0 };
                    const endNode   = nodeRegistry.get(endKey)   || { bridgeCount: 1, groundCount: 0 };
                    const taperStart = startNode.groundCount > 0 || startNode.bridgeCount <= 1;
                    const taperEnd   = endNode.groundCount   > 0 || endNode.bridgeCount   <= 1;
                    const isFootbridge = hType === 'footway' || hType === 'pedestrian' || hType === 'path';

                    const bridge = buildInfraElevatedRibbon(projPts, {
                        cfg, halfW, layer, taperStart, taperEnd,
                        archBridge: isFootbridge, markings: hasMarkings, priorityOffset,
                    });
                    if (bridge) {
                        const isSidewalkBridge = hType === 'footway' || hType === 'path' || hType === 'pedestrian' || hType === 'cycleway';
                        const target = isSidewalkBridge ? sidewalkBridgeGeos : roadBridgeGeos;
                        if (bridge.deckGeo) target.push(bridge.deckGeo);
                        if (bridge.pierGeo) target.push(bridge.pierGeo);
                    }
                } else if (forceIsTunnel) {
                    continue;
                } else {
                    const isSidewalk = hType === 'footway' || hType === 'path' || hType === 'pedestrian' || hType === 'cycleway' || hType === 'steps';
                    const yOffset    = isSidewalk ? 0.15 : 0.3;
                    const finalPts   = cleanAndResample(projPts, 4.0, (x, z) => getElevationAt(x, z) + yOffset);
                    smoothElevations(finalPts, 3);
                    const geometry = buildSmoothRibbon(finalPts, halfW, hasMarkings);
                    if (geometry) (isSidewalk ? sidewalkGroundGeos : roadGroundGeos).push(geometry);
                }
            }
        }

        if (roadGroundGeos.length > 0)     await safeMassMerge(roadGroundGeos,     matRoadGround,     _engine.groups.roads,        'road',         false);
        if (sidewalkGroundGeos.length > 0)  await safeMassMerge(sidewalkGroundGeos,  matSidewalkGround, _engine.groups.roads,        'sidewalk',     false);
        if (roadBridgeGeos.length > 0)      await safeMassMerge(roadBridgeGeos,      matRoadBridge,     _engine.groups.roads,        'road',         true);
        if (sidewalkBridgeGeos.length > 0)  await safeMassMerge(sidewalkBridgeGeos,  matSidewalkBridge, _engine.groups.roads,        'sidewalk',     true);
        if (roadTunnelGeos.length > 0)      await safeMassMerge(roadTunnelGeos,      matTunnelInterior, _engine.groups.tunnels,      'tunnel',       false);
        if (roadTunnelPortalGeos.length > 0) await safeMassMerge(roadTunnelPortalGeos, matTunnelPortal, _engine.groups.tunnels,      'tunnelPortal', true);
        if (roadTunnelStripGeos.length > 0)  await safeMassMerge(roadTunnelStripGeos,  matTunnelStrip,  _engine.groups.tunnelLights, 'tunnelStrip',  false);
    }

    // ── Railways ──────────────────────────────────────────────────────────────
    updateLoader(4, 9, 'Railways');
    let railData = await fetchLayer(pfx + 'combined_railways.geojson');

    const railNodeRegistry = new Map();
    if (railData?.features) {
        for (const feature of railData.features) {
            if (!feature.geometry || !feature.geometry.type.includes('LineString')) continue;
            const rp = feature.properties || {};
            if (rp.tunnel === 'yes' || rp.tunnel === true || rp.tunnel === 'building_passage') continue;
            const isBridge    = rp.bridge === 'yes' || rp.bridge === 'viaduct' || rp.bridge === 'aqueduct';
            const coordsArray = feature.geometry.type === 'LineString' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
            for (const path of coordsArray) {
                for (const pt of path) {
                    if (!pt || pt.length < 2) continue;
                    const k = getPointKey(pt[0], pt[1]);
                    if (!railNodeRegistry.has(k)) railNodeRegistry.set(k, { bridgeCount: 0, groundCount: 0 });
                    const entry = railNodeRegistry.get(k);
                    if (isBridge) entry.bridgeCount++; else entry.groundCount++;
                }
            }
        }
    }

    if (railData?.features) {
        const railGroundGeos = [], railBridgeGeos = [];

        for (const feature of railData.features) {
            if (!feature.geometry || !feature.geometry.type.includes('LineString')) continue;
            const rProps = feature.properties || {};
            if (rProps.tunnel === 'yes' || rProps.tunnel === true || rProps.tunnel === 'true' || rProps.tunnel === 'building_passage') continue;

            const isExplicitTunnel = rProps.tunnel === 'yes';
            const isUndergroundLoc = rProps.location === 'underground' || rProps.underground === 'yes';
            const isNegativeLayer  = parseFloat(rProps.layer) < 0 && rProps.tunnel !== 'building_passage';
            const isTunnel  = isExplicitTunnel || isUndergroundLoc || isNegativeLayer;
            const isBridge  = rProps.bridge === 'yes';
            const layer     = parseFloat(rProps.layer) || (isBridge ? 1 : isTunnel ? -1 : 0);
            const railPri   = rProps.railway === 'main' ? 0.3 : 0.1;

            const coordsArray = feature.geometry.type === 'LineString' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
            for (const path of coordsArray) {
                const projPts = [];
                for (const pt of path) {
                    if (!pt || pt.length < 2) continue;
                    const proj = project(pt[0], pt[1]);
                    if (proj.valid) projPts.push(proj);
                }
                if (projPts.length < 2) continue;

                if (isBridge) {
                    const startKey  = getPointKey(path[0][0], path[0][1]);
                    const endKey    = getPointKey(path[path.length-1][0], path[path.length-1][1]);
                    const startNode = railNodeRegistry.get(startKey) || { bridgeCount: 0, groundCount: 0 };
                    const endNode   = railNodeRegistry.get(endKey)   || { bridgeCount: 0, groundCount: 0 };
                    const taperStart = startNode.groundCount > 0 || startNode.bridgeCount <= 1;
                    const taperEnd   = endNode.groundCount   > 0 || endNode.bridgeCount   <= 1;

                    const bridge = buildInfraElevatedRibbon(projPts, {
                        cfg: INFRA_CONFIG.railway, halfW: 1.5, layer,
                        taperStart, taperEnd, archBridge: false, markings: false, priorityOffset: railPri,
                    });
                    if (bridge) {
                        if (bridge.deckGeo) railBridgeGeos.push(bridge.deckGeo);
                        if (bridge.pierGeo) railBridgeGeos.push(bridge.pierGeo);
                    }
                } else if (isTunnel) {
                    continue;
                } else {
                    const finalPts = cleanAndResample(projPts, 4.0, (x, z) => getElevationAt(x, z) + 0.25);
                    smoothElevations(finalPts, 2);
                    const ribbon = buildSmoothRibbon(finalPts, 1.5);
                    if (ribbon) railGroundGeos.push(ribbon);
                }
            }
        }
        if (railGroundGeos.length > 0)  await safeMassMerge(railGroundGeos,  matRailGround, _engine.groups.rails, 'rail', false);
        if (railBridgeGeos.length > 0)  await safeMassMerge(railBridgeGeos,  matRailBridge, _engine.groups.rails, 'rail', true);
    }

    // ── Ski infrastructure ────────────────────────────────────────────────────
    updateLoader(5, 9, 'Ski Infrastructure');
    let skiData = await fetchLayer(pfx + 'combined_ski.geojson');
    if (skiData?.features) {
        const skiRunGeos = [], skiRunWires = [];

        for (const feature of skiData.features) {
            if (!feature.geometry) continue;
            const props  = feature.properties || {};
            const isLift = !!props.aerialway;
            const gt     = feature.geometry.type;
            if (!isLift) continue;
            if (gt !== 'LineString' && gt !== 'MultiLineString') continue;

            const coordsArray = gt === 'LineString' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
            for (const path of coordsArray) {
                const projPts = [];
                for (const pt of path) {
                    if (!pt || pt.length < 2) continue;
                    const proj = project(pt[0], pt[1]);
                    if (proj.valid) projPts.push(proj);
                }
                if (projPts.length < 2) continue;

                const liftPts = projPts.map(p => new THREE.Vector3(p.x, getElevationAt(p.x, -p.y) + 15.0, -p.y));
                const sampledPts = [];
                for (let i = 0; i < liftPts.length - 1; i++) {
                    const p1 = liftPts[i], p2 = liftPts[i + 1];
                    const dist = p1.distanceTo(p2);
                    const segs = Math.max(1, Math.ceil(dist / 2));
                    for (let j = 0; j <= segs; j++) {
                        if (j === segs && i < liftPts.length - 2) continue;
                        const pt = new THREE.Vector3().lerpVectors(p1, p2, j / segs);
                        pt.isBridgeDeck = true; sampledPts.push(pt);
                    }
                }
                if (sampledPts.length < 2) continue;

                const ribbon = buildSmoothRibbon(sampledPts, 0.05);
                if (ribbon) { ribbon.computeVertexNormals(); liftCableGeos.push(ribbon); liftCableWires.push(new THREE.EdgesGeometry(ribbon, 30)); }

                let distSincePylon = 0, distSinceChair = 0;
                for (let i = 0; i < sampledPts.length - 1; i++) {
                    const p1  = sampledPts[i], p2 = sampledPts[i + 1];
                    const d   = p1.distanceTo(p2);
                    distSincePylon += d; distSinceChair += d;
                    const dir   = new THREE.Vector3().subVectors(p2, p1).normalize();
                    const angle = Math.atan2(dir.x, dir.z);
                    if (distSincePylon >= 60) {
                        distSincePylon = 0;
                        const groundY = getElevationAt(p2.x, p2.z);
                        const pylonH  = p2.y - groundY;
                        if (pylonH > 1) pushLiftPylon(liftPylonGeos, liftPylonWires, p2.x, p2.z, groundY, pylonH, angle);
                    }
                    if (distSinceChair >= 15) {
                        distSinceChair = 0;
                        if (distSincePylon < 2 || distSincePylon > 58) continue;
                        pushLiftChair(liftPylonGeos, liftPylonWires, p2.x, p2.y, p2.z, angle);
                    }
                }
            }

        }
        if (skiRunGeos.length > 0) {
            await safeMassMerge(skiRunGeos, matSkiRun, _engine.groups.ski, 'skiRun', false);
            await safeMassMergeWires(skiRunWires, matGroundLine, _engine.groups.ski, 'skiRun');
        }
    }

    // Unified lift-hardware merge
    {
        const combinedLifts     = [...liftCableGeos, ...liftPylonGeos];
        const combinedLiftWires = [...liftCableWires, ...liftPylonWires];
        if (combinedLifts.length > 0)     await safeMassMerge(combinedLifts, matSkiLift, _engine.groups.ski, 'skiLift', true);
        if (combinedLiftWires.length > 0) await safeMassMergeWires(combinedLiftWires, matGroundLine, _engine.groups.ski, 'skiLift');
    }

    // ── Terrain textures ──────────────────────────────────────────────────────
    updateLoader(6, 9, 'Terrain Textures');
    let [zData, pData, vData, wData, hData] = await Promise.all([
        fetchLayer(pfx + 'combined_zoning.geojson'),
        fetchLayer(pfx + 'combined_parks.geojson'),
        fetchLayer(pfx + 'combined_veg.geojson'),
        fetchLayer(pfx + 'combined_water.geojson'),
        fetchLayer(pfx + 'combined_hardscape.geojson'),
    ]);

    {
        const r        = _engine.meta.radius || 1000;
        const groundTex = bakeTerrainTexture(zData, pData, vData, wData, skiData, hData, r, _engine.currentTheme);
        matTopoFill.map = groundTex;
        matTopoFill.needsUpdate = true;
    }

    // Build topo mesh from grid
    const _topoGridRef = _engine._topoGrid;
    if (_topoGridRef) {
        const SIZE    = _topoGridRef.size;
        const worldSz = (_engine._topoWorldSize ?? (_engine.meta.radius ?? 1000) * 2);
        const planeGeo = new THREE.PlaneGeometry(worldSz, worldSz, SIZE - 1, SIZE - 1);
        planeGeo.rotateX(-Math.PI / 2);
        const posArr = planeGeo.attributes.position.array;
        for (let j = 0; j < SIZE; j++) {
            for (let i = 0; i < SIZE; i++) {
                posArr[(j * SIZE + i) * 3 + 1] = _topoGridRef.data[j * SIZE + i];
            }
        }
        planeGeo.attributes.position.needsUpdate = true;
        planeGeo.computeVertexNormals();
        const terrainMesh = new THREE.Mesh(planeGeo, plinthClone(matTopoFill));
        terrainMesh.receiveShadow = true;
        terrainMesh.matrixAutoUpdate = false; terrainMesh.updateMatrix();
        _engine.groups.topo.add(terrainMesh);
    }

    // ── Vegetation ────────────────────────────────────────────────────────────
    updateLoader(7, 9, 'Vegetation');
    initVegetation(vData, sData, railData);

    _engine.geoCache.zData   = zData;
    _engine.geoCache.pData   = pData;
    _engine.geoCache.vData   = vData;
    _engine.geoCache.wData   = wData;
    _engine.geoCache.skiData = skiData;
    _engine.geoCache.hData   = hData;
    zData = null; pData = null; vData = null; wData = null; hData = null;

    // ── Micro detail & labels ─────────────────────────────────────────────────
    updateLoader(8, 9, 'Micro Detail & Labels');
    let mData = await fetchLayer(pfx + 'combined_micro.geojson');

    if (mData?.features) {
        const treeFeatures     = [];
        const lampFeatures     = [];
        const nonTreeFeatures  = [];

        for (const f of mData.features) {
            const nat = f.properties?.natural;
            const hw  = f.properties?.highway;
            const gt  = f.geometry?.type;
            if (nat === 'tree' || nat === 'tree_row' || nat === 'shrub') {
                treeFeatures.push(f);
            } else if (hw === 'street_lamp') {
                lampFeatures.push(f);
            } else {
                nonTreeFeatures.push(f);
            }

            const mm = f.properties?.man_made;
            const aw = f.properties?.aeroway;
            if (gt === 'Point' && (mm === 'mast' || mm === 'tower' || mm === 'wind_turbine' || aw === 'navigationaid')) {
                const c    = f.geometry.coordinates;
                const proj = project(c[0], c[1]);
                if (proj.valid) {
                    const fh = parseFloat(f.properties?.height) || 30;
                    const y  = _bridgeAwareY(proj.x, -proj.y);
                    aviationBeaconPts.push({ x: proj.x, y: y + fh, z: -proj.y, id: Math.random() });
                }
            }
        }
        mData.features = nonTreeFeatures;

        function _bridgeAwareY(x, z) {
            const structs = getStructureAt(x, z);
            let bridgeY = -Infinity;
            for (const s of structs) {
                if ((s.type === 'bridge' || s.type === 'bridgePoly') && s.yTop > bridgeY) bridgeY = s.yTop;
            }
            return bridgeY > -Infinity ? bridgeY : getElevationAt(x, z);
        }

        // Explicit OSM trees
        if (_engine.treeMesh && treeFeatures.length > 0) {
            const explicitCoords = [];
            for (const f of treeFeatures) {
                const gt = f.geometry?.type;
                if (gt === 'Point') {
                    explicitCoords.push(f.geometry.coordinates);
                } else if (gt === 'LineString') {
                    const pts = f.geometry.coordinates;
                    for (let i = 0; i < pts.length - 1; i++) {
                        const p1 = project(pts[i][0], pts[i][1]);
                        const p2 = project(pts[i+1][0], pts[i+1][1]);
                        if (!p1.valid || !p2.valid) continue;
                        const dist  = Math.hypot(p2.x - p1.x, p2.y - p1.y);
                        const steps = Math.max(1, Math.floor(dist / 6.0));
                        for (let j = 0; j <= steps; j++) {
                            const t = j / steps;
                            explicitCoords.push([pts[i][0] + (pts[i+1][0] - pts[i][0]) * t, pts[i][1] + (pts[i+1][1] - pts[i][1]) * t]);
                        }
                    }
                }
            }
            if (explicitCoords.length > 0) {
                const expMesh = new THREE.InstancedMesh(_engine.treeMesh.geometry, _engine.treeMesh.material, explicitCoords.length);
                expMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
                expMesh.castShadow = true; expMesh.receiveShadow = true;
                expMesh.userData.colorKey = 'tree'; expMesh.frustumCulled = false;
                const dummy  = new THREE.Object3D();
                const radius = _engine.meta?.radius || 1000;
                let   added  = 0;
                for (const pt of explicitCoords) {
                    const proj = project(pt[0], pt[1]);
                    if (!proj.valid || Math.hypot(proj.x, proj.y) > radius) continue;
                    const y     = _bridgeAwareY(proj.x, -proj.y);
                    const scale = 0.5 + Math.random() * 1.0;
                    dummy.position.set(proj.x, y, -proj.y);
                    dummy.scale.set(scale, scale, scale);
                    dummy.rotation.y = Math.random() * Math.PI * 2;
                    dummy.updateMatrix();
                    expMesh.setMatrixAt(added++, dummy.matrix);
                }
                expMesh.count = added;
                expMesh.instanceMatrix.needsUpdate = true;
                _engine.groups.micro.add(expMesh);
            }
        }

        // Street lamps
        if (lampFeatures.length > 0) {
            const poleGeo = new THREE.CylinderGeometry(0.1, 0.15, 6, 4);
            poleGeo.translate(0, 3, 0);
            applyVertexColors(poleGeo, 0x111111);
            const bulbGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
            bulbGeo.translate(0, 6.0, 0);
            applyVertexColors(bulbGeo, 0xffffff);
            const baseLampGeo = BufferGeometryUtils.mergeGeometries([poleGeo, bulbGeo]);
            poleGeo.dispose(); bulbGeo.dispose();

            const matLamp = new THREE.MeshBasicMaterial({ vertexColors: true });
            matLamp.onBeforeCompile = applyBaseShader;

            const lampMesh = new THREE.InstancedMesh(baseLampGeo, matLamp, lampFeatures.length);
            lampMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);

            const flareCanvas = document.createElement('canvas');
            flareCanvas.width = 64; flareCanvas.height = 64;
            const fCtx  = flareCanvas.getContext('2d');
            const fGrad = fCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
            fGrad.addColorStop(0,   'rgba(255, 255, 255, 1)');
            fGrad.addColorStop(0.3, 'rgba(255, 255, 240, 0.6)');
            fGrad.addColorStop(1,   'rgba(255, 255, 255, 0)');
            fCtx.fillStyle = fGrad; fCtx.fillRect(0, 0, 64, 64);
            const flareTex = new THREE.CanvasTexture(flareCanvas);

            _engine.matLampFlare = new THREE.PointsMaterial({
                size: 4, sizeAttenuation: false, map: flareTex,
                transparent: true, opacity: 0.0,
                blending: THREE.AdditiveBlending, depthWrite: true, depthTest: true,
            });

            const flarePositions = new Float32Array(lampFeatures.length * 3);
            const dummy          = new THREE.Object3D();
            const radius         = _engine.meta?.radius || 1000;
            let   added          = 0;

            for (const f of lampFeatures) {
                const pt   = f.geometry.coordinates;
                const proj = project(pt[0], pt[1]);
                if (!proj.valid || Math.hypot(proj.x, proj.y) > radius) continue;
                const y = _bridgeAwareY(proj.x, -proj.y);
                dummy.position.set(proj.x, y, -proj.y); dummy.updateMatrix();
                lampMesh.setMatrixAt(added, dummy.matrix);
                flarePositions[added * 3]     = proj.x;
                flarePositions[added * 3 + 1] = y + 6.0;
                flarePositions[added * 3 + 2] = -proj.y;
                added++;
            }
            lampMesh.count = added; lampMesh.instanceMatrix.needsUpdate = true;
            _engine.groups.lights.add(lampMesh);

            const flareGeo = new THREE.BufferGeometry();
            flareGeo.setAttribute('position', new THREE.BufferAttribute(flarePositions.slice(0, added * 3), 3));
            const flarePoints = new THREE.Points(flareGeo, _engine.matLampFlare);
            flarePoints.frustumCulled = false;
            _engine.groups.lights.add(flarePoints);
        }

        // Inscription lettering
        const inscriptionFeatures = mData.features.filter(f =>
            f.properties?.inscription && f.properties.inscription !== 'null' &&
            (f.geometry?.type === 'Point' || f.geometry?.type === 'LineString')
        );
        const _inscriptionFont = await _inscriptionFontPromise;
        if (inscriptionFeatures.length > 0 && _inscriptionFont) {
            for (const feature of inscriptionFeatures) {
                const letter = feature.properties.inscription;
                if (feature.geometry.type === 'Point') continue;
                const c        = feature.geometry.coordinates;
                const startPos = project(c[0][0], c[0][1]);
                const endPos   = project(c[c.length-1][0], c[c.length-1][1]);
                if (!startPos.valid || !endPos.valid) continue;
                const spanDist    = Math.hypot(endPos.x - startPos.x, endPos.y - startPos.y);
                const letterHeight = spanDist / letter.length;
                if (letterHeight < 5.0) continue;

                const midCoords = [(c[0][0] + c[c.length-1][0]) / 2, (c[0][1] + c[c.length-1][1]) / 2];
                const pos       = project(midCoords[0], midCoords[1]);
                if (!pos.valid) continue;
                const terrainY = _bridgeAwareY(pos.x, -pos.y);

                const textGeo = new TextGeometry(letter, {
                    font: _inscriptionFont, size: letterHeight, height: 1.2,
                    curveSegments: 24, bevelEnabled: false,
                });
                textGeo.computeBoundingBox();
                const bb = textGeo.boundingBox;
                textGeo.translate(-(bb.max.x - bb.min.x) / 2, 0, 0);

                const mesh = new THREE.Mesh(textGeo, matFill);
                mesh.castShadow = true; mesh.receiveShadow = true;
                mesh.userData.colorKey = 'bFill';
                mesh.position.set(pos.x, terrainY, -pos.y);
                mesh.rotation.y = Math.PI; mesh.scale.x = -1;
                mesh.matrixAutoUpdate = false; mesh.updateMatrix();
                _engine.groups.micro.add(mesh);
            }
        }

        // Micro polygon detail
        function microColorKey(feature) {
            const p = feature.properties || {};
            if (p.natural === 'tree' || p.natural === 'tree_row' || p.natural === 'shrub') return 'forest';
            if (p.natural === 'rock') return 'terrain';
            if (p.barrier === 'hedge') return 'scrub';
            if (p.man_made === 'sign' || p.tourism === 'artwork') return 'furniture';
            return 'road';
        }
        function microDepth(feature) {
            const p = feature.properties || {};
            if (p.height) return parseFloat(p.height);
            if (p.man_made === 'sign' || p.tourism === 'artwork') return 14;
            if (p.barrier) return 1.2;
            return 0;
        }

        const microPolyData = { features: mData.features.filter(f =>
            (f.geometry?.type === 'Polygon' || f.geometry?.type === 'MultiPolygon') &&
            !f.properties?.inscription && !f.properties?.barrier
        )};
        buildPolygonLayer(microPolyData, _engine.groups.micro, 0.1, microDepth, matFill, microColorKey, null, _bridgeAwareY);

        // Micro line ribbons / walls
        const microLineGeos = [];
        for (const feature of mData.features) {
            if (!feature.geometry || feature.properties?.inscription) continue;
            const gt = feature.geometry.type;
            if (gt !== 'LineString' && gt !== 'MultiLineString') continue;
            const coordsArray = gt === 'LineString' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
            for (const path of coordsArray) {
                const projPts = [];
                for (const pt of path) {
                    if (!pt || pt.length < 2) continue;
                    const proj = project(pt[0], pt[1]);
                    if (proj.valid) projPts.push(proj);
                }
                const cleaned = cleanAndResample(projPts, 0.3, (x, z) => _bridgeAwareY(x, z) + 0.2);
                if (cleaned.length < 2) continue;
                const ph = feature.properties || {};
                const fh = parseFloat(ph.height) || ((ph.man_made === 'sign' || ph.tourism === 'artwork') ? 14 : 0);
                const meshGeo = fh > 0 ? buildVerticalWall(cleaned, fh) : buildSmoothRibbon(cleaned, 0.3);
                if (meshGeo) microLineGeos.push(meshGeo);
            }
        }
        if (microLineGeos.length > 0) {
            const merged = BufferGeometryUtils.mergeGeometries(microLineGeos);
            microLineGeos.forEach(g => g.dispose());
            if (merged) {
                const lineMesh = new THREE.Mesh(merged, plinthClone(matFill));
                lineMesh.userData.colorKey = 'road';
                lineMesh.matrixAutoUpdate = false; lineMesh.updateMatrix();
                _engine.groups.micro.add(lineMesh);
            }
        }
    }
    mData = null;

    // Labels
    let lblData = await fetchLayer(pfx + 'combined_labels.geojson');
    _engine.labels = lblData?.features ?? [];
    lblData = null;

    // ── Render order assignment ───────────────────────────────────────────────
    _engine.groups.topo.children.forEach(m =>  { m.renderOrder = -1; m.material.depthWrite = true;  m.material.transparent = false; });
    _engine.groups.zones.children.forEach(m => { m.renderOrder =  0; m.material.depthWrite = true;  m.material.transparent = false; });
    _engine.groups.parks.children.forEach(m => { m.renderOrder =  1; m.material.depthWrite = false; m.material.transparent = true; });
    _engine.groups.veg.children.forEach(m =>   { m.renderOrder =  2; m.material.depthWrite = false; m.material.transparent = true; });
    _engine.groups.water.children.forEach(m => { m.renderOrder =  3; m.material.depthWrite = true;  m.material.transparent = false; });
    _engine.groups.roads.children.forEach(m => { m.renderOrder = m.userData.colorKey === 'sidewalk' ? 3.5 : 4; });
    _engine.groups.rails.children.forEach(m => { m.renderOrder = 4; });
    _engine.groups.ski.children.forEach(m =>   { m.renderOrder = 4; });
    _engine.groups.micro.children.forEach(m => { m.renderOrder = 5; if (m.material) { m.material.depthWrite = true; m.material.transparent = false; } });
    _engine.groups.bFill.children.forEach(m => { m.renderOrder = 6; });
    for (const grp of [_engine.groups.bWire, _engine.groups.roofs, _engine.groups.detail]) {
        grp.children.forEach(m => { m.renderOrder = 7; });
    }
    _engine.groups.lights.children.forEach(m => { m.renderOrder = 10; });

    updateLoader(9, 9, 'Complete');
    _engine.updateStyles?.();
    hideLoader();
}

