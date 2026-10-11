/** Shared architectural fitting of raised terrain, without an invisible z=0 base. */
import {cropMap,defaultViewRadius,viewSpan} from './crop.mjs';
import {terrainCropSurface,terrainCropPerimeter,buildingTerrainBase,terrainHeightEnvelope,terrainRange} from './terrain.mjs';
import {detailedBuildings,buildingFaces,buildingGroundReference} from './building-shape.mjs';
import {projectionMatrix} from './studio-state.mjs';
import {paperSizes as papers} from './paper-sizes.mjs';
import {studyCenter} from './study-origin.mjs';
import {annotationLayout} from './annotation-layout.mjs';
const geometryCache=new WeakMap();
const sourceHeightCache=new WeakMap();

/** Page and square crops are windows on paper, independent of the map camera. */
export function computeDrawingProjection(map,settings){
  let [width,height]=papers[settings.paper]||papers.a3;if(settings.orientation==='portrait'&&width>height)[width,height]=[height,width];
  const margin=Math.min(settings.margin??8,width/8,height/8),notes=annotationLayout(settings,{map,width,height,margin,terrainUsed:Boolean(map.terrain&&(settings.terrain!==false||settings.contours!==false))});
  // Only visible footer content reserves paper below the drawing.
  const available=[margin,margin,width-margin,height-margin-notes.height-notes.gap],circle=settings.crop==='circle';
  const side=Math.min(available[2]-available[0],available[3]-available[1]),mid=[(available[0]+available[2])/2,(available[1]+available[3])/2];
  const frame=circle||settings.crop!=='rectangle'?available:[mid[0]-side/2,mid[1]-side/2,mid[0]+side/2,mid[1]+side/2];
  const origin=studyCenter(map),span=viewSpan(map,settings),radius=settings.cropRadius>0?settings.cropRadius:defaultViewRadius(map),center=[settings.centerX??origin[0],settings.centerY??origin[1]];
  const matrix=projectionMatrix(settings,1000),[a,b,c,d]=matrix,angle=(settings.axonAngle??35)*Math.PI/180;
  const pts=circle?Array.from({length:256},(_,i)=>[Math.cos(i*Math.PI/128)*radius,Math.sin(i*Math.PI/128)*radius]):[[-span[0]/2,-span[1]/2],[span[0]/2,-span[1]/2],[span[0]/2,span[1]/2],[-span[0]/2,span[1]/2]];
  const bounds=[Infinity,Infinity,-Infinity,-Infinity];for(const [x,y] of pts){const px=a*x+b*y,py=c*x+d*y;bounds[0]=Math.min(bounds[0],px);bounds[1]=Math.min(bounds[1],py);bounds[2]=Math.max(bounds[2],px);bounds[3]=Math.max(bounds[3],py);}
  bounds[1]-=(settings.view==='axon'?terrainHeightEnvelope(map,settings):0)*Math.cos(angle);
  const terrainBounds=terrainDrawingBounds(map,settings,matrix);if(terrainBounds)bounds.splice(0,4,...terrainBounds);
  const fit=Math.min((frame[2]-frame[0]-5)/Math.max(1,bounds[2]-bounds[0]),(frame[3]-frame[1]-5)/Math.max(1,bounds[3]-bounds[1]));
  const scale=settings.scale>0?settings.scale:1000/fit,factor=1000/scale,offset=[mid[0]-(bounds[0]+bounds[2])/2*factor,mid[1]-(bounds[1]+bounds[3])/2*factor];
  const rot=(settings.rotation??0)*Math.PI/180,co=Math.cos(rot),si=Math.sin(rot),axon=settings.view==='axon';
  const depth=axon?[-(co-si)/Math.SQRT2*Math.cos(angle),-(si+co)/Math.SQRT2*Math.cos(angle),Math.sin(angle)]:[0,0,1];
  const projection={matrix:matrix.map(n=>n*factor),offset,frame,center,radius,span,depth,factor,heightProjection:axon?-Math.cos(angle)*factor:0,sheet:{width,height},stats:{scale},pageAligned:!circle};
  if(!circle){
    let maxBuildingHeight=sourceHeightCache.get(map);if(maxBuildingHeight===undefined){maxBuildingHeight=0;for(const b of [...map.buildings||[],...map.buildingParts||[]])maxBuildingHeight=Math.max(maxBuildingHeight,b.height||9);sourceHeightCache.set(map,maxBuildingHeight);}
    const range=terrainRange(settings.terrain===false?null:map.terrain),maxZ=axon?(range.max-range.min+(settings.buildings===false?0:maxBuildingHeight)*(settings.heightFactor??1)):0;
    const [pa,pb,pc,pd]=projection.matrix,det=pa*pd-pb*pc,extent=[Infinity,Infinity,-Infinity,-Infinity];
    for(const z of [0,maxZ])for(const x of [frame[0],frame[2]])for(const y of [frame[1],frame[3]]){
      const dx=x-offset[0],dy=y-offset[1]-z*projection.heightProjection,east=center[0]+(pd*dx-pb*dy)/det,north=center[1]+(-pc*dx+pa*dy)/det;
      extent[0]=Math.min(extent[0],east);extent[1]=Math.min(extent[1],north);extent[2]=Math.max(extent[2],east);extent[3]=Math.max(extent[3],north);
    }
    projection.viewportExtent=extent;
  }
  return projection;
}

export function terrainDrawingBounds(map,settings,matrix){
  if(settings.view!=='axon'||settings.terrain===false||!map.terrain)return null;
  const origin=studyCenter(map);
  // Explicit scales navigate around the initial study composition. Their
  // changing zoom crop must not rebuild the fitting geometry each input frame.
  const reference={...settings,centerX:origin[0],centerY:origin[1]};
  if(settings.scale>0){reference.cropRadius=defaultViewRadius(map);reference.viewRadius=0;}
  const key=JSON.stringify([reference.crop,reference.crop==='circle'?(reference.cropRadius>0?reference.cropRadius:defaultViewRadius(map)):viewSpan(map,reference),settings.roofDetails!==false]);
  let cache=geometryCache.get(map);if(!cache){cache=new Map();geometryCache.set(map,cache);}
  let geometry=cache.get(key);
  if(!geometry){
    const cropped=cropMap({...map,roads:[],parks:[],water:[],trees:[]},reference),boundary=cropped.cropBoundary,terrainPoints=[],buildingPoints=[];
    for(const polygon of terrainCropSurface(map.terrain,cropped.extent,boundary))for(const p of polygon)terrainPoints.push(p[0]-origin[0],p[1]-origin[1],p[2]);
    for(const p of terrainCropPerimeter(map.terrain,boundary))terrainPoints.push(p[0]-origin[0],p[1]-origin[1],p[2]);
    for(const building of detailedBuildings(cropped,{detail:settings.roofDetails!==false})){
      const base=buildingTerrainBase(map.terrain,buildingGroundReference(map,building)),shape=buildingFaces(building,{base,detail:settings.roofDetails!==false});
      // Roof and bottom vertices already contain every wall extremum.
      for(const face of shape.faces)if(face.kind==='roof'||face.kind==='bottom')for(const ring of face.rings3D)for(const p of ring)buildingPoints.push(p[0]-origin[0],p[1]-origin[1],base,p[2]-base);
    }
    geometry={terrain:new Float64Array(terrainPoints),buildings:new Float64Array(buildingPoints)};
    if(cache.size>=3)cache.delete(cache.keys().next().value);cache.set(key,geometry);
  }
  const [a,b,c,d]=matrix,heightProjection=-Math.cos((settings.axonAngle??35)*Math.PI/180),factor=Number.isFinite(settings.heightFactor)?settings.heightFactor:1,bounds=[Infinity,Infinity,-Infinity,-Infinity];
  const add=(x,y,z)=>{const px=a*x+b*y,py=c*x+d*y+z*heightProjection;bounds[0]=Math.min(bounds[0],px);bounds[1]=Math.min(bounds[1],py);bounds[2]=Math.max(bounds[2],px);bounds[3]=Math.max(bounds[3],py);};
  for(let i=0;i<geometry.terrain.length;i+=3)add(geometry.terrain[i],geometry.terrain[i+1],geometry.terrain[i+2]);
  if(settings.buildings!==false)for(let i=0;i<geometry.buildings.length;i+=4)add(geometry.buildings[i],geometry.buildings[i+1],geometry.buildings[i+2]+geometry.buildings[i+3]*factor);
  return bounds.every(Number.isFinite)?bounds:null;
}
