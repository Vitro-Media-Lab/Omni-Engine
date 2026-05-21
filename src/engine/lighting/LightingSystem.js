// ============================================================================
// LightingSystem.js — Vitro Omni-Engine V1
// Cascaded Shadow Maps (CSM), Time of Day illumination, atmospheric fog.
// ============================================================================
//
// ARCHITECTURE OVERVIEW
// ---------------------
// Three lighting components drive everything:
//
//   CSM (Cascaded Shadow Maps) — replaces the single DirectionalLight shadow
//                                 camera with 4 cascades that automatically
//                                 partition the view frustum for crisp shadows
//                                 at every distance.
//
//   skyLight  HemisphereLight   — sky dome + ground bounce. Provides soft,
//                                 directionless fill that prevents unlit faces
//                                 from going pitch-black.
//
//   FogExp2   on scene.fog      — exponential density fog whose color tracks
//                                 the sky, letting the city horizon dissolve
//                                 beautifully instead of hard-clipping.
//
// All three are driven by a single `timeOfDay` float (0 – 24).

import * as THREE from 'three';
import { CSM }    from 'three/examples/jsm/csm/CSM.js';

// ============================================================================
// TIME-OF-DAY KEYFRAMES
// ============================================================================
//
// Each keyframe defines the lighting state at a specific hour.
// sampleTOD() bilinearly interpolates between the two surrounding keyframes.
//
// Colour notation: 0xRRGGBB hex integers.
//
// sunI   — CSM light intensity (sun is ~2.0 at solar noon, ~0.05 at night)
// sky    — HemisphereLight sky colour (top half of world)
// ground — HemisphereLight ground colour (bounce light from below)
// skyI   — HemisphereLight intensity
// fog    — FogExp2 colour
// bg     — Scene background colour (sky horizon approximation)

// Intensities tuned for ACES Filmic tone mapping at exposure 0.85.
// Night skyI floor raised to 0.70 so dark-theme materials stay above ACES black-crush.
// Dusk sunI eased at t=19 to spread the drop across 2 hours instead of 1.
const KF = [
    // t      sun         sunI   sky         ground      skyI    fog         bg
    { t:  0, sun:0x4060a0, sunI:0.25, sky:0x203060, ground:0x101830, skyI:0.70, fog:0x102040, bg:0x030710 }, // midnight
    { t:  5, sun:0x5070b0, sunI:0.25, sky:0x283870, ground:0x152040, skyI:0.72, fog:0x152850, bg:0x050b18 }, // pre-dawn
    { t:  6, sun:0xff7030, sunI:0.60, sky:0xff9060, ground:0xe06030, skyI:0.60, fog:0xffb078, bg:0xffb070 }, // dawn
    { t:  7, sun:0xffb060, sunI:1.20, sky:0xffc880, ground:0xe08840, skyI:0.75, fog:0xffd090, bg:0xffc880 }, // golden hour
    { t:  9, sun:0xfff0d0, sunI:1.80, sky:0xb0d0ff, ground:0x8090c0, skyI:0.90, fog:0xc8d8f0, bg:0xb8cce8 }, // morning
    { t: 12, sun:0xfffaf0, sunI:2.50, sky:0xa0c4ff, ground:0x607090, skyI:1.00, fog:0xb8cce4, bg:0xacc0e0 }, // solar noon
    { t: 15, sun:0xffecc0, sunI:2.00, sky:0x90b8f8, ground:0x587088, skyI:0.90, fog:0xb0c8e8, bg:0xa8bcd8 }, // afternoon
    { t: 17, sun:0xff9040, sunI:1.20, sky:0xff8050, ground:0xc04020, skyI:0.70, fog:0xff9060, bg:0xffa060 }, // late golden
    { t: 18, sun:0xff5020, sunI:0.60, sky:0xff4020, ground:0x901030, skyI:0.50, fog:0xd04030, bg:0xe04030 }, // dusk
    { t: 19, sun:0x504080, sunI:0.40, sky:0x302060, ground:0x181030, skyI:0.60, fog:0x201040, bg:0x180d38 }, // twilight
    { t: 21, sun:0x405090, sunI:0.25, sky:0x253060, ground:0x121830, skyI:0.70, fog:0x152040, bg:0x040810 }, // deep night
    { t: 24, sun:0x4060a0, sunI:0.25, sky:0x203060, ground:0x101830, skyI:0.70, fog:0x102040, bg:0x030710 }, // midnight (wrap)
];

// ============================================================================
// STATE
// ============================================================================

export const LightingState = {
    csm:      null,    // CSM instance
    skyLight: null,    // THREE.HemisphereLight
    sceneRef: null,    // THREE.Scene reference for fog + background updates

    timeOfDay: 12.0,

    // Shared uniforms — written from UI, read live in GLSL shaders each frame.
    // Engine.js binds these into every material's onBeforeCompile so mutations
    // here propagate without any shader recompile.
    customUniforms: {
        uShadowStyle: { value: 0   },   // 0: standard  1: rain-hatch  2: stippled dots
        uTime:        { value: 0.0 },   // global shader time for sway / cloud drift
    },
};

// ============================================================================
// INTERPOLATION
// ============================================================================

const _ca = new THREE.Color();
const _cb = new THREE.Color();

function lerpHex(hexA, hexB, t, out) {
    _ca.setHex(hexA);
    _cb.setHex(hexB);
    return out.setRGB(
        _ca.r + (_cb.r - _ca.r) * t,
        _ca.g + (_cb.g - _ca.g) * t,
        _ca.b + (_cb.b - _ca.b) * t,
    );
}

// Pre-allocated result object — avoids GC churn in the 60 Hz setTimeOfDay path.
const _todResult = {
    sunColor:    new THREE.Color(),
    sunI:        0,
    skyColor:    new THREE.Color(),
    groundColor: new THREE.Color(),
    skyI:        0,
    fogColor:    new THREE.Color(),
    bgColor:     new THREE.Color(),
};

function sampleTOD(time) {
    const t = ((time % 24) + 24) % 24;

    let lo = KF[KF.length - 2];
    let hi = KF[KF.length - 1];
    for (let i = 0; i < KF.length - 1; i++) {
        if (t >= KF[i].t && t < KF[i + 1].t) { lo = KF[i]; hi = KF[i + 1]; break; }
    }

    const a = (t - lo.t) / (hi.t - lo.t);
    lerpHex(lo.sun,    hi.sun,    a, _todResult.sunColor);
    lerpHex(lo.sky,    hi.sky,    a, _todResult.skyColor);
    lerpHex(lo.ground, hi.ground, a, _todResult.groundColor);
    lerpHex(lo.fog,    hi.fog,    a, _todResult.fogColor);
    lerpHex(lo.bg,     hi.bg,     a, _todResult.bgColor);
    _todResult.sunI = lo.sunI + (hi.sunI - lo.sunI) * a;
    _todResult.skyI = lo.skyI + (hi.skyI - lo.skyI) * a;
    return _todResult;
}

// ============================================================================
// SUN POSITION MATH
// ============================================================================

const DEG = Math.PI / 180;

// Pre-allocated output vector — reused every frame, never triggers GC.
const _sunDir = new THREE.Vector3();

function sunDirection(timeOfDay) {
    const t     = ((timeOfDay % 24) + 24) % 24;
    const tN    = (t - 6) / 12;            // normalised [0,1] during daytime
    const isDay = (tN >= 0 && tN <= 1);

    let az, el;
    if (isDay) {
        az = tN * Math.PI;
        el = Math.sin(tN * Math.PI) * 80 * DEG;
    } else {
        const tM = ((t - 18 + 24) % 24) / 12;
        az = Math.PI + tM * Math.PI;
        el = Math.sin(tM * Math.PI) * 38 * DEG;
    }

    return _sunDir.set(
        Math.cos(az) * Math.cos(el),
        Math.max(Math.sin(el), 0.12),   // floor at 0.12 prevents extreme grazing-angle shadow acne
        -Math.sin(az) * Math.cos(el) * 0.35,
    ).normalize();
}

// ============================================================================
// INIT
// ============================================================================

/**
 * Call once from EngineClass._initLighting(), after scene and renderer exist.
 *
 * @param {THREE.Scene}         scene
 * @param {THREE.WebGLRenderer} renderer
 * @param {{ radius?: number, lon?: number, lat?: number }} meta
 * @param {THREE.Camera}        camera
 */
export function initLighting(scene, renderer, meta, camera) {
    const radius = meta?.radius ?? 1000;
    LightingState.sceneRef = scene;

    // ── Renderer shadow config ───────────────────────────────────────────────
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type    = THREE.PCFSoftShadowMap;

    // ── Cascaded Shadow Maps ─────────────────────────────────────────────────
    // Custom split distribution keeps high-resolution cascades near the camera
    // (where fine shadow detail matters) and lower-res cascades at distance.
    const csm = new CSM({
        maxFar:       radius * 3,
        cascades:     4,
        mode:         'custom',
        customSplitsCallback: (_cascades, _near, _far, breaks) => {
            breaks[0] = 0.02;
            breaks[1] = 0.08;
            breaks[2] = 0.25;
            breaks[3] = 1.0;
        },
        parent:           scene,
        shadowMapSize:    4096,
        lightDirection:   new THREE.Vector3(-1, -1, -1).normalize(),
        camera,
        lightMargin:      750,    // extends shadow camera AABB to catch tall buildings
        lightFar:         20000,
        lightIntensity:   2.0,
    });

    for (const light of csm.lights) {
        light.shadow.bias       = -0.0002;
        light.shadow.normalBias =  0.01;   // eliminates terrain shadow acne
        // Disable per-frame auto-rebuild. Shadow maps are huge (8K × 4 cascades);
        // rebuilding them every frame even when the light hasn't moved is the
        // primary cause of dropped frames. needsUpdate is set explicitly in
        // setTimeOfDay() instead, throttled to 10fps from Engine._animate.
        light.shadow.autoUpdate  = false;
        light.shadow.needsUpdate = true;   // force the initial render
    }

    csm.fade = true;
    LightingState.csm = csm;

    // ── HemisphereLight (sky dome + ground bounce) ───────────────────────────
    const sky = new THREE.HemisphereLight(0xa0c4ff, 0x607090, 0.35);
    sky.name = 'vitro_sky';
    scene.add(sky);
    LightingState.skyLight = sky;

    // Apply noon as the boot state (Engine._animate will immediately advance
    // this to the actual stored time on the first frame via setTimeOfDay()).
    setTimeOfDay(LightingState.timeOfDay);
}

// ============================================================================
// SET TIME OF DAY
// ============================================================================

/**
 * Update all lights and fog from a single time value.
 * Called by Engine every frame in auto/irl mode, and once per manual slider move.
 *
 * @param {number} time  0.0 – 24.0
 */
export function setTimeOfDay(time) {
    LightingState.timeOfDay = time;

    const { csm, skyLight, sceneRef } = LightingState;
    if (!csm || !skyLight) return;

    const tod    = sampleTOD(time);
    const sunDir = sunDirection(time);

    // CSM expects lightDirection as the direction the light *travels* (toward
    // the ground), so we negate the "toward the sun" unit vector.
    csm.lightDirection.copy(sunDir).negate();

    for (const light of csm.lights) {
        light.color.copy(tod.sunColor);
        light.intensity = tod.sunI;
        light.shadow.needsUpdate = true;   // light direction changed — rebuild map
    }

    skyLight.color.copy(tod.skyColor);
    skyLight.groundColor.copy(tod.groundColor);
    skyLight.intensity = tod.skyI;

    if (sceneRef?.fog) {
        sceneRef.fog.color.copy(tod.fogColor);
    }

    // Only update background when we are not in the underground transition.
    // Engine._updateUndergroundState() lerps toward _UG_BG_COLOR and will
    // overwrite this immediately if factor > 0, so the skybox colour still
    // serves as the "return to surface" target.
    if (sceneRef?.background?.isColor) {
        sceneRef.background.copy(tod.bgColor);
    }
}

// ============================================================================
// CSM UPDATE  (call every frame from Engine._animate, after camera matrix update)
// ============================================================================

/**
 * Advance CSM cascade splits to track the current camera frustum.
 * The camera argument is accepted for API symmetry with Engine.js but CSM
 * already holds a reference from initLighting(); it is not used here.
 *
 * @param {THREE.Camera} [_camera]  unused — kept for forward-compatibility
 */
export function updateCSM(_camera) {
    if (LightingState.csm) LightingState.csm.update();
}

// ============================================================================
// CSM MATERIAL REGISTRATION & CUSTOM SHADER INJECTION
// ============================================================================

/**
 * Register a material with CSM and inject the shared shadow-style + time
 * uniforms so they are live-updated every frame without a shader recompile.
 *
 * IMPORTANT: Call this BEFORE chaining any additional onBeforeCompile
 * overrides on the material — CSM must be the first in the chain.
 *
 * @param {THREE.Material} material
 */
export function registerCSMMaterial(material) {
    if (!LightingState.csm) {
        console.warn('[LightingSystem] registerCSMMaterial called before initLighting().');
        return;
    }

    LightingState.csm.setupMaterial(material);

    const prevOnBeforeCompile = material.onBeforeCompile;

    material.onBeforeCompile = (shader, renderer) => {
        if (prevOnBeforeCompile) prevOnBeforeCompile(shader, renderer);

        // Bind shared uniforms by reference — one object, zero overhead per frame.
        shader.uniforms.uShadowStyle = LightingState.customUniforms.uShadowStyle;
        shader.uniforms.uTime        = LightingState.customUniforms.uTime;

        // ── Vertex stage ───────────────────────────────────────────────────
        shader.vertexShader = `
            varying vec3 vSketchWorldPos;
            varying vec3 vSketchNormal;
            uniform float uTime;
        ` + shader.vertexShader;

        shader.vertexShader = shader.vertexShader.replace(
            '#include <worldpos_vertex>',
            `#include <worldpos_vertex>
             vSketchWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
             vSketchNormal   = normalize((modelMatrix * vec4(normal, 0.0)).xyz);`
        );

        // ── Fragment stage ─────────────────────────────────────────────────
        shader.fragmentShader = `
            uniform int   uShadowStyle;
            uniform float uTime;
            varying vec3  vSketchWorldPos;
            varying vec3  vSketchNormal;
        ` + shader.fragmentShader;

        // Inject helper functions and open main() together to avoid duplicate
        // function definitions across merged geometry chunks.
        shader.fragmentShader = shader.fragmentShader.replace(
            'void main() {',
            `
            float hash(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }

            float getRandomHatch(vec2 uv, float shadow, int style) {
                float densityScale = 15.0;
                float lengthScale  =  8.0;
                uv *= densityScale;

                if (style == 1) {
                    // Rain hatch — random diagonal dashes
                    vec2  diagUV      = vec2(uv.x + uv.y, uv.x - uv.y) * 0.707;
                    float lineId      = floor(diagUV.x);
                    float along       = diagUV.y;
                    float randLen     = hash(vec2(lineId, 1.0)) * 0.5 + 0.5;
                    float actualLen   = lengthScale * randLen;
                    float segId       = floor(along / actualLen);
                    float inkChance   = hash(vec2(lineId, segId));
                    float isInk       = step(inkChance, shadow);
                    float linePos     = fract(diagUV.x);
                    float isLine      = step(0.4, linePos) - step(0.6, linePos);
                    return isLine * isInk;
                }
                if (style == 2) {
                    // Stippled dots — randomly jittered circles
                    vec2  cell    = floor(uv);
                    vec2  local   = fract(uv) - 0.5;
                    vec2  offset  = vec2(hash(cell), hash(cell + 100.0)) * 0.7 - 0.35;
                    float dist    = length(local - offset);
                    float chance  = hash(cell + 200.0);
                    float isInk   = step(chance, shadow);
                    float dotSh   = 1.0 - step(0.25, dist);
                    return isInk * dotSh;
                }
                return 0.0;
            }

            void main() {
            `
        );

        // ── Triplanar shadow-style overlay (post tone-mapping) ─────────────
        shader.fragmentShader = shader.fragmentShader.replace(
            '#include <tonemapping_fragment>',
            `#include <tonemapping_fragment>

             if (uShadowStyle > 0) {
                 float lumaOut  = dot(gl_FragColor.rgb,  vec3(0.299, 0.587, 0.114));
                 float lumaBase = dot(diffuseColor.rgb,  vec3(0.299, 0.587, 0.114));
                 float ratio    = lumaOut / max(lumaBase, 0.001);

                 // Shadow intensity: 0 in full light, 1 in pitch black
                 float shadow   = smoothstep(0.65, 0.1, ratio);

                 if (shadow > 0.0) {
                     vec3 n     = abs(normalize(vSketchNormal));
                     vec3 blend = n * n * n * n;
                     blend     /= dot(blend, vec3(1.0));

                     vec3  wp  = vSketchWorldPos;
                     float hX  = getRandomHatch(wp.yz, shadow, uShadowStyle);
                     float hY  = getRandomHatch(wp.xz, shadow, uShadowStyle);
                     float hZ  = getRandomHatch(wp.xy, shadow, uShadowStyle);
                     float ink = hX * blend.x + hY * blend.y + hZ * blend.z;

                     if (ink > 0.0) {
                         gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.08, 0.08, 0.10), 0.95);
                     }
                 }
             }
            `
        );
    };

    material.needsUpdate = true;
}
