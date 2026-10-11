/**
 * Omni V3 — measured, dependency-free architectural drawing renderer.
 * Input coordinates are metres (east, north); output coordinates are millimetres.
 * The same footprints drive plan, orthographic axonometric, and plotter output.
 */
import { cropMap, clipRingsToCircle, clipLineToCircle } from './crop.mjs';
import { sampleTerrain, terrainRange, buildingTerrainBase, contoursInCrop, terrainCropSurface, terrainCropPerimeter } from './terrain.mjs';
import { buildingFaces, buildingEdges, detailedBuildings, buildingGroundReference } from './building-shape.mjs';
import {computeDrawingProjection} from './projection.mjs';
import {sourceChunk} from './live-chunk.mjs';
import {drawingThemes as THEMES,themeForSettings} from './themes.mjs';
import {buildingAppearance,surfaceLightDirection,surfaceNormal,faceSurfaceColor} from './surface-style.mjs';
import {paperSizes as PAPERS} from './paper-sizes.mjs';
import {canvasBackgroundColor} from './canvas-background.mjs';
import {waterBoundarySegments} from './water-boundary.mjs';
import {spacedTrees} from './tree-spacing.mjs';
import {attributionMarkup,attributionText,getAttribution} from './attribution.mjs';
import {annotationLayout} from './annotation-layout.mjs';
import {roadVisible} from './road-style.mjs';
import {colorPenLayers} from './plotter-colors.mjs';

const SQRT2 = Math.sqrt(2);
const EPS = 1e-7;

const escapeXml = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[char]));
// SVG coordinates retain 0.001 mm precision without allocating a fixed-point
// string for each endpoint before converting it back to a number.
const number = value => Math.round(value * 1000) / 1000;
const pointText = p => `${number(p[0])},${number(p[1])}`;
const samePoint = (a, b) => Math.abs(a[0] - b[0]) < EPS && Math.abs(a[1] - b[1]) < EPS;
const signedArea = ring => ring.reduce((sum, p, i) => { const q = ring[(i + 1) % ring.length]; return sum + p[0] * q[1] - q[0] * p[1]; }, 0) / 2;
const boundsOf = points => points.reduce((b, p) => [Math.min(b[0], p[0]), Math.min(b[1], p[1]), Math.max(b[2], p[0]), Math.max(b[3], p[1])], [Infinity, Infinity, -Infinity, -Infinity]);
const boxesOverlap = (a, b) => a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1];
const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const cleanRing = ring => {
  const result = (ring || []).filter(p => Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1])).map(p => [p[0], p[1]]);
  if (result.length > 1 && samePoint(result[0], result.at(-1))) result.pop();
  return result.filter((p, i) => i === 0 || !samePoint(p, result[i - 1]));
};
const cleanLine = line => (line || []).filter(p => Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1])).map(p => [p[0], p[1]]).filter((p, i, points) => i === 0 || !samePoint(p, points[i - 1]));

function insideRing(point, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[i], b = ring[j];
    if ((a[1] > point[1]) !== (b[1] > point[1]) && point[0] < (b[0] - a[0]) * (point[1] - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}
function insideRings(point, rings) { return rings.reduce((inside, ring) => inside !== insideRing(point, ring), false); }

function clipSegment(a, b, rect) {
  let enter = 0, leave = 1;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  for (const [p, q] of [[-dx, a[0] - rect[0]], [dx, rect[2] - a[0]], [-dy, a[1] - rect[1]], [dy, rect[3] - a[1]]]) {
    if (Math.abs(p) < EPS) { if (q < 0) return null; continue; }
    const t = q / p;
    if (p < 0) enter = Math.max(enter, t); else leave = Math.min(leave, t);
    if (enter > leave) return null;
  }
  return [lerp(a, b, enter), lerp(a, b, leave), enter, leave];
}

function clipRing(ring, rect) {
  let output = ring;
  for (const [axis, edge, greater] of [[0, rect[0], true], [0, rect[2], false], [1, rect[1], true], [1, rect[3], false]]) {
    const input = output; output = [];
    if (!input.length) break;
    const accepted = p => greater ? p[axis] >= edge : p[axis] <= edge;
    for (let i = 0; i < input.length; i++) {
      const a = input[i], b = input[(i + 1) % input.length];
      const ai = accepted(a), bi = accepted(b);
      if (ai) output.push(a);
      if (ai !== bi) output.push(lerp(a, b, (edge - a[axis]) / (b[axis] - a[axis])));
    }
  }
  return output.length >= 3 ? output : [];
}

function edgeIntersection(a, b, c, d) {
  const dx = b[0] - a[0], dy = b[1] - a[1], ex = d[0] - c[0], ey = d[1] - c[1];
  const cross = dx * ey - dy * ex;
  if (Math.abs(cross) < EPS) return null;
  const rx = c[0] - a[0], ry = c[1] - a[1];
  const t = (rx * ey - ry * ex) / cross, u = (rx * dy - ry * dx) / cross;
  return t >= -EPS && t <= 1 + EPS && u >= -EPS && u <= 1 + EPS ? Math.max(0, Math.min(1, t)) : null;
}

function intervalsInPolygon(a, b, rings) {
  const stops = [0, 1];
  for (const ring of rings) for (let i = 0; i < ring.length; i++) {
    const t = edgeIntersection(a, b, ring[i], ring[(i + 1) % ring.length]);
    if (t !== null) stops.push(t);
  }
  stops.sort((x, y) => x - y);
  const unique = stops.filter((t, i) => i === 0 || t - stops[i - 1] > EPS), intervals = [];
  for (let i = 1; i < unique.length; i++) if (insideRings(lerp(a, b, (unique[i - 1] + unique[i]) / 2), rings)) intervals.push([unique[i - 1], unique[i]]);
  return intervals;
}

function planeThrough(points) {
  const a = points[0];
  for (let i = 1; i < points.length - 1; i++) {
    const b = points[i], c = points[i + 1];
    const dx1 = b[0] - a[0], dy1 = b[1] - a[1], dx2 = c[0] - a[0], dy2 = c[1] - a[1];
    const determinant = dx1 * dy2 - dx2 * dy1;
    if (Math.abs(determinant) < EPS) continue;
    const ax = ((b[2] - a[2]) * dy2 - (c[2] - a[2]) * dy1) / determinant;
    const ay = (dx1 * (c[2] - a[2]) - dx2 * (b[2] - a[2])) / determinant;
    return [ax, ay, a[2] - ax * a[0] - ay * a[1]];
  }
  return [0, 0, a?.[2] || 0];
}
const depthAt = (plane, p) => plane[0] * p[0] + plane[1] * p[1] + plane[2];

class SpatialIndex {
  constructor(faces, cell = 6) {
    this.faces = faces; this.cell = cell; this.cells = new Map();
    this.seen = new Uint32Array(faces.length); this.generation = 0;
    for (let i = 0; i < faces.length; i++) this.visit(faces[i].bounds, key => { if (!this.cells.has(key)) this.cells.set(key, []); this.cells.get(key).push(i); });
  }
  visit(b, callback) { for (let x = Math.floor(b[0] / this.cell); x <= Math.floor(b[2] / this.cell); x++) for (let y = Math.floor(b[1] / this.cell); y <= Math.floor(b[3] / this.cell); y++) callback(`${x},${y}`); }
  query(bounds) {
    // A face can occupy several cells. Stamps deduplicate candidates without a
    // Set, spread copy, and filter allocation for every drawing segment.
    const generation = this.generation = (this.generation + 1) >>> 0;
    if (!generation) this.seen.fill(0);
    const stamp = generation || ++this.generation, result = [];
    const minX = Math.floor(bounds[0] / this.cell), maxX = Math.floor(bounds[2] / this.cell);
    const minY = Math.floor(bounds[1] / this.cell), maxY = Math.floor(bounds[3] / this.cell);
    for (let x = minX; x <= maxX; x++) for (let y = minY; y <= maxY; y++) {
      const ids = this.cells.get(`${x},${y}`);
      if (!ids) continue;
      for (const id of ids) {
        if (this.seen[id] === stamp) continue;
        this.seen[id] = stamp;
        if (boxesOverlap(bounds, this.faces[id].bounds)) result.push(id);
      }
    }
    return result;
  }
}

function visibleSegment(a, b, da, db, index, stats) {
  if (!index) return [[a, b]];
  const hidden = [];
  for (const id of index.query(boundsOf([a, b]))) {
    const face = index.faces[id];
    const diff0 = depthAt(face.plane, a) - da - .001, diff1 = depthAt(face.plane, b) - db - .001;
    if (diff0 <= 0 && diff1 <= 0) continue;
    for (let [start, end] of intervalsInPolygon(a, b, face.rings)) {
      const ds = diff0 + (diff1 - diff0) * start, de = diff0 + (diff1 - diff0) * end;
      if (ds <= 0 && de <= 0) continue;
      if (ds <= 0) start = -diff0 / (diff1 - diff0);
      if (de <= 0) end = -diff0 / (diff1 - diff0);
      if (end - start > EPS) hidden.push([start, end]);
    }
  }
  if (!hidden.length) return [[a, b]];
  hidden.sort((x, y) => x[0] - y[0]);
  let cursor = 0; const result = [];
  for (const [start, end] of hidden) {
    if (start > cursor + EPS) result.push([lerp(a, b, cursor), lerp(a, b, start)]);
    cursor = Math.max(cursor, end);
  }
  if (cursor < 1 - EPS) result.push([lerp(a, b, cursor), b]);
  stats.hiddenSegments++;
  return result;
}

// Stable painter order: nearby projected surfaces establish the depth constraints.
// It avoids roof/wall ordering errors that sorting only by object centres produces.
function painterOrder(faces, index) {
  if (faces.length > 9000) return faces.map((_, i) => i).sort((a, b) => faces[a].depth - faces[b].depth);
  const links = faces.map(() => new Set()), incoming = faces.map(() => 0);
  function overlapPoint(a, b) {
    for (const ring of a.rings) for (const p of ring) if (insideRings(p, b.rings)) return p;
    for (const ring of b.rings) for (const p of ring) if (insideRings(p, a.rings)) return p;
    for (const ar of a.rings) for (let i = 0; i < ar.length; i++) for (const br of b.rings) for (let j = 0; j < br.length; j++) {
      const t = edgeIntersection(ar[i], ar[(i + 1) % ar.length], br[j], br[(j + 1) % br.length]);
      if (t !== null) return lerp(ar[i], ar[(i + 1) % ar.length], t);
    }
    return null;
  }
  for (let i = 0; i < faces.length; i++) for (const j of index.query(faces[i].bounds)) {
    if (j <= i) continue;
    const p = overlapPoint(faces[i], faces[j]); if (!p) continue;
    const difference = depthAt(faces[i].plane, p) - depthAt(faces[j].plane, p);
    if (Math.abs(difference) < .001) continue;
    const far = difference > 0 ? j : i, near = difference > 0 ? i : j;
    if (!links[far].has(near)) { links[far].add(near); incoming[near]++; }
  }
  const heap = [], order = [], emitted = new Set();
  const less = (a, b) => faces[a].depth < faces[b].depth;
  function push(value) { heap.push(value); let i = heap.length - 1; while (i > 0) { const parent = (i - 1) >> 1; if (!less(heap[i], heap[parent])) break; [heap[i], heap[parent]] = [heap[parent], heap[i]]; i = parent; } }
  function pop() { const result = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; while (true) { let child = i * 2 + 1; if (child >= heap.length) break; if (child + 1 < heap.length && less(heap[child + 1], heap[child])) child++; if (!less(heap[child], heap[i])) break; [heap[i], heap[child]] = [heap[child], heap[i]]; i = child; } } return result; }
  incoming.forEach((count, i) => { if (count === 0) push(i); });
  while (heap.length) { const id = pop(); order.push(id); emitted.add(id); for (const near of links[id]) if (--incoming[near] === 0) push(near); }
  // Intersecting source footprints can produce cycles; retain a deterministic fallback.
  order.push(...faces.map((_, i) => i).filter(i => !emitted.has(i)).sort((a, b) => faces[a].depth - faces[b].depth));
  return order;
}

function hatchSegments(rings, spacing, angle = 45) {
  const theta = angle * Math.PI / 180, c = Math.cos(theta), s = Math.sin(theta);
  const rotated = rings.map(ring => ring.map(p => [p[0] * c + p[1] * s, -p[0] * s + p[1] * c]));
  const bounds = boundsOf(rotated.flat()), segments = [];
  if (!Number.isFinite(bounds[0])) return segments;
  spacing = Math.max(.45, spacing);
  for (let y = Math.ceil(bounds[1] / spacing) * spacing; y <= bounds[3]; y += spacing) {
    const intersections = [];
    for (const ring of rotated) for (let i = 0; i < ring.length; i++) {
      const a = ring[i], b = ring[(i + 1) % ring.length];
      if ((a[1] <= y && b[1] > y) || (b[1] <= y && a[1] > y)) intersections.push(a[0] + (y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]));
    }
    intersections.sort((a, b) => a - b);
    const unrotate = x => [x * c - y * s, x * s + y * c];
    for (let i = 0; i + 1 < intersections.length; i += 2) if (intersections[i + 1] - intersections[i] > .04) segments.push([unrotate(intersections[i]), unrotate(intersections[i + 1])]);
  }
  return segments;
}

function roadRibbon(points, width) {
  const normals = points.map((p, i) => {
    const a = points[Math.max(0, i - 1)], b = points[Math.min(points.length - 1, i + 1)];
    const dx = b[0] - a[0], dy = b[1] - a[1], length = Math.hypot(dx, dy) || 1;
    return [-dy / length * width / 2, dx / length * width / 2];
  });
  const left = points.map((p, i) => [p[0] + normals[i][0], p[1] + normals[i][1]]);
  const right = points.map((p, i) => [p[0] - normals[i][0], p[1] - normals[i][1]]);
  return { ring: [...left, ...right.toReversed()], left, right };
}

// A compact single-stroke uppercase alphabet makes annotation plotter-safe.
// Glyphs are pen paths on a 4 × 6 construction grid, with a 5-unit advance.
const FONT = {
  A: ['0,6 2,0 4,6', '1,3 3,3'], B: ['0,6 0,0 3,0 4,1 4,2 3,3 0,3', '3,3 4,4 4,5 3,6 0,6'], C: ['4,0 1,0 0,1 0,5 1,6 4,6'], D: ['0,6 0,0 2,0 4,2 4,4 2,6 0,6'], E: ['4,0 0,0 0,6 4,6', '0,3 3,3'], F: ['0,6 0,0 4,0', '0,3 3,3'], G: ['4,1 3,0 1,0 0,1 0,5 1,6 4,6 4,3 2,3'], H: ['0,0 0,6', '4,0 4,6', '0,3 4,3'], I: ['0,0 4,0', '2,0 2,6', '0,6 4,6'], J: ['0,0 4,0 4,5 3,6 1,6 0,5'], K: ['0,0 0,6', '4,0 0,3 4,6'], L: ['0,0 0,6 4,6'], M: ['0,6 0,0 2,3 4,0 4,6'], N: ['0,6 0,0 4,6 4,0'], O: ['1,0 3,0 4,1 4,5 3,6 1,6 0,5 0,1 1,0'], P: ['0,6 0,0 3,0 4,1 4,2 3,3 0,3'], Q: ['1,0 3,0 4,1 4,5 3,6 1,6 0,5 0,1 1,0', '2,4 4,6'], R: ['0,6 0,0 3,0 4,1 4,2 3,3 0,3', '2,3 4,6'], S: ['4,0 1,0 0,1 0,2 1,3 3,3 4,4 4,5 3,6 0,6'], T: ['0,0 4,0', '2,0 2,6'], U: ['0,0 0,5 1,6 3,6 4,5 4,0'], V: ['0,0 2,6 4,0'], W: ['0,0 1,6 2,3 3,6 4,0'], X: ['0,0 4,6', '4,0 0,6'], Y: ['0,0 2,3 4,0', '2,3 2,6'], Z: ['0,0 4,0 0,6 4,6'],
  0: ['1,0 3,0 4,1 4,5 3,6 1,6 0,5 0,1 1,0', '1,5 3,1'], 1: ['1,1 2,0 2,6', '0,6 4,6'], 2: ['0,1 1,0 3,0 4,1 4,2 0,6 4,6'], 3: ['0,0 3,0 4,1 4,2 3,3 1,3', '3,3 4,4 4,5 3,6 0,6'], 4: ['3,6 3,0 0,4 4,4'], 5: ['4,0 0,0 0,3 3,3 4,4 4,5 3,6 0,6'], 6: ['4,0 1,0 0,1 0,5 1,6 3,6 4,5 4,4 3,3 0,3'], 7: ['0,0 4,0 1,6'], 8: ['1,0 3,0 4,1 4,2 3,3 1,3 0,2 0,1 1,0', '1,3 0,4 0,5 1,6 3,6 4,5 4,4 3,3'], 9: ['4,3 1,3 0,2 0,1 1,0 3,0 4,1 4,5 3,6 0,6'],
  '-': ['0,3 4,3'], '.': ['2,5.5 2,6'], ':': ['2,1.5 2,2', '2,4.5 2,5'], '/': ['0,6 4,0'], '|': ['2,0 2,6'], '+': ['0,3 4,3', '2,1 2,5'], '(': ['3,0 1,2 1,4 3,6'], ')': ['1,0 3,2 3,4 1,6'], ',': ['2,5 1,7'], "'": ['2,0 2,1.5'], '&': ['4,6 0,2 0,1 1,0 2,0 3,1 3,2 0,5 1,6 3,6 4,4']
};

class SvgWriter {
  constructor(theme, plotter, stats, plotterColors = false) { this.theme = theme; this.plotter = plotter; this.plotterColors = plotterColors; this.stats = stats; this.layers = new Map(); this.lineBuckets = new Map(); }
  layer(name) { if (!this.layers.has(name)) this.layers.set(name, []); return this.layers.get(name); }
  pathMarkup(data, attributes) {
    const style = { fill: 'none', stroke: this.plotter ? '#000000' : this.theme.ink, 'stroke-width': .16, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', ...attributes };
    if (this.plotter) { style.fill = 'none'; if (!this.plotterColors) style.stroke = '#000000'; else style.stroke = attributes.stroke || this.theme.ink; delete style.opacity; delete style['stroke-opacity']; }
    return `<path d="${data}" ${Object.entries(style).map(([k, v]) => `${k}="${escapeXml(v)}"`).join(' ')}/>`;
  }
  path(layer, data, attributes = {}, segments = 0) {
    if (!data) return;
    this.stats.paths++; this.stats.segments += segments;
    this.layer(layer).push(this.pathMarkup(data, attributes));
  }
  lines(layer, segments, attributes = {}) {
    if (!segments.length) return;
    const key = `${layer}|${JSON.stringify(Object.entries(attributes).sort(([a], [b]) => a.localeCompare(b)))}`;
    let bucket = this.lineBuckets.get(key);
    if (!bucket) { bucket = { data: [], attributes }; this.lineBuckets.set(key, bucket); this.layer(layer).push(bucket); this.stats.paths++; }
    bucket.data.push(segments.map(([a, b]) => `M${pointText(a)}L${pointText(b)}`).join(''));
    this.stats.segments += segments.length;
  }
  polygon(layer, rings, fill, rect) {
    if (this.plotter) return;
    const clipped = rings.map(r => clipRing(r, rect)).filter(r => r.length >= 3);
    if (!clipped.length) return;
    this.path(layer, clipped.map(r => `M${r.map(pointText).join('L')}Z`).join(''), { fill, stroke: 'none', 'fill-rule': 'evenodd' }, clipped.reduce((n, r) => n + r.length, 0));
  }
  text(layer, value, x, y, height = 2.4, attributes = {}) {
    const string = String(value ?? '');
    if (!this.plotter) { this.layer(layer).push(`<text x="${number(x)}" y="${number(y)}" fill="${this.theme.ink}" font-family="Arial, Helvetica, sans-serif" font-size="${number(height)}" ${Object.entries(attributes).map(([k, v]) => `${k}="${escapeXml(v)}"`).join(' ')}>${escapeXml(string)}</text>`); return; }
    const unit = height / 6, upper = string.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    const width = upper.length * unit * 5;
    const anchor = attributes['text-anchor'];
    if (anchor === 'end') x -= width; else if (anchor === 'middle') x -= width / 2;
    const strokes = [];
    for (const char of upper) {
      for (const stroke of FONT[char] || []) {
        const points = stroke.split(' ').map(pair => pair.split(',').map(Number)).map(p => [x + p[0] * unit, y - height + p[1] * unit]);
        for (let i = 1; i < points.length; i++) strokes.push([points[i - 1], points[i]]);
      }
      x += unit * 5;
    }
    this.lines(layer, strokes, { 'stroke-width': Math.min(.16, height * .055) });
  }
  markup() { return [...this.layers].map(([name, contents]) => `<g id="${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}" inkscape:groupmode="layer" inkscape:label="${escapeXml(name)}">${contents.map(item => typeof item === 'string' ? item : this.pathMarkup(item.data.join(''), item.attributes)).join('')}</g>`).join('\n'); }
  resetLayers() { this.layers.clear(); this.lineBuckets.clear(); }
}

function normalizedSettings(settings) {
  const clamp = (value, fallback, min, max) => Number.isFinite(Number(value)) ? Math.min(max, Math.max(min, Number(value))) : fallback;
  return {
    view: settings.view === 'axon' ? 'axon' : 'plan', style: THEMES[settings.style] ? settings.style : 'graphite', paper: PAPERS[settings.paper] ? settings.paper : 'a3', orientation: settings.orientation === 'portrait' ? 'portrait' : 'landscape',
    margin: clamp(settings.margin, 8, 0, 40), scale: clamp(settings.scale, 0, 0, 10000000), rotation: clamp(settings.rotation, 0, -36000, 36000),
    buildingWeight: clamp(settings.buildingWeight, .25, .03, 2), contextWeight: clamp(settings.contextWeight, .13, .03, 2), hatchSpacing: clamp(settings.hatchSpacing, 2, .45, 30),
    heightFactor: clamp(settings.heightFactor, 1, .1, 5), axonAngle: clamp(settings.axonAngle, 35, 15, 65), surfaceContrast:clamp(settings.surfaceContrast,75,0,100),
    hatching: settings.hatching === true, buildings: settings.buildings !== false, buildingFill:settings.buildingFill!==false, roads: settings.roads !== false, parks: settings.parks !== false, water: settings.water !== false, trees: settings.trees !== false, titleBlock: settings.titleBlock === true, outline: settings.outline === true, compass: settings.compass === true,
    terrain: settings.terrain !== false, contours: settings.contours !== false, contourInterval: clamp(settings.contourInterval, 10, 1, 100), roofDetails: settings.roofDetails !== false,
    artwork:['black','white'].includes(settings.artwork)?settings.artwork:'color',titlePanel:settings.titlePanel===true,footerDetails:settings.footerDetails===true,compassPosition:settings.compassPosition==='footer'?'footer':'map',title: settings.title, subtitle: settings.subtitle
  };
}

export function renderDrawing(map = {}, settings = {}, { plotter = false, plotterColors = false, background = 'paper' } = {}) {
  plotterColors = plotter && plotterColors === true;
  const config = normalizedSettings(settings), baseTheme = themeForSettings({...settings,style:config.style}), isAxon = config.view === 'axon';
  const lineArt=!plotter&&config.artwork!=='color',artInk=config.artwork==='white'?'#ffffff':'#000000',transparent=background==='transparent';
  const theme=lineArt?{...baseTheme,ink:artInk,soft:artInk,streetInk:artInk,buildingInk:artInk,hatch:artInk,titleInk:artInk,titleSoft:artInk}:baseTheme;
  const canvasColor=canvasBackgroundColor(background,theme.paper),sheetColor=canvasBackgroundColor(background,theme.survey?theme.paper:'#ffffff');
  const appearance=buildingAppearance(config.style,config.surfaceContrast,settings.buildingColor,settings.inkColor),light=surfaceLightDirection(config.rotation);
  const sourceMap = map;
  const projection=computeDrawingProjection(map,{...settings,...config}),pageAligned=projection.pageAligned;
  map = pageAligned?{...sourceChunk(map,projection.viewportExtent),extent:projection.viewportExtent,cropBoundary:null}:cropMap(map,settings);
  const terrain = config.terrain ? sourceMap.terrain : undefined, relief = terrainRange(terrain);
  const groundHeight = p => terrain ? Math.max(0, (sampleTerrain(terrain, p) ?? relief.min) - relief.min) : 0;
  const boundary = map.cropBoundary;
  let [width, height] = PAPERS[config.paper];
  if (config.orientation === 'portrait' && width > height) [width, height] = [height, width];
  const terrainUsed=Boolean(sourceMap.terrain&&(config.terrain||config.contours));
  const margin = Math.min(config.margin, width / 8, height / 8), notes=annotationLayout({...settings,...config},{map:sourceMap,width,height,margin,terrainUsed});
  const rect = projection.frame;
  const extent = map.extent?.length === 4 && map.extent.every(Number.isFinite) ? map.extent : [-500, -500, 500, 500];
  const [cx,cy] = projection.center;
  const rotation = config.rotation * Math.PI / 180, c = Math.cos(rotation), s = Math.sin(rotation), angle = config.axonAngle * Math.PI / 180;
  const rotate = p => [(p[0] - cx) * c + (p[1] - cy) * s, -(p[0] - cx) * s + (p[1] - cy) * c];
  function projectWorld(p, z = 0) {
    const [x, y] = rotate(p);
    return isAxon ? [(x - y) / SQRT2, -(x + y) / SQRT2 * Math.sin(angle) - z * Math.cos(angle), -(x + y) / SQRT2 * Math.cos(angle) + z * Math.sin(angle)] : [x, -y, z];
  }
  const selectedBuildings = isAxon ? detailedBuildings(map, { detail: config.roofDetails }) : map.buildings || [];
  const buildings = selectedBuildings.map(b => ({ ...b, rings: (b.rings || []).map(cleanRing).filter(r => r.length >= 3), height: Math.max(.1, Number(b.height) || 9), base: terrain ? buildingTerrainBase(terrain, buildingGroundReference(sourceMap, b)) : 0 })).filter(b => b.rings.length);
  const extentCorners = [[extent[0], extent[1]], [extent[2], extent[1]], [extent[2], extent[3]], [extent[0], extent[3]]];
  const denominator=projection.stats.scale,factor=projection.factor,[offsetX,offsetY]=projection.offset;
  const project = (p, z = 0) => { const q = projectWorld(p, z); return [q[0] * factor + offsetX, q[1] * factor + offsetY, q[2]]; };
  const projectGround = (p, offset = 0) => project(p, groundHeight(p) + offset);
  const stats = { paths: 0, segments: 0, hatchSegments: 0, hiddenSegments: 0, estimatedHeightCount: buildings.filter(b => b.heightSource !== 'source').length, scale: denominator, buildings: (map.buildings || []).length, massingParts: buildings.length };
  const writer = new SvgWriter(theme, plotter, stats, plotterColors);
  const projectedBoundary = boundary ? boundary.ring.map(p => project(p)) : null;
  const drapedTerrain = Boolean(isAxon && terrain);
  const projectedTerrainBoundary = drapedTerrain && boundary ? terrainCropPerimeter(terrain, boundary).map(p => project(p, p[2])) : null;
  const projectedCrop = boundary ? { ...boundary, center: project(boundary.center), ring: projectedBoundary, planes: projectedBoundary.map((a, i) => { const b = projectedBoundary[(i + 1) % projectedBoundary.length]; return [b[1] - a[1], -(b[0] - a[0]), a]; }) } : null;

  // The ground circle is an ellipse in axonometric sheets. Clip actual line
  // coordinates so pen plotters never depend on masks or SVG clip paths.
  function clipGroundLine(a, b) {
    if (!projectedCrop) return [[a, b]];
    let start = 0, end = 1;
    for (const [nx, ny, p] of projectedCrop.planes) {
      const origin = nx * (a[0] - p[0]) + ny * (a[1] - p[1]), direction = nx * (b[0] - a[0]) + ny * (b[1] - a[1]);
      if (Math.abs(direction) < EPS) { if (origin < -EPS) return []; continue; }
      const t = -origin / direction;
      if (direction > 0) start = Math.max(start, t); else end = Math.min(end, t);
      if (start > end - EPS) return [];
    }
    return [[lerp(a, b, start), lerp(a, b, end)]];
  }

  const faces = [], architecturalEdges = [];
  function addFace(rings3, kind, building,normal) {
    const original = rings3[0], plane = planeThrough(original), rings = rings3.map(r => clipRing(r.map(p => [p[0], p[1]]), rect)).filter(r => r.length >= 3);
    if (!rings.length || Math.abs(signedArea(rings[0])) < .00001) return;
    faces.push({ rings, plane, bounds: boundsOf(rings.flat()), depth: original.reduce((n, p) => n + p[2], 0) / original.length, kind, building, original: rings3,normal });
  }
  if (isAxon && config.buildings) for (const building of buildings) {
    const shaped = buildingFaces(building, { base: building.base, detail: config.roofDetails, heightFactor: config.heightFactor });
    stats.detailedRoofs = (stats.detailedRoofs || 0) + (shaped.roofMode !== 'flat' ? 1 : 0);
    stats.unsupportedRoofs = (stats.unsupportedRoofs || 0) + (shaped.unsupported ? 1 : 0);
    stats.estimatedRoofs = (stats.estimatedRoofs || 0) + (shaped.estimated ? 1 : 0);
    const visibleFaces = [];
    for (const face of shaped.faces) {
      if (face.kind === 'bottom') continue;
      if (face.kind === 'wall') {
        const [a, b, d] = face.rings3D[0], ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = d[0] - a[0], vy = d[1] - a[1], vz = d[2] - a[2];
        const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz;
        if (nx * (c - s) + ny * (s + c) >= -EPS) continue;
      }
      visibleFaces.push(face);
      addFace(face.rings3D.map(ring => ring.map(p => project(p, p[2]))), face.kind, building.id,surfaceNormal(face.rings3D[0]));
    }
    // Rear walls cannot contribute visible architectural strokes. Exclude their
    // edges before the expensive overlap/hidden-line queries.
    architecturalEdges.push(...buildingEdges(visibleFaces).map(([a, b]) => [project(a, a[2]), project(b, b[2])]));
  }
  if (!isAxon && config.buildings) for (const building of buildings) {
    // Plan contexts are occluded by the same footprints, including courtyard holes.
    // This is essential for plotting: filled SVG roofs cannot conceal stray strokes.
    addFace(building.rings.map(r => r.map(p => project(p, 1))), 'footprint', building.id);
  }
  const index = faces.length ? new SpatialIndex(faces) : null;
  function physicalLines(layer, segments, attrs = {}, depth = () => [0, 0], hide = true, groundCrop = false) {
    const result = [];
    for (const segment of segments) {
      const [a, b] = segment, clipped = clipSegment(a, b, rect); if (!clipped) continue;
      const [da, db] = depth(a, b), d1 = da + (db - da) * clipped[2], d2 = da + (db - da) * clipped[3];
      for (const [start, end] of groundCrop ? clipGroundLine(clipped[0], clipped[1]) : [[clipped[0], clipped[1]]]) {
        const ds = groundCrop ? depth(start, end) : [d1, d2];
        result.push(...visibleSegment(start, end, ds[0], ds[1], hide ? index : null, stats));
      }
    }
    writer.lines(layer, result, attrs); return result.length;
  }
  const groundPlane = planeThrough(extentCorners.map(p => project(p)));
  const groundDepth = (a, b) => [depthAt(groundPlane, a), depthAt(groundPlane, b)];
  const ringSegments = rings => rings.flatMap(r => r.map((p, i) => [p, r[(i + 1) % r.length]]));
  function areaLayer(name, areas, fill, hatchAngle, hatchMultiplier, outlines=true) {
    for (const area of areas || []) {
      const rings = (area.rings || []).map(cleanRing).filter(r => r.length >= 3).map(r => r.map(p => projectGround(p)));
      if (!rings.length || !boxesOverlap(boundsOf(rings.flat()), rect)) continue;
      if(!lineArt)writer.polygon(`${name} surfaces`, rings, fill, rect);
      if (config.hatching) {
        const segments = hatchSegments(rings.map(r => clipRing(r, rect)).filter(r => r.length >= 3), config.hatchSpacing * hatchMultiplier, hatchAngle);
        // Line artwork has no roof fill to cover context. Retain footprint
        // occlusion and open courtyards, as in the physical plotter drawing.
        stats.hatchSegments += physicalLines(`${name} hatching`, segments, { stroke: plotterColors ? fill : theme.hatch, 'stroke-width': Math.max(.06, config.contextWeight * .6) }, groundDepth, plotter || isAxon || lineArt || !config.buildingFill);
      }
      if(outlines)physicalLines(`${name} outlines`, ringSegments(rings), { stroke: plotterColors ? fill : theme.soft, 'stroke-width': config.contextWeight }, groundDepth, plotter || isAxon || lineArt || !config.buildingFill);
    }
  }
  if (config.parks) areaLayer('Landscape', map.parks, theme.park, -45, 1.7);
  if (config.water) {
    areaLayer('Water', map.water, theme.water, 0, 1.05,false);
    const shores=waterBoundarySegments(sourceMap.water,{seams:settings.waterSeams===true,extent:pageAligned?projection.viewportExtent:extent}).flatMap(segment=>boundary?clipLineToCircle(segment,boundary):[segment]).map(([a,b])=>[projectGround(a),projectGround(b)]);
    physicalLines('Water outlines',shores,{stroke:plotterColors?theme.water:theme.soft,'stroke-width':config.contextWeight},isAxon?(a,b)=>[a[2],b[2]]:groundDepth,plotter||isAxon||lineArt||!config.buildingFill);
  }

  if (config.contours && sourceMap.terrain) {
    for (const contour of contoursInCrop(sourceMap.terrain, config.contourInterval, extent, boundary)) {
      const z = config.terrain ? Math.max(0, contour.height - terrainRange(sourceMap.terrain).min) : 0;
      const points = contour.points.map(p => project(p, z));
      const segments = points.slice(1).map((p, i) => [points[i], p]);
      physicalLines('Terrain contours', segments, { stroke: theme.soft, 'stroke-width': config.contextWeight * .8 }, isAxon ? (a, b) => [a[2], b[2]] : groundDepth, plotter || isAxon || lineArt || !config.buildingFill);
    }
  }

  for (const road of map.roads || []) {
    if(!roadVisible(road,settings))continue;
    const points = cleanLine(road.points); if (points.length < 2) continue;
    const kind = road.kind || 'residential';
    if(theme.streetSolid){const points3=points.map(p=>projectGround(p)),multiplier=/motorway|trunk/.test(kind)?2.8:/primary/.test(kind)?2:/secondary|tertiary/.test(kind)?1.6:/footway|path|steps|cycleway/.test(kind)?.55:1;physicalLines('Street ink',points3.slice(1).map((p,i)=>[points3[i],p]),{stroke:theme.streetInk,'stroke-width':config.contextWeight*multiplier},isAxon?(a,b)=>[a[2],b[2]]:groundDepth,plotter||isAxon||lineArt||!config.buildingFill);continue;}
    const roadWidth = /motorway|trunk/.test(kind) ? 16 : /primary/.test(kind) ? 12 : /secondary|tertiary/.test(kind) ? 9 : /footway|path|track|bridleway|pedestrian|cycleway|steps/.test(kind) ? 2.2 : /service/.test(kind) ? 4 : 6.5;
    const ribbon = roadRibbon(points, roadWidth);
    const roadPolygons = boundary ? clipRingsToCircle([ribbon.ring], boundary) : [[ribbon.ring]];
    for (const polygon of roadPolygons) {
      const rings = polygon.map(r => r.map(p => projectGround(p)));
      if (!lineArt && boxesOverlap(boundsOf(rings.flat()), rect)) writer.polygon('Street surfaces', rings, theme.road, rect);
    }
    const edges = [ribbon.left, ribbon.right].flatMap(line => boundary ? clipLineToCircle(line, boundary) : [line]);
    const lines = edges.flatMap(line => line.slice(1).map((p, i) => [projectGround(line[i]), projectGround(p)]));
    // World-space edges were already clipped against the same convex crop.
    // Projection and sheet clipping preserve that inclusion; do not run the
    // identical 256 boundary planes again for every street segment.
    physicalLines('Street edges', lines, { stroke: theme.streetInk||theme.soft, 'stroke-width': config.contextWeight * .82 }, isAxon ? (a, b) => [a[2], b[2]] : groundDepth, plotter || isAxon || lineArt || !config.buildingFill);
  }

  if (config.buildings && !isAxon) for (const building of buildings) {
    const rings = building.rings.map(r => r.map(p => project(p)));
    if (!boxesOverlap(boundsOf(rings.flat()), rect)) continue;
    if(!plotter&&config.buildingFill)writer.polygon('Building footprints', rings, lineArt?artInk:theme.building, rect);
    if (config.hatching) {
      const segments = hatchSegments(rings.map(r => clipRing(r, rect)).filter(r => r.length >= 3), config.hatchSpacing, 45);
      stats.hatchSegments += physicalLines('Building hatching', segments, { stroke: theme.hatch, 'stroke-width': Math.max(.055, config.contextWeight * .6) }, groundDepth, false);
    }
    physicalLines('Building outlines', ringSegments(rings), { stroke:theme.buildingInk||theme.ink,'stroke-width': config.buildingWeight }, groundDepth, false);
  }

  if (isAxon && faces.length) {
    if (!plotter&&config.buildingFill) for (const id of painterOrder(faces, index)) {
      const face = faces[id];
      writer.polygon('Building surfaces', face.rings, lineArt?artInk:faceSurfaceColor(appearance,face.normal,light), rect);
    }
    for (const face of faces) {
      if (config.hatching && (face.kind === 'roof' || config.style === 'figure' && plotter)) {
        const segments = hatchSegments(face.rings, config.hatchSpacing, 45);
        stats.hatchSegments += physicalLines('Roof hatching', segments, { stroke: theme.hatch, 'stroke-width': Math.max(.055, config.contextWeight * .6) }, (a, b) => [depthAt(face.plane, a), depthAt(face.plane, b)]);
      }
    }
    physicalLines('Building edges', architecturalEdges, { stroke:lineArt?artInk:appearance.edge,'stroke-width': config.buildingWeight }, (a, b) => [a[2], b[2]]);
  }

  if (config.trees) {
    const segments = [];
    for (const tree of spacedTrees(map.trees,sourceMap.trees,projection,settings)) {
      const p = Array.isArray(tree) ? tree : tree.position; if (!p || !Number.isFinite(p[0]) || !Number.isFinite(p[1])) continue;
      // Trees remain diagrammatic crowns; the globe/game silhouette has no role here.
      const radius = Math.max(.6, Math.min(2.3, factor * 3));
      const center = projectGround(p, isAxon ? 3 : 0);
      const ring = Array.from({ length: 12 }, (_, i) => { const theta = i / 12 * Math.PI * 2; return [center[0] + Math.cos(theta) * radius, center[1] + Math.sin(theta) * radius * (isAxon ? .7 : 1), center[2]]; });
      segments.push(...ringSegments([ring]));
      segments.push([[center[0] - radius * .28, center[1], center[2]], [center[0] + radius * .28, center[1], center[2]]], [[center[0], center[1] - radius * .28, center[2]], [center[0], center[1] + radius * .28, center[2]]]);
    }
    physicalLines('Tree symbols', segments, { stroke: plotterColors?theme.park:theme.soft, 'stroke-width': config.contextWeight * .8 }, (a, b) => [a[2], b[2]]);
  }

  const mapMarkup = writer.markup();
  writer.resetLayers();
  const pageRing=[[rect[0],rect[1]],[rect[2],rect[1]],[rect[2],rect[3]],[rect[0],rect[3]]];
  if(config.outline){if(pageAligned)writer.lines('Crop boundary',ringSegments([pageRing]),{stroke:theme.ink,'stroke-width':config.buildingWeight});else if(boundary)physicalLines('Crop boundary',ringSegments([drapedTerrain?projectedTerrainBoundary:projectedBoundary]),{stroke:theme.ink,'stroke-width':config.buildingWeight},drapedTerrain?(a,b)=>[a[2],b[2]]:groundDepth);}
  // Notes are on the sheet, which can differ from the map's blue canvas.
  const luminance=color=>parseInt(color.slice(1,3),16)*.2126+parseInt(color.slice(3,5),16)*.7152+parseInt(color.slice(5,7),16)*.0722;
  const noteInk=color=>{if(transparent||lineArt)return theme.ink;const paperLight=luminance(color),inkLight=luminance(theme.ink);return paperLight>150&&inkLight>150?'#26323d':paperLight<100&&inkLight<100?'#ffffff':theme.ink;};
  writer.theme={...theme,ink:noteInk(sheetColor)};

  const footerBottom=notes.footerBottom,footerTop=notes.footerTop;
  const border = [[margin, margin], [width - margin, margin], [width - margin, height - margin], [margin, height - margin]];
  if (config.outline) writer.lines('Sheet frame', ringSegments([border]), { stroke: theme.soft, 'stroke-width': .12 });
  if (config.compass) {
    const noteTheme=writer.theme;
    if(config.compassPosition==='map')writer.theme={...noteTheme,ink:noteInk(canvasColor)};
    // The north vector is projected through the same camera as the source drawing.
    const origin = projectWorld([cx, cy]), north = projectWorld([cx, cy + 1]);
    const nd = [north[0] - origin[0], north[1] - origin[1]], nl = Math.hypot(...nd) || 1, u = [nd[0] / nl, nd[1] / nl];
    const center=config.compassPosition==='footer'?[width-margin-10,footerBottom-9]:[rect[2]-11,rect[3]-11];
    const na=[center[0]-u[0]*4,center[1]-u[1]*4],nb=[center[0]+u[0]*4,center[1]+u[1]*4];
    if(config.compassPosition==='map'&&!plotter&&!transparent)writer.polygon('Compass backing',[[[center[0]-9,center[1]-9],[center[0]+9,center[1]-9],[center[0]+9,center[1]+9],[center[0]-9,center[1]+9]]],canvasColor,rect);
    const wing = [u[1] * 1.7, -u[0] * 1.7];
    writer.lines('Compass', [[na, nb], [[nb[0] - u[0] * 3 + wing[0], nb[1] - u[1] * 3 + wing[1]], nb], [[nb[0] - u[0] * 3 - wing[0], nb[1] - u[1] * 3 - wing[1]], nb]], { 'stroke-width': .18 });
    writer.text('Compass', 'N', nb[0], nb[1] - 2, 2.5, { 'text-anchor': 'middle' });
    writer.theme=noteTheme;
  }

  const annotation=notes.style==='panel'?'Survey title panel':notes.style==='block'?'Detailed footer':'Sheet annotations';
  const annotationTitle=String(config.title||sourceMap.title||'Architectural study');
  const fitText=(value,size,space)=>Math.min(size,space/Math.max(1,[...String(value)].length)*(plotter?6/5:.9));
  const sourceInk=color=>transparent?(lineArt?artInk:theme.ink):luminance(color)<128?'#ffffff':'#26323d';
  let creditInk=sourceInk(sheetColor);
  if(notes.active&&notes.style==='panel'){
    const panel=notes.header,middle=panel.x+panel.width/2;
    const backing=settings.titleBackdrop===true&&notes.title&&!plotter&&!transparent&&!lineArt;
    if(backing)writer.layer(annotation).push(`<rect x="${number(panel.x)}" y="${number(panel.y)}" width="${number(panel.width)}" height="${number(panel.height)}" fill="${theme.panel||theme.paper}" opacity="0.92"/>`);
    const panelColor=backing?theme.panel||theme.paper:canvasColor;
    creditInk=sourceInk(panelColor);
    writer.theme={...writer.theme,ink:noteInk(panelColor)};
    if(notes.title){
      const tracking=config.style==='survey-rome'?.25:.015,upper=annotationTitle.toUpperCase();
      const units=Math.max(1,[...upper].reduce((sum,c)=>sum+(/[MW@]/.test(c)?1.1:/[I1 .,:/]/.test(c)?.4:.8),0)+Math.max(0,upper.length-1)*tracking);
      const size=Math.min(panel.side*.052,panel.width*.88/units);
      if(plotter)writer.text(annotation,upper,middle,panel.titleY,size,{'text-anchor':'middle'});
      else writer.layer(annotation).push(`<text x="${number(middle)}" y="${number(panel.titleY)}" text-anchor="middle" font-family="${escapeXml(theme.titleFont||'Georgia, serif')}" font-size="${number(size)}" font-weight="700" letter-spacing="${number(size*tracking)}" fill="${writer.theme.ink}">${escapeXml(upper)}</text>`);
      if(notes.subtitle)writer.text(annotation,notes.subtitle,middle,panel.subtitleY,fitText(notes.subtitle,panel.side*.015,panel.width*.9),{'text-anchor':'middle'});
    }
  }else if(notes.active&&notes.style==='block'){
    writer.lines(annotation,[[[margin,footerTop],[width-margin,footerTop]]],{stroke:theme.soft,'stroke-width':.15});
    if(notes.title){
      const space=notes.credits?notes.credit.x-margin-10:width-margin*2-notes.reserve-10;
      if(notes.credits)writer.lines(annotation,[[[notes.credit.x-3,footerTop+3],[notes.credit.x-3,footerBottom-3]]],{stroke:theme.soft,'stroke-width':.15});
      writer.text(annotation,annotationTitle,margin+4,footerTop+10,fitText(annotationTitle,6,space),{'font-weight':'600'});
      if(notes.subtitle)writer.text(annotation,notes.subtitle,margin+4,footerTop+17,fitText(notes.subtitle,2.5,space));
    }
  }else if(notes.title){
    const caption=[annotationTitle,notes.subtitle].filter(Boolean).join(' / ');
    writer.text(annotation,caption,margin+2,footerTop+4.5,fitText(caption,3.2,notes.credit.width-4),{'font-weight':'600'});
  }
  if(notes.credits)writer.layer(annotation).push(attributionMarkup(sourceMap,{...notes.credit,terrainUsed,ink:plotter?(plotterColors?theme.ink:'#000000'):creditInk,plotter,plotterInk:plotterColors?theme.ink:'#000000',align:notes.style==='panel'?'center':'start'}));
  let terrainSurfaceMarkup = '';
  if (drapedTerrain && !plotter && !transparent && !lineArt) {
    const polygons = terrainCropSurface(terrain, extent, boundary).map(polygon => clipRing(polygon.map(p => project(p, p[2])), rect)).filter(polygon => polygon.length >= 3 && Math.abs(signedArea(polygon)) > .000001);
    // One same-winding compound path fills the projected surface silhouette.
    // Internal triangulation edges never become drawing or plotter strokes.
    terrainSurfaceMarkup = `<path id="terrain-surface" d="${polygons.map(polygon => `M${(signedArea(polygon) < 0 ? polygon.toReversed() : polygon).map(pointText).join('L')}Z`).join('')}" fill="${canvasColor}" fill-rule="nonzero" stroke="none"/>`;
    stats.terrainSurfacePolygons = polygons.length;
  }
  const backgroundMarkup = plotter || transparent ? '' : `<rect width="${width}" height="${height}" fill="${sheetColor}"/>${pageAligned?`<path d="M${pageRing.map(pointText).join('L')}Z" fill="${canvasColor}" stroke="none"/>`:!drapedTerrain&&boundary?`<path d="M${projectedBoundary.map(pointText).join('L')}Z" fill="${canvasColor}" stroke="none"/>`:''}`;
  const title = escapeXml(config.title || map.title || 'Omni architectural drawing');
  const sourceDescription=typeof sourceMap.source==='string'?sourceMap.source:'Imported geometry';
  const terrainDescription=sourceMap.terrain&&(config.terrain||config.contours)?` Terrain: ${sourceMap.terrain.source}. ${sourceMap.terrain.datum}.` : '';
  const desc = escapeXml(`${isAxon ? 'Orthographic axonometric' : 'Plan'} drawing. Physical sheet ${width} by ${height} millimetres. Ground scale 1:${denominator}. ${plotter ? 'Plotter paths only; no filled areas or embedded text.' : 'Measured vector geometry.'} Source: ${sourceDescription}.${terrainDescription}`);
  stats.attribution=getAttribution(sourceMap,{terrainUsed});
  const sourceMetadata=notes.credits&&!plotterColors?'':`<metadata id="data-source-notices">${escapeXml(attributionText(sourceMap,{terrainUsed}))}</metadata>`;
  const notesMarkup = writer.markup();
  const colorPlot = plotterColors ? colorPenLayers(mapMarkup + notesMarkup) : null;
  if (colorPlot) stats.pens = colorPlot.pens;
  const content = colorPlot ? colorPlot.markup : `<g id="map-content">${terrainSurfaceMarkup}${mapMarkup}</g>\n${notesMarkup}`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="${width}mm" height="${height}mm" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="drawing-title drawing-description"><title id="drawing-title">${title}</title><desc id="drawing-description">${desc}</desc>${sourceMetadata}${backgroundMarkup}\n${content}\n</svg>`;
  const matrix = isAxon ? [(c + s) / SQRT2, (s - c) / SQRT2, -(c - s) / SQRT2 * Math.sin(angle), -(s + c) / SQRT2 * Math.sin(angle)] : [c, s, s, -c];
  return { svg, stats, sheet: { width, height }, navigation: { matrix: matrix.map(value => value * factor), offset: [offsetX, offsetY], frame: rect }, projectionLabel: isAxon ? `Orthographic axon · ${config.axonAngle}°` : 'Measured plan' };
}

export const paperSizes = Object.freeze(PAPERS);
