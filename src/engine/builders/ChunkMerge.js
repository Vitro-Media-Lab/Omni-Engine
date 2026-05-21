// ============================================================================
// ChunkMerge.js — Async geometry merge pipeline
// ============================================================================

import * as THREE                 from 'three';
import * as BufferGeometryUtils   from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LineSegmentsGeometry }   from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineSegments2 }          from 'three/examples/jsm/lines/LineSegments2.js';

let _engine = null;
export function setEngine(e) { _engine = e; }

// Yields to the browser event loop so the tab stays responsive during heavy builds.
export function yieldThread() {
    return new Promise(resolve => setTimeout(resolve, 0));
}

// Groups geometries into 500 m blocks so merged chunks contain geographically
// tight vertices, enabling frustum culling at the neighborhood level.
export function spatialSort(geoArray) {
    geoArray.forEach(g => { if (!g.boundingSphere) g.computeBoundingSphere(); });
    geoArray.sort((a, b) => {
        const aX = Math.floor(a.boundingSphere.center.x / 500);
        const aZ = Math.floor(a.boundingSphere.center.z / 500);
        const bX = Math.floor(b.boundingSphere.center.x / 500);
        const bZ = Math.floor(b.boundingSphere.center.z / 500);
        if (aX !== bX) return aX - bX;
        return aZ - bZ;
    });
}

export async function chunkAndMerge(geoArray, mat, isLine, targetGroup) {
    if (geoArray.length === 0) return;
    spatialSort(geoArray);

    const CHUNK_SIZE = isLine ? 500 : 250;
    for (let i = 0; i < geoArray.length; i += CHUNK_SIZE) {
        const chunk = geoArray.slice(i, i + CHUNK_SIZE);

        for (const g of chunk) {
            for (const name of Object.keys(g.attributes)) {
                if (name !== 'position' && name !== 'normal' && name !== 'color') g.deleteAttribute(name);
            }
        }

        const hasIdx = chunk.some(g => g.index !== null);
        const hasNon = chunk.some(g => g.index === null);
        const toMerge = (hasIdx && hasNon)
            ? chunk.map(g => g.index !== null ? g.toNonIndexed() : g)
            : chunk;

        const mGeo = BufferGeometryUtils.mergeGeometries(toMerge);
        if (toMerge !== chunk) toMerge.forEach((g, j) => { if (g !== chunk[j]) g.dispose(); });
        chunk.forEach(g => g.dispose());

        if (!mGeo) { await yieldThread(); continue; }

        let mMesh;
        if (isLine) {
            const lineGeo = new LineSegmentsGeometry();
            lineGeo.setPositions(mGeo.attributes.position.array);
            mGeo.dispose();
            mMesh = new LineSegments2(lineGeo, mat);
        } else {
            mMesh = new THREE.Mesh(mGeo, mat);
            mMesh.castShadow    = true;
            mMesh.receiveShadow = true;
        }

        mMesh.userData.isGhost  = false;
        mMesh.matrixAutoUpdate  = false;
        mMesh.updateMatrix();
        targetGroup.add(mMesh);
        await yieldThread();
    }
}

export async function flushMerge(fills, wires, roofFills, roofWires, details, mats) {
    if (fills.length)     { await chunkAndMerge(fills,     mats.bldgFill, false, _engine.groups.bFill);  fills.length     = 0; }
    if (wires.length)     { await chunkAndMerge(wires,     mats.ctxLine,  true,  _engine.groups.bWire);  wires.length     = 0; }
    if (roofFills.length) { await chunkAndMerge(roofFills, mats.bldgFill, false, _engine.groups.roofs);  roofFills.length = 0; }
    if (roofWires.length) { await chunkAndMerge(roofWires, mats.ctxLine,  true,  _engine.groups.roofs);  roofWires.length = 0; }
    if (details.length)   { await chunkAndMerge(details,   mats.ctxLine,  true,  _engine.groups.detail); details.length   = 0; }
}
