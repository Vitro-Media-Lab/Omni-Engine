import {computeLiveProjection} from './live-geometry.mjs';
import {panFromScreen} from './studio-state.mjs';

const referenceScale=10000;
export const limitMapZoom=value=>Math.max(referenceScale/1000000,Math.min(referenceScale/50,value));
export const mapZoom=projection=>referenceScale/projection.stats.scale;

// Preserve a ground point through a change of measured drawing scale. Touch
// gestures may move that point to a new midpoint as the fingers spread.
export function zoomMapSettings(map,settings,nextZoom,{projection=computeLiveProjection(map,settings),from,to=from}={}){
  const next={...settings,scale:referenceScale/limitMapZoom(nextZoom)};
  if(settings.crop==='circle'){
    next.scale=Math.min(next.scale,projection.stats.scale*5000/projection.radius);
    next.cropRadius=Math.min(5000,projection.radius*next.scale/projection.stats.scale);
  }else{
    const radius=Math.min(...projection.span)/2;
    next.scale=Math.min(next.scale,projection.stats.scale*1000000/radius);
    next.viewRadius=Math.min(1000000,radius*next.scale/projection.stats.scale);
  }
  if(!from)return next;
  const after=computeLiveProjection(map,next);
  const worldOffset=panFromScreen(from[0]-projection.offset[0],from[1]-projection.offset[1],{navigation:{matrix:projection.matrix}},settings);
  const nextOffset=panFromScreen(to[0]-after.offset[0],to[1]-after.offset[1],{navigation:{matrix:after.matrix}},next);
  const bounded=value=>Math.max(-10000,Math.min(10000,value));
  next.centerX=bounded(projection.center[0]+worldOffset[0]-nextOffset[0]);
  next.centerY=bounded(projection.center[1]+worldOffset[1]-nextOffset[1]);
  return next;
}
