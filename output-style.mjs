/** Practical output starting points; retain the selected map, view and palette. */
import {physicalSheet} from './paper-sizes.mjs';
import {pngDimensions} from './raster-export.mjs';
export const outputPresets=Object.freeze({
  paper:Object.freeze({pngDpi:600,pngBackground:'paper',artwork:'color',buildingFill:true,crop:'page',scale:0,margin:8}),
  largeprint:Object.freeze({paper:'square48',pngDpi:300,pngBackground:'paper',artwork:'color',buildingFill:true,crop:'page',scale:0,margin:8}),
  plotter:Object.freeze({pngDpi:600,pngBackground:'paper',artwork:'black',buildingFill:false,crop:'page',scale:0,margin:8,hatching:true}),
  apparel:Object.freeze({pngDpi:1200,pngBackground:'transparent',artwork:'black',buildingFill:false,crop:'page',scale:0,margin:0,outline:false,compass:false,titleBlock:false,titlePanel:false,showCredits:false,hatching:false,trees:false})
});

// Choose a valid, visible resolution when switching an output starting point.
// Export itself always uses the chosen DPI and never silently resizes the art.
export function outputPresetSettings(settings,key){
  const preset=outputPresets[key];if(!preset)return null;
  const next={...settings,...preset},sheet=physicalSheet(next);
  next.pngDpi=[1200,600,300].filter(dpi=>dpi<=preset.pngDpi).find(dpi=>{try{pngDimensions(sheet,dpi);return true;}catch{return false;}})??300;
  return next;
}

/** Keep a page-size change exportable while retaining any valid chosen DPI. */
export function supportedPngDpi(settings){
  const sheet=physicalSheet(settings),requested=settings.pngDpi??600;
  for(const dpi of [...new Set([requested,1200,600,300,150,72])].filter(dpi=>dpi<=requested).sort((a,b)=>b-a)){
    try{pngDimensions(sheet,dpi);return dpi;}catch{}
  }
  return 72;
}
