// ============================================================================
// CullingSystem.js — Per-call visibility, opacity, and style update
// ============================================================================
// updateStyles() is the V1 equivalent of the monolith's updateStyles().
// It is called after any visual setting changes: theme switch, slider move,
// hero toggle, park mode toggle, zoom change, or terrain re-bake.
//
// Key V1 differences vs the monolith:
//   • Reads Zustand store instead of DOM elements for all UI state
//   • DOM paper-texture overlay and header-box styling belong to React (App.jsx)
//   • Scene background is set by Engine._applyTheme — not duplicated here
//   • setEngine() wires _engine.updateStyles = updateStyles so any module
//     can call it without importing this file directly
// ============================================================================

import * as THREE from 'three';
import useEngineStore from '../../store/useEngineStore.js';
import { isWireObject } from '../shaders/ShaderInjectors.js';
import {
    findEnclosingPark,
    buildParkMask,
    clearParkMask,
    getParkMaskFeature,
    getParkMaskAABB,
    passesParkAABB,
} from './ParkSystem.js';
import { bakeTerrainTexture } from '../builders/TerrainBaker.js';
import { project } from './GeoMath.js';

let _engine = null;

export function setEngine(e) {
    _engine = e;
    // Wire the updateStyles reference onto the engine instance so all modules
    // that hold _engine can call _engine.updateStyles?.() without a direct import.
    e.updateStyles = updateStyles;
}

// ── Theme rebake guard ────────────────────────────────────────────────────────
let _lastBakedTheme = null;

// ── CPU-side plinth culling ───────────────────────────────────────────────────

function _isInsidePlinth(mesh, plinthX, plinthZ, plinthR) {
    if (mesh.isInstancedMesh) return true;

    if (mesh.userData.px !== undefined && mesh.userData.pz !== undefined) {
        const dx = mesh.userData.px - plinthX;
        const dz = mesh.userData.pz - plinthZ;
        return Math.hypot(dx, dz) <= (plinthR + 100);
    }

    if (!mesh.geometry) return true;
    if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
    const box = mesh.geometry.boundingBox;
    if (!box || box.isEmpty()) return true;

    const closestX = Math.max(box.min.x, Math.min(plinthX, box.max.x));
    const closestZ = Math.max(box.min.z, Math.min(plinthZ, box.max.z));
    return Math.hypot(closestX - plinthX, closestZ - plinthZ) <= (plinthR + 100);
}

// ── Focus tracking ────────────────────────────────────────────────────────────

export function updateFocusPoint(isHeroOn) {
    if (!_engine) return;

    if (isHeroOn) {
        const origin = project(_engine.meta.lon, _engine.meta.lat);
        _engine.focusPoint.x =  origin.x;
        _engine.focusPoint.z = -origin.y;
    } else {
        let bestDist    = Infinity;
        let closestMesh = null;
        for (const child of _engine.groups.bFill.children) {
            if (child.userData.px === undefined || child.userData.pz === undefined) continue;
            const d = Math.hypot(
                child.userData.px - _engine.center.x,
                child.userData.pz - _engine.center.z,
            );
            if (d < bestDist) { bestDist = d; closestMesh = child; }
        }
        _engine.focusFeatureId = closestMesh ? closestMesh.userData.featureId : null;
        // Plinth centre follows orbit target (not the nearest building centroid)
        // to prevent abrupt plinth jitter as the user pans.
        _engine.focusPoint.x = _engine.center.x;
        _engine.focusPoint.z = _engine.center.z;
    }

    _engine.uniforms.uCenter.value.set(_engine.focusPoint.x, _engine.focusPoint.z);
}

// ── Main style update ─────────────────────────────────────────────────────────

export function updateStyles() {
    if (!_engine?.scene || !_engine.renderer) return;

    const store = useEngineStore.getState();
    const isHeroOn         = store.heroEngineActive;
    const isParkMode       = store.parkModeActive;
    const isSubjectIsolate = store.isolationActive;
    const bOp              = store.buildingOpacity;
    const wOp              = store.wireOpacity;
    const sOp              = store.streetOpacity;
    const lWt              = store.lineWeight;
    const themeName        = store.themeName;
    const outlineStyle     = store.outlineStyle ?? 'lineMat';

    updateFocusPoint(isHeroOn);

    // ── Hero AABB for building occlusion ──────────────────────────────────────
    let heroAABB = null;
    if (isHeroOn && _engine.groups.heroFill.children.length > 0) {
        heroAABB = new THREE.Box3().setFromObject(_engine.groups.heroFill);
        heroAABB.expandByScalar(5);
    }

    // ── Park mode: rebuild render-target mask when enclosing feature changes ──
    if (isParkMode) {
        const match = findEnclosingPark(_engine.center.x, _engine.center.z);
        if (match) {
            if (match.feature !== getParkMaskFeature()) buildParkMask(match.feature);
        } else {
            clearParkMask();
        }
    } else {
        clearParkMask();
    }
    const parkAABB = (isParkMode && getParkMaskAABB()) ? getParkMaskAABB() : null;

    // ── Derived display values ────────────────────────────────────────────────
    const zoom        = _engine.camera?.zoom ?? 1;
    // Perspective camera always has zoom=1 — don't attenuate. Only reduce
    // wireframe opacity in orthographic mode where zoom encodes display scale.
    const wireOp      = _engine.camera?.isOrthographicCamera
        ? Math.min(1.0, Math.max(0.3, zoom * 0.6))
        : 1.0;
    const isBlueprint = (themeName === 'blueprint');
    const killLines   = (lWt === 0);
    const lineOp      = isBlueprint
        ? Math.min(1.0, wireOp * lWt * 1.5)
        : Math.min(1.0, wireOp * lWt);

    const _rendSize = new THREE.Vector2();
    _engine.renderer.getSize(_rendSize);

    const plinthX = _engine.uniforms.uCenter.value.x;
    const plinthZ = _engine.uniforms.uCenter.value.y;
    const plinthR = _engine.uniforms.uPlinthRadius.value;

    const insidePlinth = (mesh) => _isInsidePlinth(mesh, plinthX, plinthZ, plinthR);
    const passesPark   = (mesh) => passesParkAABB(mesh, parkAABB);

    // ── Background building + wire + roof + detail groups ─────────────────────
    for (const grp of [
        _engine.groups.bFill,
        _engine.groups.bWire,
        _engine.groups.roofs,
        _engine.groups.detail,
    ]) {
        for (const child of grp.children) {
            // ── Native twin ───────────────────────────────────────────────────
            // Twins are added into bWire by _applyOutlineStyle. Manage their
            // visibility here so updateStyles never re-enables the wrong pair.
            if (child.userData.isNativeTwin) {
                const show = outlineStyle === 'native'
                    && !killLines
                    && insidePlinth(child)
                    && passesPark(child);
                child.visible = show;
                if (show) {
                    child.material.color.setHex(_engine.currentTheme.ink);
                    child.material.opacity     = lineOp;
                    child.material.transparent = lineOp < 1.0;
                }
                continue;
            }

            if (!insidePlinth(child)) { child.visible = false; continue; }
            if (!passesPark(child))   { child.visible = false; continue; }

            const isWire = isWireObject(child);
            if (isWire && killLines)     { child.visible = false; continue; }
            if (child.userData.isGhost)  { child.visible = false; continue; }

            // ── In 'native' mode, hide the Line2 that has a twin ─────────────
            if (outlineStyle === 'native' && child.userData.nativeTwin) {
                child.visible = false;
                continue;
            }

            if (isHeroOn && heroAABB && child.userData.px !== undefined) {
                const pt = new THREE.Vector3(child.userData.px, child.userData.baseY || 0, child.userData.pz);
                if (heroAABB.containsPoint(pt)) { child.visible = false; continue; }
            }

            child.visible = true;

            let baseOp = isWire ? lineOp : bOp;

            // Subject isolation: clone material so the shared instance stays unaffected
            if (isSubjectIsolate) {
                const dx = (child.userData.px ?? Infinity) - _engine.focusPoint.x;
                const dz = (child.userData.pz ?? Infinity) - _engine.focusPoint.z;
                const isSubject = isHeroOn ? false : (Math.hypot(dx, dz) < 1.0);
                if (!isSubject) {
                    baseOp *= _engine.uniforms.uIsolationAlpha.value;
                    if (child.userData.isolatedMat) {
                        child.material = child.userData.sharedMat;
                        child.userData.isolatedMat.dispose();
                        child.userData.isolatedMat = null;
                        child.userData.sharedMat   = null;
                    }
                } else {
                    if (!child.userData.isolatedMat) {
                        child.userData.sharedMat   = child.material;
                        child.userData.isolatedMat = child.material.clone();
                    }
                    child.material = child.userData.isolatedMat;
                }
            } else {
                if (child.userData.isolatedMat) {
                    child.material = child.userData.sharedMat;
                    child.userData.isolatedMat.dispose();
                    child.userData.isolatedMat = null;
                    child.userData.sharedMat   = null;
                }
            }

            child.material.opacity     = baseOp;
            child.material.transparent = baseOp < 1.0;
            child.material.depthWrite  = !isWire;
            child.material.color.setHex(isWire
                ? _engine.currentTheme.ink
                : _engine.currentTheme.bFill);

            if (isWire && child.material.isLineMaterial) {
                child.material.linewidth = lWt * 1.5;
                child.material.resolution.copy(_rendSize);
                child.material.blending  = isBlueprint ? THREE.AdditiveBlending : THREE.NormalBlending;
                if (isBlueprint) child.material.depthWrite = false;
            }
        }
    }

    // ── Hero fill / wire groups ───────────────────────────────────────────────
    _engine.groups.heroFill.visible = isHeroOn;
    _engine.groups.heroWire.visible = isHeroOn;

    for (const assetGroup of _engine.groups.heroFill.children) {
        if (!assetGroup.isGroup) continue;
        for (const mesh of assetGroup.children) {
            if (!mesh.isMesh) continue;
            mesh.material.opacity = bOp;
            mesh.material.color.setHex(_engine.currentTheme.bFill);
        }
    }
    for (const assetGroup of _engine.groups.heroWire.children) {
        if (!assetGroup.isGroup) continue;
        for (const mesh of assetGroup.children) {
            if (!isWireObject(mesh)) continue;
            mesh.material.color.setHex(_engine.currentTheme.ink);
            mesh.material.opacity = Math.min(1.0, 0.45 * lWt);
            if (mesh.material.isLineMaterial) {
                mesh.material.linewidth = lWt * 1.5;
                mesh.material.resolution.copy(_rendSize);
                mesh.material.blending  = isBlueprint ? THREE.AdditiveBlending : THREE.NormalBlending;
                if (isBlueprint) mesh.material.depthWrite = false;
            }
        }
    }

    // ── Roads ─────────────────────────────────────────────────────────────────
    for (const mesh of _engine.groups.roads.children) {
        mesh.visible = insidePlinth(mesh) && passesPark(mesh);
        if (!mesh.visible) continue;
        const isWire = isWireObject(mesh);
        if (isWire && killLines) { mesh.visible = false; continue; }
        if (isWire) {
            mesh.material.color.setHex(_engine.currentTheme.ink);
            mesh.material.opacity = Math.min(1.0, 0.3 * lWt);
            if (mesh.material.isLineMaterial) {
                mesh.material.linewidth = Math.max(1.0, lWt * 1.0);
                mesh.material.resolution.copy(_rendSize);
            }
        } else {
            const rKey = mesh.userData.colorKey ?? 'road';
            mesh.material.color.setHex(_engine.currentTheme[rKey] ?? _engine.currentTheme.road);
            mesh.material.opacity     = sOp;
            mesh.material.transparent = sOp < 1.0;
            mesh.material.depthWrite  = true;
        }
    }

    // ── Rails ─────────────────────────────────────────────────────────────────
    for (const mesh of _engine.groups.rails.children) {
        mesh.visible = insidePlinth(mesh) && passesPark(mesh);
        if (!mesh.visible) continue;
        const isWire = isWireObject(mesh);
        if (isWire && killLines) { mesh.visible = false; continue; }
        if (isWire) {
            mesh.material.color.setHex(_engine.currentTheme.ink);
            mesh.material.opacity = Math.min(1.0, 0.3 * lWt);
            if (mesh.material.isLineMaterial) {
                mesh.material.linewidth = Math.max(1.0, lWt * 1.0);
                mesh.material.resolution.copy(_rendSize);
            }
        } else {
            mesh.material.color.setHex(_engine.currentTheme.rail);
            mesh.material.opacity     = sOp;
            mesh.material.transparent = sOp < 1.0;
            mesh.material.depthWrite  = true;
        }
    }

    // ── Ski runs ──────────────────────────────────────────────────────────────
    for (const mesh of _engine.groups.ski.children) {
        mesh.visible = insidePlinth(mesh) && passesPark(mesh);
        if (!mesh.visible) continue;
        const isWire = isWireObject(mesh);
        if (isWire && killLines) { mesh.visible = false; continue; }
        if (isWire) {
            mesh.material.color.setHex(_engine.currentTheme.ink);
            mesh.material.opacity = Math.min(1.0, 0.3 * lWt);
            if (mesh.material.isLineMaterial) {
                mesh.material.linewidth = Math.max(1.0, lWt * 1.0);
                mesh.material.resolution.copy(_rendSize);
            }
        } else {
            const key = mesh.userData.colorKey;
            mesh.material.color.setHex(_engine.currentTheme[key] ?? 0xffffff);
            mesh.material.opacity     = sOp;
            mesh.material.transparent = sOp < 1.0;
            mesh.material.depthWrite  = true;
        }
    }

    // ── Lights (lamps, aviation beacons, flares) ─────────────────────────────
    // lampMesh is an InstancedMesh with applyBaseShader — GPU handles per-instance
    // plinth clipping; CPU check always returns true for InstancedMesh.
    // beaconPoints / flarePoints use PointsMaterial (no city shader), so CPU
    // bounding-box check is the only plinth guard for those objects.
    if (_engine.groups.lights) {
        for (const child of _engine.groups.lights.children) {
            child.visible = insidePlinth(child);
        }
    }

    // ── Water ─────────────────────────────────────────────────────────────────
    for (const mesh of _engine.groups.water.children) {
        mesh.visible = insidePlinth(mesh) && passesPark(mesh);
        if (!mesh.visible) continue;
        const isWire = isWireObject(mesh);
        if (isWire && killLines) { mesh.visible = false; continue; }
        if (isWire) {
            mesh.material.color.setHex(_engine.currentTheme.ink);
            mesh.material.opacity = Math.min(1.0, 0.3 * lWt);
            if (mesh.material.isLineMaterial) {
                mesh.material.linewidth = Math.max(1.0, lWt * 1.0);
                mesh.material.resolution.copy(_rendSize);
            }
        } else {
            if (!mesh.isMesh) continue;
            mesh.material.color.setHex(_engine.currentTheme.water);
            mesh.material.opacity     = wOp;
            mesh.material.transparent = wOp < 1.0;
            mesh.material.depthWrite  = wOp >= 1.0;
        }
    }

    // ── Zoning ────────────────────────────────────────────────────────────────
    for (const mesh of _engine.groups.zones.children) {
        mesh.visible = insidePlinth(mesh) && passesPark(mesh);
        if (!mesh.visible) continue;
        const isWire = isWireObject(mesh);
        if (isWire && killLines) { mesh.visible = false; continue; }
        if (isWire) {
            mesh.material.color.setHex(_engine.currentTheme.ink);
            mesh.material.opacity = Math.min(1.0, 0.3 * lWt);
            if (mesh.material.isLineMaterial) {
                mesh.material.linewidth = Math.max(1.0, lWt * 1.0);
                mesh.material.resolution.copy(_rendSize);
            }
        } else {
            if (!mesh.isMesh) continue;
            const zKey = mesh.userData.colorKey ?? 'institutional';
            mesh.material.color.setHex(_engine.currentTheme[zKey] ?? _engine.currentTheme.institutional);
            mesh.material.opacity     = 0.30;
            mesh.material.transparent = true;
            mesh.material.depthWrite  = false;
        }
    }

    // ── Vegetation ────────────────────────────────────────────────────────────
    for (const mesh of _engine.groups.veg.children) {
        mesh.visible = insidePlinth(mesh) && passesPark(mesh);
        if (!mesh.visible) continue;
        const isWire = isWireObject(mesh);
        if (isWire && killLines) { mesh.visible = false; continue; }
        if (isWire) {
            mesh.material.color.setHex(_engine.currentTheme.ink);
            mesh.material.opacity = Math.min(1.0, 0.3 * lWt);
            if (mesh.material.isLineMaterial) {
                mesh.material.linewidth = Math.max(1.0, lWt * 1.0);
                mesh.material.resolution.copy(_rendSize);
            }
        } else {
            if (!mesh.isMesh) continue;
            const vKey = mesh.userData.colorKey ?? 'veg';
            mesh.material.color.setHex(_engine.currentTheme[vKey] ?? _engine.currentTheme.veg);
            mesh.material.opacity     = 1.0;
            mesh.material.transparent = false;
            mesh.material.depthWrite  = true;
        }
    }

    // ── Parks ─────────────────────────────────────────────────────────────────
    for (const mesh of _engine.groups.parks.children) {
        mesh.visible = insidePlinth(mesh) && passesPark(mesh);
        if (!mesh.visible) continue;
        const isWire = isWireObject(mesh);
        if (isWire && killLines) { mesh.visible = false; continue; }
        if (isWire) {
            mesh.material.color.setHex(_engine.currentTheme.ink);
            mesh.material.opacity = Math.min(1.0, 0.3 * lWt);
            if (mesh.material.isLineMaterial) {
                mesh.material.linewidth = Math.max(1.0, lWt * 1.0);
                mesh.material.resolution.copy(_rendSize);
            }
        } else {
            if (!mesh.isMesh) continue;
            const pKey = mesh.userData.colorKey ?? 'park';
            mesh.material.color.setHex(_engine.currentTheme[pKey] ?? _engine.currentTheme.park);
            mesh.material.opacity     = 1.0;
            mesh.material.transparent = false;
            mesh.material.depthWrite  = true;
        }
    }

    // ── Micro detail ──────────────────────────────────────────────────────────
    for (const mesh of _engine.groups.micro.children) {
        mesh.visible = insidePlinth(mesh) && passesPark(mesh);
        if (!mesh.visible) continue;
        const isWire = isWireObject(mesh);
        if (isWire && killLines) { mesh.visible = false; continue; }
        if (mesh.material?.vertexColors) {
            mesh.material.color.setHex(0xffffff);
        } else {
            const mKey = mesh.userData.colorKey ?? 'road';
            mesh.material.color.setHex(_engine.currentTheme[mKey] ?? _engine.currentTheme.road);
        }
        mesh.material.opacity     = 1.0;
        mesh.material.transparent = false;
        mesh.material.depthWrite  = true;
    }

    // ── Terrain ───────────────────────────────────────────────────────────────
    for (const mesh of _engine.groups.topo.children) {
        if (!mesh.isMesh && !mesh.isLineSegments) continue;
        mesh.renderOrder = -1;
        if (mesh.material) {
            mesh.material.polygonOffset       = true;
            mesh.material.polygonOffsetFactor = 1;
            mesh.material.polygonOffsetUnits  = 1;
            mesh.material.depthTest           = true;
        }
        if (mesh.isMesh) {
            mesh.material.color.setHex(_engine.currentTheme.topo);
            mesh.material.opacity     = 1.0;
            mesh.material.transparent = false;
            mesh.material.depthWrite  = true;
        }
    }

    // ── Terrain texture rebake on theme change ────────────────────────────────
    if (_engine.meta && _engine.geoCache.zData && themeName !== _lastBakedTheme) {
        _lastBakedTheme = themeName;
        const { zData, pData, vData, wData, skiData, hData } = _engine.geoCache;
        const r      = _engine.meta.radius || 1000;
        const newTex = bakeTerrainTexture(
            zData, pData, vData, wData, skiData, hData, r, _engine.currentTheme,
        );
        for (const mesh of _engine.groups.topo.children) {
            if (!mesh.isMesh) continue;
            if (mesh.material.map) mesh.material.map.dispose();
            mesh.material.map         = newTex;
            mesh.material.needsUpdate = true;
        }
    }
}
