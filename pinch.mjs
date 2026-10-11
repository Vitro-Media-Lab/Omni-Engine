export const limitZoom=value=>Math.max(.35,Math.min(6,value));
export function touchPair(points,ids=[...points.keys()]){
  const [a,b]=ids.slice(0,2).map(id=>points.get(id));if(!a||!b)return null;
  return {x:(a.x+b.x)/2,y:(a.y+b.y)/2,distance:Math.hypot(a.x-b.x,a.y-b.y)};
}
export function bindPinchZoom({stage,sheet,getZoom,setZoom,constrainZoom=limitZoom,onStart=()=>{},onEnd=()=>{}}){
  const points=new Map();let pinch,suppress=false;
  stage.addEventListener('wheel',event=>{
    if(!Number.isFinite(event.deltaY)||event.deltaY===0)return;
    event.preventDefault();onStart();
    const delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?stage.clientHeight:1);
    const sensitivity=event.ctrlKey?.008:.0025;
    setZoom(constrainZoom(getZoom()*Math.exp(-Math.max(-250,Math.min(250,delta))*sensitivity)),{x:event.clientX,y:event.clientY});onEnd();
  },{passive:false});
  stage.addEventListener('pointerdown',event=>{
    if(event.pointerType!=='touch')return;
    points.set(event.pointerId,{x:event.clientX,y:event.clientY});
    // Track the end even when the app cannot pan yet (for example while the
    // first source loads), or a finger leaves the sheet before it lifts.
    try{stage.setPointerCapture(event.pointerId);}catch{}
    if(points.size===2){
      event.preventDefault();onStart();const pair=touchPair(points),rect=sheet.getBoundingClientRect();
      pinch={...pair,ids:[...points.keys()].slice(0,2),zoom:getZoom(),fx:(pair.x-rect.left)/rect.width,fy:(pair.y-rect.top)/rect.height};suppress=true;
      for(const id of points.keys())try{stage.setPointerCapture(id);}catch{}
    }
    if(suppress)event.stopPropagation();
  },true);
  stage.addEventListener('pointermove',event=>{
    if(!points.has(event.pointerId))return;
    points.set(event.pointerId,{x:event.clientX,y:event.clientY});if(!pinch)return;
    event.preventDefault();event.stopPropagation();const pair=touchPair(points,pinch.ids);
    if(pair&&pinch.distance>2)setZoom(constrainZoom(pinch.zoom*pair.distance/pinch.distance),{x:pair.x,y:pair.y,fx:pinch.fx,fy:pinch.fy});
  },true);
  function end(event){
    if(!points.has(event.pointerId))return;points.delete(event.pointerId);
    if(suppress){event.preventDefault();event.stopPropagation();}
    const endedPinch=Boolean(pinch)&&!pinch.ids.every(id=>points.has(id));
    if(endedPinch){pinch=undefined;onEnd();}
    if(!points.size){const wasSuppressed=suppress;suppress=false;if(wasSuppressed&&!endedPinch)onEnd();}
  }
  stage.addEventListener('pointerup',end,true);stage.addEventListener('pointercancel',end,true);
  stage.addEventListener('lostpointercapture',end,true);
  return {active:()=>suppress};
}
