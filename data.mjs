// Shared drawing/fabrication coordinates: metres, x east, y north, z up.
const METRES_PER_DEGREE = 6371008.8 * Math.PI / 180;
import {validateTerrain} from './terrain.mjs';
import {checkedMapAttribution,importedAttribution} from './attribution-import.mjs';
const LIMITS = { features: 200000, vertices: 3000000, ring: 8192, radius: 5000, bytes: 64 * 1024 * 1024 };
const round = n => Math.round(n * 10) / 10;
const equal = (a, b) => a[0] === b[0] && a[1] === b[1];
const pointOK = p => Array.isArray(p) && p.length >= 2 && Number.isFinite(p[0]) && Number.isFinite(p[1]);
const area = ring => ring.reduce((sum, p, i) => {
  const q = ring[(i + 1) % ring.length];
  return sum + p[0] * q[1] - q[0] * p[1];
}, 0) / 2;

function cleanPoints(points) {
  const out = [];
  for (const p of points) {
    const q = [round(p[0]), round(p[1])];
    if (!out.length || !equal(q, out[out.length - 1])) out.push(q);
  }
  return out;
}

function segmentDistanceSquared(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const t = dx || dy ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy))) : 0;
  return (p[0] - a[0] - t * dx) ** 2 + (p[1] - a[1] - t * dy) ** 2;
}

// Iterative Douglas–Peucker avoids recursion limits on detailed coastlines.
function simplifyLine(points, tolerance = 0.5) {
  if (points.length < 3) return points;
  const keep = new Uint8Array(points.length);
  keep[0] = keep[points.length - 1] = 1;
  const stack = [[0, points.length - 1]], threshold = tolerance ** 2;
  while (stack.length) {
    const [start, end] = stack.pop();
    let max = threshold, index = -1;
    for (let i = start + 1; i < end; i++) {
      const distance = segmentDistanceSquared(points[i], points[start], points[end]);
      if (distance > max) { max = distance; index = i; }
    }
    if (index !== -1) { keep[index] = 1; stack.push([start, index], [index, end]); }
  }
  return points.filter((_, i) => keep[i]);
}

function orientation(a, b, c) { return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]); }
function segmentsMeet(a, b, c, d) {
  const epsilon=1e-8;
  if (Math.max(a[0], b[0])+epsilon < Math.min(c[0], d[0]) || Math.max(c[0], d[0])+epsilon < Math.min(a[0], b[0]) ||
      Math.max(a[1], b[1])+epsilon < Math.min(c[1], d[1]) || Math.max(c[1], d[1])+epsilon < Math.min(a[1], b[1])) return false;
  // Decimal coordinate rounding can create a touching edge with a residual
  // floating-point cross product. Such rings must not become printable solids.
  const sign=(p,q,r)=>{const value=orientation(p,q,r);return Math.abs(value)<=epsilon*Math.max(1,Math.hypot(q[0]-p[0],q[1]-p[1]))?0:Math.sign(value);};
  const o1 = sign(a, b, c), o2 = sign(a, b, d), o3 = sign(c, d, a), o4 = sign(c, d, b);
  return ((o1 <= 0 && o2 >= 0) || (o1 >= 0 && o2 <= 0)) && ((o3 <= 0 && o4 >= 0) || (o3 >= 0 && o4 <= 0));
}

function simpleRing(ring) {
  const count = ring.length - 1;
  if (ring.slice(0, -1).some((point, i) => equal(point, ring[i + 1]))) return false;
  const edges = ring.slice(0, -1).map((a, i) => ({ a, b: ring[i + 1], i, min: Math.min(a[0], ring[i + 1][0]), max: Math.max(a[0], ring[i + 1][0]) })).sort((a, b) => a.min - b.min);
  let active = [];
  for (const edge of edges) {
    active = active.filter(other => other.max >= edge.min);
    for (const other of active) {
      const delta = Math.abs(edge.i - other.i);
      if (delta !== 1 && delta !== count - 1 && segmentsMeet(edge.a, edge.b, other.a, other.b)) return false;
    }
    active.push(edge);
  }
  return true;
}

function inside(point, ring) {
  let result = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[i], b = ring[j];
    if ((a[1] > point[1]) !== (b[1] > point[1]) && point[0] < (b[0] - a[0]) * (point[1] - a[1]) / (b[1] - a[1]) + a[0]) result = !result;
  }
  return result;
}

function ringsMeet(a, b) {
  for (let i = 0; i < a.length - 1; i++) for (let j = 0; j < b.length - 1; j++) if (segmentsMeet(a[i], a[i + 1], b[j], b[j + 1])) return true;
  return false;
}

function cleanRing(points, hole = false) {
  let ring = cleanPoints(points);
  if (ring.length && equal(ring[0], ring[ring.length - 1])) ring.pop();
  if (ring.length < 3 || ring.length > LIMITS.ring) return null;
  const original = [...ring, ring[0]];
  ring = cleanPoints(simplifyLine(original));
  if (!equal(ring[0], ring[ring.length - 1])) ring.push(ring[0]);
  // Simplification must not create a crossed footprint; preserve the original.
  if (ring.length < 4 || Math.abs(area(ring)) < 0.5 || !simpleRing(ring)) ring = original;
  if (ring.length < 4 || Math.abs(area(ring)) < 0.5 || !simpleRing(ring)) return null;
  if ((area(ring) < 0) !== hole) ring.reverse();
  // Canonical start vertex lets identical footprints deduplicate reliably.
  ring.pop();
  let first = 0;
  for (let i = 1; i < ring.length; i++) if (ring[i][0] < ring[first][0] || (ring[i][0] === ring[first][0] && ring[i][1] < ring[first][1])) first = i;
  ring = [...ring.slice(first), ...ring.slice(0, first)];
  ring.push(ring[0]);
  return ring;
}

function cleanPolygon(points) {
  if (!Array.isArray(points) || !points.length) return null;
  const outer = cleanRing(points[0]);
  if (!outer) return null;
  const rings = [outer];
  for (const source of points.slice(1)) {
    const hole = cleanRing(source, true);
    if (!hole) return null;
    // Invalid courtyards invalidate the feature rather than filling the hole.
    if (!inside(hole[0], outer) || ringsMeet(outer, hole) || rings.slice(1).some(r => ringsMeet(r, hole) || inside(hole[0], r) || inside(r[0], hole))) return null;
    rings.push(hole);
  }
  return rings;
}

function clipLine(points, radius) {
  const parts = [];
  let current = [];
  const flush = () => { if (current.length > 1) parts.push(current); current = []; };
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1], b = points[i], dx = b[0] - a[0], dy = b[1] - a[1];
    const ps = [-dx, dx, -dy, dy], qs = [a[0] + radius, radius - a[0], a[1] + radius, radius - a[1]];
    let start = 0, end = 1, accepted = true;
    for (let edge = 0; edge < 4; edge++) {
      if (!ps[edge]) { if (qs[edge] < 0) accepted = false; continue; }
      const t = qs[edge] / ps[edge];
      if (ps[edge] < 0) start = Math.max(start, t); else end = Math.min(end, t);
    }
    if (!accepted || start > end) { flush(); continue; }
    const c = [a[0] + start * dx, a[1] + start * dy], d = [a[0] + end * dx, a[1] + end * dy];
    if (current.length && segmentDistanceSquared(c, current[current.length - 1], current[current.length - 1]) > 0.01) flush();
    if (!current.length) current.push(c);
    current.push(d);
    if (end < 1) flush();
  }
  flush();
  return parts.map(p => cleanPoints(simplifyLine(p))).filter(p => p.length > 1);
}

function clipRing(source, radius) {
  let ring = source.slice();
  if (ring.length && equal(ring[0], ring[ring.length - 1])) ring.pop();
  for (const [axis, direction] of [[0, -1], [0, 1], [1, -1], [1, 1]]) {
    if (!ring.length) break;
    const output = [], edge = direction * radius;
    const inBounds = p => direction * p[axis] <= radius;
    for (let i = 0; i < ring.length; i++) {
      const a = ring[(i + ring.length - 1) % ring.length], b = ring[i], aIn = inBounds(a), bIn = inBounds(b);
      if (aIn !== bIn) {
        const t = (edge - a[axis]) / (b[axis] - a[axis]);
        const p = [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])];
        p[axis] = edge;
        output.push(p);
      }
      if (bIn) output.push(b);
    }
    ring = output;
  }
  return ring.length >= 3 ? [...ring, ring[0]] : [];
}

function readHeight(properties) {
  for (const key of ['height', 'render_height', 'building_height']) {
    const raw = properties[key];
    if (raw === null || raw === undefined || raw === '') continue;
    const height = readMetres(raw);
    if (Number.isFinite(height) && height > 0 && height <= 1000) return { height: Math.max(.1,round(height)), heightSource: 'source' };
  }
  const levels = Number.parseFloat(properties['building:levels'] ?? properties.num_floors ?? properties.levels);
  return { height: Number.isFinite(levels) && levels > 0 && levels < 150 ? round(levels * 3) : 9, heightSource: 'estimated' };
}

function readMetres(raw){
  const text=String(raw??'').trim().replace(/(\d),(?=\d)/g,'$1.');
  const value=Number.parseFloat(text);if(!Number.isFinite(value))return 0;
  const feet=text.match(/^[+-]?\d+(?:\.\d+)?\s*(?:ft\b|feet\b|foot\b|['′])\s*(\d+(?:\.\d+)?)?\s*(?:in\b|inches\b|["″])?/i);
  return feet?(value*.3048+(Number(feet[1]||0)*.0254*Math.sign(value||1))):value;
}
function readDirection(raw){
  const cardinal=['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
  const index=cardinal.indexOf(String(raw??'').trim().toUpperCase());
  return index<0?Number.parseFloat(String(raw??'').replace(',','.')):index*22.5;
}
function readMinimum(properties){
  const floors=Number.parseFloat(properties['building:min_level']??properties.min_floor??0);
  const minimum=Math.max(0,readMetres(properties.min_height),Number.isFinite(floors)?floors*3:0);
  // A source roof-only volume has no walls below its explicitly mapped eave.
  // Use height minus roof:height only when both dimensions are actual source
  // measurements; ordinary buildings and roofs without dimensions keep datum 0.
  const roofOnly=properties.building==='roof'||properties['building:part']==='roof',height=readHeight(properties),roof=readMetres(properties['roof:height']);
  return roofOnly&&height.heightSource==='source'&&roof>0&&roof<=height.height?Math.max(minimum,height.height-roof):minimum;
}
function readBuilding(properties,sourceId){
  const height=readHeight(properties),shape=String(properties['roof:shape']||'flat').toLowerCase().slice(0,40);
  const roof=readMetres(properties['roof:height']),roofLevels=Number.parseFloat(properties['roof:levels']);
  const minimum=readMinimum(properties);
  if(height.heightSource==='estimated'&&minimum>=height.height)height.height=Math.min(1000,minimum+height.height);
  const roofHeight=roof>0?Math.min(height.height,roof):roofLevels>0?Math.min(height.height,roofLevels*3):undefined;
  const direction=readDirection(properties['roof:direction']),angle=Number.parseFloat(properties['roof:angle']);
  return {...height,minHeight:Math.min(minimum,Math.max(0,height.height-.1)),roofShape:shape,
    ...(roofHeight!==undefined?{roofHeight:round(roofHeight),roofHeightSource:roof>0?'source':'estimated'}:{}),
    ...(Number.isFinite(direction)?{roofDirection:((direction%360)+360)%360}:{}),
    ...(Number.isFinite(angle)&&angle>0&&angle<90?{roofAngle:angle}:{}),
    ...(properties['roof:orientation']?{roofOrientation:String(properties['roof:orientation']).slice(0,20)}:{}),
    ...(properties.name||properties['name:en']?{name:String(properties['name:en']||properties.name).slice(0,160)}:{}),
    ...(sourceId!==undefined?{sourceId:String(sourceId).slice(0,160)}:{}),
    ...(properties.__parentSourceId?{parentSourceId:String(properties.__parentSourceId).slice(0,160)}:{}),
    ...(properties.__partsCoverFootprint===true?{partsCoverFootprint:true}:{}),
    ...(properties['tower:construction']?{towerConstruction:String(properties['tower:construction']).trim().toLowerCase().slice(0,40)}:{}),
    ...(properties.__partsOnly===true?{partsOnly:true}:{}),
    ...(properties.building==='roof'||properties['building:part']==='roof'?{roofOnly:true}:{}),
    isPart:properties.__layer==='buildingParts'||properties.building==='roof'||Boolean(properties['building:part']&&properties['building:part']!=='no')};
}

// Coincident relation/way outlines share geometry, but not necessarily source
// metadata or the identity referenced by mapped parts. Retain every identity
// and enrich the surviving footprint rather than disconnecting its children.
function mergeBuilding(prior,building){
  const aliases=new Set([...(prior.sourceAliases||[]),building.sourceId,...(building.sourceAliases||[])]);aliases.delete(prior.sourceId);aliases.delete(undefined);
  if(aliases.size)prior.sourceAliases=[...aliases];
  if(building.heightSource==='source'&&prior.heightSource==='estimated')Object.assign(prior,{height:building.height,heightSource:building.heightSource});
  if(!prior.name&&building.name)prior.name=building.name;
  if(prior.roofShape==='flat'&&building.roofShape!=='flat')for(const key of ['roofShape','roofHeight','roofHeightSource','roofDirection','roofAngle','roofOrientation'])if(building[key]!==undefined)prior[key]=building[key];
  for(const key of ['partsCoverFootprint','partsOnly','roofOnly'])if(building[key])prior[key]=true;
  if(building.towerConstruction)prior.towerConstruction=building.towerConstruction;
}

function featureClass(properties, geometry) {
  const forced = properties.__layer;
  if (['buildings', 'buildingParts', 'roads', 'parks', 'water', 'trees'].includes(forced)) return forced;
  const type = String(properties.class ?? properties.type ?? properties.layer ?? '').toLowerCase();
  const tagged = key => properties[key] !== null && properties[key] !== undefined && properties[key] !== '' && properties[key] !== 'no' && properties[key] !== false;
  if (tagged('building') || tagged('building:part') || /^(building|buildings|building_part)$/.test(type)) return 'buildings';
  if (properties.natural === 'tree' || /^trees?$/.test(type)) return 'trees';
  if (tagged('highway') || /^(road|roads|street|transportation)$/.test(type)) return 'roads';
  if (['water', 'bay'].includes(properties.natural) || tagged('water') || (tagged('waterway') && ['Polygon', 'MultiPolygon'].includes(geometry.type)) || /^(water|waterbody|water_area)$/.test(type)) return 'water';
  if (['park', 'common', 'garden', 'recreation_ground', 'playground', 'dog_park', 'pitch'].includes(properties.leisure) || ['grass', 'meadow', 'forest', 'allotments', 'recreation_ground'].includes(properties.landuse) || ['wood', 'grassland'].includes(properties.natural) || /^(park|parks|green|greenspace|vegetation)$/.test(type)) return 'parks';
  return null;
}

function collectionFeatures(collection) {
  if (!collection || typeof collection !== 'object') throw new Error('Choose a GeoJSON FeatureCollection.');
  const features = collection.type === 'FeatureCollection' ? collection.features : collection.type === 'Feature' ? [collection] : null;
  if (!Array.isArray(features) || !features.length) throw new Error('The GeoJSON contains no features.');
  if (features.length > LIMITS.features) throw new Error('Use a smaller GeoJSON: maximum 200,000 features.');
  const crs = collection.crs?.properties?.name;
  if (crs && !/(4326|CRS84)$/i.test(crs)) throw new Error('GeoJSON must use WGS84 longitude and latitude (EPSG:4326).');
  return features;
}

/** Import mixed WGS84 GeoJSON into the same metric model as the bundled maps. */
export function normalizeGeoJSON(collection, metadata = {}) {
  // Saved V3 studies embed this normalized model; validate without reprojection.
  if (collection && Array.isArray(collection.extent) && Array.isArray(collection.buildings) && !collection.type) return validateMap(checkedMapAttribution(collection));
  const features = collectionFeatures(collection);
  let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity, vertexCount = 0;
  const valid = [];
  for (const feature of features) {
    const geometry = feature?.geometry;
    if (!geometry || !['Polygon', 'MultiPolygon', 'LineString', 'MultiLineString', 'Point', 'MultiPoint'].includes(geometry.type)) continue;
    const coordinates = [];
    const depths = { Point: 0, MultiPoint: 1, LineString: 1, MultiLineString: 2, Polygon: 2, MultiPolygon: 3 };
    const walk = (value, depth) => {
      if (!Array.isArray(value)) throw new Error('A geometry contains invalid coordinates.');
      if (depth === 0) {
        if (!pointOK(value) || Math.abs(value[0]) > 180 || Math.abs(value[1]) > 85) throw new Error('Use finite WGS84 longitude/latitude coordinates between ±85° latitude.');
        if (++vertexCount > LIMITS.vertices) throw new Error('Use a smaller GeoJSON: maximum 3,000,000 vertices.');
        coordinates.push(value);
      } else for (const nested of value) walk(nested, depth - 1);
    };
    walk(geometry.coordinates, depths[geometry.type]);
    const kind = featureClass(feature.properties ?? {}, geometry);
    if (!kind || !coordinates.length) continue;
    for (const p of coordinates) {
      minLon = Math.min(minLon, p[0]); maxLon = Math.max(maxLon, p[0]);
      minLat = Math.min(minLat, p[1]); maxLat = Math.max(maxLat, p[1]);
    }
    valid.push({ feature, kind });
  }
  if (!valid.length) throw new Error('No supported building, road, park, water or tree features were found.');
  const lat = metadata.lat ?? (minLat + maxLat) / 2, lon = metadata.lon ?? (minLon + maxLon) / 2;
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 85 || Math.abs(lon) > 180) throw new Error('The map origin must be a finite WGS84 latitude/longitude.');
  const cosine = Math.cos(lat * Math.PI / 180);
  const project = p => [(p[0] - lon) * METRES_PER_DEGREE * cosine, (p[1] - lat) * METRES_PER_DEGREE];
  const inferred = Math.ceil(Math.max(Math.abs(minLon - lon) * METRES_PER_DEGREE * cosine, Math.abs(maxLon - lon) * METRES_PER_DEGREE * cosine, Math.abs(minLat - lat) * METRES_PER_DEGREE, Math.abs(maxLat - lat) * METRES_PER_DEGREE) / 50) * 50;
  const radius = metadata.radius ?? Math.max(100, inferred);
  if (!Number.isFinite(radius) || radius < 50 || radius > LIMITS.radius) throw new Error('Limit the imported drawing to an area at most 10 km across.');
  const id = String(metadata.id ?? 'imported-map').replace(/[^a-z0-9_-]/gi, '-').slice(0, 80) || 'imported-map';
  const notices=importedAttribution(collection,metadata,valid.map(item=>item.feature));
  const map = {
    id, title: String(metadata.title ?? 'Imported map').slice(0, 160), region: String(metadata.region ?? 'WGS84 GeoJSON').slice(0, 160),
    lat, lon, extent: [-radius, -radius, radius, radius], source:notices.source,
    ...(notices.attribution.length?{attribution:notices.attribution}:{}),
    buildings: [], buildingParts: [], roads: [], parks: [], water: [], trees: []
  };
  if(metadata.defaultViewRadius!==undefined)map.defaultViewRadius=metadata.defaultViewRadius;
  if(metadata.sourceRadius!==undefined)map.sourceRadius=metadata.sourceRadius;
  if(metadata.category)map.category=String(metadata.category).slice(0,60);
  const seen = { buildings: new Map(), buildingParts:new Map(), roads: new Map(), parks: new Map(), water: new Map(), trees: new Set() };
  let skipped = features.length - valid.length;
  for (const { feature, kind } of valid) {
    const properties = feature.properties ?? {}, geometry = feature.geometry;
    if (kind === 'trees') {
      const points = geometry.type === 'Point' ? [geometry.coordinates] : geometry.type === 'MultiPoint' ? geometry.coordinates : [];
      for (const point of points) {
        const p = cleanPoints([project(point)])[0], key = p.join(',');
        if (Math.abs(p[0]) <= radius && Math.abs(p[1]) <= radius && !seen.trees.has(key)) { seen.trees.add(key); map.trees.push(p); }
      }
      continue;
    }
    if (kind === 'roads') {
      const lines = geometry.type === 'LineString' ? [geometry.coordinates] : geometry.type === 'MultiLineString' ? geometry.coordinates : geometry.type === 'Polygon' ? [geometry.coordinates[0]] : geometry.type === 'MultiPolygon' ? geometry.coordinates.map(p => p[0]) : [];
      for (const line of lines) for (const points of clipLine(line.map(project), radius)) {
        const forward = JSON.stringify(points), backward = JSON.stringify([...points].reverse()), key = forward < backward ? forward : backward;
        if (seen.roads.has(key)) continue;
        seen.roads.set(key, true);
        map.roads.push({ id: `r${map.roads.length}`, points, kind: String(properties.highway ?? properties.subtype ?? 'street').slice(0, 40) });
      }
      continue;
    }
    const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.type === 'MultiPolygon' ? geometry.coordinates : [];
    if (!polygons.length) { skipped++; continue; }
    // Elevated parts and underground envelopes do not describe ground footprints.
    const structural=kind==='buildings'||kind==='buildingParts';
    if (structural && (['underground', 'underwater'].includes(properties.location) || properties.underground === 'yes')) { skipped++; continue; }
    if(kind==='buildings'&&readMinimum(properties)>0&&!properties['building:part']&&properties.building!=='roof'){skipped++;continue;}
    for (const polygon of polygons) {
      const projected = polygon.map(ring => ring.map(project));
      if (structural) {
        const outer = projected[0];
        if (!outer?.length || outer.some(p => Math.abs(p[0]) > radius || Math.abs(p[1]) > radius)) { skipped++; continue; }
      }
      const clipped = structural ? projected : projected.map(ring => clipRing(ring, radius)).filter((ring, index) => index === 0 || ring.length);
      const rings = cleanPolygon(clipped);
      if (!rings) { skipped++; continue; }
      const building=structural?readBuilding(properties,feature.id):{};
      if(structural&&building.heightSource==='source'&&readMinimum(properties)>=building.height){skipped++;continue;}
      if(structural&&building.isPart){
        const partKey=JSON.stringify([rings,building.minHeight,building.height,building.roofShape,building.roofHeight,building.roofDirection,building.roofAngle,building.roofOrientation,building.parentSourceId]);
        const partIndex=seen.buildingParts.get(partKey);
        if(partIndex===undefined){seen.buildingParts.set(partKey,map.buildingParts.length);map.buildingParts.push({id:`part-${map.buildingParts.length}`,rings,...building});}
        else mergeBuilding(map.buildingParts[partIndex],building);
        // Retain a building=roof projection in the plan as supplied by source;
        // its separate structural record uses the measured elevated roof floor.
        if(kind==='buildingParts'||(building.minHeight>0&&properties.building!=='roof'))continue;
      }
      const key = kind==='buildingParts'?JSON.stringify([rings,building.minHeight,building.height,building.roofShape,building.roofHeight]):JSON.stringify(rings), existing = seen[kind].get(key);
      if (existing !== undefined) {
        if (structural) {
          mergeBuilding(map[kind][existing],building);
        }
        continue;
      }
      seen[kind].set(key, map[kind].length);
      const record={ id: `${kind==='buildingParts'?'part-':kind[0]}${map[kind].length}`, rings, ...building };
      map[kind].push(record);
    }
  }
  const parents=new Map();for(const parent of map.buildings)for(const sourceId of [parent.sourceId,...(parent.sourceAliases||[])])if(sourceId)parents.set(sourceId,parent.sourceId);
  for(const building of [...map.buildings,...map.buildingParts])if(parents.has(building.parentSourceId))building.parentSourceId=parents.get(building.parentSourceId);
  if (!map.buildings.length && !map.roads.length && !map.parks.length && !map.water.length && !map.trees.length) throw new Error('No usable geometry remains inside this drawing extent.');
  if (skipped) map.importNotes = `${skipped} unsupported, outside, elevated or invalid features were omitted.`;
  return validateMap(map);
}

/** Validate finite, bounded geometry before rendering or fabrication. */
export function validateMap(map) {
  if (!map || typeof map !== 'object' || !Array.isArray(map.extent) || map.extent.length !== 4 || !map.extent.every(Number.isFinite)) throw new Error('The map extent is invalid.');
  if (typeof map.id !== 'string' || !/^[a-z0-9_-]{1,80}$/i.test(map.id) || typeof map.title !== 'string' || map.title.length > 160 || typeof map.region !== 'string' || map.region.length > 160 || typeof map.source !== 'string' || map.source.length > 240) throw new Error('The map metadata is invalid.');
  const [minX, minY, maxX, maxY] = map.extent;
  if (maxX <= minX || maxY <= minY || maxX - minX > 10000 || maxY - minY > 10000 || map.extent.some(n => Math.abs(n) > 10000)) throw new Error('The map extent must be finite and at most 10 km across.');
  if (!Number.isFinite(map.lat) || !Number.isFinite(map.lon) || Math.abs(map.lat) > 85 || Math.abs(map.lon) > 180) throw new Error('The map origin is invalid.');
  if(map.defaultViewRadius!==undefined&&(!Number.isFinite(map.defaultViewRadius)||map.defaultViewRadius<50||map.defaultViewRadius>Math.min(maxX-minX,maxY-minY)/2))throw new Error('The default view must fit within the loaded source.');
  if(map.terrain)validateTerrain(map.terrain);
  if(map.buildingParts===undefined)map={...map,buildingParts:[]};
  let vertices = 0, features = 0;
  const checkPoint = p => {
    if (!pointOK(p) || p[0] < minX - 0.11 || p[0] > maxX + 0.11 || p[1] < minY - 0.11 || p[1] > maxY + 0.11) throw new Error('Map geometry exceeds the drawing extent or contains invalid coordinates.');
    if (++vertices > LIMITS.vertices) throw new Error('The map contains too many vertices.');
  };
  for (const kind of ['buildings', 'buildingParts', 'roads', 'parks', 'water', 'trees']) {
    if (!Array.isArray(map[kind])) throw new Error(`The map ${kind} layer is invalid.`);
    features += map[kind].length;
    for (const feature of map[kind]) {
      if (kind === 'trees') { checkPoint(feature); continue; }
      if (!feature || typeof feature !== 'object' || typeof feature.id !== 'string') throw new Error(`A ${kind} feature is invalid.`);
      if (kind === 'roads') {
        if (!Array.isArray(feature.points) || feature.points.length < 2 || feature.points.length > LIMITS.ring) throw new Error('A road line is invalid.');
        feature.points.forEach(checkPoint);
        if (feature.points.some((point, i) => i > 0 && equal(point, feature.points[i - 1]))) throw new Error('A road line contains duplicate consecutive points.');
      } else {
        if (!Array.isArray(feature.rings) || !feature.rings.length || feature.rings.length > 200) throw new Error('A polygon is invalid.');
        feature.rings.forEach((ring, i) => {
          if (!Array.isArray(ring) || ring.length < 4 || ring.length > LIMITS.ring || !equal(ring[0], ring[ring.length - 1])) throw new Error('Polygon rings must be closed.');
          ring.forEach(checkPoint);
          if (Math.abs(area(ring)) < 0.5 || !simpleRing(ring)) throw new Error('A polygon ring has zero area or crosses itself.');
          if (i && (!inside(ring[0], feature.rings[0]) || ringsMeet(feature.rings[0], ring) || feature.rings.slice(1, i).some(other => ringsMeet(other, ring) || inside(ring[0], other) || inside(other[0], ring)))) throw new Error('A courtyard ring intersects another boundary.');
        });
        if (['buildings','buildingParts'].includes(kind)){
          if(!Number.isFinite(feature.height)||feature.height<=0||feature.height>1000||!['source','estimated'].includes(feature.heightSource))throw new Error('A building height is invalid.');
          if(feature.minHeight!==undefined&&(!Number.isFinite(feature.minHeight)||feature.minHeight<0||feature.minHeight>=feature.height))throw new Error('A building part base height is invalid.');
          if(feature.roofHeight!==undefined&&(!Number.isFinite(feature.roofHeight)||feature.roofHeight<0||feature.roofHeight>feature.height))throw new Error('A roof height is invalid.');
          if(feature.partsOnly!==undefined&&typeof feature.partsOnly!=='boolean')throw new Error('A building parts-only instruction is invalid.');
          if(feature.towerConstruction!==undefined&&(typeof feature.towerConstruction!=='string'||feature.towerConstruction.length>40))throw new Error('A tower construction type is invalid.');
          if(feature.sourceAliases!==undefined&&(!Array.isArray(feature.sourceAliases)||feature.sourceAliases.length>100||feature.sourceAliases.some(sourceId=>typeof sourceId!=='string'||sourceId.length>160)))throw new Error('A building source alias is invalid.');
          if(feature.roofOnly!==undefined&&typeof feature.roofOnly!=='boolean')throw new Error('A roof-only building instruction is invalid.');
        }
      }
    }
  }
  if (features > LIMITS.features) throw new Error('The map contains too many features.');
  return map;
}

async function fetchJSON(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Map data could not be loaded (${response.status}).`);
  if (Number(response.headers.get('content-length')) > LIMITS.bytes) throw new Error('The map data is too large.');
  const text = await response.text();
  if (text.length > LIMITS.bytes) throw new Error('The map data is too large.');
  return JSON.parse(text);
}

let catalogPromise;
export async function loadCatalog() {
  catalogPromise ??= fetchJSON(new URL('./data/index.json', import.meta.url)).then(catalog => {
    if (!Array.isArray(catalog) || catalog.some(entry => !entry || typeof entry.id !== 'string' || !/^[a-z0-9_-]+\.json$/i.test(entry.file ?? '') || !Number.isFinite(entry.lat) || !Number.isFinite(entry.lon))) throw new Error('The map catalog is invalid.');
    return catalog;
  }).catch(error => { catalogPromise = undefined; throw error; });
  return catalogPromise;
}

const mapCache=new Map();
export async function loadMap(id) {
  const entry = (await loadCatalog()).find(map => map.id === id);
  if (!entry) throw new Error('Choose a map from the catalog.');
  if(!mapCache.has(id)){
    const pending=fetchJSON(new URL(`./data/${entry.file}`, import.meta.url)).then(async map=>{
    if(entry.terrainFile){if(!/^terrain\/[a-z0-9_-]+\.json$/i.test(entry.terrainFile))throw new Error('The terrain asset path is invalid.');map.terrain=await fetchJSON(new URL(`./data/${entry.terrainFile}`,import.meta.url));}
    return validateMap(map);
    }).catch(error=>{if(mapCache.get(id)===pending)mapCache.delete(id);throw error;});
    mapCache.set(id,pending);
  }
  const cached=mapCache.get(id);mapCache.delete(id);mapCache.set(id,cached);
  while(mapCache.size>3)mapCache.delete(mapCache.keys().next().value);
  return cached;
}
