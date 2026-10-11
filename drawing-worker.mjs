import {renderDrawing} from './drawing.mjs';
import {buildSTL} from './export.mjs';
let map;const cache=new Map();let cacheBytes=0;
self.onmessage=event=>{
  const request=event.data;
  if(request.type==='map'){map=request.map;cache.clear();cacheBytes=0;return;}
  try{
    if(request.type==='model'){
      const model=buildSTL(map,request.options);
      self.postMessage({id:request.id,model},{transfer:[model.buffer]});
      return;
    }
    const options={plotter:request.plotter===true,plotterColors:request.plotter===true&&request.options?.plotterColors===true,background:['paper','transparent','black','white'].includes(request.options?.background)?request.options.background:'paper'};
    const key=JSON.stringify([request.settings,options]);
    let drawing=cache.get(key);
    if(drawing){cache.delete(key);cache.set(key,drawing);}
    else{
      drawing=renderDrawing(map,request.settings,options);
      const bytes=drawing.svg.length*2;
      if(bytes<=24000000){while(cache.size && (cache.size>=4||cacheBytes+bytes>24000000)){const oldest=cache.keys().next().value;cacheBytes-=cache.get(oldest).svg.length*2;cache.delete(oldest);}cache.set(key,drawing);cacheBytes+=bytes;}
    }
    self.postMessage({id:request.id,drawing});
  }
  catch(error){self.postMessage({id:request.id,error:error.message});}
};
