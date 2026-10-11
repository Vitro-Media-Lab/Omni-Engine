import {buildingIndex} from './building-index.mjs';
import {standaloneBuildingParts} from './building-shape.mjs';
import {treePosition} from './tree-spacing.mjs';
const featureBoundsCache=new WeakMap();
function overlaps(feature,extent){
  let bounds=featureBoundsCache.get(feature);if(!bounds){bounds=[Infinity,Infinity,-Infinity,-Infinity];for(const points of feature.rings||[feature.points||[]])for(const p of points){bounds[0]=Math.min(bounds[0],p[0]);bounds[1]=Math.min(bounds[1],p[1]);bounds[2]=Math.max(bounds[2],p[0]);bounds[3]=Math.max(bounds[3],p[1]);}featureBoundsCache.set(feature,bounds);}
  return bounds[0]<=extent[2]&&bounds[1]<=extent[3]&&bounds[2]>=extent[0]&&bounds[3]>=extent[1];
}
export function projectionExtent(projection,circle){if(!circle&&projection.pageAligned)return projection.viewportExtent;const half=circle?[projection.radius,projection.radius]:projection.span.map(n=>n/2);return [projection.center[0]-half[0],projection.center[1]-half[1],projection.center[0]+half[0],projection.center[1]+half[1]];}
export function chunkExtent(extent){const step=250,padding=250;return [Math.floor((extent[0]-padding)/step)*step,Math.floor((extent[1]-padding)/step)*step,Math.ceil((extent[2]+padding)/step)*step,Math.ceil((extent[3]+padding)/step)*step];}
export function extentContains(outer,inner,padding=0){return outer&&outer[0]<=inner[0]-padding&&outer[1]<=inner[1]-padding&&outer[2]>=inner[2]+padding&&outer[3]>=inner[3]+padding;}
export function geometryVariant(settings){return `${settings.roofDetails!==false}:${settings.contourInterval??10}`;}
export function sourceChunk(map,extent){
  const buildings=buildingIndex(map.buildings).query(extent),parents=new Set(buildings.map(b=>b.sourceId).filter(Boolean));
  const standalone=new Set(buildingIndex(standaloneBuildingParts(map)).query(extent));
  return {...map,groundSource:map,chunkBounds:extent,buildings,buildingParts:(map.buildingParts||[]).filter(part=>parents.has(part.parentSourceId)||standalone.has(part)),roads:(map.roads||[]).filter(feature=>overlaps(feature,extent)),parks:(map.parks||[]).filter(feature=>overlaps(feature,extent)),water:(map.water||[]).filter(feature=>overlaps(feature,extent)),trees:(map.trees||[]).filter(tree=>{const p=treePosition(tree);return p&&p[0]>=extent[0]&&p[1]>=extent[1]&&p[0]<=extent[2]&&p[1]<=extent[3];})};
}
