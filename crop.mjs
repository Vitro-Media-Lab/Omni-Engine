/** Ground-space cropping shared by measured drawings and physical models. */
import {buildingIndex} from './building-index.mjs';
import {standaloneBuildingParts} from './building-shape.mjs';
import {studyCenter} from './study-origin.mjs';
const EPS = 1e-8;
const TAU = Math.PI * 2;
const area = ring => ring.reduce((sum, p, i) => { const q = ring[(i + 1) % ring.length]; return sum + p[0] * q[1] - q[0] * p[1]; }, 0) / 2;
const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const pointEqual = (a, b, tolerance = EPS) => Math.abs(a[0] - b[0]) <= tolerance && Math.abs(a[1] - b[1]) <= tolerance;
const cleanRing = ring => {
  const points = (ring || []).filter(p => Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1])).map(p => [p[0], p[1]]).filter((p, i, all) => !i || !pointEqual(p, all[i - 1]));
  if (points.length > 1 && pointEqual(points[0], points.at(-1))) points.pop();
  return points;
};
function insideRing(point, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[i], b = ring[j];
    if ((a[1] > point[1]) !== (b[1] > point[1]) && point[0] < (b[0] - a[0]) * (point[1] - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}
const insideRings = (point, rings) => rings.reduce((inside, ring) => inside !== insideRing(point, ring), false);
const insideCircle = (p, boundary) => (p[0] - boundary.center[0]) ** 2 + (p[1] - boundary.center[1]) ** 2 <= boundary.radius ** 2 + EPS * Math.max(1, boundary.radius ** 2);
const insideCropPolygon = (p, boundary) => {
  if (boundary.shape === 'rectangle') return p[0] >= boundary.extent[0] - EPS && p[1] >= boundary.extent[1] - EPS && p[0] <= boundary.extent[2] + EPS && p[1] <= boundary.extent[3] + EPS;
  const x = p[0] - boundary.center[0], y = p[1] - boundary.center[1], step = TAU / boundary.ring.length;
  const normalAngle = (Math.floor(Math.atan2(y, x) / step) + .5) * step;
  return x * Math.cos(normalAngle) + y * Math.sin(normalAngle) <= boundary.radius * Math.cos(step / 2) + EPS;
};

/** Source coverage and the starting drawing crop are deliberately separate. */
export function viewSpan(map = {}, settings = {}) {
  const extent = map.extent?.length === 4 && map.extent.every(Number.isFinite) ? map.extent : [-500, -500, 500, 500];
  const sourceSpan = [extent[2] - extent[0], extent[3] - extent[1]], sourceRadius = Math.min(...sourceSpan) / 2;
  const radius = Number.isFinite(map.defaultViewRadius) && map.defaultViewRadius > 0 ? Math.min(map.defaultViewRadius, sourceRadius) : sourceRadius;
  const defaultSpan = Number.isFinite(map.defaultViewRadius) && map.defaultViewRadius > 0 ? [radius * 2, radius * 2] : sourceSpan;
  const multiplier = Number.isFinite(settings.viewRadius) && settings.viewRadius > 0 ? settings.viewRadius / radius : 1;
  return defaultSpan.map(value => value * multiplier);
}

export const defaultViewRadius = map => Math.min(...viewSpan(map)) / 2;

// The polygon is inscribed in the mathematical circle. Its 256 edges give a
// smooth physical contour and the same coordinates to SVG and STL exporters.
function circleBoundary(center, radius) {
  const ring = Array.from({ length: 256 }, (_, i) => [center[0] + Math.cos(i / 256 * TAU) * radius, center[1] + Math.sin(i / 256 * TAU) * radius]);
  const planes = ring.map((a, i) => { const b = ring[(i + 1) % ring.length]; return [-(b[1] - a[1]), b[0] - a[0], a]; });
  return { shape: 'circle', center, radius, ring, planes };
}
function rectangleBoundary(center, span) {
  const extent = [center[0] - span[0] / 2, center[1] - span[1] / 2, center[0] + span[0] / 2, center[1] + span[1] / 2];
  const ring = [[extent[0], extent[1]], [extent[2], extent[1]], [extent[2], extent[3]], [extent[0], extent[3]]];
  const planes = ring.map((a, i) => { const b = ring[(i + 1) % ring.length]; return [-(b[1] - a[1]), b[0] - a[0], a]; });
  return { shape: 'rectangle', center, radius: Math.max(...span) / 2, extent, ring, planes };
}
function clipConvexSegment(a, b, boundary) {
  if (insideCropPolygon(a, boundary) && insideCropPolygon(b, boundary)) return [a, b];
  const [cx, cy] = boundary.center, radius = boundary.radius;
  if (Math.max(a[0], b[0]) < cx - radius || Math.min(a[0], b[0]) > cx + radius || Math.max(a[1], b[1]) < cy - radius || Math.min(a[1], b[1]) > cy + radius) return null;
  let start = 0, end = 1;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  for (const [nx, ny, p] of boundary.planes) {
    const origin = nx * (a[0] - p[0]) + ny * (a[1] - p[1]), direction = nx * dx + ny * dy;
    if (Math.abs(direction) < EPS) { if (origin < -EPS) return null; continue; }
    const t = -origin / direction;
    if (direction > 0) start = Math.max(start, t); else end = Math.min(end, t);
    if (start > end - EPS) return null;
  }
  return [lerp(a, b, start), lerp(a, b, end)];
}

/** Return separate clipped polylines; a path never bridges a gap outside the crop. */
export function clipLineToCircle(points, boundary) {
  const pieces = []; let current = null;
  const tolerance = Math.max(1, boundary.radius) * 1e-7;
  for (let i = 1; i < points.length; i++) {
    const segment = clipConvexSegment(points[i - 1], points[i], boundary);
    if (!segment) { current = null; continue; }
    if (current && pointEqual(current.at(-1), segment[0], tolerance)) current.push(segment[1]);
    else { current = segment; pieces.push(current); }
  }
  return pieces;
}

function intersectionParameter(a, b, c, d) {
  const dx = b[0] - a[0], dy = b[1] - a[1], ex = d[0] - c[0], ey = d[1] - c[1], cross = dx * ey - dy * ex;
  if (Math.abs(cross) < EPS) return null;
  const rx = c[0] - a[0], ry = c[1] - a[1], t = (rx * ey - ry * ex) / cross, u = (rx * dy - ry * dx) / cross;
  return t >= -EPS && t <= 1 + EPS && u >= -EPS && u <= 1 + EPS ? Math.max(0, Math.min(1, t)) : null;
}

/**
 * Intersect a polygon (outer ring plus courtyard holes) with the crop polygon.
 * Trace the real intersection boundary so concave areas can produce separate
 * pieces. Clipping each ring independently would draw false connecting edges.
 * Return an array of polygons, each containing its outer ring and its holes.
 */
export function clipRingsToCircle(source, boundary) {
  const rings = source.map(cleanRing).filter(r => r.length >= 3 && Math.abs(area(r)) > EPS);
  if (!rings.length) return [];
  rings.forEach((ring, i) => { if ((area(ring) > 0) !== (i === 0)) ring.reverse(); });
  if (rings.every(ring => ring.every(p => insideCropPolygon(p, boundary)))) return [rings];
  const [cx, cy] = boundary.center, radius = boundary.radius, flat = rings[0];
  if (flat.every(p => p[0] < cx - radius) || flat.every(p => p[0] > cx + radius) || flat.every(p => p[1] < cy - radius) || flat.every(p => p[1] > cy + radius)) return [];
  const edges = [], tolerance = Math.max(1, boundary.radius) * 1e-7;
  const key = p => `${Math.round((p[0] - boundary.center[0]) / tolerance)},${Math.round((p[1] - boundary.center[1]) / tolerance)}`;
  const add = (a, b) => { if (!pointEqual(a, b, tolerance)) edges.push({ a, b, start: key(a), end: key(b), used: false }); };
  for (const ring of rings) for (let i = 0; i < ring.length; i++) {
    const segment = clipConvexSegment(ring[i], ring[(i + 1) % ring.length], boundary);
    if (segment) add(...segment);
  }
  for (let i = 0; i < boundary.ring.length; i++) {
    const a = boundary.ring[i], b = boundary.ring[(i + 1) % boundary.ring.length], stops = [0, 1];
    for (const ring of rings) for (let j = 0; j < ring.length; j++) {
      const t = intersectionParameter(a, b, ring[j], ring[(j + 1) % ring.length]);
      if (t !== null) stops.push(t);
    }
    stops.sort((x, y) => x - y);
    const unique = stops.filter((t, j) => !j || t - stops[j - 1] > EPS);
    for (let j = 1; j < unique.length; j++) if (insideRings(lerp(a, b, (unique[j - 1] + unique[j]) / 2), rings)) add(lerp(a, b, unique[j - 1]), lerp(a, b, unique[j]));
  }
  const byStart = new Map(), dedupe = new Set();
  for (const edge of edges) {
    const id = `${edge.start}|${edge.end}`;
    if (dedupe.has(id)) { edge.used = true; continue; }
    dedupe.add(id);
    if (!byStart.has(edge.start)) byStart.set(edge.start, []);
    byStart.get(edge.start).push(edge);
  }
  const loops = [];
  for (const first of edges) {
    if (first.used) continue;
    let edge = first; const ring = [];
    for (let steps = 0; edge && steps <= edges.length; steps++) {
      edge.used = true; ring.push(edge.a);
      if (edge.end === first.start) {
        if (ring.length >= 3 && Math.abs(area(ring)) > tolerance ** 2) loops.push(ring);
        break;
      }
      const candidates = (byStart.get(edge.end) || []).filter(e => !e.used);
      if (candidates.length > 1) {
        const dx = edge.b[0] - edge.a[0], dy = edge.b[1] - edge.a[1];
        candidates.sort((a, b) => Math.atan2(dx * (a.b[1] - a.a[1]) - dy * (a.b[0] - a.a[0]), dx * (a.b[0] - a.a[0]) + dy * (a.b[1] - a.a[1])) - Math.atan2(dx * (b.b[1] - b.a[1]) - dy * (b.b[0] - b.a[0]), dx * (b.b[0] - b.a[0]) + dy * (b.b[1] - b.a[1])));
      }
      edge = candidates[0];
    }
  }
  const polygons = loops.filter(r => area(r) > 0).map(r => [r]);
  for (const hole of loops.filter(r => area(r) < 0)) {
    const polygon = polygons.find(p => insideRing(hole[0], p[0]));
    if (polygon) polygon.push(hole);
  }
  return polygons;
}

export function cropMap(map = {}, settings = {}) {
  const origin = studyCenter(map);
  const center = [Number.isFinite(settings.centerX) ? settings.centerX : origin[0], Number.isFinite(settings.centerY) ? settings.centerY : origin[1]];
  const radius = Number.isFinite(settings.cropRadius) && settings.cropRadius > 0 ? settings.cropRadius : Math.max(.01, defaultViewRadius(map));
  const boundary = settings.crop === 'circle' ? circleBoundary(center, radius) : rectangleBoundary(center, viewSpan(map, settings));
  const bounds = boundary.extent || [center[0]-radius,center[1]-radius,center[0]+radius,center[1]+radius];
  const buildings = buildingIndex(map.buildings || []).query(bounds).filter(b => b.rings?.length && b.rings.every(r => r.every(p => insideCropPolygon(p, boundary))));
  const parentSources=new Set(buildings.map(building=>building.sourceId).filter(Boolean)),standalone=new Set(standaloneBuildingParts(map));
  const buildingParts=(map.buildingParts||[]).filter(part=>(parentSources.has(part.parentSourceId)||standalone.has(part))&&part.rings?.every(ring=>ring.every(point=>insideCropPolygon(point,boundary))));
  boundary.omittedBuildings = (map.buildings || []).length - buildings.length;
  const clipAreas = areas => (areas || []).flatMap(area => clipRingsToCircle(area.rings || [], boundary).map((rings, i) => ({ ...area, id: i ? `${area.id}-crop-${i}` : area.id, rings })));
  return {
    ...map, extent: boundary.extent || [center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius], cropBoundary: boundary, buildings,buildingParts,
    roads: (map.roads || []).flatMap(road => clipLineToCircle(road.points || [], boundary).map((points, i) => ({ ...road, id: i ? `${road.id}-crop-${i}` : road.id, points }))),
    parks: clipAreas(map.parks), water: clipAreas(map.water), trees: (map.trees || []).filter(tree => (boundary.shape === 'circle' ? insideCircle : insideCropPolygon)(Array.isArray(tree) ? tree : tree.position || [Infinity, Infinity], boundary))
  };
}
