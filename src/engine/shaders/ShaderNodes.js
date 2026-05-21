// ============================================================================
// ShaderNodes.js — TSL / WebGPU equivalents of ShaderInjectors.js
// ============================================================================
//
// This module mirrors every shader injector in ShaderInjectors.js but uses
// Three.js Shading Language (TSL) and MeshStandardNodeMaterial instead of
// onBeforeCompile GLSL injection.  It is the prerequisite for swapping
// WebGLRenderer → WebGPURenderer.
//
// USAGE PATTERN
// ─────────────
//   WebGL path (current):  builders call applyBaseShader(shader) inside
//                          material.onBeforeCompile
//   WebGPU path (new):     builders call applyBaseNode(mat) on a
//                          MeshStandardNodeMaterial after construction
//
// Both paths read from the same _engine.uniforms object; this module keeps a
// parallel set of TSL uniform nodes whose .value references are kept in sync
// via syncNodes(), called once per frame from Engine._animate().
//
// CSM SHADOW NOTE
// ───────────────
// CSM.setupMaterial() patches onBeforeCompile — incompatible with node materials
// in WebGPU mode.  For the WebGPU renderer path, standard Three.js shadow maps
// on a single DirectionalLight are used instead.  CSM remains active on the
// WebGL path.
//
// LINE MATERIALS
// ──────────────
// LineMaterial (LineSegments2) has no TSL / WebGPU equivalent in r167.
// For WebGPU, native THREE.LineSegments + LineBasicNodeMaterial are used.
// The outline-style "Fast" mode (THREE.LineSegments twins) is therefore the
// WebGPU-native path for wireframe geometry.
// ============================================================================

import * as THREE from 'three';
import {
    positionWorld,
    uniform,
    texture,
    Fn,
    If,
    discard,
    float,
    vec2,
    attribute,
    uv,
    fract,
    step,
    smoothstep,
    mix,
    abs,
    normalWorld,
} from 'three/tsl';
import {
    MeshStandardNodeMaterial,
    MeshBasicNodeMaterial,
    LineBasicNodeMaterial,
} from 'three/webgpu';

let _engine = null;
export function setEngine(e) { _engine = e; }

// ============================================================================
// SHARED UNIFORM NODES
// ============================================================================
// Parallel to engine.uniforms but as live TSL nodes.  syncNodes() keeps them
// up to date each frame.

export const uPlinthRadius   = uniform(2000.0);
export const uCenter         = uniform(new THREE.Vector2(0, 0));
export const uIsolation      = uniform(0.0);
export const uIsolationAlpha = uniform(0.25);
export const uTime           = uniform(0.0);
export const uParkModeActive = uniform(0.0);
export const uParkMask       = uniform(null);   // Texture2D node written below
export const uMaskBounds     = uniform(new THREE.Vector4());

// Sync TSL node values from engine.uniforms.
// Call once per frame from Engine._animate, after uniforms are updated.
export function syncNodes() {
    if (!_engine?.uniforms) return;
    const u = _engine.uniforms;
    uPlinthRadius.value = u.uPlinthRadius.value;
    uCenter.value.copy(u.uCenter.value);
    uIsolation.value      = u.uIsolation.value;
    uIsolationAlpha.value = u.uIsolationAlpha.value;
    uTime.value           = u.uTime.value;
    uParkModeActive.value = u.uParkModeActive.value;
    uMaskBounds.value.copy(u.uMaskBounds.value);
    // Park mask texture: update reference only when it changes (avoids GC churn)
    if (u.uParkMask.value && uParkMask.value !== u.uParkMask.value) {
        uParkMask.value = u.uParkMask.value;
    }
}

// ============================================================================
// CLIP NODES  (reusable building blocks)
// ============================================================================

// Discards the fragment if it lies outside the circular plinth centred on
// uCenter with radius uPlinthRadius.  Equivalent to the GLSL:
//   if (length(vec2(pos.x - uCenter.x, pos.z - uCenter.y)) > uPlinthRadius) discard;
const _plinthClip = Fn(() => {
    const dx   = positionWorld.x.sub(uCenter.x);
    const dz   = positionWorld.z.sub(uCenter.y);
    const dist = vec2(dx, dz).length();
    If(dist.greaterThan(uPlinthRadius), () => { discard(); });
});

// Discards the fragment if it falls outside the current park polygon mask, when
// park mode is active.  Equivalent to _PARK_MASK_FRAG_BODY.
const _parkMaskClip = Fn(() => {
    If(uParkModeActive.greaterThan(float(0.5)), () => {
        // Project world XZ into [0,1] mask UV space
        const boundsSize = uMaskBounds.zw.sub(uMaskBounds.xy);
        const maskUV_x   = positionWorld.x.sub(uMaskBounds.x).div(boundsSize.x);
        const maskUV_y   = positionWorld.z.sub(uMaskBounds.y).div(boundsSize.y);

        // Outside bounding rect → discard
        If(
            maskUV_x.lessThan(float(0.0))
                .or(maskUV_x.greaterThan(float(1.0)))
                .or(maskUV_y.lessThan(float(0.0)))
                .or(maskUV_y.greaterThan(float(1.0))),
            () => { discard(); },
        );

        // Red channel < 0.5 → outside park polygon → discard
        If(
            texture(uParkMask, vec2(maskUV_x, maskUV_y)).r.lessThan(float(0.5)),
            () => { discard(); },
        );
    });
});

// Combined clip used by all fill / context materials
const _combinedClip = Fn(() => {
    _plinthClip();
    _parkMaskClip();
});

// ============================================================================
// NODE MATERIAL FACTORIES
// ============================================================================
// These are the TSL counterparts of the onBeforeCompile injectors.
// Each function mutates a MeshStandardNodeMaterial (passed in or created here)
// and returns it, mirroring the injector API.

// ── applyBaseNode — equivalent of applyBaseShader ─────────────────────────────
// Plinth clip + park mask.  Used for foreground city fill geometry.
export function applyBaseNode(mat) {
    mat.positionNode = Fn(() => {
        _combinedClip();
        return positionWorld;   // pass-through; clip already applied
    })();
    return mat;
}

// ── applyContextNode — equivalent of applyContextShader ──────────────────────
// Plinth clip + park mask.  (Isolation alpha is handled by CullingSystem via
// material.opacity, matching the existing CPU-side approach.)
export function applyContextNode(mat) {
    return applyBaseNode(mat);
}

// ── applyInstancedBaseNode — equivalent of applyInstancedBaseShader ───────────
// Same clip, but positionWorld already accounts for instanceMatrix in WebGPU
// because the renderer applies it in the vertex pipeline automatically.
export function applyInstancedBaseNode(mat) {
    return applyBaseNode(mat);
}

// ============================================================================
// LANE LINE NODE  (equivalent of applyLaneLineShader)
// ============================================================================
// The original shader reads roadUV / roadED custom attributes.
// TSL can access these via attribute().

const roadUV = attribute('roadUV', 'vec2');
const roadED = attribute('roadED', 'float');

const _laneLineMix = Fn(() => {
    const dashCycle = fract(roadUV.y);
    const isDash    = step(float(0.0), dashCycle).mul(float(1.0).sub(step(float(0.5), dashCycle)));
    const lineAlpha = smoothstep(float(0.06), float(0.03), abs(roadUV.x.sub(float(0.5))));
    const masked    = lineAlpha.mul(step(float(3.0), roadED));
    return masked.mul(isDash);
});

// Apply to a road fill MeshStandardNodeMaterial.
// The mix toward white is applied in colorNode.
export function applyLaneLineNode(mat, baseColorNode) {
    mat.colorNode = Fn(() => {
        const laneStrength = _laneLineMix();
        return mix(baseColorNode, float(1.0), laneStrength);
    })();
    return mat;
}

// ============================================================================
// NODE MATERIAL CONSTRUCTORS
// ============================================================================
// Convenience constructors that return a pre-configured node material with
// clip already applied, matching the builder idiom in CityPipeline / builders.

export function makeBaseFillNodeMat(params = {}) {
    const mat = new MeshStandardNodeMaterial({
        metalness: 0,
        roughness: 0.85,
        ...params,
    });
    applyBaseNode(mat);
    return mat;
}

export function makeContextFillNodeMat(params = {}) {
    const mat = new MeshStandardNodeMaterial({
        metalness:   0,
        roughness:   0.85,
        transparent: true,
        ...params,
    });
    applyContextNode(mat);
    return mat;
}

export function makeInstancedFillNodeMat(params = {}) {
    const mat = new MeshStandardNodeMaterial({
        metalness: 0,
        roughness: 0.85,
        ...params,
    });
    applyInstancedBaseNode(mat);
    return mat;
}

// Native line material (LineBasicNodeMaterial) — WebGPU-compatible replacement
// for LineMaterial.  Used with THREE.LineSegments twins created by _buildNativeTwin().
export function makeLineNodeMat(params = {}) {
    return new LineBasicNodeMaterial({ ...params });
}

// ============================================================================
// RENDERER DETECTION HELPER
// ============================================================================
// Lets builders branch between the GLSL (onBeforeCompile) path and the TSL
// (node material) path without importing the renderer directly.

export function isWebGPURenderer(renderer) {
    return renderer?.isWebGPURenderer === true;
}
