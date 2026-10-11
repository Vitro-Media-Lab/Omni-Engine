import {normalizeGeoJSON, validateMap} from './data.mjs';
import {mergedMapAttribution} from './attribution-import.mjs';

const METRES_PER_DEGREE = 6371008.8 * Math.PI / 180;
const round = value => Math.round(value * 10) / 10;
let sequence = 0;

function buildingFeatures(collection) {
  const features = collection?.type === 'FeatureCollection' ? collection.features : collection?.type === 'Feature' ? [collection] : null;
  if (!Array.isArray(features) || !features.length) throw new Error('Choose a GeoJSON Feature or FeatureCollection containing building footprints.');
  if (features.length > 50000) throw new Error('Use a smaller hero GeoJSON: maximum 50,000 features.');
  return features.map(feature => {
    const geometry = feature?.geometry;
    if (feature?.type !== 'Feature' || !['Polygon', 'MultiPolygon'].includes(geometry?.type)) throw new Error('Hero GeoJSON accepts Polygon or MultiPolygon building footprints. Use Import map for other map layers. 3D mesh files are not supported.');
    // Check every coordinate, including optional elevation, before normalization.
    const walk = (coordinates, depth) => {
      if (!Array.isArray(coordinates) || !coordinates.length) throw new Error('A hero footprint contains empty or invalid coordinates.');
      if (!depth) {
        if (coordinates.length < 2 || !coordinates.every(Number.isFinite)) throw new Error('Hero footprint coordinates must all be finite numbers.');
      } else for (const value of coordinates) walk(value, depth - 1);
    };
    walk(geometry.coordinates, geometry.type === 'Polygon' ? 2 : 3);
    return {...feature, properties: {...feature.properties, __layer: 'buildings'}};
  });
}

function bounds(ring) {
  const result = [Infinity, Infinity, -Infinity, -Infinity];
  for (const point of ring) {
    result[0] = Math.min(result[0], point[0]); result[1] = Math.min(result[1], point[1]);
    result[2] = Math.max(result[2], point[0]); result[3] = Math.max(result[3], point[1]);
  }
  return result;
}

function insideRing(point, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const a = ring[i], b = ring[j];
    if ((a[1] > point[1]) !== (b[1] > point[1]) && point[0] < (b[0] - a[0]) * (point[1] - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}

const insidePolygon = (point, rings) => insideRing(point, rings[0]) && !rings.slice(1).some(ring => insideRing(point, ring));
const orient = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);

function polygonsOverlap(a, b) {
  const aa = bounds(a[0]), bb = bounds(b[0]);
  if (Math.min(aa[2], bb[2]) <= Math.max(aa[0], bb[0]) || Math.min(aa[3], bb[3]) <= Math.max(aa[1], bb[1])) return false;
  // Proper edge crossings and filled-region containment preserve buildings in courtyards.
  for (const ar of a) for (const br of b) for (let i = 1; i < ar.length; i++) for (let j = 1; j < br.length; j++) {
    if (orient(ar[i - 1], ar[i], br[j - 1]) * orient(ar[i - 1], ar[i], br[j]) < 0 &&
        orient(br[j - 1], br[j], ar[i - 1]) * orient(br[j - 1], br[j], ar[i]) < 0) return true;
  }
  return a[0].some(point => insidePolygon(point, b)) || b[0].some(point => insidePolygon(point, a));
}

/** Add extruded hero footprints without replacing the map or changing its origin.
 * Coordinates remain metres in the base map's east/north frame. Center placement
 * preserves imported metric dimensions; geographic placement uses the base origin.
 */
export function addHeroGeoJSON(baseMap, geojson, {name = 'Hero building', placement = 'center', centerX = 0, centerY = 0, replaceNearby = false} = {}) {
  baseMap=validateMap(baseMap);
  if (!['geographic', 'center'].includes(placement)) throw new Error('Choose geographic or centered placement for the hero building.');
  if (!Number.isFinite(centerX) || !Number.isFinite(centerY)) throw new Error('The hero placement must use finite metre coordinates.');
  if (typeof replaceNearby !== 'boolean') throw new Error('The replace overlapping buildings setting must be true or false.');
  const heroName = String(name).trim().slice(0, 160) || 'Hero building';
  const features = buildingFeatures(geojson);
  const imported = normalizeGeoJSON({...geojson, type: 'FeatureCollection', features}, {title: heroName});
  if (!imported.buildings.length) throw new Error('No usable ground-level building footprints were found in this hero GeoJSON.');
  const importedBounds = [Infinity, Infinity, -Infinity, -Infinity];
  for (const building of imported.buildings) {
    const bb = bounds(building.rings[0]);
    importedBounds[0] = Math.min(importedBounds[0], bb[0]); importedBounds[1] = Math.min(importedBounds[1], bb[1]);
    importedBounds[2] = Math.max(importedBounds[2], bb[2]); importedBounds[3] = Math.max(importedBounds[3], bb[3]);
  }
  const cosine = Math.cos(baseMap.lat * Math.PI / 180), importedCosine = Math.cos(imported.lat * Math.PI / 180);
  const offsetX = placement === 'geographic' ? (imported.lon - baseMap.lon) * METRES_PER_DEGREE * cosine : centerX - (importedBounds[0] + importedBounds[2]) / 2;
  const offsetY = placement === 'geographic' ? (imported.lat - baseMap.lat) * METRES_PER_DEGREE : centerY - (importedBounds[1] + importedBounds[3]) / 2;
  const xScale = placement === 'geographic' ? cosine / importedCosine : 1;
  const token = `${Date.now().toString(36)}-${(++sequence).toString(36)}`;
  // Source IDs must be unique across repeated imports, including parent links.
  const sourceId=value=>`hero-source-${token}-${value}`;
  const place=(building,id)=>({
    ...building,id,sourceId:sourceId(building.sourceId||building.id),hero:true,heroName,
    ...(building.parentSourceId?{parentSourceId:sourceId(building.parentSourceId)}:{}),
    rings:building.rings.map(ring=>ring.map(point=>[round(point[0]*xScale+offsetX),round(point[1]+offsetY)]))
  });
  const heroBuildings=imported.buildings.map((building,i)=>place(building,`hero-${token}-${i}`));
  const heroParts=(imported.buildingParts||[]).map((part,i)=>place(part,`hero-part-${token}-${i}`));
  const [minX, minY, maxX, maxY] = baseMap.extent;
  if ([...heroBuildings,...heroParts].some(building => building.rings.some(ring => ring.some(([x, y]) => x < minX || x > maxX || y < minY || y > maxY)))) {
    throw new Error(placement === 'geographic' ? 'The hero footprint is outside this map. Choose centered placement or import a map covering its actual location.' : 'The hero footprint does not fit inside this map at that position. Choose a larger map or move its center.');
  }
  const map=structuredClone(baseMap),removedSourceIds=new Set();
  const originalCount = map.buildings.length;
  if(replaceNearby)map.buildings=map.buildings.filter(building=>{
    if(!heroBuildings.some(hero=>polygonsOverlap(building.rings,hero.rings)))return true;
    if(building.sourceId)removedSourceIds.add(building.sourceId);return false;
  });
  const removed = originalCount - map.buildings.length;
  if(replaceNearby){
    map.buildingParts=map.buildingParts.filter(part=>!removedSourceIds.has(part.parentSourceId)&&!removedSourceIds.has(part.sourceId)&&!heroBuildings.some(hero=>polygonsOverlap(part.rings,hero.rings)));
  }
  map.buildings.push(...heroBuildings);
  map.buildingParts.push(...heroParts);
  map.id = `${baseMap.id.slice(0, 40)}-hero-${token}`;
  map.title = `${baseMap.title} · ${heroName}`.slice(0, 160);
  const attribution = `Hero GeoJSON: ${heroName.slice(0, 64)}`;
  map.source = `${baseMap.source.slice(0, 238 - attribution.length)}; ${attribution}`;
  map.attribution=mergedMapAttribution(baseMap,imported);
  map.heroIds = map.buildings.filter(building => building.hero === true).map(building => building.id);
  if (imported.importNotes) map.importNotes = [baseMap.importNotes, imported.importNotes].filter(Boolean).join(' ');
  validateMap(map);
  return {map, added: heroBuildings.length, removed, estimated: heroBuildings.filter(building => building.heightSource === 'estimated').length};
}
