// ============================================================================
// Engine.js — Vitro Omni-Engine V1 Core Orchestrator
// ============================================================================
//
// This class is the single owner of the Three.js context. It is instantiated
// once inside CanvasContainer.jsx's useEffect, attaches to a <canvas> ref,
// and subscribes to the Zustand store so React UI changes flow into the
// imperative Three.js world without any reconciler overhead.
//
// WebGL vs WebGPU decision:
//   Our shaders use custom GLSL injected via onBeforeCompile (lane-line
//   dashes, plinth clip discard, park-mask texture, portal holes). These are
//   WebGL-only GLSL patches and cannot compile in WebGPU's TSL/WGSL pipeline.
//   WebGPU is therefore deferred until shaders are ported to Node Materials.
//   We use WebGLRenderer unconditionally to preserve every visual effect.
// ============================================================================

import * as THREE          from 'three';
import { OrbitControls }   from 'three/examples/jsm/controls/OrbitControls.js';
import Stats               from 'three/examples/jsm/libs/stats.module.js';
import {
    initLighting,
    updateCSM,
    setTimeOfDay,
    LightingState,
} from './lighting/LightingSystem.js';
import useEngineStore, { CANVAS_PRESETS } from '../store/useEngineStore';

// Module setEngine wiring — each module stores _engine via this pattern
import { PlayerState, PlayerConfig, updatePlayerPhysics } from './physics/PlayerPhysics.js';
import { setEngine as _setGeoMath, getElevationAt } from './world/GeoMath.js';
import { setEngine as _setSpatialGrid, getStructureAt } from './world/SpatialGrid.js';
import { setEngine as _setShaderInject }  from './shaders/ShaderInjectors.js';
import { setEngine as _setChunkMerge }    from './builders/ChunkMerge.js';
import { setEngine as _setVegetation }    from './builders/VegetationBuilder.js';
import { setEngine as _setTerrainBaker }  from './builders/TerrainBaker.js';
import { setEngine as _setCityPipeline, loadAllLayers } from './world/CityPipeline.js';
import { setEngine as _setAssetLoader }  from './assets/AssetLoader.js';
import { setEngine as _setParkSystem }   from './world/ParkSystem.js';
import { setEngine as _setCulling }      from './world/CullingSystem.js';
import { setEngine as _setExportUtils }  from './export/ExportUtils.js';

// Target scene.background colour when the player is fully underground.
const _UG_BG_COLOR = new THREE.Color(0x050508);

// Live preview renderer resolution cap. The canvas renders at this size during
// interaction; exports temporarily switch to the full preset dimensions.
const PREVIEW_MAX = 1280;
function _previewDims(preset) {
    const scale = Math.min(1, PREVIEW_MAX / Math.max(preset.w, preset.h));
    return { w: Math.round(preset.w * scale), h: Math.round(preset.h * scale) };
}

// ============================================================================
// EngineClass
// ============================================================================

export class EngineClass {

    constructor(canvas, meta = null) {
        this.canvas = canvas;
        this.meta   = meta;

        // rAF handle — stored so shutdown() can cancel it cleanly
        this._rafId        = null;
        this._boundAnimate = this._animate.bind(this);

        // Zustand unsubscribe handles collected here for cleanup
        this._storeUnsubs = [];

        // Resize observer on the canvas element
        this._resizeObserver = null;

        // Shadow dirty flag — shadows only re-render when camera or sun changes.
        // Avoids 20fps GPU drain while the scene is idle.
        this._shadowsDirty = true;

        // DOM event handler refs — kept so shutdown() can remove them
        this._onVisibilityChange  = null;
        this._onPointerMousedown  = null;
        this._onPointerLockChange = null;
        this._onPointerMousemove  = null;

        // ── Three.js objects ───────────────────────────────────────────────
        this.scene    = null;
        this.camera   = null;
        this.renderer = null;
        this.controls = null;
        this.stats    = null;

        // Groups — one per semantic layer, mirrors monolith Engine.groups
        this.groups = {};

        // Materials the engine owns (others are owned by pipeline modules)
        this.matLampFlare    = null;
        this.matAviationLight = null;

        // ── Shared GPU uniforms ────────────────────────────────────────────
        // Every city shader binds these by reference in onBeforeCompile.
        // Mutating .value here automatically propagates on the next draw.
        this.uniforms = {
            uPlinthRadius:   { value: 2000.0 },
            uCenter:         { value: new THREE.Vector2(0, 0) },
            uIsolation:      { value: 0.0 },
            uIsolationAlpha: { value: 0.25 },
            uTime:           { value: 0.0 },
            uPortalCount:    { value: 0 },
            uPortalHoles:    { value: null },   // Float32Array bound in _initPortalHoles
            uParkMask:       { value: null },   // WebGLRenderTarget texture
            uMaskBounds:     { value: new THREE.Vector4() },
            uParkModeActive: { value: 0.0 },
        };

        // ── Portal hole system ─────────────────────────────────────────────
        // Shared by the topo shader (discard terrain at tube mouths) and the
        // physics layer (isInPortalHole). Maximum 128 simultaneous holes.
        this.portalHoles = {
            maxHoles: 128,
            count:    0,
            data:     Array.from({ length: 128 }, () => new THREE.Vector4()),
        };

        // ── Underground state machine ──────────────────────────────────────
        // factor lerps 0→1 as the player descends into a tunnel.
        // Drives fog density, ambient intensity, scene background, CSM suppression.
        this.underground = {
            state:        'SURFACE',    // 'SURFACE' | 'TRANSITIONING' | 'UNDERGROUND'
            factor:       0.0,
            targetFactor: 0.0,
            _baseSunI:    null,         // snapshot of CSM intensity post-TOD update
            _baseSkyI:    null,
        };

        // ── Camera / controls state ────────────────────────────────────────
        this.center  = { x: 0, z: 0 };
        this.baseFov = 45;
        this.look    = { pitch: 0, yaw: 0 };
        this.isFlyMode    = false;
        this.mouseLocked  = false;
        this.keyState     = {};

        // ── Time ──────────────────────────────────────────────────────────
        this.time = {
            mode:       'manual',
            current:    15.0,
            speed:      1.0,
            lastFrame:  0,
        };

        // ── Shadow toggle state ────────────────────────────────────────────
        this.shadowsEnabled    = true;
        this._savedCSMIntensity = 0;
        this._savedSkyIntensity = 0;

        // ── Exposure ──────────────────────────────────────────────────────
        this._currentExposure = useEngineStore.getState().exposure;

        // ── SIM mode culling throttle ──────────────────────────────────────
        this._lastCullingUpdate = 0;

        // ── UI timeCurrent throttle ────────────────────────────────────────
        // Prevents 60fps Zustand setState → React re-renders in auto/irl mode.
        this._lastTimeUIUpdate = 0;

        // ── Lighting update throttle ───────────────────────────────────────
        // setTimeOfDay invalidates all 4 CSM shadow maps. Cap to 10fps so the
        // GPU isn't re-rendering shadow maps every frame in auto/irl mode.
        this._lastLightingUpdate = 0;

        // ── Shadow map refresh throttle ────────────────────────────────────
        // CSM cascade frustums reposition every frame as the camera moves, but
        // shadow.autoUpdate=false means the maps only re-render when needsUpdate
        // is explicitly set. Without this, shadows stop casting after the first
        // frame once the time mode is manual and the slider isn't moving.
        this._lastShadowUpdate = 0;

        // ── Prev zoom for zoom-change detection ───────────────────────────
        this._prevZoom = undefined;

        // ── Park mask orthographic camera / target ─────────────────────────
        this.parkMaskTarget = null;
        this.parkMaskScene  = null;
        this.parkMaskCamera = null;

        // ── Engine mode ────────────────────────────────────────────────────
        this.mode     = 'DIORAMA';
        this.isPaused = false;

        // Execution profiles per mode
        this.PROFILES = {
            STUDIO:  { pixelRatio: 2.0, shadowRes: 4096 },
            DIORAMA: { pixelRatio: 1.0, shadowRes: 2048 },
            SIM:     { pixelRatio: 1.0, shadowRes: 1024 },
        };

        // Foreground threshold (metres): buildings inside get individual meshes
        this.FG_THRESHOLD = 180;

        // Hero clip plane — clips GLB fill + wire materials below terrain level
        this.heroClipPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
        // Loaded GLB asset registry — { [assetId]: { fill, wire, h, rot, y, x, z } }
        this.loadedAssets  = {};
        // updateStyles reference — written by CullingSystem.setEngine()
        this.updateStyles  = null;

        // ── City pipeline state ────────────────────────────────────────────
        // currentTheme: live reference to the active theme object (colour palette)
        this.currentTheme      = useEngineStore.getState().theme;
        // heroState: tallest building near origin, used for FG/BG split + GLB placement
        this.heroState         = { h: 0, feature: null, found: false };
        // geoCache: references to GeoJSON data kept alive for CullingSystem
        this.geoCache          = {};
        // highResGround: toggles 32 K terrain texture (expensive)
        this.highResGround     = false;
        // maxTrees: instanced-tree budget
        this.maxTrees          = 5000;
        // materials: shared references for CullingSystem to update per-frame
        this.materials         = {};
        // labels: GeoJSON features for the label overlay
        this.labels            = [];
        // focusPoint / focusFeatureId: subject-isolation tracking
        this.focusPoint        = { x: 0, z: 0 };
        this.focusFeatureId    = null;
        // Topo grid references (written by GeoMath.setTopoGrid, read by CityPipeline)
        this._topoMaxElev      = 0;
        this._topoGrid         = null;
        this._topoWorldSize    = null;
        // Pipeline material handles written by CityPipeline
        this.matTunnelStrip    = null;
        this.matTunnelInterior = null;
        this.matTunnelPortal   = null;
        // Tree mesh reference (written by VegetationBuilder)
        this.treeMesh          = null;
        this.treeMeshTotal     = 0;

        // Initialise subsystems
        this._init();
    }

    // =========================================================================
    // INITIALISATION
    // =========================================================================

    _init() {
        this._initRenderer();
        this._initScene();
        this._initCamera();
        this._initControls();
        this._initGroups();
        this._initStats();
        this._initPortalHoles();
        this._initParkMask();
        this._initResize();
        this._initPointerLock();
        this._initKeyboard();
        this._initVisibility();

        // Propagate engine reference to all modules that need it
        _setGeoMath(this);
        _setSpatialGrid(this);
        _setShaderInject(this);
        _setChunkMerge(this);
        _setVegetation(this);
        _setTerrainBaker(this);
        _setCityPipeline(this);
        _setAssetLoader(this);
        _setParkSystem(this);
        _setCulling(this);      // wires this.updateStyles = updateStyles
        _setExportUtils(this);

        if (this.meta) {
            this._initLighting();
            this._syncPlinthFromMeta();
            this.centerCamera();
            // Fire-and-forget city data pipeline
            loadAllLayers().catch(e => console.error('[CityPipeline]', e));
        }

        this._subscribeToStore();

        // Apply the initial engine mode so that camera state (controls enabled,
        // fly mode, pointer lock) matches the UI chip on first load.
        // _subscribeToStore only fires on changes — it never fires for the initial
        // store value, leaving the engine in a mismatched state otherwise.
        this._applyEngineMode(useEngineStore.getState().engineMode, null);

        this._start();
    }

    _initRenderer() {
        // Resolve preset dimensions before creating the renderer so that
        // renderer.setSize() sets canvas.width/canvas.height to the exact
        // print/screen resolution the user selected. The CSS display size is
        // controlled separately by CanvasContainer's ResizeObserver.
        const { canvasPreset } = useEngineStore.getState();
        const preset   = CANVAS_PRESETS[canvasPreset] ?? CANVAS_PRESETS.hd;
        const { w: pvW, h: pvH } = _previewDims(preset);

        this.renderer = new THREE.WebGLRenderer({
            canvas:                 this.canvas,
            antialias:              true,
            preserveDrawingBuffer:  true,
            powerPreference:        'high-performance',
            alpha:                  true,
            premultipliedAlpha:     false,
            logarithmicDepthBuffer: true,
        });

        // Live preview renders at a capped resolution for performance.
        // Exports temporarily switch to the full preset dimensions.
        this.renderer.setPixelRatio(1);
        // false → don't overwrite the CSS width/height that CanvasContainer sets
        this.renderer.setSize(pvW, pvH, false);
        this.renderer.localClippingEnabled = true;
        this.renderer.shadowMap.enabled    = true;
        this.renderer.shadowMap.type       = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping          = THREE.ReinhardToneMapping;
        this.renderer.toneMappingExposure  = 1.0;
    }

    _initScene() {
        const { theme } = useEngineStore.getState();
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(theme.bg);
    }

    _initCamera() {
        // Use the canvas HTML attributes (set by renderer.setSize) for aspect
        // so the camera matches the rendering resolution, not the CSS display size.
        const w = this.canvas.width  || 1920;
        const h = this.canvas.height || 1080;
        this.camera = new THREE.PerspectiveCamera(this.baseFov, w / h, 0.1, 100000);

        const r = this.meta?.radius ?? 1000;
        this.camera.position.set(r, r, r);
    }

    _initControls() {
        this.controls = new OrbitControls(this.camera, this.canvas);
        this.controls.enableDamping  = true;
        this.controls.dampingFactor  = 1;
        this.controls.autoRotate     = false;
        this.controls.autoRotateSpeed = 1.0;
        this.controls.touches = {
            ONE: THREE.TOUCH.PAN,
            TWO: THREE.TOUCH.DOLLY_ROTATE,
        };
        this.controls.addEventListener('end', () => {
            this.center.x = this.controls.target.x;
            this.center.z = this.controls.target.z;
        });
        // Mark shadows dirty whenever the camera actually moves so that
        // the 50ms shadow-update throttle only fires after real changes.
        this.controls.addEventListener('change', () => { this._shadowsDirty = true; });
    }

    _initGroups() {
        const keys = [
            'bFill', 'bWire', 'roofs', 'detail',
            'heroFill', 'heroWire',
            'roads', 'water', 'parks', 'veg',
            'rails', 'ski', 'zones',
            'micro', 'topo', 'lights',
            'tunnels', 'tunnelLights',
        ];
        for (const key of keys) {
            this.groups[key] = new THREE.Group();
            this.scene.add(this.groups[key]);
        }
    }

    _initStats() {
        this.stats = new Stats();
        this.stats.showPanel(0);
        this.stats.dom.style.cssText = 'position:fixed;top:0;left:0;z-index:9999;pointer-events:none;';
        document.body.appendChild(this.stats.dom);
    }

    _initPortalHoles() {
        // Bind the portal holes array as the uPortalHoles uniform value.
        // Geometry pipeline modules call engine.registerPortalHole() to add entries;
        // the topo and building shaders read this array each frame.
        this.uniforms.uPortalHoles.value = this.portalHoles.data;
    }

    _initParkMask() {
        // Orthographic 2 K render target: a single red-channel texture that masks
        // all geometry to the current park polygon when parkModeActive === true.
        // The park mask is rebuilt only when the enclosing park feature changes.
        this.parkMaskTarget = new THREE.WebGLRenderTarget(2048, 2048, {
            format:    THREE.RedFormat,
            magFilter: THREE.NearestFilter,
            minFilter: THREE.NearestFilter,
        });
        this.uniforms.uParkMask.value = this.parkMaskTarget.texture;
        this.parkMaskScene  = new THREE.Scene();
        this.parkMaskCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
        this.parkMaskCamera.position.set(0, 0, 100);
    }

    _initLighting() {
        // initLighting wires up CSM (cascaded shadow maps), sky hemisphere light,
        // and FogExp2. It must be called after the scene and renderer exist.
        initLighting(this.scene, this.renderer, this.meta, this.camera);

        const { shadowsEnabled } = useEngineStore.getState();
        if (!shadowsEnabled) this._applyShadowToggle(false);

        // Snapshot base intensities so the underground lerp is idempotent.
        if (LightingState.csm?.lights.length) {
            this.underground._baseSunI = LightingState.csm.lights[0].intensity;
        }
        if (LightingState.skyLight) {
            this.underground._baseSkyI = LightingState.skyLight.intensity;
        }
    }

    _syncPlinthFromMeta() {
        const r = this.meta?.radius ?? 1000;
        const defaultPlinth = Math.round(r * 0.75);
        this.uniforms.uPlinthRadius.value = defaultPlinth;
        useEngineStore.setState({ plinthRadius: defaultPlinth });
    }

    _initResize() {
        // Fixed-resolution rendering: the renderer stays at the preset dimensions.
        // CanvasContainer's ResizeObserver CSS-scales the canvas for display.
        // We only need to push the render resolution to LineMaterial once at init.
        const w = this.canvas.width  || 1920;
        const h = this.canvas.height || 1080;
        this._broadcastResolution(w, h);
    }

    // Called when the user changes canvas preset (store subscription below).
    _applyCanvasPreset(preset) {
        const { w, h } = _previewDims(preset);
        this.renderer.setSize(w, h, false);

        const aspect = preset.w / preset.h;   // use export AR, not preview AR (same value)
        if (this.camera.isPerspectiveCamera) {
            this.camera.aspect = aspect;
            this.camera.updateProjectionMatrix();
        } else if (this.camera.isOrthographicCamera) {
            const f = (this.meta?.radius ?? 1000) * 4.0;
            this.camera.left   = -(f * aspect) / 2;
            this.camera.right  =  (f * aspect) / 2;
            this.camera.top    =   f / 2;
            this.camera.bottom = -(f / 2);
            this.camera.updateProjectionMatrix();
        }

        this._broadcastResolution(w, h);
    }

    _broadcastResolution(w, h) {
        const res = new THREE.Vector2(w, h);
        this.scene.traverse((node) => {
            if (node.material?.isLineMaterial) node.material.resolution.copy(res);
        });
    }

    _initPointerLock() {
        const canvas = this.canvas;

        this._onPointerMousedown = () => {
            if (this.mode === 'DIORAMA' || this.mode === 'SIM') {
                if (document.pointerLockElement !== canvas) canvas.requestPointerLock();
            }
        };

        this._onPointerLockChange = () => {
            const locked = document.pointerLockElement === canvas;
            this.mouseLocked = locked;
            if (this.mode === 'SIM') this.isPaused = !locked;
        };

        this._onPointerMousemove = (e) => {
            if (!this.mouseLocked) return;
            const sensitivity = 0.002;

            if (this.isFlyMode) {
                this.look.yaw   -= e.movementX * sensitivity;
                this.look.pitch -= e.movementY * sensitivity;
                this.look.pitch  = Math.max(-(Math.PI / 2 - 0.01), Math.min(Math.PI / 6, this.look.pitch));
                this.camera.rotation.order = 'YXZ';
                this.camera.rotation.set(this.look.pitch, this.look.yaw, 0);
            } else if (PlayerState.isActive) {
                PlayerState.cameraHeading -= e.movementX * sensitivity;
                PlayerState.cameraPitch   -= e.movementY * sensitivity;
                const PI_2 = Math.PI / 2 - 0.05;
                PlayerState.cameraPitch = Math.max(-PI_2, Math.min(PI_2, PlayerState.cameraPitch));
            }
        };

        canvas.addEventListener('mousedown',       this._onPointerMousedown);
        document.addEventListener('pointerlockchange', this._onPointerLockChange);
        document.addEventListener('mousemove',     this._onPointerMousemove);
    }

    _initKeyboard() {
        const onDown = (e) => { this.keyState[e.code] = true; };
        const onUp   = (e) => { this.keyState[e.code] = false; };
        window.addEventListener('keydown', onDown);
        window.addEventListener('keyup',   onUp);
        this._keyDown = onDown;
        this._keyUp   = onUp;
    }

    _initVisibility() {
        this._onVisibilityChange = () => {
            if (document.hidden) {
                // Pause the render loop when tab is not visible to prevent
                // draining CPU/GPU while the user isn't watching.
                if (this._rafId !== null) {
                    cancelAnimationFrame(this._rafId);
                    this._rafId = null;
                }
            } else {
                // Resume — reset lastFrame so dt doesn't spike on first wakeup.
                if (this._rafId === null) {
                    this.time.lastFrame = undefined;
                    this._rafId = requestAnimationFrame(this._boundAnimate);
                }
            }
        };
        document.addEventListener('visibilitychange', this._onVisibilityChange);
    }

    // =========================================================================
    // ZUSTAND STORE SUBSCRIPTION
    // =========================================================================

    _subscribeToStore() {
        // A single broad subscription. Zustand calls this on every state write,
        // so we diff the fields we care about rather than subscribing to each
        // slice separately (which creates many subscriptions for closely related
        // state that fires together anyway).
        const unsub = useEngineStore.subscribe((state, prev) => {

            // ── Theme ────────────────────────────────────────────────────────
            if (state.theme !== prev.theme) {
                this.currentTheme = state.theme;
                this._applyTheme(state.theme);
            }

            // ── Shadows ──────────────────────────────────────────────────────
            if (state.shadowsEnabled !== prev.shadowsEnabled) {
                this._applyShadowToggle(state.shadowsEnabled);
            }

            // ── Shadow style ─────────────────────────────────────────────────
            if (state.shadowStyle !== prev.shadowStyle && LightingState.customUniforms?.uShadowStyle) {
                LightingState.customUniforms.uShadowStyle.value = state.shadowStyle;
            }

            // ── Lights group visibility ───────────────────────────────────────
            if (state.lightsVisible !== prev.lightsVisible && this.groups.lights) {
                this.groups.lights.visible = state.lightsVisible;
            }

            // ── Plinth radius ─────────────────────────────────────────────────
            if (state.plinthRadius !== prev.plinthRadius) {
                this.uniforms.uPlinthRadius.value = state.plinthRadius;
                this.updateStyles?.();
            }

            // ── Manual time slider ────────────────────────────────────────────
            if (state.timeMode === 'manual' && state.timeCurrent !== prev.timeCurrent) {
                this.time.current = state.timeCurrent;
                setTimeOfDay(this.time.current);
                this._applyShadowToggle(useEngineStore.getState().shadowsEnabled);
                if (LightingState.csm?.lights.length) this.underground._baseSunI = LightingState.csm.lights[0].intensity;
                if (LightingState.skyLight)            this.underground._baseSkyI  = LightingState.skyLight.intensity;
            }

            // ── Time mode / speed (used by _animate's auto-advance) ───────────
            if (state.timeMode !== prev.timeMode) this.time.mode  = state.timeMode;
            if (state.timeSpeed !== prev.timeSpeed) this.time.speed = state.timeSpeed;

            // ── Engine mode ───────────────────────────────────────────────────
            if (state.engineMode !== prev.engineMode) {
                this._applyEngineMode(state.engineMode, prev.engineMode);
            }

            // ── Orthographic toggle ───────────────────────────────────────────
            if (state.isOrthographic !== prev.isOrthographic) {
                this._toggleCamera(state.isOrthographic);
            }

            // ── Layer opacity ─────────────────────────────────────────────────
            if (
                state.buildingOpacity !== prev.buildingOpacity ||
                state.wireOpacity     !== prev.wireOpacity     ||
                state.streetOpacity   !== prev.streetOpacity   ||
                state.lineWeight      !== prev.lineWeight
            ) {
                this._applyOpacity(state);
            }

            // ── Isolation ─────────────────────────────────────────────────────
            if (state.isolationActive !== prev.isolationActive) {
                this.uniforms.uIsolation.value = state.isolationActive ? 1.0 : 0.0;
                this.updateStyles?.();
            }
            if (state.theme !== prev.theme) {
                this.uniforms.uIsolationAlpha.value = state.theme.isolationAlpha ?? 0.25;
            }

            // ── Park mode ─────────────────────────────────────────────────────
            if (state.parkModeActive !== prev.parkModeActive) {
                this.uniforms.uParkModeActive.value = state.parkModeActive ? 1.0 : 0.0;
                this.updateStyles?.();
            }

            // ── Hero engine ───────────────────────────────────────────────────
            if (state.heroEngineActive !== prev.heroEngineActive) {
                this.updateStyles?.();
            }

            // ── Pan Y ─────────────────────────────────────────────────────────
            if (state.panY !== prev.panY && this.controls) {
                this.controls.target.y = state.panY;
                this.controls.update();
            }

            // ── Canvas preset ─────────────────────────────────────────────────
            if (state.canvasPreset !== prev.canvasPreset) {
                const preset = CANVAS_PRESETS[state.canvasPreset] ?? CANVAS_PRESETS.hd;
                this._applyCanvasPreset(preset);
            }

            // ── Exposure ─────────────────────────────────────────────────────
            if (state.exposure !== prev.exposure || state.autoExposure !== prev.autoExposure) {
                if (!state.autoExposure) {
                    this._currentExposure = state.exposure;
                    this.renderer.toneMappingExposure = state.exposure;
                }
            }

            // ── FOV ──────────────────────────────────────────────────────────
            if (state.fov !== prev.fov) {
                this.baseFov = state.fov;
                if (this.camera.isPerspectiveCamera) {
                    this.camera.fov = state.fov;
                    this.camera.updateProjectionMatrix();
                }
            }

            // ── Auto rotate ───────────────────────────────────────────────────
            if (state.autoRotate !== prev.autoRotate && this.controls) {
                this.controls.autoRotate = state.autoRotate;
            }

            // ── Outline style ─────────────────────────────────────────────────
            if (state.outlineStyle !== prev.outlineStyle) {
                this._applyOutlineStyle(state.outlineStyle);
            }
        });

        this._storeUnsubs.push(unsub);
    }

    // =========================================================================
    // STATE APPLICATORS
    // =========================================================================

    _applyTheme(theme) {
        if (!this.scene) return;
        this.scene.background = new THREE.Color(theme.bg);
        this.uniforms.uIsolationAlpha.value = theme.isolationAlpha ?? 0.25;

        this.scene.traverse((node) => {
            const colorKey = node.userData?.colorKey;
            if (!colorKey) return;
            const hex = theme[colorKey];
            if (hex === undefined) return;
            const mats = Array.isArray(node.material) ? node.material : [node.material];
            for (const m of mats) {
                if (m?.color) m.color.setHex(hex);
                if (m?.emissive && node.userData.useEmissive) m.emissive.setHex(hex);
            }
        });

        // Scene fog colour follows the background
        if (this.scene.fog) this.scene.fog.color.setHex(theme.bg);

        // Re-colour all city geometry + trigger terrain texture rebake
        this.updateStyles?.();
    }

    _applyShadowToggle(enabled) {
        const csm      = LightingState.csm;
        const skyLight = LightingState.skyLight;
        if (!csm || !skyLight) return;

        if (enabled) {
            this.renderer.shadowMap.enabled = true;
            for (const l of csm.lights) {
                l.castShadow = true;
                l.intensity  = this._savedCSMIntensity || l.intensity;
            }
            skyLight.intensity = this._savedSkyIntensity || skyLight.intensity;
        } else {
            // Snapshot current time-of-day intensities before zeroing them.
            this._savedCSMIntensity = csm.lights[0]?.intensity ?? 1.0;
            this._savedSkyIntensity = skyLight.intensity;
            this.renderer.shadowMap.enabled = false;
            for (const l of csm.lights) l.intensity = 0;
            skyLight.intensity = Math.max(this._savedSkyIntensity, 3.0);
        }

        this.shadowsEnabled = enabled;
    }

    _applyEngineMode(newMode, prevMode) {
        this.mode    = newMode;
        this.keyState = {};  // flush held keys from the previous mode

        const profile = this.PROFILES[newMode];
        if (profile) {
            this.renderer.setPixelRatio(window.devicePixelRatio * profile.pixelRatio);
        }

        if (newMode === 'STUDIO') {
            PlayerState.isActive = false;
            this.isFlyMode   = false;

            if (document.pointerLockElement) document.exitPointerLock();
            this.mouseLocked = false;

            if (prevMode === 'SIM') {
                // Reconstruct orbit target from wherever the player camera ended up
                const dir = new THREE.Vector3();
                this.camera.getWorldDirection(dir);
                this.controls.target.copy(this.camera.position).addScaledVector(dir, 100);
            }
            this.controls.enabled = true;
            this.controls.update();

        } else if (newMode === 'DIORAMA') {
            PlayerState.isActive  = false;
            this.controls.enabled = false;
            this.isFlyMode        = true;
            // Capture current camera euler as initial fly heading so it doesn't snap
            const euler = new THREE.Euler().setFromQuaternion(this.camera.quaternion, 'YXZ');
            this.look.yaw   = euler.y;
            this.look.pitch = euler.x;

        } else if (newMode === 'SIM') {
            this.controls.enabled = false;
            this.isFlyMode        = false;
            PlayerState.isActive  = true;

            // Spawn at the current camera x/z so the transition feels continuous.
            const spawnX = this.camera.position.x;
            const spawnZ = this.camera.position.z;

            // Find the highest surface (terrain or rooftop) at this x/z so the
            // player never starts clipped inside geometry.
            const eyeH      = PlayerConfig.physics.eyeHeight;
            const terrainY  = getElevationAt(spawnX, spawnZ);
            let   safeFloor = terrainY;

            const rawStructs = getStructureAt(spawnX, spawnZ);
            const structList = Array.isArray(rawStructs) ? rawStructs
                : rawStructs?.parts ?? (rawStructs ? [rawStructs] : []);
            for (const s of structList) {
                if (s.yTop != null) safeFloor = Math.max(safeFloor, s.yTop);
            }

            // Keep the camera Y if it already clears the highest surface;
            // otherwise land the player just above the rooftop / terrain.
            const minY   = safeFloor + eyeH + 0.5;
            const spawnY = Math.max(this.camera.position.y, minY);
            this.camera.position.set(spawnX, spawnY, spawnZ);

            // Inherit the current camera look direction so the view doesn't snap.
            const euler = new THREE.Euler().setFromQuaternion(this.camera.quaternion, 'YXZ');
            PlayerState.cameraHeading = euler.y;
            PlayerState.cameraPitch   = THREE.MathUtils.clamp(
                euler.x, -(Math.PI / 2 - 0.05), Math.PI / 6,
            );
            PlayerState.bodyHeading   = euler.y;

            // Reset motion state cleanly.
            PlayerState.velocity.set(0, 0, 0);
            PlayerState.isGrounded    = false;
            PlayerState.movementState = 'FALL';
            PlayerState.roll          = 0;
            PlayerState.wallRoll      = 0;
            PlayerState.fallTilt      = 0;
            PlayerState.lastGroundedTime = 0;
            PlayerState.lastJumpTime     = 0;
        }
    }

    _toggleCamera(makeOrtho) {
        const target = this.controls.target.clone();
        const dist   = this.camera.position.distanceTo(target);
        const dir    = new THREE.Vector3().subVectors(this.camera.position, target).normalize();
        const fov    = this.baseFov;
        const aspect = this.canvas.width / this.canvas.height;
        const r      = this.meta?.radius ?? 1000;
        const f      = r * 4.0;

        if (makeOrtho) {
            const visH    = 2 * dist * Math.tan(THREE.MathUtils.degToRad(fov / 2));
            const zoom    = f / visH;
            this.camera = new THREE.OrthographicCamera(
                -(f * aspect) / 2, (f * aspect) / 2,
                f / 2, -(f / 2),
                -50000, 50000
            );
            this.camera.position.copy(target).addScaledVector(dir, r * 4);
            this.camera.zoom = zoom;
        } else {
            const visH    = f / this.camera.zoom;
            const newDist = visH / (2 * Math.tan(THREE.MathUtils.degToRad(fov / 2)));
            this.camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 100000);
            this.camera.position.copy(target).addScaledVector(dir, newDist);
        }

        this.camera.lookAt(target);
        this.camera.updateProjectionMatrix();
        this.controls.object = this.camera;
        this.controls.update();
    }

    _applyOpacity(state) {
        this.scene.traverse((node) => {
            if (!node.isMesh) return;
            const group = node.userData?.opacityGroup;
            if (!group) return;
            const mats = Array.isArray(node.material) ? node.material : [node.material];
            for (const m of mats) {
                if (!m) continue;
                if (group === 'building') m.opacity = state.buildingOpacity;
                else if (group === 'wire')  m.opacity = state.wireOpacity;
                else if (group === 'road')  m.opacity = state.streetOpacity;
                m.transparent = m.opacity < 1.0;
            }
        });

        // Line material linewidth uses a separate scale
        this.scene.traverse((node) => {
            if (node.material?.isLineMaterial) {
                node.material.linewidth = node.userData?.baseLineWidth ?? 1.0;
                node.material.linewidth *= state.lineWeight;
            }
        });
    }

    _applyOutlineStyle(style) {
        // bWire = building edges, detail = window lines — both need the toggle.
        const wireGroups = [this.groups.bWire, this.groups.detail].filter(Boolean);

        if (style === 'none') {
            for (const g of wireGroups) g.visible = false;
            return;
        }

        const useFat = style === 'lineMat';
        for (const group of wireGroups) {
            group.visible = true;
            group.traverse((node) => {
                if (!node.isLineSegments2) return;

                node.visible = useFat;

                if (!useFat) {
                    if (!node.userData.nativeTwin) {
                        const twin = this._buildNativeTwin(node);
                        node.parent.add(twin);
                        node.userData.nativeTwin = twin;
                    }
                    node.userData.nativeTwin.visible = true;
                } else if (node.userData.nativeTwin) {
                    node.userData.nativeTwin.visible = false;
                }
            });
        }
    }

    // LineSegmentsGeometry stores its interleaved buffer as:
    //   [sx,sy,sz, ex,ey,ez, sx,sy,sz, ...]
    // This is identical to the vertex layout THREE.LineSegments needs, so the
    // conversion is a single slice — no reformatting required.
    _buildNativeTwin(ls2) {
        const srcBuf = ls2.geometry.attributes.instanceStart?.data?.array;
        if (!srcBuf) return new THREE.Group();

        const nativeGeo = new THREE.BufferGeometry();
        nativeGeo.setAttribute('position', new THREE.BufferAttribute(srcBuf.slice(), 3));

        const mat = new THREE.LineBasicMaterial({
            color:       ls2.material.color?.clone() ?? new THREE.Color(0xffffff),
            opacity:     ls2.material.opacity,
            transparent: ls2.material.opacity < 1,
        });

        // Inject per-pixel plinth discard so native twins obey the same GPU clip
        // as LineMaterial objects. Uniforms are bound by reference — live updates
        // from the engine propagate without any shader recompile.
        const uPlinthRadius = this.uniforms.uPlinthRadius;
        const uCenter       = this.uniforms.uCenter;
        mat.onBeforeCompile = (shader) => {
            shader.uniforms.uPlinthRadius = uPlinthRadius;
            shader.uniforms.uCenter       = uCenter;
            shader.vertexShader = `varying vec3 vTwinWorldPos;\n${shader.vertexShader}`.replace(
                '#include <begin_vertex>',
                `#include <begin_vertex>\n    vTwinWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`
            );
            shader.fragmentShader = (
                `uniform float uPlinthRadius;\nuniform vec2 uCenter;\nvarying vec3 vTwinWorldPos;\n`
                + shader.fragmentShader
            ).replace(
                'void main() {',
                `void main() {\n    if (length(vec2(vTwinWorldPos.x - uCenter.x, vTwinWorldPos.z - uCenter.y)) > uPlinthRadius) discard;`
            );
        };

        const twin = new THREE.LineSegments(nativeGeo, mat);
        twin.userData = { ...ls2.userData, isNativeTwin: true };
        twin.matrixAutoUpdate = false;
        twin.matrix.copy(ls2.matrix);
        return twin;
    }

    // =========================================================================
    // CAMERA HELPERS
    // =========================================================================

    centerCamera() {
        const r      = this.meta?.radius ?? 1000;
        const { panY } = useEngineStore.getState();
        const cx     = this.center.x;
        const cz     = this.center.z;
        const target = new THREE.Vector3(cx, panY, cz);
        const dir    = new THREE.Vector3(1, 1, 1).normalize();
        const idealDist = (r * 1.5) / Math.tan(THREE.MathUtils.degToRad(this.baseFov / 2));

        if (this.camera.isOrthographicCamera) {
            this.camera.position.copy(target).addScaledVector(dir, r * 4);
            this.camera.zoom = (r * 4) / (r * 3.5);
        } else {
            this.camera.position.copy(target).addScaledVector(dir, idealDist);
        }

        this.controls.target.copy(target);
        this.camera.updateProjectionMatrix();
        this.controls.update();
    }

    // =========================================================================
    // PORTAL HOLE API  (called by geometry pipeline modules)
    // =========================================================================

    registerPortalHole(cx, cz, radius, topY) {
        const ph = this.portalHoles;
        if (ph.count >= ph.maxHoles) return;
        ph.data[ph.count].set(cx, cz, radius, topY);
        ph.count++;
        this.uniforms.uPortalCount.value = ph.count;
    }

    resetPortalHoles() {
        const ph = this.portalHoles;
        for (let i = 0; i < ph.count; i++) ph.data[i].set(0, 0, 0, 0);
        ph.count = 0;
        this.uniforms.uPortalCount.value = 0;
    }

    isInPortalHole(x, z) {
        const { count, data } = this.portalHoles;
        for (let i = 0; i < count; i++) {
            const v  = data[i];
            const dx = x - v.x;
            const dz = z - v.y;
            if (dx * dx + dz * dz < v.z * v.z) return true;
        }
        return false;
    }

    // =========================================================================
    // rAF LOOP
    // =========================================================================

    _start() {
        this._rafId = requestAnimationFrame(this._boundAnimate);
    }

    _animate(timestamp) {
        this._rafId = requestAnimationFrame(this._boundAnimate);

        if (this.stats) this.stats.update();

        const dt = timestamp - (this.time.lastFrame || timestamp);
        this.time.lastFrame = timestamp;

        // ── Time advancement ────────────────────────────────────────────────
        let timeChanged = false;
        if (this.time.mode === 'irl') {
            const newTime = this._getLocalSolarTime();
            if (Math.abs(this.time.current - newTime) > 0.01) {
                this.time.current = newTime;
                timeChanged = true;
            }
        } else if (this.time.mode === 'auto') {
            const speedFactor = (24 / 60000) * this.time.speed;
            this.time.current = (this.time.current + dt * speedFactor) % 24;
            timeChanged = true;
        }

        // Push timeCurrent to Zustand at most ~5fps — prevents 60fps React
        // re-renders of App.jsx in auto/irl modes while keeping the UI responsive.
        if (timeChanged && (timestamp - this._lastTimeUIUpdate > 200)) {
            this._lastTimeUIUpdate = timestamp;
            useEngineStore.setState({ timeCurrent: this.time.current });
        }

        // ── Global shader time ──────────────────────────────────────────────
        this.uniforms.uTime.value = timestamp * 0.001;
        if (LightingState.customUniforms?.uTime) {
            LightingState.customUniforms.uTime.value = timestamp * 0.001;
        }

        // ── Aviation beacon flash ───────────────────────────────────────────
        if (this.matAviationLight) {
            const flash   = Math.pow(Math.sin(timestamp * 0.002), 16);
            const isNight = this.time.current > 18.0 || this.time.current < 6.0;
            this.matAviationLight.opacity = isNight ? flash : 0.0;
        }

        // ── Lamp flare opacity ──────────────────────────────────────────────
        if (this.matLampFlare) {
            const t = this.time.current;
            let opacity = 0.0;
            if      (t > 19.0 || t < 5.0)            opacity = 0.8;
            else if (t >= 18.0 && t <= 19.0)          opacity = (t - 18.0) * 0.8;
            else if (t >=  5.0 && t <=  6.0)          opacity = (1.0 - (t - 5.0)) * 0.8;
            this.matLampFlare.opacity = opacity;
        }

        // ── Exposure ────────────────────────────────────────────────────────
        if (useEngineStore.getState().autoExposure) {
            // Cinematic iris: noon = 0.8 exposure, midnight = 2.25
            const distFromNoon   = Math.abs(this.time.current - 12.0);
            const nightFactor    = THREE.MathUtils.smoothstep(distFromNoon, 5.0, 7.5);
            const targetExposure = THREE.MathUtils.lerp(0.8, 2.25, nightFactor);
            this._currentExposure = THREE.MathUtils.lerp(this._currentExposure, targetExposure, 0.05);
            this.renderer.toneMappingExposure = this._currentExposure;
        }

        // ── Apply pending time-of-day change (throttled to 10fps) ───────────
        // setTimeOfDay changes the CSM light direction → invalidates all shadow
        // maps → expensive GPU re-render. Cap to 100ms so we get 10 shadow
        // re-renders per second max instead of 60.
        if (timeChanged && (timestamp - this._lastLightingUpdate > 100)) {
            this._lastLightingUpdate = timestamp;
            setTimeOfDay(this.time.current);
            this._applyShadowToggle(useEngineStore.getState().shadowsEnabled);
            if (LightingState.csm?.lights.length) this.underground._baseSunI = LightingState.csm.lights[0].intensity;
            if (LightingState.skyLight)            this.underground._baseSkyI  = LightingState.skyLight.intensity;
            this._shadowsDirty = true;
        }

        // ── DIORAMA fly-mode physics ────────────────────────────────────────
        if (this.mode === 'DIORAMA' && this.isFlyMode) {
            this._updateFlyPhysics(dt);
            this._shadowsDirty = true;   // camera moves every physics tick
        } else if (this.mode === 'SIM' && PlayerState.isActive && !this.isPaused) {
            this._shadowsDirty = true;   // player camera moves every physics tick
            const physicsDt = Math.min(0.1, dt / 1000);
            updatePlayerPhysics(physicsDt, this, getElevationAt, getStructureAt, this.isInPortalHole.bind(this));

            // Track the plinth centre on the player so the world doesn't disappear
            const cx = this.camera.position.x;
            const cz = this.camera.position.z;
            this.center.x = cx;
            this.center.z = cz;
            this.uniforms.uCenter.value.set(cx, cz);

            // Throttled CPU culling at ~5 Hz
            if (timestamp - this._lastCullingUpdate > 200) {
                this._lastCullingUpdate = timestamp;
                this.updateStyles?.();
            }
        }

        // ── "Treadmill plinth" — plinth centre tracks orbit target ──────────
        if ((this.mode === 'STUDIO' || this.mode === 'DIORAMA') && this.controls?.target) {
            this.uniforms.uCenter.value.set(
                this.controls.target.x,
                this.controls.target.z,
            );
        }

        // ── Controls damping ────────────────────────────────────────────────
        if (this.controls?.enabled && !this.isFlyMode && !PlayerState.isActive) {
            this.controls.update();
        }

        // ── Camera matrix ───────────────────────────────────────────────────
        this.camera.updateMatrixWorld();

        // ── CSM shadow cascade update ───────────────────────────────────────
        if (LightingState.csm) {
            updateCSM(this.camera);
            // Re-render shadow maps only when the scene has actually changed
            // (camera moved via OrbitControls, or sun direction updated by
            // setTimeOfDay). Without this guard, 4 ×4096² shadow maps were
            // re-rendering at 20fps even on a completely idle scene, saturating
            // the GPU over time.
            if (this._shadowsDirty && (timestamp - this._lastShadowUpdate > 50)) {
                this._lastShadowUpdate = timestamp;
                this._shadowsDirty = false;
                for (const light of LightingState.csm.lights) {
                    light.shadow.needsUpdate = true;
                }
            }
        }

        // ── Underground lighting state machine ──────────────────────────────
        this._updateUndergroundState(dt);

        // ── Zoom-change detection → trigger CPU-side plinth cull ────────────
        const zoom = this.camera.zoom ?? 1;
        if (this._prevZoom === undefined || Math.abs(zoom - this._prevZoom) > 0.005) {
            this._prevZoom = zoom;
            // Emit a custom event so pipeline modules can react without coupling
            this.canvas.dispatchEvent(new CustomEvent('engine:cullingupdate'));
        }

        // ── Guard against lost context ───────────────────────────────────────
        if (this.renderer.getContext().isContextLost()) return;

        // ── Final render ────────────────────────────────────────────────────
        this.renderer.render(this.scene, this.camera);
    }

    // =========================================================================
    // UNDERGROUND STATE MACHINE
    // =========================================================================

    _updateUndergroundState(dt) {
        const ug = this.underground;

        // Pipeline modules that track player position write engine.playerIsUnderground.
        // Default false keeps surface lighting while no physics is running.
        ug.targetFactor = this.playerIsUnderground ? 1.0 : 0.0;

        // Frame-rate-independent exponential approach — ~200 ms time constant
        const dtSec = Math.min(0.1, dt / 1000);
        const k     = 1.0 - Math.exp(-dtSec * 5.0);
        ug.factor  += (ug.targetFactor - ug.factor) * k;
        if (ug.factor < 0.0005) ug.factor = 0.0;
        if (ug.factor > 0.9995) ug.factor = 1.0;

        // Hysteresis on the discrete state
        if      (ug.factor > 0.95) ug.state = 'UNDERGROUND';
        else if (ug.factor < 0.05) ug.state = 'SURFACE';
        else                       ug.state = 'TRANSITIONING';

        if (ug.factor > 0.0 && LightingState.csm) {
            const baseSunI = ug._baseSunI ?? LightingState.csm.lights[0]?.intensity ?? 1.0;
            const sunMul   = 1.0 - ug.factor * 0.98;
            for (const light of LightingState.csm.lights) {
                light.intensity = baseSunI * sunMul;
            }
            if (LightingState.skyLight) {
                const baseSkyI = ug._baseSkyI ?? LightingState.skyLight.intensity;
                LightingState.skyLight.intensity = baseSkyI * (1.0 - ug.factor * 0.85) + ug.factor * 0.05;
            }
            if (this.scene.background?.isColor) {
                this.scene.background.lerp(_UG_BG_COLOR, ug.factor);
            }
        }
    }

    // =========================================================================
    // DIORAMA FLY PHYSICS
    // =========================================================================

    _updateFlyPhysics(dt) {
        const dtSec  = Math.min(0.1, dt / 1000);
        const speed  = this.keyState['ShiftLeft'] || this.keyState['ShiftRight'] ? 120 : 30;
        const fwd    = new THREE.Vector3();
        const right  = new THREE.Vector3();

        this.camera.getWorldDirection(fwd);
        right.crossVectors(fwd, this.camera.up).normalize();

        const move = new THREE.Vector3();
        if (this.keyState['KeyW'] || this.keyState['ArrowUp'])    move.addScaledVector(fwd,   speed * dtSec);
        if (this.keyState['KeyS'] || this.keyState['ArrowDown'])  move.addScaledVector(fwd,  -speed * dtSec);
        if (this.keyState['KeyA'] || this.keyState['ArrowLeft'])  move.addScaledVector(right, -speed * dtSec);
        if (this.keyState['KeyD'] || this.keyState['ArrowRight']) move.addScaledVector(right,  speed * dtSec);
        if (this.keyState['KeyE'])                                 move.y += speed * dtSec;
        if (this.keyState['KeyQ'])                                 move.y -= speed * dtSec;

        this.camera.position.add(move);
    }

    // =========================================================================
    // UTILS
    // =========================================================================

    _getLocalSolarTime() {
        const lon     = this.meta?.lon ?? 0;
        const date    = new Date();
        const utcHrs  = date.getUTCHours() + (date.getUTCMinutes() / 60) + (date.getUTCSeconds() / 3600);
        return (utcHrs + (lon / 15) + 24) % 24;
    }

    // =========================================================================
    // SHUTDOWN
    // =========================================================================

    shutdown() {
        // Cancel the animation loop first
        if (this._rafId !== null) {
            cancelAnimationFrame(this._rafId);
            this._rafId = null;
        }

        // Detach Zustand subscriptions
        for (const unsub of this._storeUnsubs) unsub();
        this._storeUnsubs = [];

        // Detach resize observer
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
            this._resizeObserver = null;
        }

        // Detach keyboard listeners
        if (this._keyDown) window.removeEventListener('keydown', this._keyDown);
        if (this._keyUp)   window.removeEventListener('keyup',   this._keyUp);

        // Detach pointer lock listeners
        if (this._onPointerMousedown)  this.canvas.removeEventListener('mousedown', this._onPointerMousedown);
        if (this._onPointerLockChange) document.removeEventListener('pointerlockchange', this._onPointerLockChange);
        if (this._onPointerMousemove)  document.removeEventListener('mousemove', this._onPointerMousemove);

        // Detach visibility handler
        if (this._onVisibilityChange) document.removeEventListener('visibilitychange', this._onVisibilityChange);

        // Remove stats panel from DOM
        if (this.stats?.dom?.parentNode) {
            this.stats.dom.parentNode.removeChild(this.stats.dom);
        }

        // Dispose controls
        this.controls?.dispose();

        // Dispose park mask render target
        this.parkMaskTarget?.dispose();

        // Dispose all scene geometry and materials
        this.scene?.traverse((node) => {
            node.geometry?.dispose();
            const mats = Array.isArray(node.material) ? node.material : [node.material];
            for (const m of mats) m?.dispose();
        });

        // Dispose the WebGL context last
        this.renderer?.dispose();
    }
}
