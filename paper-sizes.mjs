/** Physical drawing pages in millimetres, shared by fitting and exports. */
export const paperSizes=Object.freeze({a4:[297,210],a3:[420,297],letter:[279.4,215.9],square:[300,300],poster48:[1219.2,914.4],square48:[1219.2,1219.2]});
export function physicalSheet(settings){
  let [width,height]=paperSizes[settings.paper]||paperSizes.a3;
  if(settings.orientation==='portrait'&&width>height)[width,height]=[height,width];
  return {width,height};
}
