const cache=new WeakMap(),boundsCache=new WeakMap();
export function buildingBounds(building){
  if(!boundsCache.has(building)){const bounds=[Infinity,Infinity,-Infinity,-Infinity];for(const ring of building.rings||[])for(const p of ring){bounds[0]=Math.min(bounds[0],p[0]);bounds[1]=Math.min(bounds[1],p[1]);bounds[2]=Math.max(bounds[2],p[0]);bounds[3]=Math.max(bounds[3],p[1]);}boundsCache.set(building,bounds);}
  return boundsCache.get(building);
}

/** Reusable source index: pan queries touch local cells, not every building. */
export function buildingIndex(buildings){
  if(cache.has(buildings))return cache.get(buildings);
  const cell=250,cells=new Map(),allBounds=[Infinity,Infinity,-Infinity,-Infinity],seen=new Uint32Array(buildings.length);let generation=0;
  for(const [id,building] of buildings.entries()){const bounds=buildingBounds(building);for(let i=0;i<2;i++){allBounds[i]=Math.min(allBounds[i],bounds[i]);allBounds[i+2]=Math.max(allBounds[i+2],bounds[i+2]);}for(let x=Math.floor(bounds[0]/cell);x<=Math.floor(bounds[2]/cell);x++)for(let y=Math.floor(bounds[1]/cell);y<=Math.floor(bounds[3]/cell);y++){const key=`${x},${y}`;if(!cells.has(key))cells.set(key,[]);cells.get(key).push(id);}}
  const index={query(extent){const minX=Math.max(extent[0],allBounds[0]),minY=Math.max(extent[1],allBounds[1]),maxX=Math.min(extent[2],allBounds[2]),maxY=Math.min(extent[3],allBounds[3]);if(minX>maxX||minY>maxY)return [];
    generation=(generation+1)>>>0;if(!generation){seen.fill(0);generation=1;}const result=[];
    for(let x=Math.floor(minX/cell);x<=Math.floor(maxX/cell);x++)for(let y=Math.floor(minY/cell);y<=Math.floor(maxY/cell);y++)for(const id of cells.get(`${x},${y}`)||[]){if(seen[id]===generation)continue;seen[id]=generation;const b=buildingBounds(buildings[id]);if(b[0]<=extent[2]&&b[1]<=extent[3]&&b[2]>=extent[0]&&b[3]>=extent[1])result.push(id);}return result.sort((a,b)=>a-b).map(id=>buildings[id]);},cellCount:cells.size};
  cache.set(buildings,index);return index;
}
