import {drawingThemes} from './themes.mjs';
import {annotationStyle} from './annotation-layout.mjs';
export const defaults=Object.freeze({view:'plan',style:'graphite',paper:'a3',orientation:'landscape',margin:8,scale:0,rotation:0,buildingWeight:.25,contextWeight:.13,hatchSpacing:2,hatching:false,buildings:true,buildingFill:true,roads:true,trails:false,parks:true,water:true,waterSeams:false,trees:true,treeSpacing:2.5,terrain:true,contours:true,roofDetails:true,contourInterval:10,titlePanel:false,titleBlock:false,titleLayout:'block',showCredits:false,titleBackdrop:false,footerDetails:false,outline:false,compass:false,compassPosition:'map',heightFactor:1,surfaceContrast:75,pngDpi:600,pngBackground:'paper',artwork:'color',paperColor:'',buildingColor:'',waterColor:'',parkColor:'',inkColor:'',title:'',subtitle:'',axonAngle:35,crop:'page',cropRadius:0,viewRadius:0,centerX:0,centerY:0});
export function validatedSettings(incoming){
  // Projects created before crop options used the square composition. New
  // studies start from defaults.page, while those saved projects keep their fit.
  const result={...defaults,crop:incoming?.crop??'rectangle'};const enums={view:['plan','axon'],style:Object.keys(drawingThemes),paper:['a3','a4','letter','square','poster48','square48'],orientation:['landscape','portrait'],crop:['page','rectangle','circle'],pngBackground:['paper','white','black','transparent'],artwork:['color','black','white'],titleLayout:['panel','block','strip'],compassPosition:['map','footer']};
  const ranges={margin:[0,40],scale:[0,1000000],rotation:[-180,180],buildingWeight:[.1,.7],contextWeight:[.05,.4],hatchSpacing:[.8,5],heightFactor:[.25,2],surfaceContrast:[0,100],pngDpi:[72,1200],axonAngle:[15,65],cropRadius:[0,5000],viewRadius:[0,1000000],contourInterval:[1,100],treeSpacing:[1,8],centerX:[-10000,10000],centerY:[-10000,10000]};
  for(const key of Object.keys(defaults)){
    const value=incoming?.[key];if(value===undefined)continue;
    if(key.endsWith('Color')){if(value!==''&&!/^#[a-f\d]{6}$/i.test(value))throw new Error(`Invalid ${key}.`);}
    else if(enums[key]){if(!enums[key].includes(value))throw new Error(`Unknown ${key}.`);}
    else if(ranges[key]){if(typeof value!=='number'||!Number.isFinite(value)||value<ranges[key][0]||value>ranges[key][1])throw new Error(`Invalid ${key}.`);}
    else if(typeof value!==typeof defaults[key])throw new Error(`Invalid ${key}.`);
    result[key]=typeof value==='string'?value.slice(0,90):value;
  }
  const visible=result.titlePanel||result.titleBlock;
  result.titleLayout=annotationStyle(result);
  result.titlePanel=visible&&result.titleLayout==='panel';result.titleBlock=visible&&result.titleLayout!=='panel';
  result.footerDetails=false;
  return result;
}
export function projectionMatrix(settings,denominator){
  const f=1000/denominator,t=settings.rotation*Math.PI/180,c=Math.cos(t),s=Math.sin(t);
  if(settings.view!=='axon')return [f*c,f*s,f*s,-f*c];
  const k=f/Math.SQRT2,a=Math.sin(settings.axonAngle*Math.PI/180);
  return [k*(c+s),k*(s-c),-k*a*(c-s),-k*a*(s+c)];
}
export function panFromScreen(dx,dy,drawing,settings){
  const [a,b,c,d]=drawing.navigation?.matrix||projectionMatrix(settings,drawing.stats.scale);
  const determinant=a*d-b*c;
  if(!Number.isFinite(determinant)||Math.abs(determinant)<1e-12)throw new Error('The view cannot be panned at this elevation.');
  return [(d*dx-b*dy)/determinant,(-c*dx+a*dy)/determinant];
}
const cameraKeys=new Set(['centerX','centerY','rotation','axonAngle','scale','cropRadius','viewRadius','pngDpi']);
export function navigationCompatible(settings,renderedSettings){
  return Boolean(renderedSettings)&&Object.keys(defaults).every(key=>cameraKeys.has(key)||settings[key]===renderedSettings[key]);
}
export function pannedCenter(dx,dy,drawing,settings){
  const [east,north]=panFromScreen(dx,dy,drawing,settings);
  const bounded=value=>Math.max(-10000,Math.min(10000,value));
  return {centerX:bounded(settings.centerX-east),centerY:bounded(settings.centerY-north)};
}
export function panPreviewOffset(settings,renderedSettings,drawing){
  const [a,b,c,d]=drawing.navigation?.matrix||projectionMatrix(renderedSettings,drawing.stats.scale);
  const east=renderedSettings.centerX-settings.centerX,north=renderedSettings.centerY-settings.centerY;
  return [a*east+b*north,c*east+d*north];
}
export function wrappedRotation(value){return ((value+180)%360+360)%360-180;}
