import {buildLiveGeometry} from './live-geometry.mjs';
import {sourceChunk} from './live-chunk.mjs';
let map,revision=0,sourceIds,partIds;
self.onmessage=event=>{
  const message=event.data;
  if(message.type==='map'){map=message.map;revision=message.revision;sourceIds=new WeakMap(map.buildings.map((building,i)=>[building,i]));partIds=new WeakMap((map.buildingParts||[]).map((part,i)=>[part,i]));return;}
  if(message.type!=='geometry'||message.revision!==revision||!map)return;
  try{const started=performance.now(),geometry=buildLiveGeometry(sourceChunk(map,message.extent),message.settings),transfer=[];
    for(const layer of Object.values(geometry)){for(const record of layer.records){record.buildingIndex=sourceIds.get(record.building);if(record.buildingIndex===undefined)record.partIndex=partIds.get(record.building);delete record.building;}for(const key of ['positions','normals','baseZ','visibility'])transfer.push(layer[key].buffer);}
    self.postMessage({id:message.id,revision,extent:message.extent,variant:message.variant,geometry,buildMs:performance.now()-started},transfer);
  }catch(error){self.postMessage({id:message.id,revision,error:error.message});}
};
