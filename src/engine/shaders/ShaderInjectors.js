// ============================================================================
// ShaderInjectors.js — GLSL injection helpers for city materials
// ============================================================================

import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { registerCSMMaterial }  from '../lighting/LightingSystem.js';

let _engine = null;
export function setEngine(e) { _engine = e; }

// ── Park mask GLSL snippets ───────────────────────────────────────────────────
export const _PARK_MASK_FRAG_UNIFORMS =
    `uniform sampler2D uParkMask;\nuniform vec4 uMaskBounds;\nuniform float uParkModeActive;\n`;

export const _PARK_MASK_FRAG_BODY =
    `\n         if (uParkModeActive > 0.5) {\n             vec2 _maskUV = (vCustomWorldPos.xz - uMaskBounds.xy) / (uMaskBounds.zw - uMaskBounds.xy);\n             if (_maskUV.x < 0.0 || _maskUV.x > 1.0 || _maskUV.y < 0.0 || _maskUV.y > 1.0) discard;\n             if (texture2D(uParkMask, _maskUV).r < 0.5) discard;\n         }`;

function _bindParkMaskUniforms(shader) {
    shader.uniforms.uParkMask       = _engine.uniforms.uParkMask;
    shader.uniforms.uMaskBounds     = _engine.uniforms.uMaskBounds;
    shader.uniforms.uParkModeActive = _engine.uniforms.uParkModeActive;
}

// ── Lane line shader ──────────────────────────────────────────────────────────
export function applyLaneLineShader(shader) {
    shader.vertexShader = `attribute vec2 roadUV;\nattribute float roadED;\nvarying vec2 vRoadUV;\nvarying float vRoadED;\n${shader.vertexShader}`.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>\n    vRoadUV = roadUV;\n    vRoadED = roadED;`
    );
    shader.fragmentShader = `varying vec2 vRoadUV;\nvarying float vRoadED;\n${shader.fragmentShader}`.replace(
        '#include <map_fragment>',
        `#include <map_fragment>
        {
            float dashCycle = fract(vRoadUV.y);
            float isDash = step(0.0, dashCycle) * (1.0 - step(0.5, dashCycle));
            float lineAlpha = smoothstep(0.06, 0.03, abs(vRoadUV.x - 0.5));
            lineAlpha *= step(3.0, vRoadED);
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), lineAlpha * isDash);
        }`
    );
}

// ── Base fill shader (plinth clip + park mask) ────────────────────────────────
export function applyBaseShader(shader) {
    shader.uniforms.uPlinthRadius = _engine.uniforms.uPlinthRadius;
    shader.uniforms.uCenter       = _engine.uniforms.uCenter;
    _bindParkMaskUniforms(shader);
    shader.vertexShader = `varying vec3 vCustomWorldPos;\n${shader.vertexShader}`.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>\n         vCustomWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;`
    );
    shader.fragmentShader = (
        `uniform float uPlinthRadius;\nuniform vec2 uCenter;\n` +
        _PARK_MASK_FRAG_UNIFORMS +
        `varying vec3 vCustomWorldPos;\n${shader.fragmentShader}`
    ).replace(
        '#include <alphatest_fragment>',
        `#include <alphatest_fragment>\n         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;` + _PARK_MASK_FRAG_BODY
    );
}

// ── Context shader (adds isolation fade) ─────────────────────────────────────
export function applyContextShader(shader) {
    shader.uniforms.uPlinthRadius   = _engine.uniforms.uPlinthRadius;
    shader.uniforms.uCenter         = _engine.uniforms.uCenter;
    shader.uniforms.uIsolation      = _engine.uniforms.uIsolation;
    shader.uniforms.uIsolationAlpha = _engine.uniforms.uIsolationAlpha;
    _bindParkMaskUniforms(shader);
    shader.vertexShader = `varying vec3 vCustomWorldPos;\n${shader.vertexShader}`.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>\n         vCustomWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;`
    );
    shader.fragmentShader = (
        `uniform float uPlinthRadius;\nuniform vec2 uCenter;\nuniform float uIsolation;\nuniform float uIsolationAlpha;\n` +
        _PARK_MASK_FRAG_UNIFORMS +
        `varying vec3 vCustomWorldPos;\n${shader.fragmentShader}`
    ).replace(
        '#include <alphatest_fragment>',
        `#include <alphatest_fragment>\n         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;` + _PARK_MASK_FRAG_BODY
    );
}

// ── Line2 base (plinth clip for LineSegments2) ────────────────────────────────
export function applyBaseShaderLine2(shader) {
    shader.uniforms.uPlinthRadius = _engine.uniforms.uPlinthRadius;
    shader.uniforms.uCenter       = _engine.uniforms.uCenter;
    _bindParkMaskUniforms(shader);
    shader.vertexShader = `varying vec3 vCustomWorldPos;\n${shader.vertexShader}`.replace(
        /vec4 end\s*=\s*modelViewMatrix\s*\*\s*vec4\(\s*instanceEnd\s*,\s*1\.0\s*\)\s*;/,
        `$&\n         vec3 _wS = (modelMatrix * vec4(instanceStart, 1.0)).xyz;\n         vec3 _wE = (modelMatrix * vec4(instanceEnd,   1.0)).xyz;\n         vCustomWorldPos = (position.y < 0.5) ? _wS : _wE;`
    );
    shader.fragmentShader = (
        `uniform float uPlinthRadius;\nuniform vec2 uCenter;\n` +
        _PARK_MASK_FRAG_UNIFORMS +
        `varying vec3 vCustomWorldPos;\n${shader.fragmentShader}`
    ).replace(
        'void main() {',
        `void main() {\n         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;` + _PARK_MASK_FRAG_BODY
    );
}

// ── Line2 context (adds isolation) ───────────────────────────────────────────
export function applyContextShaderLine2(shader) {
    shader.uniforms.uPlinthRadius   = _engine.uniforms.uPlinthRadius;
    shader.uniforms.uCenter         = _engine.uniforms.uCenter;
    shader.uniforms.uIsolation      = _engine.uniforms.uIsolation;
    shader.uniforms.uIsolationAlpha = _engine.uniforms.uIsolationAlpha;
    _bindParkMaskUniforms(shader);
    shader.vertexShader = `varying vec3 vCustomWorldPos;\n${shader.vertexShader}`.replace(
        /vec4 end\s*=\s*modelViewMatrix\s*\*\s*vec4\(\s*instanceEnd\s*,\s*1\.0\s*\)\s*;/,
        `$&\n         vec3 _wS = (modelMatrix * vec4(instanceStart, 1.0)).xyz;\n         vec3 _wE = (modelMatrix * vec4(instanceEnd,   1.0)).xyz;\n         vCustomWorldPos = (position.y < 0.5) ? _wS : _wE;`
    );
    shader.fragmentShader = (
        `uniform float uPlinthRadius;\nuniform vec2 uCenter;\nuniform float uIsolation;\nuniform float uIsolationAlpha;\n` +
        _PARK_MASK_FRAG_UNIFORMS +
        `varying vec3 vCustomWorldPos;\n${shader.fragmentShader}`
    ).replace(
        'void main() {',
        `void main() {\n         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;` + _PARK_MASK_FRAG_BODY
    );
}

// ── Instanced mesh shader (vegetation, lamps) ─────────────────────────────────
export function applyInstancedBaseShader(shader) {
    shader.uniforms.uPlinthRadius = _engine.uniforms.uPlinthRadius;
    shader.uniforms.uCenter       = _engine.uniforms.uCenter;
    _bindParkMaskUniforms(shader);
    shader.vertexShader = `varying vec3 vCustomWorldPos;\n${shader.vertexShader}`.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>\n
        #ifdef USE_INSTANCING
            vCustomWorldPos = (modelMatrix * instanceMatrix * vec4(position, 1.0)).xyz;
        #else
            vCustomWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        #endif`
    );
    shader.fragmentShader = (
        `uniform float uPlinthRadius;\nuniform vec2 uCenter;\n` +
        _PARK_MASK_FRAG_UNIFORMS +
        `varying vec3 vCustomWorldPos;\n${shader.fragmentShader}`
    ).replace(
        '#include <alphatest_fragment>',
        `#include <alphatest_fragment>\n         if (length(vec2(vCustomWorldPos.x - uCenter.x, vCustomWorldPos.z - uCenter.y)) > uPlinthRadius) discard;` + _PARK_MASK_FRAG_BODY
    );
}

// ── Utilities ─────────────────────────────────────────────────────────────────
export function isWireObject(c) {
    return !!(c.isLineSegments || c.isLine || c.isLineSegments2 || c.material?.isLineMaterial);
}

export function setMatProp(c, prop, val) {
    const m = c.material;
    if (Array.isArray(m)) m.forEach(mt => { mt[prop] = val; });
    else if (m) m[prop] = val;
}

export function edgesToLineGeo(bufGeo) {
    const geo = new LineSegmentsGeometry();
    geo.setPositions(bufGeo.attributes.position.array);
    bufGeo.dispose();
    return geo;
}

export function plinthClone(mat) {
    const c = mat.clone();
    registerCSMMaterial(c);
    c.onBeforeCompile = mat.onBeforeCompile;
    return c;
}
