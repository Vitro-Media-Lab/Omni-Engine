import { create } from 'zustand';
import { THEMES } from '../engine/themes';

// Global state consumed by both the React UI and the vanilla Three.js engine.
// The engine subscribes via useEngineStore.subscribe() — no React hooks needed.
// React components read via useEngineStore() as normal.

// Canvas presets — rendering resolution. The live view CSS-scales to fit the
// workspace; export captures the canvas at these exact dimensions.
export const CANVAS_PRESETS = {
    hd:   { label: '1080p  —  1920 × 1080',     w: 1920, h: 1080 },
    '4k': { label: '4K  —  3840 × 2160',         w: 3840, h: 2160 },
    a4l:  { label: 'A4 Landscape  —  3508 × 2480', w: 3508, h: 2480 },
    a4p:  { label: 'A4 Portrait  —  2480 × 3508',  w: 2480, h: 3508 },
    sq2k: { label: 'Square  —  2048 × 2048',      w: 2048, h: 2048 },
    sq4k: { label: 'Square  —  4096 × 4096',      w: 4096, h: 4096 },
};

const useEngineStore = create((set, get) => ({

    // ── Theme ────────────────────────────────────────────────────────────────
    themeName: 'light',
    theme:     THEMES.light,
    setTheme: (name) => set({
        themeName: name,
        theme:     THEMES[name] ?? THEMES.light,
    }),

    // ── Time of Day ──────────────────────────────────────────────────────────
    // timeMode: 'manual' — slider drives timeCurrent
    //           'auto'   — engine advances timeCurrent at timeSpeed × real time
    //           'irl'    — engine computes local solar time from meta.lon
    timeMode:    'manual',
    timeCurrent: 15.0,
    timeSpeed:   1.0,
    setTimeMode:    (timeMode)    => set({ timeMode }),
    setTimeCurrent: (timeCurrent) => set({ timeCurrent }),
    setTimeSpeed:   (timeSpeed)   => set({ timeSpeed }),

    // ── Engine / Camera Mode ─────────────────────────────────────────────────
    // STUDIO  — orbit controls, high pixel ratio, shadow rendering
    // DIORAMA — fly-cam mode (pointer-locked free-flight), medium quality
    // SIM     — first-person physics capsule, low quality for frame budget
    engineMode: 'STUDIO',
    setEngineMode: (engineMode) => set({ engineMode }),

    isOrthographic: false,
    toggleOrthographic: () => set((s) => ({ isOrthographic: !s.isOrthographic })),

    // ── Plinth Radius ────────────────────────────────────────────────────────
    // Radius (metres) of the circular GPU clip mask centred on the orbit target.
    // Drives uPlinthRadius in every city material shader.
    plinthRadius: 750,
    setPlinthRadius: (plinthRadius) => set({ plinthRadius }),

    // ── Rendering Toggles ────────────────────────────────────────────────────
    shadowsEnabled: true,
    setShadowsEnabled: (shadowsEnabled) => set({ shadowsEnabled }),

    lightsVisible: true,
    setLightsVisible: (lightsVisible) => set({ lightsVisible }),

    // ── Layer Opacity + Line Weight ──────────────────────────────────────────
    buildingOpacity: 1.0,
    wireOpacity:     1.0,
    streetOpacity:   1.0,
    lineWeight:      0.5,
    setBuildingOpacity: (v) => set({ buildingOpacity: v }),
    setWireOpacity:     (v) => set({ wireOpacity: v }),
    setStreetOpacity:   (v) => set({ streetOpacity: v }),
    setLineWeight:      (v) => set({ lineWeight: v }),

    // ── Feature Modes ────────────────────────────────────────────────────────
    // Isolation: dims every building except the one under the crosshair.
    // Park mode: clips all geometry to the enclosing park polygon via
    //            an orthographic render-target mask texture.
    // Hero:      injects a loaded .glb model at the focus point.
    isolationActive:  false,
    parkModeActive:   false,
    heroEngineActive: false,
    setIsolationActive:  (v) => set({ isolationActive: v }),
    setParkModeActive:   (v) => set({ parkModeActive: v }),
    setHeroEngineActive: (v) => set({ heroEngineActive: v }),

    // ── Shadow Style ─────────────────────────────────────────────────────────
    // Matches the monolith's uShadowStyle uniform:
    //   0 = no toon lines, 1 = faint lines, 2 = hard toon, 3 = pencil sketch
    shadowStyle: 0,
    setShadowStyle: (shadowStyle) => set({ shadowStyle }),

    // ── Outline Style ────────────────────────────────────────────────────────
    // Controls the line renderer used for building wireframes:
    //   'lineMat' — LineSegments2 + LineMaterial (screen-space AA, default)
    //   'native'  — THREE.LineSegments + LineBasicMaterial (gl.LINES, 1px,
    //               lower GPU cost, simpler position buffer for SVG export)
    //   'none'    — wireframe hidden
    outlineStyle: 'lineMat',
    setOutlineStyle: (outlineStyle) => set({ outlineStyle }),

    // ── Camera ───────────────────────────────────────────────────────────────
    fov:  45,
    panY: 150,
    setFov:  (fov)  => set({ fov }),
    setPanY: (panY) => set({ panY }),

    // ── Exposure ─────────────────────────────────────────────────────────────
    // When autoExposure is true the engine runs the cinematic day/night iris.
    // When false, the manual exposure value drives toneMappingExposure directly.
    exposure:     1.0,
    autoExposure: false,
    setExposure:     (exposure)     => set({ exposure }),
    setAutoExposure: (autoExposure) => set({ autoExposure }),

    // ── Auto Rotate ──────────────────────────────────────────────────────────
    autoRotate: false,
    setAutoRotate: (autoRotate) => set({ autoRotate }),

    // ── Loading State (written by engine pipeline, read by UI) ───────────────
    isLoading:       true,
    loadingProgress: 0,
    loadingLayer:    '',
    setLoading:         (isLoading) => set({ isLoading }),
    setLoadingProgress: (progress, layer = '') => set({
        loadingProgress: progress,
        loadingLayer:    layer,
    }),

    // ── Canvas Preset ────────────────────────────────────────────────────────
    // Drives the Three.js renderer resolution. The live view CSS-scales the
    // canvas element to fit the workspace without changing rendering dimensions.
    canvasPreset: 'hd',
    setCanvasPreset: (canvasPreset) => set({ canvasPreset }),

    // ── City Selection ───────────────────────────────────────────────────────
    // cityList is populated from /cache/cities/index.json on startup.
    // activeCityKey is seeded from localStorage so the dropdown reflects the
    // current city immediately. Switching cities writes to localStorage and
    // calls window.location.reload() — the full page reload is the teardown.
    cityList:         [],
    activeCityKey:    localStorage.getItem('activeCityKey') ?? null,
    setCityList:      (cityList)      => set({ cityList }),
    setActiveCityKey: (activeCityKey) => set({ activeCityKey }),

    // ── Map Metadata (set once after fetch, read by engine) ──────────────────
    meta: null,
    setMeta: (meta) => set({ meta }),
}));

export default useEngineStore;
