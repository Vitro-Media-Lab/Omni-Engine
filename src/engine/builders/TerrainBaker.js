// ============================================================================
// TerrainBaker.js — Canvas 2D terrain texture baker
// ============================================================================

import * as THREE         from 'three';
import { project }        from '../world/GeoMath.js';
import {
    zoningColorKey,
    vegColorKey,
    parkColorKey,
    hardscapeColorKey,
} from './PolygonLayer.js';

let _engine = null;
export function setEngine(e) { _engine = e; }

export function bakeTerrainTexture(zData, pData, vData, wData, skiData, hData, radius, theme) {
    const maxHwSize   = _engine.renderer.capabilities.maxTextureSize;
    const targetSize  = _engine.highResGround ? 32768 : 8192;
    const SIZE        = Math.min(targetSize, maxHwSize);

    const canvas   = document.createElement('canvas');
    canvas.width   = SIZE;
    canvas.height  = SIZE;
    const ctx      = canvas.getContext('2d');

    ctx.fillStyle = '#' + new THREE.Color(theme.topo).getHexString();
    ctx.fillRect(0, 0, SIZE, SIZE);

    const drawLayer = (data, colorKeyFn, defaultColorHex) => {
        if (!data?.features) return;
        data.features.forEach(feature => {
            if (!feature.geometry) return;
            const gt = feature.geometry.type;
            if (gt !== 'Polygon' && gt !== 'MultiPolygon') return;

            const cKey = colorKeyFn ? colorKeyFn(feature) : null;
            const hex  = cKey ? theme[cKey] : defaultColorHex;
            if (hex === undefined || hex === null) return;

            ctx.fillStyle = '#' + new THREE.Color(hex).getHexString();
            ctx.beginPath();

            const coordsArray = gt === 'Polygon'
                ? [feature.geometry.coordinates]
                : feature.geometry.coordinates;

            coordsArray.forEach(path => {
                path.forEach(points => {
                    if (!points || points.length < 2) return;
                    let firstPx = null, lastPx = null;
                    points.forEach(pt => {
                        const proj = project(pt[0], pt[1]);
                        if (!proj.valid) return;
                        const px = ((proj.x  + radius) / (radius * 2)) * SIZE;
                        const py = ((-proj.y + radius) / (radius * 2)) * SIZE;
                        if (firstPx === null) { ctx.moveTo(px, py); firstPx = { x: px, y: py }; }
                        else ctx.lineTo(px, py);
                        lastPx = { x: px, y: py };
                    });
                    if (firstPx && lastPx) {
                        const gap = Math.hypot(lastPx.x - firstPx.x, lastPx.y - firstPx.y);
                        if (gap > SIZE * 0.20) {
                            const mx = (firstPx.x + lastPx.x) / 2, my = (firstPx.y + lastPx.y) / 2;
                            let dx = mx - SIZE / 2, dy = my - SIZE / 2;
                            const dist = Math.hypot(dx, dy) || 1;
                            dx /= dist; dy /= dist;
                            const td = SIZE * 2;
                            ctx.lineTo(lastPx.x  + dx * td, lastPx.y  + dy * td);
                            ctx.lineTo(firstPx.x + dx * td, firstPx.y + dy * td);
                        }
                        ctx.closePath();
                    }
                });
            });
            ctx.fill('evenodd');
        });
    };

    drawLayer(zData, zoningColorKey,    theme.institutional);
    drawLayer(vData, vegColorKey,       theme.veg);
    drawLayer(pData, parkColorKey,      theme.park);
    drawLayer(wData, () => 'water',     theme.water);
    drawLayer(hData, hardscapeColorKey, null);

    if (skiData?.features) {
        ctx.strokeStyle = '#' + new THREE.Color(theme.skiRun || 0xffffff).getHexString();
        ctx.fillStyle   = ctx.strokeStyle;
        ctx.lineCap     = 'round';
        ctx.lineJoin    = 'round';

        skiData.features.forEach(feature => {
            if (!feature.properties?.['piste:type'] || !feature.geometry) return;
            const gt          = feature.geometry.type;
            if (gt === 'Point' || gt === 'MultiPoint' || gt === 'GeometryCollection') return;
            const isPoly      = gt === 'Polygon' || gt === 'MultiPolygon';
            const coordsArray = (gt === 'LineString' || gt === 'Polygon')
                ? [feature.geometry.coordinates] : feature.geometry.coordinates;

            ctx.lineWidth = isPoly ? 0 : Math.max(2, SIZE * 0.0015);
            ctx.beginPath();
            coordsArray.forEach(path => {
                const ring = isPoly ? path[0] : path;
                ring.forEach((pt, i) => {
                    const proj = project(pt[0], pt[1]);
                    if (!proj.valid) return;
                    const px = ((proj.x  + radius) / (radius * 2)) * SIZE;
                    const py = ((-proj.y + radius) / (radius * 2)) * SIZE;
                    if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                });
            });
            if (isPoly) ctx.fill('evenodd'); else ctx.stroke();
        });
    }

    const texture               = new THREE.CanvasTexture(canvas);
    texture.flipY               = false;
    texture.anisotropy          = _engine.renderer.capabilities.getMaxAnisotropy();
    texture.colorSpace          = THREE.SRGBColorSpace;
    texture.generateMipmaps     = true;
    texture.minFilter           = THREE.LinearMipMapLinearFilter;
    return texture;
}
