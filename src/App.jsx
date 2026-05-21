import React, { useState } from 'react';
import CanvasContainer from './components/CanvasContainer';
import useEngineStore, { CANVAS_PRESETS } from './store/useEngineStore';
import { useShallow } from 'zustand/react/shallow';
import { THEMES } from './engine/themes';
import { exportImage, exportSTL, exportSVGPlotter } from './engine/export/ExportUtils.js';

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatTime(t) {
    const h = Math.floor(t);
    const m = String(Math.floor((t % 1) * 60)).padStart(2, '0');
    return `${h}:${m}`;
}

// ── Sidebar primitives ────────────────────────────────────────────────────────

function Section({ label, children, defaultOpen = true }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <>
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full px-4 pt-4 pb-1.5 flex items-center justify-between group border-t border-zinc-900 first:border-t-0"
            >
                <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-600 group-hover:text-zinc-400 transition-colors select-none">
                    {label}
                </span>
                <span className={`text-zinc-700 group-hover:text-zinc-500 transition-all duration-150 text-[8px] ${open ? 'rotate-90' : ''}`}>
                    ▸
                </span>
            </button>
            {open && children}
        </>
    );
}

function Row({ label, value, children }) {
    return (
        <div className="px-4 py-1 flex items-center gap-3">
            <span className="text-[10px] text-zinc-500 w-16 shrink-0 text-right tabular-nums select-none">
                {label}
            </span>
            <div className="flex-1 flex items-center gap-2">
                {children}
                {value !== undefined && (
                    <span className="text-[10px] text-zinc-400 tabular-nums ml-auto">{value}</span>
                )}
            </div>
        </div>
    );
}

function Slider({ min, max, step, value, onChange }) {
    return (
        <input
            type="range"
            min={min} max={max} step={step} value={value}
            className="flex-1 h-px cursor-pointer accent-zinc-400"
            onChange={(e) => onChange(parseFloat(e.target.value))}
            onMouseUp={(e) => e.target.blur()}
            onTouchEnd={(e) => e.target.blur()}
        />
    );
}

function ChipGroup({ children }) {
    return <div className="px-4 py-1 flex gap-1">{children}</div>;
}

function Chip({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`flex-1 py-1 rounded-sm text-[10px] font-medium transition-colors duration-100 border ${
                active
                    ? 'bg-zinc-700 border-zinc-600 text-zinc-100'
                    : 'bg-transparent border-zinc-800 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400'
            }`}
        >
            {label}
        </button>
    );
}

function Toggle({ label, active, onToggle }) {
    return (
        <button
            onClick={onToggle}
            className={`px-2.5 py-1 rounded-sm text-[10px] font-medium transition-colors duration-100 border ${
                active
                    ? 'bg-zinc-700 border-zinc-600 text-zinc-100'
                    : 'bg-transparent border-zinc-800 text-zinc-600 hover:border-zinc-700 hover:text-zinc-400'
            }`}
        >
            {label}
        </button>
    );
}

// ── Root App ──────────────────────────────────────────────────────────────────

export default function App() {
    const {
        themeName, setTheme,
        timeMode, timeCurrent, timeSpeed,
        setTimeMode, setTimeCurrent, setTimeSpeed,
        engineMode, setEngineMode,
        isOrthographic, toggleOrthographic,
        plinthRadius, setPlinthRadius,
        shadowsEnabled, setShadowsEnabled,
        shadowStyle, setShadowStyle,
        lightsVisible, setLightsVisible,
        buildingOpacity, setBuildingOpacity,
        wireOpacity, setWireOpacity,
        streetOpacity, setStreetOpacity,
        lineWeight, setLineWeight,
        isolationActive, setIsolationActive,
        parkModeActive, setParkModeActive,
        heroEngineActive, setHeroEngineActive,
        fov, setFov,
        panY, setPanY,
        autoRotate, setAutoRotate,
        canvasPreset, setCanvasPreset,
        isLoading, loadingProgress, loadingLayer,
        outlineStyle, setOutlineStyle,
        meta,
        cityList, activeCityKey, setActiveCityKey,
    } = useEngineStore(useShallow((s) => ({
        themeName: s.themeName,       setTheme: s.setTheme,
        timeMode: s.timeMode,         timeCurrent: s.timeCurrent,   timeSpeed: s.timeSpeed,
        setTimeMode: s.setTimeMode,   setTimeCurrent: s.setTimeCurrent, setTimeSpeed: s.setTimeSpeed,
        engineMode: s.engineMode,     setEngineMode: s.setEngineMode,
        isOrthographic: s.isOrthographic, toggleOrthographic: s.toggleOrthographic,
        plinthRadius: s.plinthRadius, setPlinthRadius: s.setPlinthRadius,
        shadowsEnabled: s.shadowsEnabled, setShadowsEnabled: s.setShadowsEnabled,
        shadowStyle: s.shadowStyle,   setShadowStyle: s.setShadowStyle,
        lightsVisible: s.lightsVisible, setLightsVisible: s.setLightsVisible,
        buildingOpacity: s.buildingOpacity, setBuildingOpacity: s.setBuildingOpacity,
        wireOpacity: s.wireOpacity,   setWireOpacity: s.setWireOpacity,
        streetOpacity: s.streetOpacity, setStreetOpacity: s.setStreetOpacity,
        lineWeight: s.lineWeight,     setLineWeight: s.setLineWeight,
        isolationActive: s.isolationActive, setIsolationActive: s.setIsolationActive,
        parkModeActive: s.parkModeActive,   setParkModeActive: s.setParkModeActive,
        heroEngineActive: s.heroEngineActive, setHeroEngineActive: s.setHeroEngineActive,
        fov: s.fov,                   setFov: s.setFov,
        panY: s.panY,                 setPanY: s.setPanY,
        autoRotate: s.autoRotate,     setAutoRotate: s.setAutoRotate,
        canvasPreset: s.canvasPreset, setCanvasPreset: s.setCanvasPreset,
        isLoading: s.isLoading,       loadingProgress: s.loadingProgress, loadingLayer: s.loadingLayer,
        outlineStyle: s.outlineStyle, setOutlineStyle: s.setOutlineStyle,
        meta: s.meta,
        cityList: s.cityList, activeCityKey: s.activeCityKey, setActiveCityKey: s.setActiveCityKey,
    })));

    const preset = CANVAS_PRESETS[canvasPreset] ?? CANVAS_PRESETS.hd;

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-zinc-950 select-none font-mono">

            {/* ── Left Sidebar ────────────────────────────────────────────── */}
            <aside className="w-80 shrink-0 flex flex-col bg-zinc-950 border-r border-zinc-800 overflow-y-auto overflow-x-hidden">

                {/* Logo / city header */}
                <div className="px-4 py-3 border-b border-zinc-800">
                    <p className="text-[11px] font-medium text-zinc-200 tracking-widest uppercase">
                        Vitro Omni-Engine
                    </p>
                    {cityList.length > 0 ? (
                        <select
                            className="mt-1.5 w-full bg-zinc-900 border border-zinc-800 rounded-sm px-2 py-1.5 text-[10px] text-zinc-300 cursor-pointer focus:outline-none focus:border-zinc-600 disabled:opacity-40"
                            value={activeCityKey ?? ''}
                            disabled={isLoading}
                            onChange={(e) => {
                                localStorage.setItem('activeCityKey', e.target.value);
                                window.location.reload();
                            }}
                        >
                            {cityList.map((c) => (
                                <option key={c.key} value={c.key}>{c.city}</option>
                            ))}
                        </select>
                    ) : meta?.city && (
                        <p className="text-[10px] text-zinc-500 mt-0.5">{meta.city}</p>
                    )}
                    {meta?.region && (
                        <p className="text-[9px] text-zinc-600 mt-0.5">{meta.region}</p>
                    )}
                </div>

                {/* ── Mode ──────────────────────────────────────────────────── */}
                <Section label="Mode">
                    <ChipGroup>
                        {['STUDIO', 'DIORAMA', 'SIM'].map((m) => (
                            <Chip key={m} label={m} active={engineMode === m} onClick={() => setEngineMode(m)} />
                        ))}
                    </ChipGroup>
                </Section>

                {/* ── Time of Day ───────────────────────────────────────────── */}
                <Section label="Time of Day">
                    <ChipGroup>
                        {['manual', 'auto', 'irl'].map((m) => (
                            <Chip key={m} label={m.toUpperCase()} active={timeMode === m} onClick={() => setTimeMode(m)} />
                        ))}
                    </ChipGroup>
                    {timeMode === 'manual' && (
                        <Row label="Time" value={formatTime(timeCurrent)}>
                            <Slider min={0} max={24} step={0.1} value={timeCurrent} onChange={setTimeCurrent} />
                        </Row>
                    )}
                    {timeMode === 'auto' && (
                        <Row label="Speed" value={`${timeSpeed.toFixed(1)}×`}>
                            <Slider min={0.1} max={30} step={0.1} value={timeSpeed} onChange={setTimeSpeed} />
                        </Row>
                    )}
                    {timeMode === 'irl' && (
                        <p className="px-4 pb-2 text-[9px] text-zinc-600 tabular-nums">
                            {formatTime(timeCurrent)} — solar at {meta?.lon?.toFixed(2) ?? '—'}°
                        </p>
                    )}
                </Section>

                {/* ── Camera ────────────────────────────────────────────────── */}
                <Section label="Camera">
                    <Row label="FOV" value={`${fov}°`}>
                        <Slider min={15} max={90} step={1} value={fov} onChange={setFov} />
                    </Row>
                    <Row label="Pan Y" value={`${panY}m`}>
                        <Slider min={0} max={800} step={10} value={panY} onChange={setPanY} />
                    </Row>
                    <div className="px-4 pt-1 pb-3 flex gap-1">
                        <button
                            className="flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
                            onClick={toggleOrthographic}
                        >
                            {isOrthographic ? 'Orthographic' : 'Perspective'}
                        </button>
                        <Toggle label="Rotate" active={autoRotate} onToggle={() => setAutoRotate(!autoRotate)} />
                    </div>
                </Section>

                {/* ── Appearance ────────────────────────────────────────────── */}
                <Section label="Appearance">
                    <div className="px-4 pb-2">
                        <select
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-2 py-1.5 text-[10px] text-zinc-300 cursor-pointer focus:outline-none focus:border-zinc-600"
                            value={themeName}
                            onChange={(e) => setTheme(e.target.value)}
                        >
                            {Object.keys(THEMES).map((k) => (
                                <option key={k} value={k}>{k}</option>
                            ))}
                        </select>
                    </div>
                    <Row label="Shadows">
                        {[['Soft', 0], ['Faint', 1], ['Toon', 2], ['Sketch', 3]].map(([lbl, val]) => (
                            <Chip key={val} label={lbl} active={shadowStyle === val} onClick={() => setShadowStyle(val)} />
                        ))}
                    </Row>
                    <Row label="Outlines">
                        {[['AA Lines', 'lineMat'], ['Fast', 'native'], ['None', 'none']].map(([lbl, val]) => (
                            <Chip key={val} label={lbl} active={outlineStyle === val} onClick={() => setOutlineStyle(val)} />
                        ))}
                    </Row>
                    <div className="pb-2" />
                </Section>

                {/* ── Layers ────────────────────────────────────────────────── */}
                <Section label="Layers">
                    <Row label="Buildings" value={buildingOpacity.toFixed(2)}>
                        <Slider min={0} max={1} step={0.01} value={buildingOpacity} onChange={setBuildingOpacity} />
                    </Row>
                    <Row label="Wireframe" value={wireOpacity.toFixed(2)}>
                        <Slider min={0} max={1} step={0.01} value={wireOpacity} onChange={setWireOpacity} />
                    </Row>
                    <Row label="Roads" value={streetOpacity.toFixed(2)}>
                        <Slider min={0} max={1} step={0.01} value={streetOpacity} onChange={setStreetOpacity} />
                    </Row>
                    <Row label="Line Wt" value={lineWeight.toFixed(2)}>
                        <Slider min={0} max={3} step={0.05} value={lineWeight} onChange={setLineWeight} />
                    </Row>
                    <Row label="Plinth" value={`${plinthRadius}m`}>
                        <Slider min={50} max={meta?.radius ?? 4000} step={25} value={plinthRadius} onChange={setPlinthRadius} />
                    </Row>
                    <div className="pb-2" />
                </Section>

                {/* ── Features ──────────────────────────────────────────────── */}
                <Section label="Features">
                    <div className="px-4 pt-1 pb-3 flex flex-wrap gap-1.5">
                        <Toggle label="Shadows" active={shadowsEnabled}   onToggle={() => setShadowsEnabled(!shadowsEnabled)} />
                        <Toggle label="Lights"  active={lightsVisible}    onToggle={() => setLightsVisible(!lightsVisible)} />
                        <Toggle label="Isolate" active={isolationActive}  onToggle={() => setIsolationActive(!isolationActive)} />
                        <Toggle label="Parks"   active={parkModeActive}   onToggle={() => setParkModeActive(!parkModeActive)} />
                        <Toggle label="Hero"    active={heroEngineActive} onToggle={() => setHeroEngineActive(!heroEngineActive)} />
                    </div>
                </Section>

                {/* ── Export ────────────────────────────────────────────────── */}
                <Section label="Export">
                    <div className="px-4 pb-2">
                        <select
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-2 py-1.5 text-[10px] text-zinc-300 cursor-pointer focus:outline-none focus:border-zinc-600"
                            value={canvasPreset}
                            onChange={(e) => setCanvasPreset(e.target.value)}
                        >
                            {Object.entries(CANVAS_PRESETS).map(([key, p]) => (
                                <option key={key} value={key}>{p.label}</option>
                            ))}
                        </select>
                        <p className="text-[9px] text-zinc-700 mt-1 tabular-nums">
                            {preset.w} × {preset.h} px
                        </p>
                    </div>
                    <div className="px-4 pb-4 flex gap-1">
                        <button
                            className="flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
                            onClick={exportImage}
                        >
                            PNG
                        </button>
                        <button
                            className="flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
                            onClick={exportSTL}
                        >
                            STL
                        </button>
                        <button
                            className="flex-1 py-1 rounded-sm text-[10px] border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors"
                            onClick={exportSVGPlotter}
                        >
                            SVG Plotter
                        </button>
                    </div>
                </Section>

            </aside>

            {/* ── Canvas Workspace ─────────────────────────────────────────── */}
            <div className="flex-1 flex flex-col overflow-hidden relative">

                {/* Canvas fills the workspace, CSS-scaled to fit */}
                <CanvasContainer />

                {/* Resolution badge — bottom-right corner of workspace */}
                <div className="absolute bottom-3 right-4 pointer-events-none">
                    <span className="text-[9px] text-zinc-700 tabular-nums">
                        {preset.w} × {preset.h}
                    </span>
                </div>

                {/* Loading overlay — covers only the canvas workspace */}
                {isLoading && (
                    <div
                        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                        style={{ background: 'rgba(10,10,10,0.88)' }}
                    >
                        <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-500 mb-4">
                            {loadingLayer || 'Initialising'}
                        </p>
                        <div className="w-48 h-px bg-zinc-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-zinc-400 transition-all duration-200"
                                style={{ width: `${loadingProgress}%` }}
                            />
                        </div>
                        <p className="text-[9px] text-zinc-600 mt-3 tabular-nums">
                            {loadingProgress}%
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}
