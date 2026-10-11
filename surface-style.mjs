import {drawingThemes} from './themes.mjs';

// These accents belong to 3D surfaces; plan masses retain their print palette.
const accents={
  ink:{roof:'#faf9f6',roofShade:'#deded9',wall:'#cecfcb',wallShade:'#8c9296',edge:'#343a40'},
  graphite:{roof:'#f5f4ef',roofShade:'#d4d4cf',wall:'#c6c7c2',wallShade:'#939799',edge:'#4a4e52'},
  blueprint:{roof:'#ffffff',roofShade:'#dce9fa',wall:'#b5cce9',wallShade:'#789cc9',edge:'#ffffff'},
  figure:{roof:'#c9cdd1',roofShade:'#a6adb5',wall:'#7d8792',wallShade:'#424b56',edge:'#e7eaed'},
  'survey-london':{roof:'#fbfcfa',roofShade:'#dce0df',wall:'#c9d0d1',wallShade:'#8e9da5',edge:'#45535c'},
  'survey-rome':{roof:'#ffffff',roofShade:'#dce4ec',wall:'#c1cdd9',wallShade:'#8498ab',edge:'#455d72'},
  'survey-liberty':{roof:'#aeb9c2',roofShade:'#8997a5',wall:'#6a7a8a',wallShade:'#344353',edge:'#e0e8ee'}
};
const cache=new Map();
const rgb=hex=>[1,3,5].map(start=>parseInt(hex.slice(start,start+2),16));
export function mixSurfaceColor(a,b,t){const left=rgb(a),right=rgb(b);return '#'+left.map((n,i)=>Math.round(n+(right[i]-n)*t).toString(16).padStart(2,'0')).join('');}
export function buildingAppearance(style,contrast=75,buildingColor='',inkColor=''){
  const theme=drawingThemes[style]||drawingThemes.ink,custom=/^#[a-f\d]{6}$/i.test(buildingColor),target=custom?{roof:mixSurfaceColor(buildingColor,'#ffffff',.35),roofShade:mixSurfaceColor(buildingColor,'#ffffff',.12),wall:buildingColor,wallShade:mixSurfaceColor(buildingColor,'#18232e',.4),edge:inkColor||theme.ink}:accents[style]||accents.ink,amount=Math.min(100,Math.max(0,Number.isFinite(contrast)?contrast:75))/100,key=`${style}:${amount}:${buildingColor}:${inkColor}`;
  if(cache.has(key))return cache.get(key);
  const baseline={roof:custom?buildingColor:theme.roof,roofShade:custom?buildingColor:theme.roof,wall:custom?buildingColor:theme.wall,wallShade:custom?buildingColor:theme.wall,edge:inkColor||theme.ink};
  const result=Object.freeze(Object.fromEntries(Object.keys(baseline).map(k=>[k,k==='edge'&&inkColor?inkColor:mixSurfaceColor(baseline[k],target[k],amount)])));
  if(cache.size>=160)cache.delete(cache.keys().next().value);cache.set(key,result);return result;
}
/** Light follows the upper-left of the drawing as the map rotates. */
export function surfaceLightDirection(rotation=0){
  const t=rotation*Math.PI/180,c=Math.cos(t),s=Math.sin(t),k=1/Math.SQRT2;
  const direction=[(-.85*(c+s)-(c-s))*k,(-.85*(s-c)-(s+c))*k,1.5],length=Math.hypot(...direction);
  return direction.map(n=>n/length);
}
export function surfaceNormal(ring){
  const n=[0,0,0];for(let i=0;i<ring.length;i++){const a=ring[i],b=ring[(i+1)%ring.length];n[0]+=(a[1]-b[1])*(a[2]+b[2]);n[1]+=(a[2]-b[2])*(a[0]+b[0]);n[2]+=(a[0]-b[0])*(a[1]+b[1]);}
  const length=Math.hypot(...n);return length>1e-12?n.map(v=>v/length):[0,0,1];
}
export function faceSurfaceColor(appearance,normal,light){
  const illumination=Math.min(1,Math.max(0,normal.reduce((sum,n,i)=>sum+n*light[i],0)));
  return normal[2]>.00001?mixSurfaceColor(appearance.roofShade,appearance.roof,.5+.5*illumination):mixSurfaceColor(appearance.wallShade,appearance.wall,illumination);
}
