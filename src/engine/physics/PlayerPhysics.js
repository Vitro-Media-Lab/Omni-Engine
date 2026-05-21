// ============================================================================
// PlayerPhysics.js — First-person player physics for the Vitro Omni-Engine
// ============================================================================
//
// State machine
// -------------
//   WALK  — grounded, direct velocity control, slope-following
//   SKATE — grounded, momentum-based, downhill gravity component, roll lean
//   FALL  — airborne without glide, WASD gives air-steering nudges
//   GLIDE — airborne with Shift held, aerodynamic nose-tracking + lift
//
// Substep collision
// -----------------
//   Movement is split into N sub-steps so that even at 160 m/s the player
//   never teleports through a wall. Each sub-step resolves, in order:
//     1. Bridge segments (capsule–segment, closest-point, best-interior)
//     2. Bridge polygons (point-in-ring, yTop snap)
//     3. Tunnels (capsule–segment, floor+ceiling+lateral wall)
//     4. Caverns (polygon, inverted building — walls push inward)
//     5. Buildings (polygon roof-land + ring-edge wall push + mantle)
//     6. Terrain (last resort — geometry always wins)
//
// Engine API contract
// -------------------
//   updatePlayerPhysics(rawDt, engine, getElevationAt, getStructureAt, isInPortalHole)
//   `engine` must expose:
//     - engine.camera        THREE.PerspectiveCamera
//     - engine.keyState      { [code: string]: boolean }
// ============================================================================

import * as THREE from 'three';

// ── Configuration ─────────────────────────────────────────────────────────────

export const PlayerConfig = {
    gravity: -35.0,
    coyoteTimeMs: 120,
    physics: {
        playerRadius: 0.4,
        eyeHeight: 1.8,
        hardDropThreshold: -30.0
    },
    mantle: {
        reach: 2.5,
        speed: 15.0
    },
    speeds: {
        walk: 5.0,
        sprint: 12.0,
        skateBase: 20.0,
        skateBoost: 35.0,
        glideMax: 160.0,
        fallMax: 60.0
    },
    jump: {
        walkForce: 7.5,
        skateForceBase: 9.0,
        coyoteForce: 7.5,
        wallForceH: 12.0,
        wallForceV: 12.0,
        boostKickoffForward: 18.0,
        boostKickoffY: 6.0
    }
};

// ── State ─────────────────────────────────────────────────────────────────────

export const PlayerState = {
    isActive: false,
    movementState: 'WALK',
    velocity: new THREE.Vector3(0, 0, 0),
    isGrounded: false,
    isUnderground: false,
    cameraHeading: 0,
    cameraPitch: 0,
    bodyHeading: 0,
    roll: 0,
    wallRoll: 0,
    fallTilt: 0,
    baseFov: 70,

    lastGroundedTime: 0,
    lastJumpTime: 0,

    telemetry: {
        lastVelocity: new THREE.Vector3(0, 0, 0),
        lastUpdateTime: 0,
        currentSpeed: 0,
        currentElevation: 0,
        currentHeading: 0,
        currentGForce: 0,
        unitSystem: 'imperial'
    }
};

// ── Pre-allocated scratch vectors (zero GC in the hot path) ───────────────────

const _surfaceNormal    = new THREE.Vector3(0, 1, 0);
const _gravity          = new THREE.Vector3(0, PlayerConfig.gravity, 0);
const _bodyForward      = new THREE.Vector3();
const _bodyRight        = new THREE.Vector3();
const _camForward       = new THREE.Vector3();
const _camRight         = new THREE.Vector3();
const _moveDir          = new THREE.Vector3();
const _targetVelocity   = new THREE.Vector3();
const _tempVec3A        = new THREE.Vector3();
const _tempVec3B        = new THREE.Vector3();
const _tempVec3C        = new THREE.Vector3();
const _wallNormal       = new THREE.Vector3();
const _telemetryGravity = new THREE.Vector3(0, -9.80665, 0);

let _wasSpacePressed = false;

// ── Helpers ───────────────────────────────────────────────────────────────────

const setDirectionVects = (heading, forwardVec, rightVec) => {
    const s = Math.sin(heading);
    const c = Math.cos(heading);
    forwardVec.set(-s, 0, -c);
    rightVec.set(c, 0, -s);
};

function isPointInPolygon(px, pz, ring) {
    let isInside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const xi = ring[i].x, zi = ring[i].z;
        const xj = ring[j].x, zj = ring[j].z;
        const intersect = ((zi > pz) !== (zj > pz)) &&
            (px < (xj - xi) * (pz - zi) / (zj - zi) + xi);
        if (intersect) isInside = !isInside;
    }
    return isInside;
}

function _noPortalHole() { return false; }

// ── Telemetry ─────────────────────────────────────────────────────────────────

function updateTelemetryState(P, dt, camera) {
    const telemetry = P.telemetry;
    const now = performance.now();
    const timeDelta = (now - telemetry.lastUpdateTime) / 1000;

    if (telemetry.lastUpdateTime > 0 && timeDelta > 0) {
        _tempVec3A.subVectors(P.velocity, telemetry.lastVelocity).divideScalar(timeDelta);
        _tempVec3B.subVectors(_tempVec3A, _telemetryGravity);
        telemetry.currentGForce = _tempVec3B.length() / 9.80665;
    }

    telemetry.lastVelocity.copy(P.velocity);
    telemetry.lastUpdateTime = now;

    const speedMs = P.velocity.length();
    telemetry.currentSpeed = telemetry.unitSystem === 'metric'
        ? speedMs * 3.6
        : speedMs * 2.23694;

    const elevationY = camera?.position?.y ?? 0;
    telemetry.currentElevation = telemetry.unitSystem === 'metric'
        ? elevationY
        : elevationY * 3.28084;

    let heading = THREE.MathUtils.radToDeg(P.cameraHeading);
    while (heading < 0)   heading += 360;
    while (heading >= 360) heading -= 360;
    telemetry.currentHeading = heading;
}

// ── Main export ───────────────────────────────────────────────────────────────

export function updatePlayerPhysics(rawDt, engine, getElevationAt, getStructureAt, isInPortalHole) {
    if (!PlayerState.isActive) return;

    const dt = Math.max(0.001, Math.min(rawDt, 0.1));
    const P  = PlayerState;
    const pos = engine.camera.position;
    const now = performance.now();

    if (!isFinite(P.velocity.x) || !isFinite(P.velocity.y) || !isFinite(P.velocity.z))
        P.velocity.set(0, 0, 0);
    if (!isFinite(pos.x) || !isFinite(pos.y) || !isFinite(pos.z))
        pos.set(0, 200, 0);

    const inputState    = gatherInput(engine);
    const portalHoleFn  = isInPortalHole || _noPortalHole;

    updateTerrainNormal(pos, getElevationAt, getStructureAt, P, portalHoleFn);
    updateBodyOrientation(dt, P, inputState);

    if (P.isGrounded) {
        handleGroundedState(dt, P, inputState, now);
    } else {
        handleAirborneState(dt, P, inputState, now, pos, getElevationAt);
    }

    applyVelocityAndDrag(dt, P, inputState);
    applySubsteppedMovement(dt, P, pos, inputState, getElevationAt, getStructureAt, now, portalHoleFn);
    updateCameraOrientation(dt, engine.camera, P);
    updateTelemetryState(P, dt, engine.camera);
}

// ── Input ─────────────────────────────────────────────────────────────────────

function gatherInput(engine) {
    const isSpacePressed = !!engine.keyState['Space'];
    const jumpJustPressed = isSpacePressed && !_wasSpacePressed;
    _wasSpacePressed = isSpacePressed;

    return {
        forward:  !!engine.keyState['KeyW'],
        backward: !!engine.keyState['KeyS'],
        left:     !!engine.keyState['KeyA'],
        right:    !!engine.keyState['KeyD'],
        jump:     jumpJustPressed,
        boost:    !!engine.keyState['ShiftLeft'] || !!engine.keyState['ShiftRight']
    };
}

// ── Terrain normal ────────────────────────────────────────────────────────────

function updateTerrainNormal(pos, getElevationAt, getStructureAt, P, isInPortalHole) {
    if (P.isUnderground || isInPortalHole(pos.x, pos.z)) {
        _surfaceNormal.set(0, 1, 0);
        return;
    }

    let onStructure = false;

    if (P.isGrounded) {
        const structs = extractStructures(getStructureAt, pos.x, pos.z);
        const feetY   = pos.y - PlayerConfig.physics.eyeHeight;

        let highestValidRoof = -Infinity;
        let activeStruct     = null;

        for (const struct of structs) {
            if (feetY >= struct.yTop - 0.5) {
                if (struct.type === 'bridge' ||
                    (struct.ring && isPointInPolygon(pos.x, pos.z, struct.ring))) {
                    if (struct.yTop > highestValidRoof) {
                        highestValidRoof = struct.yTop;
                        activeStruct = struct;
                    }
                }
            }
        }

        if (activeStruct) {
            if (activeStruct.type === 'bridge') {
                _tempVec3A.set(
                    activeStruct.p2.x - activeStruct.p1.x,
                    activeStruct.p2.y - activeStruct.p1.y,
                    activeStruct.p2.z - activeStruct.p1.z
                );
                if (_tempVec3A.lengthSq() > 0.0001) {
                    _tempVec3A.normalize();
                    _tempVec3B.set(_tempVec3A.z, 0, -_tempVec3A.x).normalize();
                    _surfaceNormal.crossVectors(_tempVec3B, _tempVec3A).normalize();
                    if (_surfaceNormal.y < 0) _surfaceNormal.negate();
                } else {
                    _surfaceNormal.set(0, 1, 0);
                }
            } else {
                _surfaceNormal.set(0, 1, 0);
            }
            onStructure = true;
        }
    }

    if (!onStructure) {
        const step = 1.0;
        const dx = getElevationAt(pos.x + step, pos.z) - getElevationAt(pos.x - step, pos.z);
        const dz = getElevationAt(pos.x, pos.z + step) - getElevationAt(pos.x, pos.z - step);
        _surfaceNormal.set(-dx, step * 2.0, -dz).normalize();
    }
}

// ── Body orientation ──────────────────────────────────────────────────────────

function updateBodyOrientation(dt, P, input) {
    setDirectionVects(P.cameraHeading, _camForward, _camRight);
    let headDiff = P.cameraHeading - P.bodyHeading;
    headDiff = THREE.MathUtils.euclideanModulo(headDiff + Math.PI, Math.PI * 2) - Math.PI;

    if (!P.isGrounded) P.bodyHeading += headDiff * 4.0 * dt;

    const rollDecay = 1.0 - Math.exp(-15.0 * dt);
    if (P.movementState === 'WALK') {
        P.bodyHeading = P.cameraHeading;
        P.roll *= (1.0 - rollDecay);
    }
}

// ── Grounded state ────────────────────────────────────────────────────────────

function handleGroundedState(dt, P, input, now) {
    const horizSpeed = Math.hypot(P.velocity.x, P.velocity.z);

    if (P.movementState === 'FALL' || P.movementState === 'GLIDE')
        P.movementState = horizSpeed > 10.0 ? 'SKATE' : 'WALK';
    if (P.movementState === 'SKATE' && horizSpeed < 2.0)
        P.movementState = 'WALK';

    const camSlopeForward = _tempVec3A.copy(_camForward).projectOnPlane(_surfaceNormal).normalize();
    const camSlopeRight   = _tempVec3B.copy(_camRight).projectOnPlane(_surfaceNormal).normalize();

    if (P.movementState === 'WALK') {
        _moveDir.set(0, 0, 0);
        if (input.forward)  _moveDir.add(camSlopeForward);
        if (input.backward) _moveDir.sub(camSlopeForward);
        if (input.left)     _moveDir.sub(camSlopeRight);
        if (input.right)    _moveDir.add(camSlopeRight);

        const velDecay = 1.0 - Math.exp(-12.0 * dt);

        if (_moveDir.lengthSq() === 0) {
            P.velocity.multiplyScalar(1.0 - (1.0 - Math.exp(-15.0 * dt)));
            if (P.velocity.length() < 0.5) P.velocity.set(0, 0, 0);
        } else {
            _moveDir.normalize();
            const targetSpeed = input.boost ? PlayerConfig.speeds.sprint : PlayerConfig.speeds.walk;
            _targetVelocity.copy(_moveDir).multiplyScalar(targetSpeed);
            P.velocity.lerp(_targetVelocity, velDecay);
        }

        if (input.jump) {
            if (input.boost && horizSpeed > 3.0) {
                P.movementState = 'SKATE';
                P.velocity.copy(camSlopeForward).multiplyScalar(PlayerConfig.jump.boostKickoffForward);
                P.velocity.y = Math.max(P.velocity.y, PlayerConfig.jump.boostKickoffY);
            } else {
                P.velocity.y = Math.max(P.velocity.y, PlayerConfig.jump.walkForce);
            }
            P.isGrounded  = false;
            P.lastJumpTime = now;
        }
    } else if (P.movementState === 'SKATE') {
        let headDiff = P.cameraHeading - P.bodyHeading;
        headDiff = THREE.MathUtils.euclideanModulo(headDiff + Math.PI, Math.PI * 2) - Math.PI;
        P.bodyHeading += headDiff * 5.0 * dt;

        let targetRoll = 0;
        if (input.left)  targetRoll =  0.3;
        if (input.right) targetRoll = -0.3;

        const rollDecay = 1.0 - Math.exp(-8.0 * dt);
        P.roll += (targetRoll - P.roll) * rollDecay;
        P.bodyHeading += P.roll * 3.0 * dt;

        setDirectionVects(P.bodyHeading, _bodyForward, _bodyRight);
        const slopeForward  = _tempVec3C.copy(_bodyForward).projectOnPlane(_surfaceNormal).normalize();
        const downhillForce = _tempVec3A.copy(_gravity).projectOnPlane(_surfaceNormal);

        P.velocity.addScaledVector(downhillForce, dt);

        if (input.forward) P.velocity.addScaledVector(slopeForward, 15.0 * dt);
        if (input.backward) {
            const brakeDecay = 1.0 - Math.exp(-5.0 * dt);
            P.velocity.multiplyScalar(1.0 - brakeDecay);
        }

        if (horizSpeed > 0.1) {
            const grip        = input.boost ? 3.0 : 8.0;
            const currentSpeed = P.velocity.length();
            const gripDecay    = 1.0 - Math.exp(-grip * dt);
            P.velocity.normalize().lerp(slopeForward, gripDecay).normalize().multiplyScalar(currentSpeed);
        }

        if (input.jump && (now - P.lastGroundedTime < 150)) {
            P.velocity.y   = Math.max(P.velocity.y, PlayerConfig.jump.skateForceBase + (horizSpeed * 0.1));
            P.isGrounded   = false;
            P.lastJumpTime = now;
        }
    }
}

// ── Airborne state ────────────────────────────────────────────────────────────

function handleAirborneState(dt, P, input, now, pos, getElevationAt) {
    if (input.jump &&
        (now - P.lastGroundedTime < PlayerConfig.coyoteTimeMs) &&
        (now - P.lastJumpTime > PlayerConfig.coyoteTimeMs)) {
        P.velocity.y   = Math.max(P.velocity.y, PlayerConfig.jump.coyoteForce);
        P.lastJumpTime = now;
    }

    P.velocity.addScaledVector(_gravity, dt);

    const horizSpeed  = Math.hypot(P.velocity.x, P.velocity.z);
    const currentSpeed = P.velocity.length();

    const distToGround = pos.y - PlayerConfig.physics.eyeHeight - getElevationAt(pos.x, pos.z);
    const canGlide = distToGround > 3.0 || horizSpeed > 15.0 || P.movementState === 'GLIDE';

    const sh = Math.sin(P.bodyHeading);
    const ch = Math.cos(P.bodyHeading);
    const cp = Math.cos(P.cameraPitch);
    const sp = Math.sin(P.cameraPitch);
    const noseDir = _tempVec3C.set(-sh * cp, sp, -ch * cp).normalize();

    let isStalled = false;

    if (input.boost && canGlide) {
        let alignDot = 1.0;
        if (currentSpeed > 0.1) {
            const velDir = _tempVec3B.copy(P.velocity).normalize();
            alignDot = velDir.dot(noseDir);
        }

        if (alignDot < 0.5 && currentSpeed > 5.0) {
            const turningDrag = (0.5 - alignDot) * 4.0;
            P.velocity.multiplyScalar(Math.max(0, 1.0 - turningDrag * dt));
        }

        if (P.velocity.length() < 12.0 && P.cameraPitch > -0.2) isStalled = true;
        else if (alignDot < 0.0) isStalled = true;
    } else {
        isStalled = true;
    }

    if (!isStalled) {
        P.movementState = 'GLIDE';

        let targetRoll = 0;
        if (input.left)  targetRoll =  0.6;
        if (input.right) targetRoll = -0.6;

        const rollDecay = 1.0 - Math.exp(-6.0 * dt);
        P.roll += (targetRoll - P.roll) * rollDecay;
        P.bodyHeading += P.roll * 3.0 * dt;

        const updatedSh = Math.sin(P.bodyHeading);
        const updatedCh = Math.cos(P.bodyHeading);
        noseDir.set(-updatedSh * cp, sp, -updatedCh * cp).normalize();

        const postBrakeSpeed = P.velocity.length();
        _bodyForward.set(Math.sin(-P.bodyHeading), 0, Math.cos(-P.bodyHeading));

        let bendRate = 2.0;
        if (P.cameraPitch > 0) bendRate = 1.2;
        if (P.cameraPitch < 0) bendRate = 3.5;

        const bendDecay = 1.0 - Math.exp(-bendRate * dt);

        _tempVec3A.copy(P.velocity).normalize();
        _tempVec3A.lerp(noseDir, bendDecay).normalize();
        P.velocity.copy(_tempVec3A).multiplyScalar(postBrakeSpeed);

        const forwardSpeed = Math.max(0, P.velocity.dot(noseDir));
        const levelness    = Math.max(0, Math.cos(P.cameraPitch));
        const baseLift     = Math.min(Math.abs(PlayerConfig.gravity), forwardSpeed * 1.0) * levelness;
        P.velocity.y += baseLift * dt;

    } else {
        P.movementState = 'FALL';
        const flatDecay = 1.0 - Math.exp(-5.0 * dt);
        P.roll *= (1.0 - flatDecay);

        if (input.left)     P.velocity.addScaledVector(_camRight, -15.0 * dt);
        if (input.right)    P.velocity.addScaledVector(_camRight,  15.0 * dt);
        if (input.backward) P.velocity.addScaledVector(_camForward, -15.0 * dt);
        if (input.forward)  P.velocity.addScaledVector(_camForward,  15.0 * dt);
    }
}

// ── Speed limits and drag ─────────────────────────────────────────────────────
// Caps true 3D hypotenuse (not horizontal projection) for WALK/SKATE, so
// uphill slopes cannot silently boost total speed past the intended limit.

function applyVelocityAndDrag(dt, P, input) {
    const horizSpeed = Math.hypot(P.velocity.x, P.velocity.z);
    const totalSpeed = P.velocity.length();

    if (P.movementState === 'WALK' || P.movementState === 'SKATE') {
        let targetMaxSpeed = PlayerConfig.speeds.walk;
        if (P.movementState === 'SKATE')
            targetMaxSpeed = input.boost ? PlayerConfig.speeds.skateBoost : PlayerConfig.speeds.skateBase;

        if (totalSpeed > targetMaxSpeed) {
            const bleedDecay = 1.0 - Math.exp(-3.0 * dt);
            P.velocity.x -= P.velocity.x * bleedDecay;
            P.velocity.y -= P.velocity.y * bleedDecay;
            P.velocity.z -= P.velocity.z * bleedDecay;
        }
    } else if (P.movementState === 'FALL') {
        if (horizSpeed > PlayerConfig.speeds.fallMax) {
            const bleedDecay = 1.0 - Math.exp(-1.5 * dt);
            P.velocity.x -= P.velocity.x * bleedDecay;
            P.velocity.z -= P.velocity.z * bleedDecay;
        }
    }

    const dragForce = 0.005 + P.velocity.lengthSq() * 0.000001;
    const dragDecay = 1.0 - Math.exp(-dragForce * dt);
    P.velocity.multiplyScalar(1.0 - dragDecay);
}

// ── Structure query helpers ───────────────────────────────────────────────────

function extractStructures(getStructureAt, x, z) {
    if (!getStructureAt) return [];
    const result = getStructureAt(x, z);
    if (!result) return [];
    if (Array.isArray(result)) return result;
    if (result.parts && Array.isArray(result.parts) && result.parts.length > 0) return result.parts;
    return [result];
}

function getNearbyStructures(pos, P, getStructureAt) {
    const r = PlayerConfig.physics.playerRadius;
    const pts = [
        { x: pos.x,                      z: pos.z },
        { x: pos.x + r,                  z: pos.z },
        { x: pos.x - r,                  z: pos.z },
        { x: pos.x,                      z: pos.z + r },
        { x: pos.x,                      z: pos.z - r },
        { x: pos.x + P.velocity.x * 0.1, z: pos.z + P.velocity.z * 0.1 }
    ];

    const uniqueStructs = [];
    for (const pt of pts) {
        const structs = extractStructures(getStructureAt, pt.x, pt.z);
        for (const s of structs) {
            if ((s.type === 'building' || s.type === 'bridge' ||
                 s.type === 'bridgePoly' || s.type === 'tunnel' || s.type === 'cavern') &&
                !uniqueStructs.includes(s)) {
                uniqueStructs.push(s);
            }
        }
    }
    return uniqueStructs;
}

// ── Sub-stepped movement and collision ────────────────────────────────────────

function applySubsteppedMovement(dt, P, pos, input, getElevationAt, getStructureAt, now, isInPortalHole) {
    const distThisFrame = P.velocity.length() * dt;
    const maxStep  = Math.max(0.1, PlayerConfig.physics.playerRadius * 0.5);
    const steps    = Math.max(1, Math.ceil(distThisFrame / maxStep));
    const subDt    = dt / steps;

    let touchingWallNormal = null;
    let mantleTriggered    = false;

    const startedGrounded = P.isGrounded;
    P.isGrounded   = false;
    P.isUnderground = false;

    for (let i = 0; i < steps; i++) {
        pos.x += P.velocity.x * subDt;
        pos.y += P.velocity.y * subDt;
        pos.z += P.velocity.z * subDt;

        let feetY = pos.y - PlayerConfig.physics.eyeHeight;
        let headY = pos.y + 0.2;

        const verticalVel = P.velocity.y * subDt;

        // ── 1. Geometry constraints ───────────────────────────────────────────
        const structs = getNearbyStructures(pos, P, getStructureAt);

        // Pre-pass: find best bridge segment (most interior t) to prevent
        // jitter when overlapping 2 m segments fight over pos.y on ramps.
        let bestBridge         = null;
        let bestBridgeInterior = -Infinity;

        for (const struct of structs) {
            if (struct.type !== 'bridge') continue;
            const dx    = struct.p2.x - struct.p1.x;
            const dz    = struct.p2.z - struct.p1.z;
            const lenSq = dx * dx + dz * dz;
            if (lenSq === 0) continue;

            const tRaw = ((pos.x - struct.p1.x) * dx + (pos.z - struct.p1.z) * dz) / lenSq;
            const t    = Math.max(0, Math.min(1, tRaw));

            const closestX = struct.p1.x + t * dx;
            const closestZ = struct.p1.z + t * dz;
            const distSq   = (pos.x - closestX) ** 2 + (pos.z - closestZ) ** 2;
            const bridgeWidthSq = struct.radiusSq ?? 25.0;
            if (distSq >= bridgeWidthSq) continue;

            const interior = 0.5 - Math.abs(tRaw - 0.5);
            if (interior > bestBridgeInterior) {
                bestBridgeInterior = interior;
                const yTop = struct.p1.y + t * (struct.p2.y - struct.p1.y);
                bestBridge = { yTop, deckUnderside: yTop - 1.0 };
            }
        }

        for (const struct of structs) {
            // ── Bridge (segment) ──────────────────────────────────────────────
            if (struct.type === 'bridge') {
                if (!bestBridge) continue;
                const { yTop, deckUnderside } = bestBridge;

                const distAboveBridge = feetY - yTop;
                const tolerance = Math.max(1.5, Math.abs(verticalVel));
                const isLanding  = P.velocity.y <= 0 && distAboveBridge >= -tolerance && distAboveBridge <= 0.4;
                const isSticking = startedGrounded && distAboveBridge > -0.3 && distAboveBridge < 2.5;

                if (isLanding || isSticking) {
                    pos.y = yTop + PlayerConfig.physics.eyeHeight;
                    P.velocity.y      = 0;
                    P.isGrounded      = true;
                    P.lastGroundedTime = now;
                    feetY = pos.y - PlayerConfig.physics.eyeHeight;
                } else if (P.velocity.y > 0 && feetY < yTop &&
                           headY >= deckUnderside - tolerance) {
                    pos.y = deckUnderside - 0.2;
                    P.velocity.y = -2.0;
                    headY = pos.y + 0.2;
                }
                break;
            }

            // ── Bridge (polygon deck) ─────────────────────────────────────────
            else if (struct.type === 'bridgePoly') {
                const distAboveBridge = feetY - struct.yTop;
                const tolerance = Math.max(1.5, Math.abs(verticalVel));
                const isLanding  = P.velocity.y <= 0 && distAboveBridge >= -tolerance && distAboveBridge <= 0.4;
                const isSticking = startedGrounded && distAboveBridge > -0.3 && distAboveBridge < 2.5;

                if (isLanding || isSticking) {
                    pos.y = struct.yTop + PlayerConfig.physics.eyeHeight;
                    P.velocity.y      = 0;
                    P.isGrounded      = true;
                    P.lastGroundedTime = now;
                    feetY = pos.y - PlayerConfig.physics.eyeHeight;
                } else if (P.velocity.y > 0 &&
                           headY <= struct.yBase + tolerance &&
                           headY >= struct.yBase - tolerance) {
                    pos.y = struct.yBase - 0.2;
                    P.velocity.y = -2.0;
                    headY = pos.y + 0.2;
                }
            }

            // ── Tunnel (capsule–segment) ──────────────────────────────────────
            else if (struct.type === 'tunnel') {
                const dx    = struct.p2.x - struct.p1.x;
                const dz    = struct.p2.z - struct.p1.z;
                const lenSq = dx * dx + dz * dz;
                if (lenSq === 0) continue;

                // Unclamped t: detect when player has exited either portal end.
                const tRaw = ((pos.x - struct.p1.x) * dx + (pos.z - struct.p1.z) * dz) / lenSq;
                if (tRaw < -0.08 || tRaw > 1.08) continue;

                const t        = Math.max(0, Math.min(1, tRaw));
                const closestX = struct.p1.x + t * dx;
                const closestZ = struct.p1.z + t * dz;
                const lX       = pos.x - closestX;
                const lZ       = pos.z - closestZ;
                const distSq   = lX * lX + lZ * lZ;

                const halfW   = struct.halfW;
                const halfWSq = halfW * halfW;
                const outerW  = halfW + PlayerConfig.physics.playerRadius;
                const outerSq = outerW * outerW;

                const floorY   = struct.p1.y + t * (struct.p2.y - struct.p1.y);
                const ceilingY = floorY + struct.clearance;
                if (feetY < floorY - 2.0 || feetY > ceilingY + 4.0) continue;
                if (distSq > outerSq) continue;

                // Near portal ends: skip underground + lateral push so player walks out freely.
                const atPortalEnd = t < 0.06 || t > 0.94;

                if (distSq <= halfWSq) {
                    P.isUnderground = true;

                    const distAboveFloor = feetY - floorY;
                    const tolerance  = Math.max(1.5, Math.abs(verticalVel));
                    const isLanding  = P.velocity.y <= 0 && distAboveFloor >= -tolerance && distAboveFloor <= 0.4;
                    const isSticking = startedGrounded && distAboveFloor > -0.3 && distAboveFloor < 2.5;

                    if (isLanding || isSticking) {
                        pos.y = floorY + PlayerConfig.physics.eyeHeight;
                        if (P.velocity.y < PlayerConfig.physics.hardDropThreshold)
                            P.velocity.set(0, 0, 0);
                        else
                            P.velocity.y = 0;
                        P.isGrounded       = true;
                        P.lastGroundedTime = now;
                        feetY = pos.y - PlayerConfig.physics.eyeHeight;
                        headY = pos.y + 0.2;
                    }

                    // Ceiling: kill upward velocity only — no forced downward push to
                    // prevent oscillation against floor snap in low-clearance tunnels.
                    if (P.velocity.y > 0 && headY >= ceilingY - 0.1) {
                        pos.y = ceilingY - (PlayerConfig.physics.eyeHeight + 0.1);
                        P.velocity.y = 0;
                        headY = pos.y + 0.2;
                    }
                } else if (distSq > 0.0001 && !atPortalEnd) {
                    const dist    = Math.sqrt(distSq);
                    const nx      = lX / dist;
                    const nz      = lZ / dist;
                    const overlap = outerW - dist;
                    pos.x -= nx * overlap;
                    pos.z -= nz * overlap;

                    const dot = P.velocity.x * nx + P.velocity.z * nz;
                    if (dot > 0) {
                        P.velocity.x -= nx * dot;
                        P.velocity.z -= nz * dot;
                    }

                    _wallNormal.set(-nx, 0, -nz);
                    touchingWallNormal = _wallNormal;
                }
            }

            // ── Cavern (polygon, inverted building) ───────────────────────────
            else if (struct.type === 'cavern' && struct.ring) {
                const yFloor   = struct.yFloor;
                const yCeiling = struct.yCeiling;

                if (feetY < yFloor - 2.0 || feetY > yCeiling + 3.0) continue;

                const inPoly = isPointInPolygon(pos.x, pos.z, struct.ring);
                if (!inPoly) continue;

                P.isUnderground = true;

                const distAboveFloor = feetY - yFloor;
                const tolerance  = Math.max(0.5, Math.abs(verticalVel));
                const isLanding  = P.velocity.y <= 0 && distAboveFloor >= -tolerance && distAboveFloor <= 0.1;
                const isSticking = startedGrounded && distAboveFloor > -0.1 && distAboveFloor < 1.5;

                if (isLanding || isSticking) {
                    pos.y = yFloor + PlayerConfig.physics.eyeHeight;
                    if (P.velocity.y < PlayerConfig.physics.hardDropThreshold)
                        P.velocity.set(0, 0, 0);
                    else
                        P.velocity.y = 0;
                    P.isGrounded       = true;
                    P.lastGroundedTime = now;
                    feetY = pos.y - PlayerConfig.physics.eyeHeight;
                    headY = pos.y + 0.2;
                }

                if (P.velocity.y > 0 && headY >= yCeiling - 0.3) {
                    pos.y = yCeiling - 0.5;
                    P.velocity.y = -2.0;
                    headY = pos.y + 0.2;
                }

                // Interior wall push (towards polygon centre)
                if (feetY + 0.1 < yCeiling && headY > yFloor) {
                    const ring    = struct.ring;
                    const ringLen = ring.length;
                    const radSq   = PlayerConfig.physics.playerRadius * PlayerConfig.physics.playerRadius;

                    for (let j = 0; j < ringLen; j++) {
                        const pA = ring[j];
                        const pB = ring[(j + 1) % ringLen];

                        const wdx   = pB.x - pA.x;
                        const wdz   = pB.z - pA.z;
                        const wlenSq = wdx * wdx + wdz * wdz;
                        if (wlenSq === 0) continue;

                        let wt = ((pos.x - pA.x) * wdx + (pos.z - pA.z) * wdz) / wlenSq;
                        wt = Math.max(0, Math.min(1, wt));

                        const closestWX = pA.x + wt * wdx;
                        const closestWZ = pA.z + wt * wdz;
                        const wLx = pos.x - closestWX;
                        const wLz = pos.z - closestWZ;
                        const wDSq = wLx * wLx + wLz * wLz;

                        if (wDSq < radSq && wDSq > 0) {
                            const wdist   = Math.sqrt(wDSq);
                            const nx      = wLx / wdist;
                            const nz      = wLz / wdist;
                            const overlap = PlayerConfig.physics.playerRadius - wdist;
                            pos.x += nx * overlap;
                            pos.z += nz * overlap;

                            const dot = P.velocity.x * nx + P.velocity.z * nz;
                            if (dot < 0) {
                                P.velocity.x -= nx * dot;
                                P.velocity.z -= nz * dot;
                            }

                            _wallNormal.set(nx, 0, nz);
                            touchingWallNormal = _wallNormal;
                        }
                    }
                }
            }

            // ── Building (polygon roof + ring-edge walls + mantle) ────────────
            else if (struct.type === 'building' && struct.ring) {
                const yTop    = struct.yTop  ?? 10;
                const yBase   = struct.yBase ?? 0;
                const inPoly  = isPointInPolygon(pos.x, pos.z, struct.ring);

                if (inPoly) {
                    const distAboveRoof = feetY - yTop;
                    const tolerance  = Math.max(0.5, Math.abs(verticalVel));
                    const isLanding  = P.velocity.y <= 0 && distAboveRoof >= -tolerance && distAboveRoof <= 0.1;
                    const isSticking = startedGrounded && distAboveRoof > 0.1 && distAboveRoof < 1.5;

                    if (isLanding || isSticking) {
                        pos.y = yTop + PlayerConfig.physics.eyeHeight;
                        if (P.velocity.y < PlayerConfig.physics.hardDropThreshold)
                            P.velocity.set(0, 0, 0);
                        else
                            P.velocity.y = 0;
                        P.isGrounded       = true;
                        P.lastGroundedTime = now;
                        feetY = pos.y - PlayerConfig.physics.eyeHeight;
                        continue;
                    }

                    if (P.velocity.y > 0) {
                        const vtol = Math.max(0.5, verticalVel);
                        if (headY <= yBase + vtol && headY >= yBase - 0.1) {
                            pos.y = yBase - 0.2;
                            P.velocity.y = -2.0;
                            headY = pos.y + 0.2;
                        }
                    }
                }

                // Ring-edge wall collision + mantle
                if (feetY + 0.1 < yTop && headY > yBase) {
                    const ring    = struct.ring;
                    const ringLen = ring.length;

                    for (let j = 0; j < ringLen; j++) {
                        const pA = ring[j];
                        const pB = ring[(j + 1) % ringLen];

                        const dx    = pB.x - pA.x;
                        const dz    = pB.z - pA.z;
                        const lenSq = dx * dx + dz * dz;
                        if (lenSq === 0) continue;

                        let t = ((pos.x - pA.x) * dx + (pos.z - pA.z) * dz) / lenSq;
                        t = Math.max(0, Math.min(1, t));

                        const closestX = pA.x + t * dx;
                        const closestZ = pA.z + t * dz;
                        const distX    = pos.x - closestX;
                        const distZ    = pos.z - closestZ;
                        const dSq      = distX * distX + distZ * distZ;
                        const radSq    = PlayerConfig.physics.playerRadius * PlayerConfig.physics.playerRadius;

                        if (dSq < radSq && dSq > 0) {
                            const dist    = Math.sqrt(dSq);
                            const nx      = distX / dist;
                            const nz      = distZ / dist;
                            const overlap = PlayerConfig.physics.playerRadius - dist;
                            pos.x += nx * overlap;
                            pos.z += nz * overlap;

                            const dot = P.velocity.x * nx + P.velocity.z * nz;
                            if (dot < 0) {
                                if (P.movementState === 'GLIDE' && dot < -15.0) {
                                    P.velocity.x *= -0.1;
                                    P.velocity.z *= -0.1;
                                    P.velocity.y = -5.0;
                                } else {
                                    P.velocity.x -= nx * dot;
                                    P.velocity.z -= nz * dot;
                                }
                            }

                            _wallNormal.set(nx, 0, nz);
                            touchingWallNormal = _wallNormal;
                        }
                    }

                    // Mantle: grab ledge when sliding down a wall near roof height
                    if (!P.isGrounded && P.velocity.y <= 0 &&
                        touchingWallNormal && !mantleTriggered) {
                        if (feetY < yTop &&
                            feetY > yTop - PlayerConfig.mantle.reach &&
                            feetY > yBase) {
                            pos.y = yTop + PlayerConfig.physics.eyeHeight;
                            P.velocity.y       = PlayerConfig.mantle.speed;
                            P.isGrounded       = true;
                            P.lastGroundedTime = now;
                            P.fallTilt         = -0.15;
                            mantleTriggered    = true;
                        }
                    }
                }
            }
        }

        // ── 2. Terrain (last resort — geometry always wins) ───────────────────
        // Skipped inside tunnels/caverns and over shader-discarded portal holes.
        if (!P.isGrounded && !P.isUnderground && !isInPortalHole(pos.x, pos.z)) {
            const terrainY        = getElevationAt(pos.x, pos.z);
            const distAboveTerrain = feetY - terrainY;

            if (distAboveTerrain <= 0.01 ||
                (startedGrounded && distAboveTerrain > 0.01 && distAboveTerrain < 1.5)) {
                pos.y = terrainY + PlayerConfig.physics.eyeHeight;
                if (P.velocity.y < 0) {
                    if (P.velocity.y < PlayerConfig.physics.hardDropThreshold)
                        P.velocity.set(0, 0, 0);
                    else
                        P.velocity.y = 0;
                }
                P.isGrounded       = true;
                P.lastGroundedTime = now;
                feetY = pos.y - PlayerConfig.physics.eyeHeight;
                headY = pos.y + 0.2;
            }
        }
    }

    // ── Wall-run: tilt + wall-jump ────────────────────────────────────────────
    let targetWallRoll = 0;
    const horizSpeed = Math.hypot(P.velocity.x, P.velocity.z);

    if (touchingWallNormal && !P.isGrounded &&
        horizSpeed > 10.0 && P.movementState !== 'FALL') {
        const sideDot = touchingWallNormal.dot(_camRight);
        targetWallRoll = sideDot * -0.6;
        if (P.velocity.y < 0) P.velocity.y += 20.0 * dt;

        if (input.jump) {
            P.velocity.x  += touchingWallNormal.x * PlayerConfig.jump.wallForceH;
            P.velocity.z  += touchingWallNormal.z * PlayerConfig.jump.wallForceH;
            P.velocity.y   = Math.max(P.velocity.y, PlayerConfig.jump.wallForceV);
            P.lastJumpTime = now;
        }
    }

    const wallRollDecay = 1.0 - Math.exp(-10.0 * dt);
    P.wallRoll += (targetWallRoll - P.wallRoll) * wallRollDecay;
}

// ── Camera orientation and dynamic FOV ───────────────────────────────────────

function updateCameraOrientation(dt, camera, P) {
    const tiltDecay = 1.0 - Math.exp(-10.0 * dt);
    P.fallTilt *= (1.0 - tiltDecay);

    camera.rotation.order = 'YXZ';
    const visualRoll = P.movementState === 'WALK' ? 0 : P.roll;
    camera.rotation.set(P.cameraPitch + P.fallTilt, P.cameraHeading, visualRoll + P.wallRoll);

    if (camera.isPerspectiveCamera) {
        const totalSpeed = (P.movementState === 'GLIDE' || P.movementState === 'FALL')
            ? P.velocity.length()
            : Math.hypot(P.velocity.x, P.velocity.z);

        let targetFov = P.baseFov;
        if (P.movementState !== 'WALK') {
            const fovRatio  = Math.max(0, Math.min(totalSpeed / 120.0, 1.0));
            const diveWarp  = (P.movementState === 'GLIDE' && P.cameraPitch < -0.2)
                ? Math.abs(P.cameraPitch) * 15.0
                : 0;
            targetFov += fovRatio * 35.0 + diveWarp;
        }

        if (isFinite(targetFov)) {
            const fovDecay = 1.0 - Math.exp(-8.0 * dt);
            camera.fov += (targetFov - camera.fov) * fovDecay;
            camera.updateProjectionMatrix();
        }
    }
}
