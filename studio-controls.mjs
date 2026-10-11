import {annotationStyle} from './annotation-layout.mjs';
import {canvasBackgroundColor} from './canvas-background.mjs';
import {themeForSettings} from './themes.mjs';

/** The UI exposes only controls that can affect the current output. */
export function controlAvailability(settings,map){
  const title=Boolean(settings.titlePanel||settings.titleBlock),color=settings.artwork==='color';
  return {
    titleLayout:title||settings.showCredits===true,title,subtitle:title,subtitleFont:title&&Boolean(String(settings.subtitle||'').trim()),
    titleOpacity:title&&annotationStyle(settings)==='panel'&&settings.titleBackdrop===true&&color&&settings.pngBackground!=='transparent',
    titleBackdrop:title&&annotationStyle(settings)==='panel'&&color&&settings.pngBackground!=='transparent',
    compassPosition:settings.compass===true,orientation:!['square','square48'].includes(settings.paper),
    buildingFill:settings.buildings!==false,buildingWeight:settings.buildings!==false,
    roofDetails:settings.buildings!==false,heightFactor:settings.buildings!==false,
    surfaceContrast:settings.buildings!==false&&settings.buildingFill!==false&&color,
    paperColor:settings.pngBackground==='paper',buildingColor:color&&settings.buildings!==false&&settings.buildingFill!==false,
    parkColor:color&&settings.parks!==false,waterColor:color&&settings.water!==false,inkColor:color,
    hatchSpacing:settings.hatching===true,treeSpacing:settings.trees!==false,waterSeams:settings.water!==false,
    terrain:Boolean(map?.terrain),contours:Boolean(map?.terrain),contourInterval:Boolean(map?.terrain)&&settings.contours!==false
  };
}

export function inkVisibilityWarning(settings){
  if(settings.pngBackground==='transparent'||!['black','white'].includes(settings.artwork))return '';
  const background=canvasBackgroundColor(settings.pngBackground,themeForSettings(settings).paper);
  const luminance=parseInt(background.slice(1,3),16)*.2126+parseInt(background.slice(3,5),16)*.7152+parseInt(background.slice(5,7),16)*.0722;
  if(settings.artwork==='white'&&luminance>225)return 'White ink is hard to see on this light canvas.';
  if(settings.artwork==='black'&&luminance<35)return 'Black ink is hard to see on this dark canvas.';
  return '';
}
