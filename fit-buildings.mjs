import {cropMap} from './crop.mjs';
import {computeDrawingProjection} from './projection.mjs';
import {buildingFaces,detailedBuildings,buildingGroundReference} from './building-shape.mjs';
import {buildingTerrainBase} from './terrain.mjs';
import {panFromScreen} from './studio-state.mjs';
import {zoomMapSettings,mapZoom} from './map-zoom.mjs';
import {annotationLayout} from './annotation-layout.mjs';

/** Frame the buildings in the current ground selection, without changing style or rotation. */
export function fitBuildingSettings(map,settings){
  const selected=cropMap({...map,roads:[],parks:[],water:[],trees:[]},settings);
  if(!selected.buildings.length&&!selected.buildingParts?.length)return null;
  if(settings.crop==='circle'){
    const points=selected.buildings.flatMap(b=>b.rings.flat()),bounds=[Infinity,Infinity,-Infinity,-Infinity];
    for(const [x,y]of points){bounds[0]=Math.min(bounds[0],x);bounds[1]=Math.min(bounds[1],y);bounds[2]=Math.max(bounds[2],x);bounds[3]=Math.max(bounds[3],y);}
    if(!bounds.every(Number.isFinite))return null;
    const centerX=(bounds[0]+bounds[2])/2,centerY=(bounds[1]+bounds[3])/2;
    let radius=0;for(const [x,y]of points)radius=Math.max(radius,Math.hypot(x-centerX,y-centerY));
    return {...settings,centerX,centerY,cropRadius:Math.min(5000,Math.max(10,radius*1.1)),scale:0};
  }
  const projection=computeDrawingProjection(map,settings),[a,b,c,d]=projection.matrix,bounds=[Infinity,Infinity,-Infinity,-Infinity];
  const add=(x,y,z=0)=>{
    const dx=x-projection.center[0],dy=y-projection.center[1],px=a*dx+b*dy+projection.offset[0],py=c*dx+d*dy+projection.offset[1]+z*projection.heightProjection;
    bounds[0]=Math.min(bounds[0],px);bounds[1]=Math.min(bounds[1],py);bounds[2]=Math.max(bounds[2],px);bounds[3]=Math.max(bounds[3],py);
  };
  for(const building of settings.view==='axon'?detailedBuildings(selected,{detail:settings.roofDetails!==false}):selected.buildings){
    if(settings.view!=='axon'){for(const ring of building.rings)for(const [x,y]of ring)add(x,y);continue;}
    const base=settings.terrain!==false?buildingTerrainBase(map.terrain,buildingGroundReference(map,building)):0;
    for(const face of buildingFaces(building,{base,detail:settings.roofDetails!==false,heightFactor:settings.heightFactor}).faces)for(const ring of face.rings3D)for(const p of ring)add(...p);
  }
  if(!bounds.every(Number.isFinite))return null;
  const frame=[...projection.frame],notes=annotationLayout(settings,{map,...projection.sheet,margin:settings.margin,terrainUsed:Boolean(map.terrain&&(settings.terrain||settings.contours))});
  if(notes.header)frame[1]=Math.max(frame[1],notes.header.y+notes.header.height+6);
  const multiplier=.88*Math.min((frame[2]-frame[0])/Math.max(1,bounds[2]-bounds[0]),(frame[3]-frame[1])/Math.max(1,bounds[3]-bounds[1]));
  const next=zoomMapSettings(map,settings,mapZoom(projection)*multiplier,{projection}),after=computeDrawingProjection(map,next),ratio=projection.stats.scale/after.stats.scale;
  const delta=[0,1].map(i=>((bounds[i]+bounds[i+2])/2-projection.offset[i])*ratio+after.offset[i]-(frame[i]+frame[i+2])/2);
  const shift=panFromScreen(...delta,{navigation:{matrix:after.matrix}},next);
  next.centerX=Math.max(-10000,Math.min(10000,projection.center[0]+shift[0]));
  next.centerY=Math.max(-10000,Math.min(10000,projection.center[1]+shift[1]));
  return next;
}
