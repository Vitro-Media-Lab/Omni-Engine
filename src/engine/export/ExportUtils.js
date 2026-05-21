// ============================================================================
// ExportUtils.js — Image, turntable, STL, and SVG plotter exports
// ============================================================================
// All UI state (paper size, DPI, portrait, line weight, etc.) is read from the
// Zustand store instead of the DOM.  The Three.js engine is accessed via the
// _engine reference set by setEngine().
// ============================================================================

import * as THREE            from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { STLExporter }       from 'three/examples/jsm/exporters/STLExporter.js';
import useEngineStore, { CANVAS_PRESETS } from '../../store/useEngineStore.js';
import { isWireObject }      from '../shaders/ShaderInjectors.js';
import { getElevationAt }    from '../world/GeoMath.js';
import { LightingState, setTimeOfDay } from '../lighting/LightingSystem.js';

let _engine = null;
export function setEngine(e) { _engine = e; }

// ── Internal helpers ──────────────────────────────────────────────────────────

function _setMatProp(node, prop, value) {
    if (!node.material) return;
    const mats = Array.isArray(node.material) ? node.material : [node.material];
    for (const m of mats) { if (m) m[prop] = value; }
}

function _bgIsLight(bgHex) {
    const c = new THREE.Color(bgHex);
    return (0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b) > 0.5;
}

function _getPresetDims() {
    // Always use the export preset dimensions, not the live preview renderer size.
    // The renderer runs at a capped preview resolution during interaction.
    const { canvasPreset } = useEngineStore.getState();
    const preset = CANVAS_PRESETS[canvasPreset] ?? CANVAS_PRESETS.hd;
    return { pixelW: preset.w, pixelH: preset.h };
}

// ============================================================================
// SKETCH MODE TOGGLE
// ============================================================================

export function toggleSketchMode(enabled) {
    const mat = _engine?.materials?.matContextLine;
    if (!mat) return;
    mat.userData.isSketchy.value = enabled ? 1.0 : 0.0;
    const lWt = useEngineStore.getState().lineWeight;
    mat.linewidth = enabled ? 0.001 : lWt;
}

// ============================================================================
// IMAGE EXPORT — high-resolution tiled render
// ============================================================================
// Renders into a 2K×2K tile buffer, composites tiles onto a CPU canvas at the
// target export resolution, then triggers a PNG download.
//
// Two-pass per tile: solid fill pass → wire overlay with multiply/screen blend.
// Line weights are scaled up proportionally to the export resolution.
// ============================================================================

export function exportImage() {
    if (!_engine) return;

    if (window.vitroLastExportURL) URL.revokeObjectURL(window.vitroLastExportURL);

    const store     = useEngineStore.getState();
    const lWt       = store.lineWeight;
    const scale     = 4; // fixed export DPI multiplier (400 dpi)

    // Use renderer size as the export pixel dimensions
    const { pixelW, pixelH } = _getPresetDims();
    let expW = pixelW * scale;
    let expH = pixelH * scale;

    const MAX_AREA = 100_000_000;
    if (expW * expH > MAX_AREA) {
        const shrink = Math.sqrt(MAX_AREA / (expW * expH));
        expW = Math.floor(expW * shrink);
        expH = Math.floor(expH * shrink);
        console.warn(`[ExportUtils] Export clamped to ${expW}×${expH}`);
    }

    let comp = document.createElement('canvas');
    comp.width  = expW;
    comp.height = expH;
    const ctx = comp.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const origPixelRatio = _engine.renderer.getPixelRatio();
    const oldSize = new THREE.Vector2();
    _engine.renderer.getSize(oldSize);
    _engine.renderer.setPixelRatio(1);

    // Adjust camera frustum for export aspect
    const exportAspect = expW / expH;
    const f = _engine.meta?.radius ? _engine.meta.radius * 4.0 : 4000;
    if (_engine.camera.isOrthographicCamera) {
        _engine.camera.left   = (f * exportAspect) / -2;
        _engine.camera.right  = (f * exportAspect) /  2;
        _engine.camera.top    = f /  2;
        _engine.camera.bottom = f / -2;
    } else {
        _engine.camera.aspect = exportAspect;
    }
    _engine.camera.updateProjectionMatrix();

    _engine.scene.traverse(c => {
        if (c.isMesh || isWireObject(c)) c.frustumCulled = false;
    });

    const MAX_TILE = 2048;
    const BLEED    = 16;
    const tileSize = MAX_TILE + BLEED * 2;
    _engine.renderer.setSize(tileSize, tileSize);

    _engine.scene.traverse(c => {
        if (c.material?.isLineMaterial) c.material.resolution.set(tileSize, tileSize);
    });

    const tilesX = Math.ceil(expW / MAX_TILE);
    const tilesY = Math.ceil(expH / MAX_TILE);

    _engine.updateStyles?.();

    const lineScale = scale;
    const scaledMats = new Set();
    _engine.scene.traverse(c => {
        if (c.material?.isLineMaterial && !scaledMats.has(c.material)) {
            c.material.linewidth *= lineScale;
            scaledMats.add(c.material);
        }
    });

    const visSnapshot = new Map();
    _engine.scene.traverse(c => {
        if (c.isMesh || isWireObject(c)) visSnapshot.set(c, c.visible);
    });

    const savedBackground = _engine.scene.background;

    for (let ty = 0; ty < tilesY; ty++) {
        for (let tx = 0; tx < tilesX; tx++) {
            const dstX = tx * MAX_TILE;
            const dstY = ty * MAX_TILE;
            const dstW = Math.min(MAX_TILE, expW - dstX);
            const dstH = Math.min(MAX_TILE, expH - dstY);

            _engine.camera.setViewOffset(
                expW, expH,
                dstX - BLEED, dstY - BLEED,
                tileSize, tileSize,
            );

            _engine.renderer.autoClear = true;
            _engine.scene.background   = savedBackground;
            _engine.scene.traverse(c => {
                if (c.isMesh || isWireObject(c)) c.visible = visSnapshot.get(c) ?? false;
                if (c.isMesh) { _setMatProp(c, 'colorWrite', true); _setMatProp(c, 'depthWrite', true); }
            });
            _engine.renderer.render(_engine.scene, _engine.camera);

            ctx.drawImage(_engine.renderer.domElement, BLEED, BLEED, dstW, dstH, dstX, dstY, dstW, dstH);
        }
    }

    // Grid overlay drawn on top of the rendered scene
    if (_engine.currentTheme.grid) {
        const hexInk  = _engine.currentTheme.ink.toString(16).padStart(6, '0');
        const pCanvas = document.createElement('canvas');
        pCanvas.width = 20; pCanvas.height = 20;
        const pCtx = pCanvas.getContext('2d');
        pCtx.strokeStyle = '#' + hexInk;
        pCtx.globalAlpha = 0.07;
        pCtx.lineWidth = 1;
        pCtx.beginPath();
        pCtx.moveTo(0, 20);  pCtx.lineTo(20, 0);
        pCtx.moveTo(-1, 1);  pCtx.lineTo(1, -1);
        pCtx.moveTo(19, 21); pCtx.lineTo(21, 19);
        pCtx.stroke();
        ctx.fillStyle = ctx.createPattern(pCanvas, 'repeat');
        ctx.fillRect(0, 0, expW, expH);
    }

    // ── Cleanup ───────────────────────────────────────────────────────────────
    _engine.camera.clearViewOffset();
    if (LightingState.csm) {
        setTimeOfDay(_engine.time.current);
        _engine._applyShadowToggle(useEngineStore.getState().shadowsEnabled);
    } else {
        _engine.scene.background = savedBackground ?? new THREE.Color(_engine.currentTheme.bg);
    }
    _engine.scene.traverse(c => {
        if (c.isMesh) { _setMatProp(c, 'colorWrite', true); _setMatProp(c, 'depthWrite', true); }
        if ((c.isMesh && !c.isInstancedMesh) || isWireObject(c)) c.frustumCulled = true;
    });

    // Restore renderer size
    _engine.renderer.setPixelRatio(origPixelRatio);
    _engine.renderer.setSize(oldSize.x, oldSize.y, false);

    // Restore camera frustum
    if (_engine.camera.isOrthographicCamera) {
        const restoredAspect = oldSize.x / oldSize.y;
        _engine.camera.left   = (f * restoredAspect) / -2;
        _engine.camera.right  = (f * restoredAspect) /  2;
    } else {
        _engine.camera.aspect = oldSize.x / oldSize.y;
    }
    _engine.camera.updateProjectionMatrix();

    _engine.updateStyles?.();

    // ── Download ──────────────────────────────────────────────────────────────
    const link = document.createElement('a');
    link.download = `Vitro_Export_${Date.now()}.png`;
    window.vitroLastExportURL = comp.toDataURL('image/png');
    link.href = window.vitroLastExportURL;
    link.click();

    comp.width = 0; comp.height = 0; comp = null;
}

// ============================================================================
// TURNTABLE SEQUENCE EXPORT — orbiting JPEG frames zipped via JSZip
// ============================================================================

export async function exportTurntableSequence(
    durationSeconds = 10,
    fps             = 30,
    inputW          = 1920,
    inputH          = 1080,
    exportPR        = 2,
) {
    if (!_engine) return;
    if (!window.JSZip) { console.error('[ExportUtils] JSZip not loaded'); return; }

    const store      = useEngineStore.getState();
    const isPortrait = (store.canvasPreset ?? 'hd').includes('p'); // crude portrait check
    const pixelW     = isPortrait ? Math.min(inputW, inputH) : Math.max(inputW, inputH);
    const pixelH     = isPortrait ? Math.max(inputW, inputH) : Math.min(inputW, inputH);

    const totalFrames   = durationSeconds * fps;
    const MAX_ZIP_BYTES = 1.5 * 1024 * 1024 * 1024;
    let zip             = new window.JSZip();
    let folder          = zip.folder('Vitro_Sequence');
    let currentZipBytes = 0;
    let zipPartIndex    = 1;

    const origPos    = _engine.camera.position.clone();
    const origTarget = _engine.controls.target.clone();
    const origPR     = _engine.renderer.getPixelRatio();
    const oldSize    = new THREE.Vector2();
    _engine.renderer.getSize(oldSize);

    _engine.renderer.setSize(pixelW, pixelH);
    _engine.renderer.setPixelRatio(exportPR);

    const aspect = pixelW / pixelH;
    const f      = _engine.meta?.radius ? _engine.meta.radius * 4.0 : 4000;

    if (_engine.camera.isOrthographicCamera) {
        _engine.camera.left   = (f * aspect) / -2;
        _engine.camera.right  = (f * aspect) /  2;
        _engine.camera.top    = f /  2;
        _engine.camera.bottom = f / -2;
    } else {
        _engine.camera.aspect = aspect;
    }
    _engine.camera.updateProjectionMatrix();

    const cx     = _engine.focusPoint.x;
    const cz     = _engine.focusPoint.z;
    const radius = Math.hypot(origPos.x - cx, origPos.z - cz);
    const height = origPos.y;

    for (let i = 0; i < totalFrames; i++) {
        const angle = (i / totalFrames) * Math.PI * 2;
        _engine.camera.position.set(
            cx + Math.cos(angle) * radius,
            height,
            cz + Math.sin(angle) * radius,
        );
        _engine.controls.target.set(cx, origTarget.y, cz);
        _engine.camera.lookAt(cx, origTarget.y, cz);
        _engine.camera.updateMatrixWorld();

        _engine.updateStyles?.();
        _engine.renderer.render(_engine.scene, _engine.camera);

        const blob = await new Promise(resolve =>
            _engine.renderer.domElement.toBlob(resolve, 'image/jpeg', 0.95),
        );
        const arrayBuf = await blob.arrayBuffer();
        const frameName = `frame_${String(i + 1).padStart(4, '0')}.jpg`;
        folder.file(frameName, new Uint8Array(arrayBuf));
        currentZipBytes += arrayBuf.byteLength;

        if (currentZipBytes >= MAX_ZIP_BYTES && i < totalFrames - 1) {
            const partData = await zip.generateAsync({ type: 'uint8array', streamFiles: true });
            const partUrl  = URL.createObjectURL(new Blob([partData], { type: 'application/zip' }));
            const pl = document.createElement('a');
            pl.href = partUrl;
            pl.download = `Vitro_Sequence_${Date.now()}_part${zipPartIndex}.zip`;
            pl.click();
            URL.revokeObjectURL(partUrl);
            zipPartIndex++;
            zip    = new window.JSZip();
            folder = zip.folder('Vitro_Sequence');
            currentZipBytes = 0;
        }

        await new Promise(r => setTimeout(r, 15));
    }

    const zipData = await zip.generateAsync({ type: 'uint8array', streamFiles: true });
    const url = URL.createObjectURL(new Blob([zipData], { type: 'application/zip' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = zipPartIndex > 1
        ? `Vitro_Sequence_${Date.now()}_part${zipPartIndex}.zip`
        : `Vitro_Sequence_${Date.now()}.zip`;
    link.click();
    URL.revokeObjectURL(url);

    // Restore state
    _engine.renderer.setPixelRatio(origPR);
    _engine.renderer.setSize(oldSize.x, oldSize.y, false);
    _engine.camera.position.copy(origPos);
    _engine.controls.target.copy(origTarget);
    if (_engine.camera.isOrthographicCamera) {
        const oldAspect = oldSize.x / oldSize.y;
        _engine.camera.left  = (f * oldAspect) / -2;
        _engine.camera.right = (f * oldAspect) /  2;
    } else {
        _engine.camera.aspect = oldSize.x / oldSize.y;
    }
    _engine.camera.updateProjectionMatrix();
    _engine.controls.update();
}

// ============================================================================
// STL EXPORT — binary 3D-print-ready city export
// ============================================================================
// Strategy: clone solid geometry, clip to plinth circle by triangle centroid,
// build a contoured base whose top rim traces the terrain elevation, bake
// instanced trees, then run STLExporter.parse(binary:true).
// ============================================================================

export function exportSTL(filename = 'vitro_city.stl') {
    if (!_engine) return;

    const plinthRadius = _engine.uniforms.uPlinthRadius.value;
    const centerX      = _engine.uniforms.uCenter.value.x;
    const centerZ      = _engine.uniforms.uCenter.value.y;
    const plinthR2     = plinthRadius * plinthRadius;

    const isInsidePlinth = (x, z) => {
        const dx = x - centerX, dz = z - centerZ;
        return (dx * dx + dz * dz) <= plinthR2;
    };

    // Clip a geometry to the plinth circle — removes triangles whose centroid
    // falls outside. Returns a new non-indexed BufferGeometry or null.
    const clipToPlinth = (geo) => {
        const pos = geo.attributes.position;
        const idx = geo.index;
        if (!pos) return null;

        let triCount, getIdx;
        if (idx) {
            triCount = idx.count / 3;
            getIdx   = (t) => [idx.getX(t * 3), idx.getX(t * 3 + 1), idx.getX(t * 3 + 2)];
        } else {
            triCount = pos.count / 3;
            getIdx   = (t) => [t * 3, t * 3 + 1, t * 3 + 2];
        }

        const kept = [];
        for (let t = 0; t < triCount; t++) {
            const [i0, i1, i2] = getIdx(t);
            const cx = (pos.getX(i0) + pos.getX(i1) + pos.getX(i2)) / 3;
            const cz = (pos.getZ(i0) + pos.getZ(i1) + pos.getZ(i2)) / 3;
            if (!isInsidePlinth(cx, cz)) continue;
            kept.push(
                pos.getX(i0), pos.getY(i0), pos.getZ(i0),
                pos.getX(i1), pos.getY(i1), pos.getZ(i1),
                pos.getX(i2), pos.getY(i2), pos.getZ(i2),
            );
        }
        if (kept.length === 0) return null;
        const newGeo = new THREE.BufferGeometry();
        newGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(kept), 3));
        newGeo.computeVertexNormals();
        return newGeo;
    };

    // Contoured circular base that traces terrain elevation along its top rim
    const buildContouredBase = (radius, cx, cz) => {
        const segments = 256;
        const wallGeo  = new THREE.CylinderGeometry(radius, radius, 1, segments, 1, true);
        const pos      = wallGeo.attributes.position;

        let minY = Infinity;
        for (let i = 0; i <= segments; i++) {
            const a = (i / segments) * Math.PI * 2;
            const y = getElevationAt(cx + Math.cos(a) * radius, cz + Math.sin(a) * radius);
            if (y < minY) minY = y;
        }
        const bottomY = minY - 20.0;

        for (let i = 0; i < pos.count; i++) {
            const wx = pos.getX(i) + cx;
            const wz = pos.getZ(i) + cz;
            pos.setY(i, pos.getY(i) > 0 ? getElevationAt(wx, wz) : bottomY);
        }
        wallGeo.translate(cx, 0, cz);

        const floorGeo = new THREE.CircleGeometry(radius, segments);
        floorGeo.rotateX(Math.PI / 2);
        floorGeo.translate(cx, bottomY, cz);

        const finalGeo = BufferGeometryUtils.mergeGeometries([wallGeo, floorGeo]);
        finalGeo.computeVertexNormals();
        const mat = new THREE.MeshLambertMaterial({ color: 0xdddddd, side: THREE.DoubleSide });
        return { mesh: new THREE.Mesh(finalGeo, mat), bottomY };
    };

    // ── 1. Build export scene ────────────────────────────────────────────────
    const exportScene  = new THREE.Scene();
    const solidGroups  = ['bFill', 'roofs', 'tunnels'];

    for (const key of solidGroups) {
        const group = _engine.groups[key];
        if (!group) continue;
        group.traverse(child => {
            if (!child.isMesh || isWireObject(child) || child.isInstancedMesh) return;
            const pos = child.geometry?.attributes?.position;
            if (!pos || pos.count < 3) return;
            if (child.userData.px !== undefined && !isInsidePlinth(child.userData.px, child.userData.pz)) return;

            const clone      = child.clone();
            const clippedGeo = clipToPlinth(clone.geometry);
            if (!clippedGeo) { clone.geometry.dispose(); return; }
            clone.geometry.dispose();
            clone.geometry = clippedGeo;

            const origColor = clone.material?.color?.getHex() ?? 0xcccccc;
            clone.material  = new THREE.MeshLambertMaterial({ color: origColor, side: THREE.DoubleSide });
            exportScene.add(clone);
        });
    }

    // ── 2. Contoured base + terrain ──────────────────────────────────────────
    const baseData = buildContouredBase(plinthRadius, centerX, centerZ);
    exportScene.add(baseData.mesh);

    const topoGroup = _engine.groups.topo;
    if (topoGroup) {
        topoGroup.children.forEach(mesh => {
            if (!mesh.isMesh || isWireObject(mesh)) return;
            const origColor  = mesh.material?.color?.getHex() ?? 0xdddddd;
            const exportMesh = mesh.clone();
            exportMesh.material = new THREE.MeshLambertMaterial({ color: origColor, side: THREE.DoubleSide });
            exportMesh.geometry.applyMatrix4(exportMesh.matrixWorld);
            exportMesh.position.set(0, 0, 0);
            exportMesh.rotation.set(0, 0, 0);
            exportMesh.scale.set(1, 1, 1);

            const tPos = exportMesh.geometry.attributes.position;
            for (let i = 0; i < tPos.count; i++) {
                const x = tPos.getX(i), z = tPos.getZ(i);
                if (Math.hypot(x - centerX, z - centerZ) > plinthRadius)
                    tPos.setXYZ(i, centerX, baseData.bottomY, centerZ);
            }
            tPos.needsUpdate = true;
            exportMesh.geometry.computeVertexNormals();
            exportScene.add(exportMesh);
        });
    }

    // ── 3. Bake instanced trees ──────────────────────────────────────────────
    const treeGeos = [];
    const vegGroup = _engine.groups.veg;
    if (vegGroup) {
        vegGroup.traverse(child => {
            if (!child.isInstancedMesh || isWireObject(child)) return;
            const baseGeo = child.geometry;
            const matrix  = new THREE.Matrix4();
            const position = new THREE.Vector3();
            const quaternion = new THREE.Quaternion();
            const scale = new THREE.Vector3();

            for (let i = 0; i < child.count; i++) {
                child.getMatrixAt(i, matrix);
                position.setFromMatrixPosition(matrix);
                quaternion.setFromRotationMatrix(matrix);
                scale.setFromMatrixScale(matrix);
                if (!isInsidePlinth(position.x, position.z)) continue;
                position.y = getElevationAt(position.x, position.z) - 0.5;
                const iGeo = baseGeo.clone();
                iGeo.applyMatrix4(new THREE.Matrix4().compose(position, quaternion, scale));
                treeGeos.push(iGeo);
            }
        });
        if (treeGeos.length > 0) {
            const mergedTree = BufferGeometryUtils.mergeGeometries(treeGeos);
            const treeMat    = new THREE.MeshLambertMaterial({ color: 0x4a8a3a, side: THREE.DoubleSide });
            exportScene.add(new THREE.Mesh(mergedTree, treeMat));
            for (const g of treeGeos) g.dispose();
        }
    }

    // ── 4. Export & download ─────────────────────────────────────────────────
    const stlBuffer = new STLExporter().parse(exportScene, { binary: true });
    const blob = new Blob([stlBuffer], { type: 'application/octet-stream' });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = filename;
    document.body.appendChild(link); link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    exportScene.traverse(node => {
        if (!node.isMesh) return;
        node.geometry?.dispose();
        const mats = Array.isArray(node.material) ? node.material : [node.material];
        for (const m of mats) m?.dispose();
    });

    console.log(`[ExportUtils] STL exported: "${filename}"`);
}

// ============================================================================
// SVG PLOTTER EXPORT — pure vector pen-plotter output with hidden-line removal
// ============================================================================
// Reads raw LineSegments2 geometry buffers, projects 3D points to 2D screen
// space, and clips line segments against projected solid faces (Cyrus-Beck).
// Output: a clean <svg> file ready for AxiDraw or similar pen plotters.
// ============================================================================

// ── 2D math primitives ────────────────────────────────────────────────────────

class _Vec2 {
    constructor(x = 0, y = 0) { this.x = x; this.y = y; }
    clone()    { return new _Vec2(this.x, this.y); }
    sub(v)     { return new _Vec2(this.x - v.x, this.y - v.y); }
    add(v)     { return new _Vec2(this.x + v.x, this.y + v.y); }
    scale(s)   { return new _Vec2(this.x * s, this.y * s); }
    dot(v)     { return this.x * v.x + this.y * v.y; }
    cross(v)   { return this.x * v.y - this.y * v.x; }
    len()      { return Math.hypot(this.x, this.y); }
    dist(v)    { return Math.hypot(this.x - v.x, this.y - v.y); }
    normalize(){ const l = this.len(); return l > 1e-12 ? this.scale(1 / l) : new _Vec2(); }
}

function _aabb2D(pts) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const p of pts) {
        if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
        if (p.y < minY) minY = p.y; if (p.y > maxY) maxY = p.y;
    }
    return { minX, minY, maxX, maxY };
}

function _aabbOverlap(a, b) {
    return a.minX <= b.maxX && a.maxX >= b.minX && a.minY <= b.maxY && a.maxY >= b.minY;
}

// Cyrus-Beck clipping: returns visible sub-segments of p1→p2 OUTSIDE convex poly.
function _clipLineToConvexPoly(p1, p2, poly) {
    const n   = poly.length;
    const dir = p2.sub(p1);
    const len = dir.len();
    if (len < 1e-12) return [];

    let cx = 0, cy = 0;
    for (let i = 0; i < n; i++) { cx += poly[i].x; cy += poly[i].y; }
    cx /= n; cy /= n;

    let tMin = 0, tMax = 1;

    for (let i = 0; i < n; i++) {
        const a    = poly[i], b = poly[(i + 1) % n];
        const edge = b.sub(a);
        const nX   = -edge.y, nY = edge.x;
        const nLen = Math.hypot(nX, nY);
        if (nLen < 1e-12) continue;

        const cDot = (cx - a.x) * nX + (cy - a.y) * nY;
        let outNX, outNY;
        if (cDot >= 0) { outNX = -nX / nLen; outNY = -nY / nLen; }
        else            { outNX =  nX / nLen; outNY =  nY / nLen; }

        const w    = p1.sub(a);
        const dDotN = dir.x * outNX + dir.y * outNY;
        const wDotN = (w.x * outNX + w.y * outNY) - 0.001 * dDotN;

        if (Math.abs(dDotN) < 1e-12) {
            if (wDotN > 0) return [{ p1, p2 }];
            continue;
        }
        const t = -wDotN / dDotN;
        if (dDotN < 0) tMin = Math.max(tMin, t);
        else           tMax = Math.min(tMax, t);
        if (tMin > tMax + 1e-10) return [];
    }

    tMin = Math.max(0, tMin);
    tMax = Math.min(1, tMax);
    if (tMin >= tMax - 1e-10) return [];

    const result = [];
    if (tMin > 1e-10)
        result.push({ p1, p2: new _Vec2(p1.x + dir.x * tMin, p1.y + dir.y * tMin) });
    if (tMax < 1 - 1e-10)
        result.push({ p1: new _Vec2(p1.x + dir.x * tMax, p1.y + dir.y * tMax), p2 });
    return result;
}

// ── Main SVG export ───────────────────────────────────────────────────────────

export function exportSVGPlotter(filename = 'vitro_plotter.svg') {
    if (!_engine) return;

    const store = useEngineStore.getState();
    const { canvasPreset } = store;

    // Use export preset dimensions for physical size (renderer runs at preview res).
    const { pixelW: exportW, pixelH: exportH } = _getPresetDims();
    const physW = exportW / 100;
    const physH = exportH / 100;

    const TARGET_WIDTH = 2000;
    const aspect = physW / physH;
    const width  = TARGET_WIDTH;
    const height = Math.round(TARGET_WIDTH / aspect);

    _engine.camera.updateMatrixWorld();
    _engine.camera.updateProjectionMatrix();

    const _vec = new THREE.Vector3();
    const projectTo2D = (x, y, z) => {
        _vec.set(x, y, z).project(_engine.camera);
        if (_vec.z > 1.0) return null;
        return {
            x: (_vec.x * 0.5 + 0.5) * width,
            y: (1.0 - (_vec.y * 0.5 + 0.5)) * height,
            z: _vec.z,
        };
    };

    const plinthRadius = _engine.uniforms.uPlinthRadius.value;
    const centerX      = _engine.uniforms.uCenter.value.x;
    const centerZ      = _engine.uniforms.uCenter.value.y;
    const plinthR2     = plinthRadius * plinthRadius;
    const isInsidePlinth = (x, z) => {
        const dx = x - centerX, dz = z - centerZ;
        return (dx * dx + dz * dz) <= plinthR2;
    };

    // ── Collect occluding faces (tunnels only — buildings self-occlude) ────────
    const occluders    = [];
    const solidGroups  = ['tunnels'];
    const _vA = new THREE.Vector3(), _vB = new THREE.Vector3(), _vC = new THREE.Vector3();

    for (const key of solidGroups) {
        const group = _engine.groups[key];
        if (!group) continue;
        group.traverse(child => {
            if (!child.visible || !child.isMesh || isWireObject(child) || !child.geometry) return;
            const matrix = child.matrixWorld;
            const pos    = child.geometry.attributes.position;
            if (!pos) return;
            const idx = child.geometry.index;
            let triCount, getIndices;
            if (idx) {
                triCount   = Math.floor(idx.count / 3);
                getIndices = (t) => [idx.getX(t * 3), idx.getX(t * 3 + 1), idx.getX(t * 3 + 2)];
            } else {
                triCount   = Math.floor(pos.count / 3);
                getIndices = (t) => [t * 3, t * 3 + 1, t * 3 + 2];
            }
            for (let t = 0; t < triCount; t++) {
                const [i0, i1, i2] = getIndices(t);
                _vA.set(pos.getX(i0), pos.getY(i0), pos.getZ(i0)).applyMatrix4(matrix);
                _vB.set(pos.getX(i1), pos.getY(i1), pos.getZ(i1)).applyMatrix4(matrix);
                _vC.set(pos.getX(i2), pos.getY(i2), pos.getZ(i2)).applyMatrix4(matrix);

                const normal   = _vB.clone().sub(_vA).cross(_vC.clone().sub(_vA));
                const camFace  = _vA.clone().sub(_engine.camera.position);
                if (normal.dot(camFace) >= 0) continue; // back-face cull

                const cx = (_vA.x + _vB.x + _vC.x) / 3;
                const cz = (_vA.z + _vB.z + _vC.z) / 3;
                if (!isInsidePlinth(cx, cz)) continue;

                const pA = projectTo2D(_vA.x, _vA.y, _vA.z);
                const pB = projectTo2D(_vB.x, _vB.y, _vB.z);
                const pC = projectTo2D(_vC.x, _vC.y, _vC.z);
                if (!pA || !pB || !pC) continue;

                const poly = [new _Vec2(pA.x, pA.y), new _Vec2(pB.x, pB.y), new _Vec2(pC.x, pC.y)];
                const aabb = _aabb2D(poly);
                const minZ = Math.min(pA.z, pB.z, pC.z);
                const maxZ = Math.max(pA.z, pB.z, pC.z);
                occluders.push({ poly, minZ, maxZ, aabb });
            }
        });
    }

    occluders.sort((a, b) => a.minZ - b.minZ);

    // Spatial grid for occluder lookup
    const GRID_SIZE = 80;
    const gridCols  = Math.ceil(width  / GRID_SIZE) + 1;
    const gridRows  = Math.ceil(height / GRID_SIZE) + 1;
    const grid      = Array.from({ length: gridCols }, () =>
        Array.from({ length: gridRows }, () => []),
    );
    for (let oi = 0; oi < occluders.length; oi++) {
        const { aabb } = occluders[oi];
        const cMin = Math.max(0, Math.floor(aabb.minX / GRID_SIZE));
        const cMax = Math.min(gridCols - 1, Math.floor(aabb.maxX / GRID_SIZE));
        const rMin = Math.max(0, Math.floor(aabb.minY / GRID_SIZE));
        const rMax = Math.min(gridRows - 1, Math.floor(aabb.maxY / GRID_SIZE));
        for (let c = cMin; c <= cMax; c++)
            for (let r = rMin; r <= rMax; r++)
                grid[c][r].push(oi);
    }

    // ── Traverse wire groups → project → HLR clip → emit SVG lines ───────────
    const svgLines   = [];
    const wireGroups = ['bWire', 'roofs', 'roads', 'rails', 'ski', 'detail'];
    const _start = new THREE.Vector3(), _end = new THREE.Vector3(), _mid = new THREE.Vector3();
    const _segQueue = [];

    for (const key of wireGroups) {
        const group = _engine.groups[key];
        if (!group) continue;

        group.traverse(child => {
            if (!child.visible || !isWireObject(child)) return;
            const matrix     = child.matrixWorld;
            const attrStart  = child.geometry?.attributes?.instanceStart;
            const attrEnd    = child.geometry?.attributes?.instanceEnd;

            const processSegment = (ws, we) => {
                _mid.lerpVectors(ws, we, 0.5);
                if (!isInsidePlinth(_mid.x, _mid.z)) return;
                const p1 = projectTo2D(ws.x, ws.y, ws.z);
                const p2 = projectTo2D(we.x, we.y, we.z);
                if (!p1 || !p2) return;

                const segAABB = {
                    minX: Math.min(p1.x, p2.x), minY: Math.min(p1.y, p2.y),
                    maxX: Math.max(p1.x, p2.x), maxY: Math.max(p1.y, p2.y),
                };
                const cMin = Math.max(0, Math.floor(segAABB.minX / GRID_SIZE));
                const cMax = Math.min(gridCols - 1, Math.floor(segAABB.maxX / GRID_SIZE));
                const rMin = Math.max(0, Math.floor(segAABB.minY / GRID_SIZE));
                const rMax = Math.min(gridRows - 1, Math.floor(segAABB.maxY / GRID_SIZE));

                const candidateSet = new Set();
                const candidates   = [];
                for (let c = cMin; c <= cMax; c++)
                    for (let r = rMin; r <= rMax; r++)
                        for (const oi of grid[c][r])
                            if (!candidateSet.has(oi)) { candidateSet.add(oi); candidates.push(oi); }

                const vp1 = new _Vec2(p1.x, p1.y);
                const vp2 = new _Vec2(p2.x, p2.y);
                _segQueue.length = 0;
                _segQueue.push({ p1: vp1, p2: vp2 });

                const lineMaxZ = Math.max(p1.z, p2.z);
                for (const oi of candidates) {
                    const occ = occluders[oi];
                    if (lineMaxZ <= occ.minZ) continue;
                    if (!_aabbOverlap(segAABB, occ.aabb)) continue;

                    const currentCount = _segQueue.length;
                    for (let qi = 0; qi < currentCount; qi++) {
                        const seg = _segQueue[qi];
                        if (!seg) continue;
                        const visible = _clipLineToConvexPoly(seg.p1, seg.p2, occ.poly);
                        if      (visible.length === 0) _segQueue[qi] = null;
                        else if (visible.length === 1) _segQueue[qi] = visible[0];
                        else { _segQueue[qi] = visible[0]; _segQueue.push(visible[1]); }
                    }
                    let w = 0;
                    for (let ri = 0; ri < _segQueue.length; ri++)
                        if (_segQueue[ri] !== null) _segQueue[w++] = _segQueue[ri];
                    _segQueue.length = w;
                    if (_segQueue.length === 0) return;
                }

                for (const seg of _segQueue) {
                    svgLines.push(
                        `<line x1="${seg.p1.x.toFixed(2)}" y1="${seg.p1.y.toFixed(2)}" ` +
                        `x2="${seg.p2.x.toFixed(2)}" y2="${seg.p2.y.toFixed(2)}" ` +
                        `stroke="black" stroke-width="1" fill="none" />`,
                    );
                }
            };

            if (!attrStart || !attrEnd) {
                const posAttr = child.geometry?.attributes?.position;
                if (posAttr) {
                    for (let i = 0; i < posAttr.count - 1; i += 2) {
                        _start.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)).applyMatrix4(matrix);
                        _end.set(posAttr.getX(i + 1), posAttr.getY(i + 1), posAttr.getZ(i + 1)).applyMatrix4(matrix);
                        processSegment(_start, _end);
                    }
                }
                return;
            }

            for (let i = 0; i < attrStart.count; i++) {
                _start.set(attrStart.getX(i), attrStart.getY(i), attrStart.getZ(i)).applyMatrix4(matrix);
                _end.set(attrEnd.getX(i), attrEnd.getY(i), attrEnd.getZ(i)).applyMatrix4(matrix);
                processSegment(_start, _end);
            }
        });
    }

    // ── Assemble and download ─────────────────────────────────────────────────
    const svgContent = [
        `<?xml version="1.0" encoding="UTF-8"?>`,
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${physW}in" height="${physH}in">`,
        ...svgLines,
        `</svg>`,
    ].join('\n');

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url; link.download = filename;
    document.body.appendChild(link); link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log(`[ExportUtils] SVG exported: "${filename}" — ${svgLines.length} segments, ${occluders.length} occluders`);
}
