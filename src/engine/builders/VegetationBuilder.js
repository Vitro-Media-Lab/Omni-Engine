// ============================================================================
// VegetationBuilder.js — Instanced tree mesh with wind sway shader
// ============================================================================

import * as THREE               from 'three';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { project, getElevationAt } from '../world/GeoMath.js';
import { getRings }                from '../utils/GeoUtils.js';
import { pointInRing }             from '../world/SpatialGrid.js';
import { applyInstancedBaseShader } from '../shaders/ShaderInjectors.js';
import { registerCSMMaterial }      from '../lighting/LightingSystem.js';

let _engine = null;
export function setEngine(e) { _engine = e; }

export function initVegetation(vData, sData, railData) {
    if (!vData?.features?.length) return;

    const blockedCells = new Set();
    const CELL_SIZE    = 6.0;

    function blockPath(data) {
        if (!data?.features) return;
        for (const f of data.features) {
            const gt = f.geometry?.type;
            if (gt !== 'LineString' && gt !== 'MultiLineString') continue;
            const coords = gt === 'LineString' ? [f.geometry.coordinates] : f.geometry.coordinates;
            for (const path of coords) {
                let lastValid = null;
                for (const pt of path) {
                    const proj = project(pt[0], pt[1]);
                    if (!proj.valid) continue;
                    const v = new THREE.Vector2(proj.x, -proj.y);
                    if (lastValid) {
                        const steps = Math.max(1, Math.ceil(lastValid.distanceTo(v) / (CELL_SIZE / 2)));
                        for (let i = 0; i <= steps; i++) {
                            const p = new THREE.Vector2().lerpVectors(lastValid, v, i / steps);
                            const cx = Math.floor(p.x / CELL_SIZE), cz = Math.floor(p.y / CELL_SIZE);
                            blockedCells.add(`${cx}_${cz}`);
                            blockedCells.add(`${cx+1}_${cz}`); blockedCells.add(`${cx-1}_${cz}`);
                            blockedCells.add(`${cx}_${cz+1}`); blockedCells.add(`${cx}_${cz-1}`);
                        }
                    }
                    lastValid = v;
                }
            }
        }
    }

    blockPath(sData);
    blockPath(railData);

    const canopyGeo = new THREE.ConeGeometry(1.5, 4.0, 5);
    canopyGeo.translate(0, 3.5, 0);
    const trunkGeo = new THREE.CylinderGeometry(0.2, 0.25, 1.5, 4);
    trunkGeo.translate(0, 0.75, 0);
    const treeGeo = BufferGeometryUtils.mergeGeometries([canopyGeo, trunkGeo]);
    canopyGeo.dispose(); trunkGeo.dispose();

    const matTree = new THREE.MeshLambertMaterial({ color: 0x4a8a3a });
    registerCSMMaterial(matTree);
    const csmCompileTree = matTree.onBeforeCompile;
    matTree.onBeforeCompile = (shader, renderer) => {
        applyInstancedBaseShader(shader);
        shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `#include <begin_vertex>
             vec3 _wPos = (modelMatrix * instanceMatrix * vec4(position, 1.0)).xyz;
             float sway = sin(_wPos.x * 0.05 + uTime * 1.5) * sin(_wPos.z * 0.05 + uTime * 1.2);
             transformed.x += sway * max(0.0, position.y - 0.5) * 0.15;
             transformed.z += sway * max(0.0, position.y - 0.5) * 0.15;`
        );
        csmCompileTree(shader, renderer);
    };

    const MAX   = _engine.maxTrees;
    const iMesh = new THREE.InstancedMesh(treeGeo, matTree, MAX);
    iMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
    iMesh.frustumCulled = false;
    iMesh.castShadow    = true;
    iMesh.receiveShadow = true;
    iMesh.userData.colorKey = 'tree';

    const dummy  = new THREE.Object3D();
    const radius = _engine.meta?.radius || 1000;
    let   totalPotential = 0;
    const polygonJobs    = [];

    for (const feature of vData.features) {
        if (!feature.geometry) continue;
        for (const ring of getRings(feature.geometry)) {
            if (!ring[0] || ring[0].length < 3) continue;
            const worldRing = ring[0].map(pt => {
                const p = project(pt[0], pt[1]);
                return { x: p.x, z: -p.y };
            });

            let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
            let trueArea = 0;
            for (let i = 0; i < worldRing.length; i++) {
                const p = worldRing[i], np = worldRing[(i + 1) % worldRing.length];
                if (p.x < minX) minX = p.x; if (p.x > maxX) maxX = p.x;
                if (p.z < minZ) minZ = p.z; if (p.z > maxZ) maxZ = p.z;
                trueArea += (p.x * np.z) - (np.x * p.z);
            }
            trueArea = Math.abs(trueArea) / 2.0;

            const potential = Math.max(1, Math.floor(trueArea / 100));
            totalPotential += potential;
            polygonJobs.push({ worldRing, bounds: { minX, maxX, minZ, maxZ }, potential });
        }
    }

    const globalScale = MAX / (totalPotential || 1);
    let   totalCount  = 0;

    for (const job of polygonJobs) {
        if (totalCount >= MAX) break;
        const count = Math.ceil(job.potential * globalScale);
        const { minX, maxX, minZ, maxZ } = job.bounds;

        for (let i = 0; i < count; i++) {
            if (totalCount >= MAX) break;
            for (let attempt = 0; attempt < 10; attempt++) {
                const rx = minX + Math.random() * (maxX - minX);
                const rz = minZ + Math.random() * (maxZ - minZ);
                if (Math.hypot(rx, rz) > radius) continue;
                if (!pointInRing(rx, rz, job.worldRing)) continue;
                const cx = Math.floor(rx / CELL_SIZE), cz = Math.floor(rz / CELL_SIZE);
                if (blockedCells.has(`${cx}_${cz}`)) continue;

                const y = getElevationAt(rx, rz);
                const scale = 0.5 + Math.random() * 1.0;
                dummy.position.set(rx, y, rz);
                dummy.scale.set(scale, scale, scale);
                dummy.rotation.y = Math.random() * Math.PI * 2;
                dummy.updateMatrix();
                iMesh.setMatrixAt(totalCount++, dummy.matrix);
                break;
            }
        }
    }

    iMesh.count = totalCount;
    iMesh.instanceMatrix.needsUpdate = true;
    _engine.treeMesh       = iMesh;
    _engine.treeMeshTotal  = totalCount;
    _engine.groups.veg.add(iMesh);
}
