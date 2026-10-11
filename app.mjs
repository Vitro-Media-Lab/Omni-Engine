import {loadCatalog,loadMap,normalizeGeoJSON} from './data.mjs';
import {download} from './export.mjs';
import {pngDimensions,rasterizeLargeSVG} from './raster-export.mjs';
import {addHeroGeoJSON} from './hero.mjs';
import {defaults,validatedSettings,navigationCompatible,pannedCenter,panPreviewOffset,wrappedRotation} from './studio-state.mjs';
import {bindPinchZoom} from './pinch.mjs';
import {computeLiveProjection} from './live-geometry.mjs';
import {limitMapZoom,mapZoom,zoomMapSettings} from './map-zoom.mjs';
import {defaultViewRadius,viewSpan} from './crop.mjs';
import {themeSettings,themeForSettings} from './themes.mjs';
import {outputPresets,outputPresetSettings,supportedPngDpi} from './output-style.mjs';
import {getAttribution,attributionText} from './attribution.mjs';
import {modelPackage} from './model-package.mjs';
import {controlAvailability,inkVisibilityWarning} from './studio-controls.mjs';
import {fitBuildingSettings} from './fit-buildings.mjs';
import {studyCenter} from './study-origin.mjs';
import {physicalSheet} from './paper-sizes.mjs';

let settings={...defaults},map,catalog=[],drawing,renderedSettings,liveView,loadRevision=0,renderPending=false,renderBusy=false,renderAgain=false,drawRevision=0,renderedRevision=-1,mapLoading=false,workerFailed=false,navMode='pan',drag;
const importedMaps=new Map();
const worker=new Worker(new URL('./drawing-worker.mjs',import.meta.url),{type:'module'});
const jobs=new Map();let jobId=0;
worker.onmessage=event=>{const job=jobs.get(event.data.id);if(!job)return;jobs.delete(event.data.id);event.data.error?job.reject(new Error(event.data.error)):job.resolve(event.data.model||event.data.drawing);};
worker.onerror=()=>{workerFailed=true;for(const job of jobs.values())job.reject(new Error('The drawing worker could not run. Reload the page.'));jobs.clear();};
function requestDrawing(snapshot,plotter=false,options={}){if(workerFailed)return Promise.reject(new Error('The drawing worker stopped. Reload the page.'));return new Promise((resolve,reject)=>{const id=++jobId;jobs.set(id,{resolve,reject});worker.postMessage({id,settings:snapshot,plotter,options:{background:snapshot.pngBackground||'paper',...options}});});}
function requestModel(options){if(workerFailed)return Promise.reject(new Error('The export worker stopped. Reload the page.'));return new Promise((resolve,reject)=>{const id=++jobId;jobs.set(id,{resolve,reject});worker.postMessage({id,type:'model',options});});}
function useMap(loaded){cancelDrag({restore:true});map=loaded;renderedSettings=undefined;renderedRevision=-1;liveView?.setMap(map);worker.postMessage({type:'map',map});}
const $=selector=>document.querySelector(selector);
const sheet=$('#drawing-sheet');
// The print drawing remains the authoritative export. Live navigation can keep
// moving while the worker prepares the next measured sheet.
import('./live-view.mjs').then(async ({createLiveView})=>{
  const created=await createLiveView(sheet);
  if(map)created?.setMap(map);
  if(drawing&&renderedSettings)created?.update(renderedSettings,drawing);
  liveView=created;
  fitSheet();
}).catch(error=>console.warn('Live preview unavailable; vector navigation remains active.',error));
let toastTimeout;
function notify(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$('#toast').classList.remove('visible'),6500);}
function fileName(suffix){return `omni-${(map?.id||'study').replace(/[^a-zA-Z0-9_-]/g,'-')}-${settings.view}-${suffix}`;}

function fitSheet(){
  if(!drawing)return;
  const stage=$('#sheet-stage');const cs=getComputedStyle(stage);
  const width=stage.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);
  const height=stage.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom);
  const factor=Math.max(.05,Math.min(width/drawing.sheet.width,height/drawing.sheet.height));
  sheet.style.width=`${drawing.sheet.width*factor}px`;sheet.style.height=`${drawing.sheet.height*factor}px`;
  liveView?.resize();
  document.documentElement.style.setProperty('--print-width',`${drawing.sheet.width}mm`);
  document.documentElement.style.setProperty('--print-height',`${drawing.sheet.height}mm`);
}
new ResizeObserver(fitSheet).observe($('#sheet-stage'));
function syncControls(){
  document.body.dataset.view=settings.view;
  document.body.dataset.crop=settings.crop;sheet.dataset.nav=navMode;
  sheet.dataset.background=settings.pngBackground||'paper';
  $('#show-title').checked=settings.titleBlock||settings.titlePanel;
  const palette=themeForSettings(settings);
  if(map){
    const radiusControl=$('[data-setting=cropRadius]');radiusControl.max=Math.min(5000,Math.max(settings.cropRadius,Math.min(map.extent[2]-map.extent[0],map.extent[3]-map.extent[1])/2));radiusControl.min=Math.min(50,settings.cropRadius>0?settings.cropRadius:50,Number(radiusControl.max));
  }
  document.querySelectorAll('[data-setting]').forEach(control=>{
    const key=control.dataset.setting;
    const value=key==='cropRadius' && !settings[key]&&map?defaultViewRadius(map):settings[key];
    if(key==='scale')syncScaleControl();
    if(control.tagName==='SELECT'&&control.hasAttribute('data-number')&&![...control.options].some(option=>Number(option.value)===value)){
      control.querySelector('[data-custom-value]')?.remove();
      const custom=new Option(`${value}${key==='pngDpi'?' DPI':key==='contourInterval'?' m':''}`,String(value));custom.dataset.customValue='';control.append(custom);
    }
    if(control.type==='checkbox')control.checked=value;else control.value=control.type==='color'?(value||palette[control.dataset.palette]):value;
    const output=$(`#${key}-value`);if(output)output.textContent=`${['rotation','axonAngle','cropRadius'].includes(key)?Math.round(value*10)/10:value}${control.dataset.unit||''}`;
  });
  document.querySelectorAll('[data-style]').forEach(button=>{button.classList.toggle('active',button.dataset.style===settings.style);const swatch=button.querySelector('.swatch'),colors=themeForSettings({style:button.dataset.style});for(const [key,value] of Object.entries({paper:colors.paper,building:colors.building,ink:colors.ink,water:colors.water}))swatch.style.setProperty(`--swatch-${key}`,value);});
  document.querySelectorAll('[data-output-preset]').forEach(button=>{const preset=outputPresets[button.dataset.outputPreset];button.classList.toggle('active',Boolean(preset)&&Object.entries(preset).every(([key,value])=>settings[key]===value));});
  document.querySelectorAll('button[data-view]').forEach(button=>button.classList.toggle('active',button.dataset.view===settings.view));
  document.querySelectorAll('button[data-nav]').forEach(button=>{const active=button.dataset.nav===navMode;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  const heroes=map?.buildings.filter(building=>building.hero).length||0;
  $('#hero-status').textContent=heroes?`${heroes} hero building${heroes===1?'':'s'} in this study. Saved with project geometry.`:'No added hero buildings in this study.';
  syncControlAvailability();syncPNGInfo();
}
function syncControlAvailability(){
  const available=controlAvailability(settings,map);
  for(const control of document.querySelectorAll('[data-setting]')){
    control.disabled=available[control.dataset.setting]===false;
    control.closest('label')?.classList.toggle('control-inactive',control.disabled);
  }
  for(const button of document.querySelectorAll('[data-style],[data-view],[data-output-preset],[data-output]'))button.setAttribute('aria-pressed',String(button.classList.contains('active')));
  const warning=inkVisibilityWarning(settings);$('#artwork-warning').hidden=!warning;$('#artwork-warning span').textContent=warning;
  $('[data-setting=titleBackdrop]').closest('label').hidden=settings.titleLayout!=='panel';
  $('#fit-buildings').disabled=!map||mapLoading||settings.buildings===false;
}
function syncPNGInfo(){
  const label=$('#png-size-info');if(!label)return;
  if(!drawing){label.textContent='Image size updates when the drawing is ready.';return;}
  const sheetSize=physicalSheet(settings);
  for(const option of $('[data-setting=pngDpi]').options){try{pngDimensions(sheetSize,Number(option.value));option.disabled=false;}catch{option.disabled=true;}}
  try{const size=pngDimensions(sheetSize,settings.pngDpi??600);label.textContent=`${size.width.toLocaleString()} × ${size.height.toLocaleString()} pixels · ${size.megapixels.toFixed(1)} MP · ${size.dpi.toLocaleString()} DPI${settings.pngBackground==='transparent'?' · transparent background':''}`;label.classList.remove('invalid');}
  catch(error){label.textContent=error.message;label.classList.add('invalid');}
}
async function render(){
  if(!map||mapLoading||drag||pinchZoom.active())return;
  if(renderBusy){renderAgain=true;return;}
  renderBusy=true;const revision=drawRevision,snapshot={...settings};
  $('#drawing-status').textContent='Drawing geometry…';
  try {
    const result=await requestDrawing(snapshot);
    if(revision!==drawRevision){renderAgain=true;return;}
    drawing=result;renderedSettings=snapshot;renderedRevision=revision;
    sheet.innerHTML=drawing.svg;
    liveView?.update(renderedSettings,drawing);
    $('#sheet-label').textContent=['poster48','square48'].includes(settings.paper)?`${Number((drawing.sheet.width/25.4).toFixed(1))} × ${Number((drawing.sheet.height/25.4).toFixed(1))} in`:drawing.sheet.width===drawing.sheet.height?`${drawing.sheet.width} × ${drawing.sheet.height} mm`:`${settings.paper.toUpperCase()} · ${settings.orientation}`;
    $('#drawing-status').textContent=`${settings.view==='plan'?'Plan drawing':'Axonometric study'} · vector preview`;
    $('#drawing-count').textContent=`${(drawing.stats.buildings??map.buildings.length).toLocaleString()} buildings · ${(drawing.stats.paths||0).toLocaleString()} paths`;
    $('#scale-status').textContent=`${settings.view==='axon'?'Ground plane ':''}1 : ${Math.round(drawing.stats.scale||1).toLocaleString()} · mm`;
    const estimates=map.buildings.filter(b=>b.heightSource==='estimated').length;
    const importNotes=(map.importNotes||'').replace(/Buildings crossing the sheet edge are omitted whole\.\s*/g,'');
    $('#data-note').textContent=`${map.source||'Imported map'} · ${estimates.toLocaleString()} of ${map.buildings.length.toLocaleString()} heights estimated. ${settings.view==='axon'?'Axonometric lengths are foreshortened. ':''}${drawing.stats.unsupportedRoofs?`${drawing.stats.unsupportedRoofs.toLocaleString()} unsupported roof shapes use flat massing. `:''}${drawing.stats.estimatedRoofs?`${drawing.stats.estimatedRoofs.toLocaleString()} roof heights estimated from mapped shapes. `:''}${map.buildings.length>drawing.stats.buildings?`${(map.buildings.length-drawing.stats.buildings).toLocaleString()} loaded footprints outside the current drawing selection. `:''}${settings.crop==='circle'?'Buildings crossing the circular crop are omitted whole. ':''}${importNotes}`;
    const sourceNotices=getAttribution(map,{terrainUsed:Boolean(map.terrain&&(settings.terrain||settings.contours))});
    $('#source-notices').hidden=!sourceNotices.warnings.length;
    $('#source-notices').textContent=sourceNotices.warnings.join(' ');
    fitSheet();syncMapZoomLabel();syncPNGInfo();
  } catch(error){
    if(revision!==drawRevision){renderAgain=true;return;}
    renderedRevision=-1;sheet.querySelector('#map-content')?.removeAttribute('transform');$('#drawing-status').textContent='Drawing failed · adjust settings or reload';console.error(error);notify(`Could not draw this map: ${error.message}`);
  }
  finally{renderBusy=false;if(renderAgain){renderAgain=false;if(!renderPending)render();}}
}
let renderTimer;
function queueRender(delay=0){drawRevision++;clearTimeout(renderTimer);renderPending=true;renderTimer=setTimeout(()=>{renderPending=false;render();},delay);}
function beginLoad(){cancelDrag({restore:true});mapLoading=true;drawRevision++;$('#drawing-status').textContent='Loading map geometry…';return ++loadRevision;}
function registerCustomMap(loaded){
  if(catalog.some(entry=>entry.id===loaded.id))loaded={...loaded,id:`imported-${crypto.randomUUID()}`};
  importedMaps.set(loaded.id,loaded);
  let option=[...$('#site-select').options].find(entry=>entry.value===loaded.id);
  if(option)option.textContent=loaded.title;else $('#site-select').append(new Option(loaded.title,loaded.id));
  return loaded;
}
function updateSiteMeta(){if(!map)return;const distance=value=>value>=1000?`${Number((value/1000).toFixed(1))} km`:`${Math.round(value)} m`;$('#site-meta').textContent=`${map.region} / ${Math.abs(map.lat).toFixed(4)}° ${map.lat>=0?'N':'S'} / ${Math.abs(map.lon).toFixed(4)}° ${map.lon>=0?'E':'W'} · ${distance(map.extent[2]-map.extent[0])} loaded · ${distance(viewSpan(map)[0])} starting crop`;}
function loadFailed(error,revision,label='Map could not load'){
  if(revision!==loadRevision)return;
  mapLoading=false;if(map){$('#site-select').value=map.id;queueRender();}
  else{sheet.innerHTML='<div class="loading-message">Map data could not load.<br>Select a study area to retry, or reload.</div>';$('#drawing-status').textContent='Map could not load · select a study area to retry';}
  notify(`${label}: ${error.message}`);
}
async function selectMap(id){
  $('#site-select').value=id;
  const revision=beginLoad();
  try{
    const loaded=importedMaps.get(id)||await loadMap(id);if(revision!==loadRevision)return;
    useMap(loaded);mapLoading=false;$('#site-select').value=map.id;settings.title=map.title;settings.scale=0;
    [settings.centerX,settings.centerY]=studyCenter(map);settings.cropRadius=0;settings.viewRadius=0;updateSiteMeta();
    syncControls();queueRender();
  }catch(error){loadFailed(error,revision);}
}

document.querySelectorAll('[data-setting]').forEach(control=>control.addEventListener('input',()=>{
  const key=control.dataset.setting;
  let value=control.type==='checkbox'?control.checked:control.hasAttribute('data-boolean')?control.value==='true':(control.type==='range'||control.hasAttribute('data-number'))?Number(control.value):control.value;
  if(control.type==='number' && (!control.value||!Number.isFinite(value)))return;
  if(control.type==='number')value=Math.max(Number(control.min),Math.min(Number(control.max),value));
  settings[key]=value;
  if(key==='paper'){
    const dpi=supportedPngDpi(settings);
    if(dpi!==settings.pngDpi){settings.pngDpi=dpi;notify(`PNG resolution set to ${dpi} DPI for this paper size.`);}
    syncControls();
  }
  if(key==='titleLayout'){settings.footerDetails=false;settings.titlePanel=$('#show-title').checked&&value==='panel';settings.titleBlock=$('#show-title').checked&&value!=='panel';}
  if(key==='pngDpi'){syncPNGInfo();return;}
  if(key==='pngBackground'){sheet.dataset.background=value;syncPNGInfo();}
  const output=$(`#${key}-value`);if(output)output.textContent=`${key==='cropRadius'?Math.round(settings[key]*10)/10:settings[key]}${control.dataset.unit||''}`;
  document.body.dataset.crop=settings.crop;
  syncControlAvailability();
  if(['paper','orientation'].includes(key))syncPNGInfo();
  if(['centerX','centerY','rotation','axonAngle','heightFactor','surfaceContrast','artwork','buildingFill','waterSeams','treeSpacing','paperColor','buildingColor','waterColor','parkColor','inkColor','pngBackground','crop','cropRadius','scale'].includes(key)&&map&&drawing){liveView?.begin(settings,drawing);liveView?.move(settings);liveView?.end();}
  queueRender(control.type==='range'||control.type==='number'?300:['text','color'].includes(control.type)?140:0);
}));
document.querySelectorAll('input[type=number][data-setting]').forEach(control=>control.addEventListener('change',()=>{control.value=settings[control.dataset.setting];}));
$('#show-title').addEventListener('input',()=>{settings.footerDetails=false;settings.titlePanel=$('#show-title').checked&&settings.titleLayout==='panel';settings.titleBlock=$('#show-title').checked&&settings.titleLayout!=='panel';syncControlAvailability();queueRender();});
$('#export-credits').addEventListener('click',()=>{if(map)download(attributionText(map,{terrainUsed:Boolean(map.terrain&&(settings.terrain||settings.contours))}),fileName('source-credits.txt'),'text/plain');});
$('#contrast-ink').addEventListener('click',()=>{settings.artwork=settings.artwork==='white'?'black':'white';syncControls();queueRender();});
$('#reset-theme-colors').addEventListener('click',()=>{for(const key of ['paperColor','buildingColor','waterColor','parkColor','inkColor'])settings[key]='';syncControls();liveView?.begin(settings,drawing);liveView?.move(settings);liveView?.end();queueRender();});
document.querySelectorAll('[data-style]').forEach(button=>button.addEventListener('click',()=>{settings=themeSettings(settings,button.dataset.style);syncControls();if(map&&drawing&&!mapLoading){liveView?.begin(settings,drawing);liveView?.move(settings);liveView?.end();}queueRender();}));
document.querySelectorAll('[data-output-preset]').forEach(button=>button.addEventListener('click',()=>{const preset=outputPresets[button.dataset.outputPreset];if(!preset)return;settings=outputPresetSettings(settings,button.dataset.outputPreset);syncControls();queueRender();notify(`${button.textContent.trim()} settings applied${settings.pngDpi!==preset.pngDpi?` · ${settings.pngDpi.toLocaleString()} DPI for this page size`:''}.`);}));
document.querySelectorAll('button[data-view]').forEach(button=>button.addEventListener('click',()=>{settings.view=button.dataset.view;liveView?.begin(settings,drawing);liveView?.move(settings);liveView?.end();syncControls();queueRender();}));
$('#site-select').addEventListener('change',event=>selectMap(event.target.value));
let zoomGesture;
function currentProjection(){return computeLiveProjection(map,settings);}
function syncScaleControl(){
  const select=$('[data-setting=scale]'),value=settings.scale;
  select.querySelector('[data-custom-scale]')?.remove();
  if(value>0&&![...select.options].some(option=>Number(option.value)===value)){
    const custom=new Option(`1 : ${Math.round(value).toLocaleString()}`,String(value));custom.dataset.customScale='';select.append(custom);
  }
  select.value=String(value);
}
function syncMapZoomLabel(){
  if(!map||!drawing)return;
  const scale=currentProjection().stats.scale;
  $('#zoom-fit').title=`Fit the starting study area · current scale 1 : ${Math.round(scale).toLocaleString()}`;
  sheet.dataset.mapScale=scale.toFixed(3);
}
function syncZoomRadius(){
  if(settings.crop!=='circle')return;
  const control=$('[data-setting=cropRadius]');
  control.min=Math.min(50,settings.cropRadius);control.max=Math.min(5000,Math.max(Number(control.max),settings.cropRadius));control.value=settings.cropRadius;
  $('#cropRadius-value').textContent=`${Math.round(settings.cropRadius*10)/10} m`;
}
function zoomMap(next,anchor){
  if(!canNavigate())return;
  const projection=zoomGesture?.projection||currentProjection(),rect=sheet.getBoundingClientRect();
  const from=anchor?[(anchor.fx??(anchor.x-rect.left)/rect.width)*projection.sheet.width,(anchor.fy??(anchor.y-rect.top)/rect.height)*projection.sheet.height]:undefined;
  const to=anchor?[(anchor.x-rect.left)/rect.width*projection.sheet.width,(anchor.y-rect.top)/rect.height*projection.sheet.height]:undefined;
  settings=zoomMapSettings(map,settings,next,{projection,from,to});
  previewPan();liveView?.begin(settings,drawing);liveView?.move(settings);liveView?.end();
  syncScaleControl();syncCenterControls();syncZoomRadius();syncMapZoomLabel();
  $('#drawing-status').textContent='Zooming map · drawing updates when you pause';
  $('#scale-status').textContent=`${settings.view==='axon'?'Ground plane ':''}1 : ${Math.round(settings.scale).toLocaleString()} · mm`;
  queueRender(300);
}
const pinchZoom=bindPinchZoom({stage:sheet,sheet,getZoom:()=>map&&drawing?mapZoom(currentProjection()):1,setZoom:zoomMap,constrainZoom:limitMapZoom,
  onStart:()=>{cancelDrag({clearPreview:false});zoomGesture=canNavigate()?{projection:currentProjection()}:undefined;if(zoomGesture){drawRevision++;clearTimeout(renderTimer);renderPending=false;liveView?.begin(settings,drawing);}},
  onEnd:()=>{zoomGesture=undefined;if(renderedRevision!==drawRevision)queueRender(300);else if(renderedSettings)liveView?.update(renderedSettings,drawing);}});
$('#zoom-out').addEventListener('click',()=>{if(canNavigate())zoomMap(mapZoom(currentProjection())/1.2);});
$('#zoom-in').addEventListener('click',()=>{if(canNavigate())zoomMap(mapZoom(currentProjection())*1.2);});
$('#zoom-fit').addEventListener('click',()=>{if(!canNavigate())return;settings.scale=0;settings.viewRadius=0;settings.cropRadius=0;[settings.centerX,settings.centerY]=studyCenter(map);previewPan();liveView?.begin(settings,drawing,{resetScale:true});liveView?.move(settings);liveView?.end();syncControls();syncMapZoomLabel();queueRender(300);});
$('#fit-buildings').addEventListener('click',()=>{
  if(!canNavigate())return;
  const next=fitBuildingSettings(map,settings);if(!next){notify('No whole buildings in this area. Pan to a building or use Fit area.');return;}
  settings=next;liveView?.begin(settings,drawing,{resetScale:true});liveView?.move(settings);liveView?.end();syncControls();queueRender(100);
});
$('#north-up')?.addEventListener('click',()=>{if(!canNavigate())return;if(settings.scale===0)settings.scale=currentProjection().stats.scale;settings.rotation=settings.view==='axon'?45:0;liveView?.begin(settings,drawing,{resetScale:false});liveView?.move(settings);liveView?.end();syncControls();queueRender(300);notify('Map rotation reset to north.');});
document.querySelectorAll('[data-output]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-output]').forEach(b=>b.classList.toggle('active',b===button));
  $('#paper-output').hidden=button.dataset.output!=='paper';$('#model-output').hidden=button.dataset.output!=='model';
  syncControlAvailability();
}));
function ready(quiet=false){if(!map||!drawing||mapLoading||renderBusy||renderPending||renderAgain||drag||renderedRevision!==drawRevision){if(!quiet)notify('Wait for the drawing to finish updating.');return false;}return true;}
$('#export-main').addEventListener('click',()=>{$('#output-panel').open=true;$('#output-panel').scrollIntoView({behavior:'smooth',block:'nearest'});notify('Choose print SVG, plotter paths, an image, or a physical model below.');});
$('#export-svg').addEventListener('click',async()=>{
  if(!ready())return;const button=$('#export-svg'),snapshot={...settings},filename=fileName(snapshot.pngBackground==='transparent'?'transparent.svg':'print.svg'),label=button.textContent;button.disabled=true;button.textContent='Preparing…';
  try{const result=snapshot.pngBackground==='transparent'?await requestDrawing(snapshot,false,{background:'transparent'}):drawing;download(result.svg,filename,'image/svg+xml');notify(`${snapshot.pngBackground==='transparent'?'Transparent':'Print'} SVG exported · ${result.sheet.width} × ${result.sheet.height} mm.`);}
  catch(error){notify(`SVG export failed: ${error.message}`);}finally{button.disabled=false;button.textContent=label;}
});
async function exportPlotter(button, colored) {
  if(!ready())return;
  const snapshot={...settings},filename=fileName(colored?'color-plotter.svg':'plotter.svg'),label=button.textContent;
  button.disabled=true;button.textContent='Preparing…';
  try {
    const result=await requestDrawing(snapshot,true,{plotterColors:colored});
    download(result.svg,filename,'image/svg+xml');
    notify(`${colored?`Color plot · ${result.stats.pens.length} pen layers`:'Black pen plot'} exported · ${result.sheet.width} × ${result.sheet.height} mm.`);
  } catch(error) { notify(error.message); }
  finally { button.disabled=false;button.textContent=label; }
}
$('#export-plotter').addEventListener('click',event=>exportPlotter(event.currentTarget,false));
$('#export-color-plotter').addEventListener('click',event=>exportPlotter(event.currentTarget,true));
$('#export-png').addEventListener('click',async()=>{
  if(!ready())return;const button=$('#export-png'),label=button.textContent,snapshot={...settings},dpi=snapshot.pngDpi??600,transparent=snapshot.pngBackground==='transparent',filename=fileName(`${dpi}dpi${transparent?'-transparent':''}.png`),currentDrawing=drawing;button.disabled=true;button.textContent='Preparing…';
  try{
    pngDimensions(currentDrawing.sheet,dpi);
    const result=transparent?await requestDrawing(snapshot,false,{background:'transparent'}):currentDrawing;
    const image=await rasterizeLargeSVG(result.svg,result.sheet,{dpi,onProgress:progress=>{button.textContent=`Rendering ${Math.round(progress*100)}%…`;}});
    download(image.blob,filename);notify(`${dpi.toLocaleString()} DPI${transparent?' transparent':''} PNG exported · ${image.width.toLocaleString()} × ${image.height.toLocaleString()} pixels.`);
  }catch(error){notify(`Image export failed: ${error.message}`);}finally{button.disabled=false;button.textContent=label;}
});
$('#print-sheet').addEventListener('click',()=>{
  if(!ready())return;
  let style=$('#print-page-size');if(!style){style=document.createElement('style');style.id='print-page-size';document.head.append(style);}
  style.textContent=`@page { size: ${drawing.sheet.width}mm ${drawing.sheet.height}mm; margin: 0; }`;
  window.print();
});
$('#export-stl').addEventListener('click',async()=>{
  if(!ready())return;
  const filename=fileName('model-mm.stl'),packageFilename=fileName('model-package.zip'),button=$('#export-stl');button.disabled=true;button.textContent='Preparing model…';
  try{const result=await requestModel({width:Number($('#model-width').value),base:Number($('#model-base').value),minHeight:Number($('#model-height').value),buildings:settings.buildings,crop:settings.crop,cropRadius:settings.cropRadius,viewRadius:settings.viewRadius,centerX:settings.centerX,centerY:settings.centerY,terrain:settings.terrain,roofDetails:settings.roofDetails,heightFactor:settings.heightFactor});download(modelPackage(result,filename),packageFilename);notify(`Model package exported · ${result.stats.width.toFixed(0)} × ${result.stats.depth.toFixed(0)} × ${result.stats.height.toFixed(1)} mm · ${result.stats.buildings} buildings. The ZIP includes the STL and required source notices.`);}catch(error){notify(error.message);}finally{button.disabled=false;button.textContent='Export physical model ↗';}
});

$('#save-project').addEventListener('click',()=>{
  if(!ready())return;
  const project={format:'omni-v3',version:1,mapId:map.id,map,settings,sourceNotices:attributionText(map,{terrainUsed:Boolean(map.terrain&&(settings.terrain||settings.contours))}),model:{width:Number($('#model-width').value),base:Number($('#model-base').value),minHeight:Number($('#model-height').value)}};
  download(JSON.stringify(project),fileName('project.json'),'application/json');notify('Project saved with map geometry, terrain, drawing and model settings.');
});
$('#open-project').addEventListener('click',()=>$('#project-file').click());
$('#project-file').addEventListener('change',async event=>{
  const file=event.target.files[0];if(!file)return;
  const revision=beginLoad();
  try{
    if(file.size>64*1024*1024)throw new Error('Project is larger than 64 MB.');
    const project=JSON.parse(await file.text());if(revision!==loadRevision)return;if(project.format!=='omni-v3'||project.version!==1)throw new Error('Select an Omni V3 project file.');
    const next=validatedSettings(project.settings);
    // Normalized imports are validated by data.mjs before they can be rendered.
    let loaded=project.map?normalizeGeoJSON(project.map):await loadMap(project.mapId);if(revision!==loadRevision)return;
    if(project.map)loaded=registerCustomMap(loaded);
    useMap(loaded);mapLoading=false;settings=next;
    $('#site-select').value=map.id;updateSiteMeta();
    for(const [key,id] of [['width','model-width'],['base','model-base'],['minHeight','model-height']])if(Number.isFinite(project.model?.[key])){const control=$('#'+id);control.value=Math.max(Number(control.min),Math.min(Number(control.max),project.model[key]));}
    syncControls();queueRender();notify('Project restored.');
  }catch(error){loadFailed(error,revision,'Project could not open');}finally{event.target.value='';}
});
$('#import-map').addEventListener('click',()=>$('#map-file').click());
$('#map-file').addEventListener('change',async event=>{
  const file=event.target.files[0];if(!file)return;
  const revision=beginLoad();
  try{
    if(file.size>20*1024*1024)throw new Error('Use a GeoJSON file under 20 MB.');
    const json=JSON.parse(await file.text());if(revision!==loadRevision)return;
    let loaded=normalizeGeoJSON(json,{title:file.name.replace(/\.(geojson|json)$/i,''),region:'Imported study'});
    loaded.id=`imported-${crypto.randomUUID()}`;loaded=registerCustomMap(loaded);
    useMap(loaded);mapLoading=false;settings.title=map.title;[settings.centerX,settings.centerY]=studyCenter(map);settings.cropRadius=0;settings.viewRadius=0;settings.scale=0;
    $('#site-select').value=map.id;updateSiteMeta();
    syncControls();queueRender();notify(`Imported ${map.buildings.length.toLocaleString()} buildings. Save the project to keep this geometry.`);
  }catch(error){loadFailed(error,revision,'Import failed');}finally{event.target.value='';}
});

function cancelDrag({restore=false,clearPreview=true}={}){
  if(!drag)return;
  const previous=drag;drag=undefined;
  if(restore)settings={...previous.settings};
  if(sheet.hasPointerCapture(previous.id))sheet.releasePointerCapture(previous.id);
  sheet.classList.remove('dragging');
  if(clearPreview)sheet.querySelector('#map-content')?.removeAttribute('transform');
  liveView?.move(settings);liveView?.end();
}
document.querySelectorAll('button[data-nav]').forEach(button=>button.addEventListener('click',()=>{navMode=button.dataset.nav;syncControls();}));
function canNavigate(){
  const samePage=renderedSettings&&settings.paper===renderedSettings.paper&&settings.orientation===renderedSettings.orientation;
  return Boolean(map&&drawing&&!mapLoading&&!workerFailed&&samePage&&(liveView?.available||navigationCompatible(settings,renderedSettings)));
}
function navigationDrawing(){
  const projection=liveView?.navigation?.();if(projection)return projection;
  const current=currentProjection();return {...current,navigation:{matrix:current.matrix}};
}
function previewPan(){
  if(!drawing||!renderedSettings)return;
  const current=currentProjection(),ratio=drawing.stats.scale/current.stats.scale;
  const [dx,dy]=panPreviewOffset(settings,renderedSettings,drawing),old=drawing.navigation.offset;
  sheet.querySelector('#map-content')?.setAttribute('transform',`translate(${current.offset[0]-ratio*old[0]+ratio*dx} ${current.offset[1]-ratio*old[1]+ratio*dy}) scale(${ratio})`);
}
function syncCenterControls(){
  for(const key of ['centerX','centerY'])$(`[data-setting=${key}]`).value=Math.round(settings[key]*10)/10;
}
function syncAngleControls(){
  for(const key of ['rotation','axonAngle']){
    const control=$(`[data-setting=${key}]`),value=Math.round(settings[key]*10)/10;
    control.value=value;const output=$(`#${key}-value`);if(output)output.textContent=`${value}${control.dataset.unit||''}`;
  }
}
function panStep(dx,dy){
  if(drag||!canNavigate())return;
  liveView?.begin(settings,drawing);
  Object.assign(settings,pannedCenter(dx,dy,navigationDrawing(),settings));
  previewPan();liveView?.move(settings);liveView?.end();syncCenterControls();queueRender(300);
}
$('#reset-view').addEventListener('click',()=>{if(!map||mapLoading)return;cancelDrag();settings.centerX=(map.extent[0]+map.extent[2])/2;settings.centerY=(map.extent[1]+map.extent[3])/2;liveView?.begin(settings,drawing);liveView?.move(settings);liveView?.end();syncControls();queueRender(300);});
sheet.addEventListener('keydown',event=>{
  const directions={ArrowUp:[0,-8],ArrowDown:[0,8],ArrowLeft:[-8,0],ArrowRight:[8,0]};
  if(directions[event.key]){event.preventDefault();panStep(...directions[event.key].map(value=>value*(event.shiftKey?3:1)));}
  if(event.key==='Home'){event.preventDefault();$('#reset-view').click();}
});
sheet.addEventListener('pointerdown',event=>{
  if(event.button!==0||drag||pinchZoom.active()||!canNavigate())return;
  event.preventDefault();sheet.focus({preventScroll:true});
  liveView?.begin(settings,drawing);
  drag={id:event.pointerId,x:event.clientX,y:event.clientY,dx:0,dy:0,mode:event.shiftKey?'rotate':navMode,settings:{...settings},drawing:navigationDrawing(),rect:sheet.getBoundingClientRect()};
  // Invalidate an older worker result without interrupting the live camera.
  drawRevision++;clearTimeout(renderTimer);renderPending=false;
  sheet.setPointerCapture(event.pointerId);sheet.classList.add('dragging');
});
function moveDrag(event){
  if(!drag||event.pointerId!==drag.id)return;
  drag.dx=event.clientX-drag.x;drag.dy=event.clientY-drag.y;
  const content=sheet.querySelector('#map-content');
  if(drag.mode==='pan'){
    const dx=drag.dx*drag.drawing.sheet.width/drag.rect.width,dy=drag.dy*drag.drawing.sheet.height/drag.rect.height;
    Object.assign(settings,pannedCenter(dx,dy,drag.drawing,drag.settings));
    previewPan();syncCenterControls();
  }else{
    settings.rotation=wrappedRotation(drag.settings.rotation+drag.dx*.4);
    if(settings.view==='axon')settings.axonAngle=Math.max(15,Math.min(65,drag.settings.axonAngle-drag.dy*.18));
    const angle=wrappedRotation(settings.rotation-renderedSettings.rotation);
    content?.setAttribute('transform',`rotate(${angle} ${drag.drawing.sheet.width/2} ${drag.drawing.sheet.height/2})`);syncAngleControls();
  }
  liveView?.move(settings);
  $('#drawing-status').textContent=`${drag.mode==='pan'?'Panning map':'Rotating view'} · release to redraw`;
}
sheet.addEventListener('pointermove',moveDrag);
function finishDrag(event,cancel=false){
  if(!drag||event.pointerId!==drag.id)return;
  if(cancel)settings={...drag.settings};
  else moveDrag(event); // Pointer-up can contain movement after the last move event.
  // Keep the final offset visible until the replacement SVG is ready. A new
  // gesture starts from these current settings, even if the worker is busy.
  cancelDrag({clearPreview:cancel});if(cancel&&settings.view===renderedSettings?.view)previewPan();syncControls();queueRender(300);
}
sheet.addEventListener('pointerup',event=>finishDrag(event));
sheet.addEventListener('pointercancel',event=>finishDrag(event,true));
sheet.addEventListener('lostpointercapture',event=>finishDrag(event,true));

function chooseHero(){if(!map||mapLoading){notify('Load a study area first.');return;}$('#hero-file').click();}
$('#add-hero-inspector').addEventListener('click',chooseHero);
$('#hero-file').addEventListener('change',async event=>{
  const file=event.target.files[0];if(!file||!map)return;
  const baseMap=map,options={name:file.name.replace(/\.(geojson|json)$/i,''),placement:$('#hero-placement').value,centerX:settings.centerX,centerY:settings.centerY,replaceNearby:$('#hero-replace').checked};
  const revision=beginLoad();
  try{
    if(file.size>20*1024*1024)throw new Error('Use a hero GeoJSON file under 20 MB.');
    const json=JSON.parse(await file.text());if(revision!==loadRevision)return;
    const result=addHeroGeoJSON(baseMap,json,options);useMap(registerCustomMap(result.map));mapLoading=false;
    $('#site-select').value=map.id;updateSiteMeta();$('#hero-panel').open=true;
    syncControls();queueRender();notify(`Added ${result.added} hero building${result.added===1?'':'s'}${result.removed?` · replaced ${result.removed} beneath it`:''}${result.estimated?` · ${result.estimated} heights estimated`:''}. Save the project to retain the addition.`);
  }catch(error){loadFailed(error,revision,'Hero could not be added');}finally{event.target.value='';}
});

try{
  catalog=await loadCatalog();const groups=[['tower','Towers'],['landmark','Landmarks'],['landscape','Landscapes']].map(([category,label])=>{const group=document.createElement('optgroup');group.label=label;for(const entry of catalog.filter(site=>(site.category||'landmark')===category))group.append(new Option(entry.title,entry.id));return group;}).filter(group=>group.children.length);$('#site-select').replaceChildren(...groups);
  if(!catalog.length)throw new Error('No prepared map datasets were found.');
  const initialStudy=catalog.find(study=>study.id==='monument-circle')||catalog[0];
  syncControls();await selectMap(initialStudy.id);
}catch(error){sheet.innerHTML='<div class="loading-message">Map data could not load.<br>Run the local server and reload.</div>';$('#drawing-status').textContent='Map data could not load · reload to retry';notify(error.message);}
