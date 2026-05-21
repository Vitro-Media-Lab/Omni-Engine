// ============================================================================
// RoofFactory.js — Strategy-pattern dispatcher for roof geometry
// ============================================================================
//
// Receives the CCW-standardised 2-D footprint (pts: {x, y}[]) and the OSM
// roof:shape tag, then delegates to the correct single-responsibility strategy.
//
// Winding contract for callers:
//   pts must be a flat array of {x, y} objects projected into world-space XY
//   (Y = -worldZ, so the Three.js ShapeGeometry ear-clipper winds correctly).
//   Every strategy enforces CCW internally, but passing already-CCW footprints
//   avoids redundant area computation.
//
// Strategies imported here:
//   ShellStrategy  — Origami half-sail displacement along the longest edge
//   DomeStrategy   — Radial paraboloid displacement from the centroid
//   BarrelStrategy — Cylindrical axis displacement perpendicular to ridge span
//   ConvexStrategy — Centre-point triangulation for pyramids, cones, onion domes
// ============================================================================

import { buildShellRoof  } from './ShellStrategy.js';
import { buildDomeRoof   } from './DomeStrategy.js';
import { buildBarrelRoof } from './BarrelStrategy.js';
import { buildConvexRoof } from './ConvexStrategy.js';

// O(1) fast-reject set — avoids string comparisons inside the hot building loop.
// Shapes absent from this set are treated as flat (no roof geometry generated).
const ROOF_TYPE_SET = new Set([
    // Curved surface strategies
    'shell', 'freeform', 'curved',
    'dome',  'sphere',   'round',
    'barrel','vault',    'arch',
    // Convex primitive strategies
    'onion',
    'cone',
    'pyramidal', 'pyramid',
    'gabled',    'gable',
    'hipped',    'hip',
    'gambrel',   'mansard',
]);

// Map every known alias to its canonical strategy name so the dispatchers stay
// clean (one condition per strategy, not one per alias).
const ALIAS_MAP = {
    freeform:  'shell',
    curved:    'shell',
    sphere:    'dome',
    round:     'dome',
    vault:     'barrel',
    arch:      'barrel',
    pyramidal: 'pyramid',
    gable:     'pyramid',
    gabled:    'pyramid',
    hip:       'pyramid',
    hipped:    'pyramid',
    gambrel:   'pyramid',
    mansard:   'pyramid',
};

export const RoofFactory = {

    /**
     * Build roof geometry for a single building footprint.
     *
     * @param {Array<{x:number, y:number}>} pts
     *   Footprint vertices in projected 2-D world-space. Callers pass the raw
     *   OSM ring converted via project() so Y = -worldZ.
     *
     * @param {number} h
     *   Absolute world-Y of the roof base (= baseElev + wall height).
     *
     * @param {string} roofShape
     *   Lowercase OSM roof:shape value.
     *
     * @param {number} roofH
     *   Explicit roof height in metres (from OSM roof:height). Pass 0 to let
     *   each strategy compute a proportionally correct default.
     *
     * @returns {THREE.BufferGeometry | null}
     *   Complete, indexed geometry ready to merge into the roofs group.
     *   Returns null if the shape is unsupported, the footprint is degenerate,
     *   or a strategy rejects the footprint (e.g. non-convex for a pyramid).
     */
    build(pts, h, roofShape, roofH) {
        if (!pts || pts.length < 3) return null;
        if (!ROOF_TYPE_SET.has(roofShape))  return null;

        const canonical = ALIAS_MAP[roofShape] ?? roofShape;

        switch (canonical) {
            case 'shell':   return buildShellRoof(pts, h, roofH);
            case 'dome':    return buildDomeRoof(pts, h, roofH);
            case 'barrel':  return buildBarrelRoof(pts, h, roofH);
            case 'pyramid': return buildConvexRoof(pts, h, 'pyramid', roofH);
            case 'cone':    return buildConvexRoof(pts, h, 'cone',    roofH);
            case 'onion':   return buildConvexRoof(pts, h, 'onion',   roofH);
            default:        return null;
        }
    },

    /**
     * Returns true if roofShape is handled by this factory.
     * Lets the building pipeline decide whether to suppress the wall extrusion
     * (architectural shells consume the full vertical volume).
     */
    isSupported(roofShape) {
        return ROOF_TYPE_SET.has(roofShape);
    },

    /**
     * Returns true for shapes whose geometry occupies the full wall + roof
     * volume (shell, dome, barrel). The building pipeline should set
     * appliedDepth = 0.1 for these so no duplicate base slab is extruded.
     */
    isArchitecturalShell(roofShape) {
        const canonical = ALIAS_MAP[roofShape] ?? roofShape;
        return canonical === 'shell' || canonical === 'dome' || canonical === 'barrel';
    },

    /**
     * Recommended edge-crease angle for EdgesGeometry on this roof type.
     * Smooth curved roofs use a tight angle (1°) so no false crease lines
     * appear across the displacement surface.
     */
    edgeAngle(roofShape) {
        const canonical = ALIAS_MAP[roofShape] ?? roofShape;
        if (canonical === 'dome' || canonical === 'onion') return 1;
        if (canonical === 'cone')                          return 15;
        return 30;
    },
};
