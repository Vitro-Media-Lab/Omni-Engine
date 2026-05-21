import React, { useRef, useEffect } from 'react';
import { EngineClass } from '../engine/Engine';
import useEngineStore, { CANVAS_PRESETS } from '../store/useEngineStore';

// Must match PREVIEW_MAX in Engine.js
const PREVIEW_MAX = 1280;
function _previewDims(preset) {
    const scale = Math.min(1, PREVIEW_MAX / Math.max(preset.w, preset.h));
    return { w: Math.round(preset.w * scale), h: Math.round(preset.h * scale) };
}

export default function CanvasContainer() {
    const canvasRef  = useRef(null);
    const wrapperRef = useRef(null);

    const canvasPreset = useEngineStore((s) => s.canvasPreset);
    const preset       = CANVAS_PRESETS[canvasPreset] ?? CANVAS_PRESETS.hd;
    const { w: pvW, h: pvH } = _previewDims(preset);

    // ── CSS display scale ─────────────────────────────────────────────────────
    useEffect(() => {
        const canvas  = canvasRef.current;
        const wrapper = wrapperRef.current;
        if (!canvas || !wrapper) return;

        const apply = () => {
            const scale = Math.min(
                wrapper.clientWidth  / pvW,
                wrapper.clientHeight / pvH,
            );
            canvas.style.width  = `${Math.floor(pvW * scale)}px`;
            canvas.style.height = `${Math.floor(pvH * scale)}px`;
        };

        const ro = new ResizeObserver(apply);
        ro.observe(wrapper);
        apply();
        return () => ro.disconnect();
    }, [pvW, pvH]);

    // ── Engine lifecycle ──────────────────────────────────────────────────────
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let engine = null;
        let alive  = true;
        const { setMeta, setLoading, setCityList, setActiveCityKey } = useEngineStore.getState();

        // Populate the city dropdown from the index (fire-and-forget).
        fetch('/cache/cities/index.json')
            .then((r) => r.json())
            .then((list) => setCityList(list))
            .catch(() => {});

        // If the user previously selected a city, load it; otherwise load the
        // default metadata.json that ships with the public folder.
        const savedKey = localStorage.getItem('activeCityKey');
        const metaUrl  = savedKey
            ? `/cache/cities/${savedKey}/metadata.json`
            : '/metadata.json';

        fetch(metaUrl)
            .then((r) => {
                const ct = r.headers.get('content-type') ?? '';
                if (!r.ok || ct.includes('text/html')) throw new Error(`metadata: ${r.status || 'not found'}`);
                return r.json();
            })
            .then((meta) => {
                if (!alive) return;
                // Derive the city key from data_path and keep localStorage in sync.
                const parts = (meta.data_path ?? '').replace(/\/$/, '').split('/');
                const key   = parts[parts.length - 1] || savedKey || '';
                if (key) {
                    localStorage.setItem('activeCityKey', key);
                    setActiveCityKey(key);
                }
                setMeta(meta);
                engine = new EngineClass(canvas, meta);
            })
            .catch((err) => {
                console.error('[CanvasContainer]', err);
                if (!alive) return;
                // Stale city key — clear it so the next reload falls back to root metadata.
                if (savedKey) {
                    localStorage.removeItem('activeCityKey');
                    setActiveCityKey(null);
                }
                engine = new EngineClass(canvas, null);
                setLoading(false);
            });

        return () => {
            alive = false;
            engine?.shutdown();
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="flex-1 flex items-center justify-center overflow-hidden"
            style={{ background: '#1a1a1a', padding: '32px' }}
        >
            <canvas
                ref={canvasRef}
                style={{ display: 'block', boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 32px 80px rgba(0,0,0,0.4)' }}
                tabIndex={-1}
            />
        </div>
    );
}
