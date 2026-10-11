import * as THREE from './lib/three.module.mjs';
import {computeLiveProjection,buildingInBoundary} from './live-geometry.mjs';
import {buildingIndex} from './building-index.mjs';
import {projectionExtent,chunkExtent,extentContains,geometryVariant} from './live-chunk.mjs';
import {standaloneBuildingParts} from './building-shape.mjs';
import {terrainCropPerimeter} from './terrain.mjs';
import {liveThemeForSettings} from './themes.mjs';
import {buildingAppearance,surfaceLightDirection} from './surface-style.mjs';
import {canvasBackgroundColor} from './canvas-background.mjs';
import {treeSpacingLevel} from './tree-spacing.mjs';
const vertexShader=`precision highp float;
attribute vec3 position; attribute vec3 normal; attribute float visible; attribute float baseZ;
uniform vec4 rows; uniform vec2 center; uniform vec2 offset; uniform vec2 sheet; uniform vec4 frame;
uniform vec3 depthAxis; uniform float heightFactor; uniform float heightProjection; uniform float anchored; uniform float bias; uniform float flattenView; uniform float terrainAmount; uniform float pageSpace;
uniform float surface; uniform float point; uniform float treeSpacing; uniform vec3 lightDirection; uniform vec3 roofColor; uniform vec3 roofShadeColor; uniform vec3 wallColor; uniform vec3 wallShadeColor;
varying vec2 world; varying vec2 paper; varying float accepted; varying float shade; varying vec3 faceTint;
void main(){if(visible<(point>.5?treeSpacing:.5)){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=1.;world=vec2(0.);paper=vec2(0.);accepted=0.;shade=1.;faceTint=vec3(0.);return;}vec3 p=position;p.xy+=center*anchored;p.z=(baseZ*terrainAmount+(p.z-baseZ)*heightFactor)*(1.-flattenView);world=p.xy;vec2 d=p.xy-center;
paper=vec2(dot(rows.xy,d),dot(rows.zw,d)+p.z*heightProjection)+offset;
if(pageSpace>.5)paper=position.xy;
float depth=pageSpace>.5?0.:dot(depthAxis,vec3(d,p.z));gl_Position=vec4((paper.x-frame.x)/(frame.z-frame.x)*2.-1.,1.-(paper.y-frame.y)/(frame.w-frame.y)*2.,-depth/20000.+bias,1.);
gl_PointSize=3.;accepted=1.;shade=1.;faceTint=vec3(0.);
if(surface>.5){vec3 n=normalize(vec3(normal.xy,normal.z/max(heightFactor,.1)));float light=clamp(dot(n,lightDirection),0.,1.);faceTint=n.z>.00001?mix(roofShadeColor,roofColor,.5+.5*light):mix(wallShadeColor,wallColor,light);}
else{shade=.82+.18*max(0.,dot(normal,normalize(vec3(.4,-.3,.85))));}}`;
const fragmentShader=`precision highp float;uniform vec3 color;uniform vec2 center;uniform vec2 halfSpan;uniform vec4 frame;uniform float radius;uniform float circle;uniform float lit;uniform float point;uniform float surface;
varying vec2 world;varying vec2 paper;varying float accepted;varying float shade;varying vec3 faceTint;
void main(){if(accepted<.5||paper.x<frame.x||paper.y<frame.y||paper.x>frame.z||paper.y>frame.w)discard;
vec2 d=world-center;if(circle>.5){if(dot(d,d)>radius*radius)discard;}
if(point>.5&&distance(gl_PointCoord,vec2(.5))>.5)discard;gl_FragColor=vec4(surface>.5?faceTint:color*mix(1.,shade,lit),1.);}`;

export function createLiveView(sheet){
  let renderer;try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'high-performance'});}catch{return null;}
  // Keep the motion preview at CSS pixel resolution; the idle SVG retains
  // unlimited vector detail without making navigation pay for retina pixels.
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1));renderer.setClearColor(0x000000,0);
  const canvas=renderer.domElement;canvas.className='live-map-canvas';canvas.setAttribute('aria-hidden','true');
  const scene=new THREE.Scene(),camera=new THREE.Camera();let map,settings,drawing,projection,frozenScale,titleOverlay,active=false,scheduled=0,boundaryKey,groundKey,meshes={},materials=[],lastVisibilityKey='',frames=0,totalMs=0,maxMs=0,size=[1,1],mapRevision=0,geometryRevision=0,jobId=0,pendingJob,geometryBounds,variant,workerFailed=false;
  let visibleBuildings=new Set(),visibilityRecords=new Map();const chunkCache=new Map();
  const geometryWorker=new Worker(new URL('./live-geometry-worker.mjs',import.meta.url),{type:'module'});
  function failPreview(message){workerFailed=true;pendingJob=undefined;canvas.dataset.renderError=message;canvas.hidden=true;sheet.classList.remove('live-navigation');console.error(message);}
  renderer.debug.onShaderError=(gl,program,vertex,fragment)=>{failPreview('Live preview shader compilation failed.');console.error(gl.getProgramInfoLog(program),gl.getShaderInfoLog(vertex),gl.getShaderInfoLog(fragment));};
  const colors=new Map();const color=hex=>{if(!colors.has(hex))colors.set(hex,new THREE.Color(hex).convertLinearToSRGB());return colors.get(hex);};
  function material(hex,{lit=0,anchored=0,bias=0,point=0,pageSpace=0,surface=0}={}){
    const uniforms={color:{value:color(hex).clone()},rows:{value:new THREE.Vector4()},center:{value:new THREE.Vector2()},offset:{value:new THREE.Vector2()},sheet:{value:new THREE.Vector2()},depthAxis:{value:new THREE.Vector3()},heightFactor:{value:1},heightProjection:{value:0},flattenView:{value:0},terrainAmount:{value:1},anchored:{value:anchored},bias:{value:bias},halfSpan:{value:new THREE.Vector2()},frame:{value:new THREE.Vector4()},radius:{value:1},circle:{value:0},lit:{value:lit},point:{value:point},pageSpace:{value:pageSpace}};
    Object.assign(uniforms,{surface:{value:surface},treeSpacing:{value:.25},lightDirection:{value:new THREE.Vector3()},roofColor:{value:new THREE.Color()},roofShadeColor:{value:new THREE.Color()},wallColor:{value:new THREE.Color()},wallShadeColor:{value:new THREE.Color()}});
    const mat=new THREE.RawShaderMaterial({uniforms,vertexShader,fragmentShader,side:THREE.DoubleSide,depthTest:true,depthWrite:point===0});materials.push(mat);return mat;
  }
  function add(key,layer,hex,type='mesh',options={}){
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(layer.positions,3));geometry.setAttribute('normal',new THREE.BufferAttribute(layer.normals,3));geometry.setAttribute('baseZ',new THREE.BufferAttribute(layer.baseZ||new Float32Array(layer.visibility.length),1));if(layer.records.length)layer.visibility.fill(0);const attribute=new THREE.BufferAttribute(layer.visibility,1).setUsage(THREE.DynamicDrawUsage);geometry.setAttribute('visible',attribute);
    const mat=material(hex,options),object=type==='lines'?new THREE.LineSegments(geometry,mat):type==='points'?new THREE.Points(geometry,mat):new THREE.Mesh(geometry,mat);object.frustumCulled=false;object.userData.records=layer.records;scene.add(object);meshes[key]=object;
    for(const record of layer.records){const building=record.building||(record.buildingIndex!==undefined?map.buildings[record.buildingIndex]:map.buildingParts?.[record.partIndex]);if(!building)continue;if(!visibilityRecords.has(building))visibilityRecords.set(building,[]);visibilityRecords.get(building).push({attribute,start:record.start,end:record.end});}
  }
  function clear(){for(const obj of Object.values(meshes)){obj.geometry.dispose();scene.remove(obj);}for(const mat of materials)mat.dispose();materials=[];meshes={};boundaryKey=undefined;groundKey=undefined;}
  function setMap(next){if(next===map)return;map=next;mapRevision++;clear();lastVisibilityKey='';geometryBounds=undefined;variant=undefined;pendingJob=undefined;chunkCache.clear();visibleBuildings=new Set();visibilityRecords=new Map();frames=0;totalMs=0;maxMs=0;delete canvas.dataset.drawCalls;delete canvas.dataset.chunkBuildings;delete canvas.dataset.geometryBuildMs;geometryWorker.postMessage({type:'map',map,revision:mapRevision});}
  function installGeometry(g,bounds,nextVariant){clear();geometryRevision++;lastVisibilityKey='';visibleBuildings=new Set();visibilityRecords=new Map();geometryBounds=bounds;variant=nextVariant;const theme=liveThemeForSettings(settings||{});
    for(const kind of ['parks','water'])add(kind,g[kind],theme[kind],'mesh',{bias:.000002});for(const kind of ['waterEdges','waterSeams'])add(kind,g[kind],theme.soft,'lines',{bias:-.000003});add('buildings',g.buildings,theme.building,'mesh',{surface:1,bias:-.000001});add('edges',g.edges,theme.ink,'lines',{bias:-.000005});add('planBuildings',g.planBuildings,theme.building,'mesh',{bias:-.000004});add('planEdges',g.planEdges,theme.ink,'lines',{bias:-.000005});for(const kind of ['roads','trails'])add(kind,g[kind],theme.ink,'lines',{bias:-.000002});add('trees',g.trees,theme.ink,'points',{point:1,bias:-.000003});add('terrain',g.terrain,canvasBackgroundColor(settings?.pngBackground,theme.paper),'mesh',{lit:1,bias:.000003});add('contours',g.contours,theme.ink,'lines',{bias:-.000002});
    canvas.dataset.chunkBuildings=visibilityRecords.size;canvas.dataset.geometryRevision=geometryRevision;
    if(active){sheet.classList.add('live-navigation');canvas.hidden=false;}
  }
  geometryWorker.onmessage=event=>{const result=event.data;if(result.revision!==mapRevision)return;pendingJob=undefined;if(result.error){failPreview(`Live geometry could not be prepared: ${result.error}`);return;}const key=`${result.variant}:${result.extent.join(',')}`;chunkCache.set(key,result);if(chunkCache.size>3)chunkCache.delete(chunkCache.keys().next().value);canvas.dataset.geometryBuildMs=result.buildMs.toFixed(1);installGeometry(result.geometry,result.extent,result.variant);schedule();};
  geometryWorker.onerror=()=>failPreview('Live geometry worker stopped. Vector navigation remains available.');
  function ensureGeometry(){const visible=projectionExtent(projection,settings.crop==='circle'),nextVariant=geometryVariant(settings);if(variant===nextVariant&&extentContains(geometryBounds,visible,100))return;
    const extent=chunkExtent(visible),key=`${nextVariant}:${extent.join(',')}`,cached=chunkCache.get(key);if(cached){installGeometry(cached.geometry,cached.extent,cached.variant);return;}if(pendingJob||workerFailed)return;
    const id=++jobId;pendingJob=id;geometryWorker.postMessage({type:'geometry',id,revision:mapRevision,extent,settings:{terrain:true,roofDetails:settings.roofDetails,contourInterval:settings.contourInterval},variant:nextVariant});}
  function ground(){
    const remove=key=>{if(meshes[key]){meshes[key].geometry.dispose();scene.remove(meshes[key]);meshes[key].material.dispose();materials=materials.filter(mat=>mat!==meshes[key].material);delete meshes[key];}};
    const circle=settings.crop==='circle',[sx,sy]=projection.span,r=projection.radius,canvasColor=canvasBackgroundColor(settings.pngBackground,liveThemeForSettings(settings).paper);
    const flatKey=JSON.stringify([settings.crop,r,projection.span]),draped=settings.view==='axon'&&settings.terrain!==false&&Boolean(map.terrain),key=JSON.stringify([flatKey,draped,draped?projection.center:null]);
    if(flatKey===groundKey&&key===boundaryKey)return;
    const ring=circle?Array.from({length:256},(_,i)=>[Math.cos(i*Math.PI/128)*r,Math.sin(i*Math.PI/128)*r]):[[-sx/2,-sy/2],[sx/2,-sy/2],[sx/2,sy/2],[-sx/2,sy/2]];
    const layer=(p,draped=false)=>({positions:new Float32Array(p),normals:new Float32Array(p.map((_,i)=>i%3===2?1:0)),baseZ:new Float32Array(p.filter((_,i)=>i%3===2).map(z=>draped?z:0)),visibility:new Float32Array(p.length/3).fill(1),records:[]});
    if(!circle){
      const pageKey=JSON.stringify(['page',projection.frame]);if(pageKey===groundKey&&pageKey===boundaryKey)return;
      groundKey=boundaryKey=pageKey;remove('ground');remove('boundary');
      const [x0,y0,x1,y1]=projection.frame,p=[[x0,y0,0],[x1,y0,0],[x1,y1,0],[x0,y1,0]],edge=[];
      add('ground',layer([...p[0],...p[1],...p[2],...p[0],...p[2],...p[3]]),canvasColor,'mesh',{pageSpace:1,bias:.999});
      for(let i=0;i<4;i++)edge.push(...p[i],...p[(i+1)%4]);add('boundary',layer(edge),liveThemeForSettings(settings).ink,'lines',{pageSpace:1,bias:-.999});return;
    }
    if(flatKey!==groundKey){groundKey=flatKey;remove('ground');const positions=[];for(let i=0;i<ring.length;i++){const p=ring[i],q=ring[(i+1)%ring.length];positions.push(0,0,-.02,...p,-.02,...q,-.02);}add('ground',layer(positions),canvasColor,'mesh',{anchored:1,bias:.000004});}
    if(key===boundaryKey)return;boundaryKey=key;remove('boundary');
    const boundary=draped?terrainCropPerimeter(map.terrain,{ring:ring.map(p=>[p[0]+projection.center[0],p[1]+projection.center[1]])}):ring.map(p=>[...p,0]);
    const edge=[];for(let i=0;i<boundary.length;i++)edge.push(...boundary[i],...boundary[(i+1)%boundary.length]);
    add('boundary',layer(edge,draped),liveThemeForSettings(settings).ink,'lines',{anchored:draped?0:1,bias:-.000006});
  }
  function allBuildingVisibility(value){for(const key of ['buildings','edges','planBuildings','planEdges']){const attribute=meshes[key]?.geometry.getAttribute('visible');if(!attribute)continue;attribute.array.fill(value);attribute.addUpdateRange(0,attribute.array.length);attribute.needsUpdate=true;}visibleBuildings=new Set();}
  function visibility(){
    // The page shader clips rectangles exactly. Keep the buffered buildings
    // ready and avoid a spatial query or visibility upload on each camera frame.
    if(projection.pageAligned){const key=`page:${geometryRevision}`;if(lastVisibilityKey!==key){allBuildingVisibility(1);lastVisibilityKey=key;}return;}
    if(lastVisibilityKey.startsWith('page:'))allBuildingVisibility(0);
    const key=JSON.stringify([settings.crop,projection.center,projection.radius,projection.span,geometryRevision]);if(lastVisibilityKey===key)return;lastVisibilityKey=key;
    const extent=projectionExtent(projection,settings.crop==='circle'),candidates=[...buildingIndex(map.buildings).query(extent),...buildingIndex(standaloneBuildingParts(map)).query(extent)];
    const accepted=new Set(candidates.filter(building=>buildingInBoundary(building,projection,settings.crop==='circle'))),changed=new Set();
    function show(building,value){for(const record of visibilityRecords.get(building)||[]){record.attribute.array.fill(value,record.start,record.end);record.attribute.addUpdateRange(record.start,record.end-record.start);changed.add(record.attribute);}}
    for(const building of visibleBuildings)if(!accepted.has(building))show(building,0);for(const building of accepted)if(!visibleBuildings.has(building))show(building,1);for(const attribute of changed)attribute.needsUpdate=true;visibleBuildings=accepted;
  }
  function paint(){scheduled=0;if(!map||!settings||!projection||workerFailed)return;const started=performance.now();ensureGeometry();if(!meshes.buildings)return;if(canvas.width!==Math.round(size[0]*renderer.getPixelRatio())||canvas.height!==Math.round(size[1]*renderer.getPixelRatio()))renderer.setSize(size[0],size[1],false);ground();visibility();
    const compass=titleOverlay?.querySelector('[data-live-layer="compass"]');
    if(compass){
      const [northX,northY]=[projection.matrix[1],projection.matrix[3]],length=Math.hypot(northX,northY)||1,u=[northX/length,northY/length];
      const center=settings.compassPosition==='footer'?[Number(compass.dataset.centerX),Number(compass.dataset.centerY)]:[projection.frame[2]-11,projection.frame[3]-11];
      const a=[center[0]-u[0]*4,center[1]-u[1]*4],b=[center[0]+u[0]*4,center[1]+u[1]*4],wing=[u[1]*1.7,-u[0]*1.7];
      compass.querySelector('path')?.setAttribute('d',`M${a}L${b}M${[b[0]-u[0]*3+wing[0],b[1]-u[1]*3+wing[1]]}L${b}M${[b[0]-u[0]*3-wing[0],b[1]-u[1]*3-wing[1]]}L${b}`);
      const label=compass.querySelector('text');label?.setAttribute('x',b[0]);label?.setAttribute('y',b[1]-2);
    }
    const theme=liveThemeForSettings(settings),appearance=buildingAppearance(settings.style,settings.surfaceContrast,settings.buildingColor,settings.inkColor),light=surfaceLightDirection(settings.rotation),lineArt=['black','white'].includes(settings.artwork),artInk=settings.artwork==='white'?'#ffffff':'#000000',transparent=settings.pngBackground==='transparent',canvasColor=canvasBackgroundColor(settings.pngBackground,theme.paper),explicitBackground=['black','white'].includes(settings.pngBackground);
    for(const [key,obj] of Object.entries(meshes)){const buildingLayer=['buildings','edges','planBuildings','planEdges'].includes(key);obj.visible=buildingLayer?settings.buildings!==false&&((key.startsWith('plan'))===(settings.view==='plan')):key==='boundary'?settings.outline!==false:['waterEdges','waterSeams'].includes(key)?settings.water!==false&&((key==='waterSeams')===(settings.waterSeams===true)):!(key in settings)||settings[key]!==false;if(key==='trails')obj.visible=settings.trails===true;const u=obj.material.uniforms;
      const shade=lineArt&&!['ground','terrain'].includes(key)?artInk:['buildings','planBuildings'].includes(key)?theme.building:['parks','water'].includes(key)?theme[key]:['ground','terrain'].includes(key)?canvasColor:['roads','trails'].includes(key)?theme.roads:['contours','waterEdges','waterSeams','trees'].includes(key)?theme.soft:key==='edges'?appearance.edge:key==='planEdges'?theme.edges:theme.ink;u.color.value.copy(color(shade));
      if(key==='terrain')u.lit.value=explicitBackground?0:1;
      // Outline faces still write depth so rear edges and context cannot show
      // through opaque building shells, including single-ink navigation.
      obj.material.colorWrite=!(settings.buildingFill===false&&['buildings','planBuildings'].includes(key)||key==='terrain'&&(transparent||lineArt));
      if(lineArt&&['parks','water'].includes(key))obj.visible=false;
      if(key==='buildings'){u.lightDirection.value.set(...light);for(const [uniform,field] of [['roofColor','roof'],['roofShadeColor','roofShade'],['wallColor','wall'],['wallShadeColor','wallShade']])u[uniform].value.copy(color(lineArt?artInk:appearance[field]));}
      if(key==='trees')u.treeSpacing.value=treeSpacingLevel(projection,settings);
      if(key==='terrain')obj.visible=settings.view==='axon'&&settings.terrain!==false;u.flattenView.value=settings.view==='plan'?1:0;u.terrainAmount.value=settings.terrain!==false?1:0;
      if(key==='ground'&&settings.crop==='circle'&&settings.view==='axon'&&settings.terrain!==false&&map.terrain)obj.visible=false;
      if(key==='ground'&&transparent)obj.visible=false;
      u.rows.value.set(...projection.matrix);u.center.value.set(...projection.center);u.offset.value.set(...projection.offset);u.sheet.value.set(projection.sheet.width,projection.sheet.height);u.depthAxis.value.set(...projection.depth);u.heightFactor.value=settings.view==='axon'?(settings.heightFactor??1):0;u.heightProjection.value=projection.heightProjection;u.halfSpan.value.set(projection.span[0]/2,projection.span[1]/2);u.frame.value.set(...projection.frame);u.radius.value=projection.radius;u.circle.value=settings.crop==='circle'?1:0;
    }
    // Use the GPU's viewport clipping before rasterization, so geometry outside
    // the paper window does not generate fragments in the surrounding margins.
    const [x0,y0,x1,y1]=projection.frame,px=size[0]/projection.sheet.width,py=size[1]/projection.sheet.height;
    renderer.setViewport(x0*px,(projection.sheet.height-y1)*py,(x1-x0)*px,(y1-y0)*py);
    renderer.render(scene,camera);if(workerFailed)return;const elapsed=performance.now()-started;frames++;totalMs+=elapsed;maxMs=Math.max(maxMs,elapsed);canvas.dataset.frames=frames;canvas.dataset.averageMs=(totalMs/frames).toFixed(2);canvas.dataset.maxMs=maxMs.toFixed(2);canvas.dataset.drawCalls=renderer.info.render.calls;
  }
  function resize(){size=[Math.max(1,sheet.clientWidth),Math.max(1,sheet.clientHeight)];if(active)schedule();}
  function schedule(){if(!scheduled)scheduled=requestAnimationFrame(paint);}
  function move(next){settings={...next};if(!map)return;projection=computeLiveProjection(map,active&&!(settings.scale>0)?{...settings,scale:frozenScale}:settings);if(active)schedule();}
  function begin(next,currentDrawing,{resetScale=false}={}){if(!map)return false;if(resetScale){active=false;frozenScale=undefined;}drawing=currentDrawing;move(next);if(!active)frozenScale=projection.stats.scale;active=true;if(canvas.parentNode!==sheet)sheet.append(canvas);canvas.hidden=!meshes.buildings;if(meshes.buildings)sheet.classList.add('live-navigation');resize();schedule();return true;}
  function syncTitleOverlay(){
    titleOverlay?.remove();titleOverlay=undefined;
    const candidates=['sheet-annotations','detailed-footer','compass-backing','compass','survey-title-panel','data-attribution'].map(id=>sheet.querySelector(`#${id}`)).filter(Boolean);
    const sources=candidates.filter(source=>!candidates.some(parent=>parent!==source&&parent.contains(source)));if(!sources.length)return;
    titleOverlay=sources[0].ownerSVGElement.cloneNode(false);titleOverlay.setAttribute('class','live-title-overlay');titleOverlay.setAttribute('aria-hidden','true');
    for(const source of sources){const content=source.cloneNode(true);content.dataset.liveLayer=source.id;if(source.id==='compass'){const points=source.querySelector('path')?.getAttribute('d').match(/^M(-?[\d.]+),(-?[\d.]+)L(-?[\d.]+),(-?[\d.]+)/);if(points){content.dataset.centerX=(Number(points[1])+Number(points[3]))/2;content.dataset.centerY=(Number(points[2])+Number(points[4]))/2;}}content.removeAttribute('id');content.querySelectorAll('[id]').forEach(child=>child.removeAttribute('id'));titleOverlay.append(content);}sheet.append(titleOverlay);
  }
  function update(next,currentDrawing){settings={...next};drawing=currentDrawing;active=false;frozenScale=undefined;canvas.hidden=true;sheet.classList.remove('live-navigation');if(canvas.parentNode!==sheet)sheet.append(canvas);syncTitleOverlay();move(next);resize();paint();}
  function end(){if(active)schedule();}
  function dispose(){cancelAnimationFrame(scheduled);geometryWorker.terminate();clear();renderer.dispose();canvas.remove();titleOverlay?.remove();}
  return {setMap,update,begin,move,end,resize,dispose,navigation:()=>projection?{...projection,navigation:{matrix:projection.matrix}}:null,get available(){return !workerFailed;}};
}
