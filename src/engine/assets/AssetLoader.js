// ============================================================================
// AssetLoader.js — GLB hero-model loading and asset transforms
// ============================================================================

import * as THREE          from 'three';
import { GLTFLoader }      from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader }     from 'three/examples/jsm/loaders/DRACOLoader.js';
import { LineMaterial }    from 'three/examples/jsm/lines/LineMaterial.js';
import { LineSegments2 }   from 'three/examples/jsm/lines/LineSegments2.js';
import {
    applyBaseShader,
    applyBaseShaderLine2,
    edgesToLineGeo,
} from '../shaders/ShaderInjectors.js';
import { registerCSMMaterial } from '../lighting/LightingSystem.js';
import { project, getElevationAt } from '../world/GeoMath.js';

let _engine = null;
export function setEngine(e) { _engine = e; }

// ── Helpers ───────────────────────────────────────────────────────────────────

function _makeLoader() {
    const loader = new GLTFLoader();
    const draco  = new DRACOLoader();
    draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.1/');
    loader.setDRACOLoader(draco);
    return loader;
}

function _disposeGroup(group) {
    while (group.children.length) {
        const child = group.children[0];
        child.geometry?.dispose();
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        for (const m of mats) m?.dispose();
        group.remove(child);
    }
}

// ── Core pipeline ─────────────────────────────────────────────────────────────

/**
 * Normalise a loaded GLTF scene into a fill + wire group pair, store under
 * assetId in _engine.loadedAssets, and add both groups to the scene.
 *
 * Scale is normalised to 0→1 (1 / sizeY) so the UI height slider works
 * in meaningful "building height" metres regardless of source file units.
 * Position origin is the upper-half centroid so the model sits on the ground
 * rather than floating at its geometry centre.
 */
export function processGLB(modelScene, assetId) {
    if (!_engine) return;
    modelScene.updateMatrixWorld(true);

    const globalBox = new THREE.Box3();
    const meshes    = [];

    modelScene.traverse(child => {
        if (!child.isMesh) return;
        const geom = child.geometry.clone();
        geom.applyMatrix4(child.matrixWorld);
        geom.computeBoundingBox();
        globalBox.union(geom.boundingBox);
        meshes.push(geom);
    });
    if (meshes.length === 0) return;

    const sizeY = globalBox.max.y - globalBox.min.y;
    if (isNaN(sizeY) || sizeY === 0) return;

    // Upper-half centroid — gives a more accurate "building centre" than the
    // global box centre, which is pulled down by foundations and basements.
    const thresholdY    = globalBox.min.y + sizeY * 0.5;
    const upperBox      = new THREE.Box3();
    let   validUpperPts = false;

    for (const mesh of meshes) {
        const pos = mesh.attributes.position;
        if (!pos) continue;
        for (let i = 0; i < pos.count; i++) {
            const vY = pos.getY(i);
            if (vY > thresholdY && !isNaN(vY)) {
                const vX = pos.getX(i), vZ = pos.getZ(i);
                if (!isNaN(vX) && !isNaN(vZ)) {
                    upperBox.expandByPoint(new THREE.Vector3(vX, vY, vZ));
                    validUpperPts = true;
                }
            }
        }
    }

    const trueCenter = new THREE.Vector3();
    if (validUpperPts && upperBox.min.x !== Infinity) upperBox.getCenter(trueCenter);
    else globalBox.getCenter(trueCenter);
    if (isNaN(trueCenter.x) || isNaN(trueCenter.y) || isNaN(trueCenter.z)) trueCenter.set(0, 0, 0);

    const normalizeScale = sizeY > 0 ? 1.0 / sizeY : 1.0;
    const fillGroup = new THREE.Group();
    const wireGroup = new THREE.Group();

    const _heroRes = new THREE.Vector2();
    _engine.renderer.getSize(_heroRes);

    for (const geom of meshes) {
        geom.translate(-trueCenter.x, -globalBox.min.y, -trueCenter.z);
        geom.scale(normalizeScale, normalizeScale, normalizeScale);

        const fillMat = new THREE.MeshStandardMaterial({
            color:              _engine.currentTheme.bFill,
            transparent:        true,
            roughness:          0.8,
            metalness:          0.1,
            clippingPlanes:     [_engine.heroClipPlane],
            polygonOffset:      true,
            polygonOffsetFactor: 8,
            polygonOffsetUnits:  8,
        });

        registerCSMMaterial(fillMat);
        const csmCompile = fillMat.onBeforeCompile;
        fillMat.onBeforeCompile = (shader, renderer) => {
            applyBaseShader(shader);
            csmCompile(shader, renderer);
        };

        const wireMat = new LineMaterial({
            color:           _engine.currentTheme.ink,
            linewidth:       2.0,
            transparent:     true,
            clippingPlanes:  [_engine.heroClipPlane],
            clipping:        true,
            alphaToCoverage: true,
        });
        wireMat.resolution.copy(_heroRes);
        wireMat.onBeforeCompile = applyBaseShaderLine2;

        const fillMesh = new THREE.Mesh(geom, fillMat);
        fillMesh.castShadow    = true;
        fillMesh.receiveShadow = true;

        fillGroup.add(fillMesh);
        wireGroup.add(new LineSegments2(edgesToLineGeo(new THREE.EdgesGeometry(geom, 85)), wireMat));
    }

    _engine.groups.heroFill.add(fillGroup);
    _engine.groups.heroWire.add(wireGroup);

    const initH = (assetId === 'hero_default' && _engine.heroState.found)
        ? _engine.heroState.h
        : 100;

    _engine.loadedAssets[assetId] = {
        fill: fillGroup,
        wire: wireGroup,
        h:    initH,
        rot:  0,
        y:   -3.5,
        x:    0,
        z:    0,
    };

    applyAssetTransforms(assetId);
    console.log('[AssetLoader] Loaded asset:', assetId);
}

export function applyAssetTransforms(assetId) {
    if (!_engine) return;
    const ast = _engine.loadedAssets[assetId];
    if (!ast) return;

    ast.fill.scale.set(ast.h, ast.h, ast.h);
    ast.wire.scale.set(ast.h, ast.h, ast.h);

    const rad = ast.rot * (Math.PI / 180);
    ast.fill.rotation.y = rad;
    ast.wire.rotation.y = rad;

    const origin  = project(_engine.meta.lon, _engine.meta.lat);
    const wX      = origin.x + ast.x;
    const wZ      = -origin.y - ast.z;
    const groundY = getElevationAt(wX, wZ);

    ast.fill.position.set(wX, groundY + ast.y, wZ);
    ast.wire.position.set(wX, groundY + ast.y, wZ);

    _engine.updateStyles?.();
}

export function loadInitialHeroAsset() {
    if (!_engine) return;
    const assetPath = './' + (_engine.meta?.data_path || '') + 'hero_model.glb?v=' + Date.now();
    _makeLoader().load(
        assetPath,
        gltf => processGLB(gltf.scene, 'hero_default'),
        undefined,
        err  => console.error('[AssetLoader] Hero GLB failed:', assetPath, err)
    );
}

export function loadGLBFromBuffer(buffer, assetId) {
    if (!_engine) return;
    _disposeGroup(_engine.groups.heroFill);
    _disposeGroup(_engine.groups.heroWire);
    _makeLoader().parse(
        buffer, '',
        gltf => processGLB(gltf.scene, assetId),
        err  => console.error('[AssetLoader] Buffer parse failed:', err)
    );
}
