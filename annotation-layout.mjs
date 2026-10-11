import {attributionLayout} from './attribution.mjs';

/** Legacy switches resolve to one annotation container, never stacked bars. */
export function annotationStyle(settings={}) {
  if(settings.titleLayout==='strip')return 'strip';
  if(settings.footerDetails===true)return 'block';
  if(settings.titlePanel===true&&(!settings.titleBlock||settings.titleLayout==='panel'))return 'panel';
  if(settings.titleBlock===true)return 'block';
  return settings.titleLayout==='panel'?'panel':'block';
}

export function annotationLayout(settings={}, {map={},width=420,height=297,margin=8,terrainUsed=false}={}) {
  const style=annotationStyle(settings),title=settings.titlePanel===true||settings.titleBlock===true;
  const credits=settings.showCredits===true,active=title||credits;
  const subtitle=title&&String(settings.subtitle||'').trim()&&settings.subtitle!=='URBAN MORPHOLOGY STUDY'?String(settings.subtitle).trim():'';
  const footerCompass=settings.compass===true&&settings.compassPosition==='footer',bottom=height-margin;
  const available=width-margin*2,reserve=footerCompass?22:0;
  const measure=space=>credits?attributionLayout(map,{width:space,terrainUsed}):{width:space,height:0,lines:[]};
  let footerHeight=footerCompass?18:0,credit={x:margin,y:bottom,...measure(available-reserve)},header;
  if(active&&style==='panel'){
    const side=Math.min(available,height-margin*2-footerHeight-(footerHeight?5:0)),panelWidth=side*.72;
    const x=(width-panelWidth)/2,y=margin+side*.09,titleSpace=title?side*(subtitle ? .13 : .105):0;
    const measured=measure(panelWidth-8);
    credit={x:x+4,y:y+titleSpace+2,...measured};
    header={x,y,width:panelWidth,height:titleSpace+measured.height+4,side,titleY:y+side*.065,subtitleY:y+side*.103};
  }else if(active){
    const creditWidth=(style==='block'&&title&&credits?Math.min(145,available*.42):available)-reserve;
    const measured=measure(creditWidth),caption=style==='strip'&&title?7:0;
    footerHeight=Math.max(footerHeight,measured.height+caption+(style==='block'?4:0),title?(style==='block'?24:7):0);
    credit={x:style==='block'&&title&&credits?width-margin-creditWidth-reserve:margin,y:bottom-footerHeight+caption+(style==='block'?2:0),...measured};
  }
  return {style,title,credits,active,subtitle,credit,header,footerTop:bottom-footerHeight,footerBottom:bottom,height:footerHeight,gap:footerHeight&&style!=='strip'?5:0,reserve};
}
