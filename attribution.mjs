// Public artwork notices. These describe the data, not a licence for Omni's code.
import {noticeText,safeAttributionURL} from './attribution-import.mjs';
export const attributionURLs=Object.freeze({osm:'https://www.openstreetmap.org/copyright',odbl:'https://opendatacommons.org/licenses/odbl/1-0/',overture:'https://docs.overturemaps.org/attribution/',terrain:'https://github.com/tilezen/joerd/blob/master/docs/attribution.md',terrainSources:'https://github.com/tilezen/joerd/blob/master/docs/data-sources.md'});
const escapeXml=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[char]));
const clean=value=>String(value??'').replace(/[\u0000-\u001f\u007f]/g,' ').trim();
const unique=values=>[...new Set(values.filter(Boolean))];
const inBox=(lat,lon,west,south,east,north)=>Number.isFinite(lat)&&Number.isFinite(lon)&&lat>=south&&lat<=north&&lon>=west&&lon<=east;

function declaredCredits(value){
  if(!value)return [];
  if(typeof value==='string')return [clean(value)];
  if(Array.isArray(value))return value.flatMap(declaredCredits);
  if(typeof value==='object')return value.text?[noticeText(value)]:declaredCredits(value.credit??value.credits??value.attribution);
  return [];
}

/** Credits depend on actual declared sources, never a selected visual theme. */
export function getAttribution(map={}, {terrainUsed=false}={}){
  const declared=unique([...declaredCredits(map.attribution),...declaredCredits(map.provenance?.attribution)]),source=clean([map.source,map.provenance?.source,map.provenance?.preservedInterior?.source,...declared].filter(Boolean).join(' '));
  const osm=/openstreetmap|\bosm\b/i.test(source),overture=/overture/i.test(source),lines=[],links=[],warnings=[];
  if(osm){lines.push('© OpenStreetMap contributors · ODbL 1.0 · openstreetmap.org/copyright');links.push(attributionURLs.osm,attributionURLs.odbl);}
  if(overture){lines.push('Overture Maps Foundation · ODbL 1.0 · docs.overturemaps.org/attribution/');links.push(attributionURLs.overture,attributionURLs.odbl);if(!map.provenance?.overtureSources&&!map.provenance?.sourceLicenses)warnings.push('The inherited Overture data lacks its original per-provider licence manifest. Preserve the release and upstream notices before public redistribution.');}
  for(const credit of declared)if(!lines.includes(credit))lines.push(credit);
  if(declared.some(credit=>credit.includes('provider licence not recorded')))warnings.push('Some imported geometry has no recorded provider licence. Retain its source rights before sharing it.');
  if(!osm&&!overture&&!declared.length){lines.push(`Data: ${clean(map.source)||'User-supplied map data'} · provider licence not recorded`);warnings.push('This imported map has no recorded source attribution or licence. Retain the provider notices and source rights when sharing it.');}
  const terrain=terrainUsed&&map.terrain;
  if(terrain){
    const terrainDeclared=declaredCredits(terrain.attribution),terrainSource=clean(terrain.source),lat=Number(map.lat??terrain.origin?.lat),lon=Number(map.lon??terrain.origin?.lon);
    if(terrainDeclared.length){lines.push(...terrainDeclared);const licenseLink=safeAttributionURL(terrain.licenseURL||terrain.licenseUrl);if(licenseLink)links.push(licenseLink);}
    else if(/AWS Terrain|Terrarium|Tilezen|Mapzen/i.test(terrainSource)){
      lines.push('Terrain: Tilezen / AWS Terrain Tiles · U.S. Geological Survey / NOAA');
      // The cached tiles combine global and regional products. Regional credits
      // are conservative candidates, not invented per-pixel provenance.
      if(inBox(lat,lon,-142,41,-52,84)){lines.push('Contains information licensed under the Open Government Licence - Canada.');links.push('https://open.canada.ca/en/open-government-licence-canada');}
      if(inBox(lat,lon,-12,34,45,72))lines.push('Copernicus / European Union: EU-DEM terrain data and information.');
      if(inBox(lat,lon,-8.7,49.8,2,61)){lines.push('UK terrain © Environment Agency, 2015. Copyright and database rights reserved.');links.push('https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/');}
      if(inBox(lat,lon,112,-45,155,-10)){lines.push('Terrain © Commonwealth of Australia (Geoscience Australia), 2017.','Modified terrain · CC BY 4.0 · creativecommons.org/licenses/by/4.0/');links.push('https://creativecommons.org/licenses/by/4.0/');}
      if(inBox(lat,lon,165,-48,180,-33)){lines.push('Terrain © Crown / Land Information New Zealand and New Zealand Government, 2011.','Modified terrain · CC BY 3.0 NZ · creativecommons.org/licenses/by/3.0/nz/');links.push('https://creativecommons.org/licenses/by/3.0/nz/');}
      if(inBox(lat,lon,4,58,32,72)){lines.push('Norway terrain © Kartverket.','Modified terrain · CC BY 4.0 · creativecommons.org/licenses/by/4.0/');links.push('https://creativecommons.org/licenses/by/4.0/');}
      if(inBox(lat,lon,9,46,18,49)){lines.push('Austria terrain © offene Daten Österreichs / Digitales Geländemodell.','Modified terrain · CC BY 3.0 AT · creativecommons.org/licenses/by/3.0/at/');links.push('https://creativecommons.org/licenses/by/3.0/at/');}
      if(inBox(lat,lon,-119,14,-86,33))lines.push('Terrain: INEGI, Continental relief, 2016.');
      if(lat>60)lines.push('ArcticDEM: DigitalGlobe imagery; NSF awards 1043681, 1559691 and 1542736.');
      links.push(attributionURLs.terrain,attributionURLs.terrainSources);
      warnings.push('The cached Terrain Tiles record does not identify the contributing datasets for each tile. These notices include regional candidates; exact provider licences must be checked against the original source manifest.');
    }else{
      lines.push(`Terrain: ${terrainSource||'source not provided'} · provider licence not recorded`);
      warnings.push('Terrain provider attribution and licence were not supplied with this elevation data.');
    }
  }
  for(const item of [...(Array.isArray(map.attribution)?map.attribution:[]),...(Array.isArray(map.terrain?.attribution)?map.terrain.attribution:[])])if(item&&typeof item==='object')for(const url of [item.url,item.licenseUrl,item.licenseURL]){const safe=safeAttributionURL(url);if(safe)links.push(safe);}
  return {lines:unique(lines),links:unique(links),warnings:unique(warnings),osm,overture,terrainUsed:Boolean(terrain)};
}

export function attributionText(map={},options={}){
  const result=getAttribution(map,options),title=clean(map.title)||'Map study';
  return ['Omni Engine V3 - data attribution',title,'',...result.lines,'','Source and licence references:',...result.links,'','Changes: geographic clipping, geometry simplification, architectural styling and optional height/terrain scaling.','The data licences do not license the Omni application or automatically license the artwork design.',...(result.warnings.length?['','Source provenance notes:',...result.warnings]:[]),'','For merchandise, retain these notices at the point of sale, on packaging and, where practical, on the item or its label.','A publicly used derivative ODbL database requires its notices and an offer of the derivative data or reproducible alteration file; an artwork credit alone does not fulfil that separate obligation.',''].join('\n');
}

// A 4 × 6 single-stroke alphabet. Lowercase is kept lowercase so printed URL
// paths remain accurate rather than turning /copyright into /COPYRIGHT.
const upper={A:['0,6 2,0 4,6','1,3 3,3'],B:['0,6 0,0 3,0 4,1 4,2 3,3 0,3','3,3 4,4 4,5 3,6 0,6'],C:['4,0 1,0 0,1 0,5 1,6 4,6'],D:['0,6 0,0 2,0 4,2 4,4 2,6 0,6'],E:['4,0 0,0 0,6 4,6','0,3 3,3'],F:['0,6 0,0 4,0','0,3 3,3'],G:['4,1 3,0 1,0 0,1 0,5 1,6 4,6 4,3 2,3'],H:['0,0 0,6','4,0 4,6','0,3 4,3'],I:['0,0 4,0','2,0 2,6','0,6 4,6'],J:['0,0 4,0 4,5 3,6 1,6 0,5'],K:['0,0 0,6','4,0 0,3 4,6'],L:['0,0 0,6 4,6'],M:['0,6 0,0 2,3 4,0 4,6'],N:['0,6 0,0 4,6 4,0'],O:['1,0 3,0 4,1 4,5 3,6 1,6 0,5 0,1 1,0'],P:['0,6 0,0 3,0 4,1 4,2 3,3 0,3'],Q:['1,0 3,0 4,1 4,5 3,6 1,6 0,5 0,1 1,0','2,4 4,6'],R:['0,6 0,0 3,0 4,1 4,2 3,3 0,3','2,3 4,6'],S:['4,0 1,0 0,1 0,2 1,3 3,3 4,4 4,5 3,6 0,6'],T:['0,0 4,0','2,0 2,6'],U:['0,0 0,5 1,6 3,6 4,5 4,0'],V:['0,0 2,6 4,0'],W:['0,0 1,6 2,3 3,6 4,0'],X:['0,0 4,6','4,0 0,6'],Y:['0,0 2,3 4,0','2,3 2,6'],Z:['0,0 4,0 0,6 4,6'],0:['1,0 3,0 4,1 4,5 3,6 1,6 0,5 0,1 1,0'],1:['1,1 2,0 2,6','0,6 4,6'],2:['0,1 1,0 3,0 4,1 4,2 0,6 4,6'],3:['0,0 3,0 4,1 4,2 3,3 1,3','3,3 4,4 4,5 3,6 0,6'],4:['3,6 3,0 0,4 4,4'],5:['4,0 0,0 0,3 3,3 4,4 4,5 3,6 0,6'],6:['4,0 1,0 0,1 0,5 1,6 3,6 4,5 4,4 3,3 0,3'],7:['0,0 4,0 1,6'],8:['1,0 3,0 4,1 4,2 3,3 1,3 0,2 0,1 1,0','1,3 0,4 0,5 1,6 3,6 4,5 4,4 3,3'],9:['4,3 1,3 0,2 0,1 1,0 3,0 4,1 4,5 3,6 0,6']};
const lower={a:['0,3 1,2 3,2 4,3 4,6','4,4 1,4 0,5 1,6 4,6'],b:['0,0 0,6','0,3 1,2 3,2 4,3 4,5 3,6 0,6'],c:['4,2 1,2 0,3 0,5 1,6 4,6'],d:['4,0 4,6','4,2 1,2 0,3 0,5 1,6 4,6'],e:['0,4 4,4 4,3 3,2 1,2 0,3 0,5 1,6 4,6'],f:['1,6 1,1 2,0 4,0','0,2 3,2'],g:['4,2 4,7 3,8 0,8','4,2 1,2 0,3 0,5 1,6 4,6'],h:['0,0 0,6','0,3 1,2 3,2 4,3 4,6'],i:['2,2 2,6','2,0 2,.4'],j:['3,2 3,7 2,8 0,8','3,0 3,.4'],k:['0,0 0,6','4,2 0,4 4,6'],l:['1,0 2,0 2,5 3,6'],m:['0,6 0,2 2,2 2,6','2,2 4,2 4,6'],n:['0,6 0,2 3,2 4,3 4,6'],o:['1,2 3,2 4,3 4,5 3,6 1,6 0,5 0,3 1,2'],p:['0,8 0,2 3,2 4,3 4,5 3,6 0,6'],q:['4,8 4,2 1,2 0,3 0,5 1,6 4,6'],r:['0,6 0,2','0,3 1,2 4,2'],s:['4,2 1,2 0,3 1,4 3,4 4,5 3,6 0,6'],t:['2,0 2,5 3,6 4,6','0,2 4,2'],u:['0,2 0,5 1,6 4,6 4,2'],v:['0,2 2,6 4,2'],w:['0,2 1,6 2,4 3,6 4,2'],x:['0,2 4,6','4,2 0,6'],y:['0,2 2,6 4,2','2,6 1,8 0,8'],z:['0,2 4,2 0,6 4,6']};
const punctuation={'-':['0,3 4,3'],'.':['2,5.6 2,6'],':':['2,1.6 2,2','2,4.6 2,5'],'/':['0,6 4,0'],'|':['2,0 2,6'],'+':['0,3 4,3','2,1 2,5'],'(':['3,0 1,2 1,4 3,6'],')':['1,0 3,2 3,4 1,6'],',':['2,5 1,7'],"'":['2,0 2,1.5'],'&':['4,6 0,2 0,1 1,0 2,0 3,1 3,2 0,5 1,6 3,6 4,4'],'©':['1,0 3,0 4,1 4,5 3,6 1,6 0,5 0,1 1,0','3,2 2,1.5 1,2 1,4 2,4.5 3,4'],'·':['2,2.8 2,3.2'],'?':['0,1 1,0 3,0 4,1 4,2 2,3 2,4','2,5.6 2,6']};
const num=value=>Number(value.toFixed(3));
// Preserve punctuation in provider licence addresses on physical pen plots.
Object.assign(punctuation,{'_':['0,6 4,6'],'=':['0,2 4,2','0,4 4,4'],'%':['0,6 4,0','0,0 1,0 1,1 0,1 0,0','3,5 4,5 4,6 3,6 3,5'],'#':['1,0 1,6','3,0 3,6','0,2 4,2','0,4 4,4'],'~':['0,3 1,2 3,4 4,3'],'@':['3,5 1,5 1,2 3,2 3,5 4,5 4,1 3,0 1,0 0,1 0,5 1,6 4,6'],'!':['2,0 2,4','2,5.6 2,6'],';':['2,1.6 2,2','2,5 1,7'],'[':['3,0 1,0 1,6 3,6'],']':['1,0 3,0 3,6 1,6']});
const ascii=value=>String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[–—]/g,'-');

export function strokeAttributionText(value,x,y,height=2.2){
  const unit=height/6,paths=[];let cursor=x;
  for(const char of ascii(value)){
    const glyph=upper[char]??lower[char]??punctuation[char]??(char===' '?[]:punctuation['?']);
    for(const stroke of glyph){const points=stroke.split(' ').map(pair=>pair.split(',').map(Number));paths.push(points.map((point,i)=>`${i?'L':'M'}${num(cursor+point[0]*unit)},${num(y-height+point[1]*unit)}`).join(''));}
    cursor+=unit*5;
  }
  return paths.join('');
}

export function attributionLayout(map={}, {width=190,fontSize=2.2,padding=2,terrainUsed=false}={}){
  const attribution=getAttribution(map,{terrainUsed}),size=Math.max(2.1,Number(fontSize)||2.2),capacity=Math.max(10,Math.floor((Math.max(20,width)-padding*2)/(size*5/6))),lines=[];
  for(const value of attribution.lines){let line='';for(const word of value.split(/\s+/)){if(line&&line.length+1+word.length>capacity){lines.push(line);line='';}if(word.length>capacity){if(line){lines.push(line);line='';}for(let i=0;i<word.length;i+=capacity)lines.push(word.slice(i,i+capacity));}else line+=(line?' ':'')+word;}if(line)lines.push(line);}
  const lineHeight=size*1.6,height=padding*2+lines.length*lineHeight;
  return {attribution,lines,fontSize:size,padding,lineHeight,height,width};
}

/** x/y mark the band's upper-left corner, in SVG millimetres. */
export function attributionMarkup(map={}, {x=0,y=0,width=190,fontSize=2.2,padding=2,ink='#252b25',background=null,plotter=false,plotterInk='#000000',terrainUsed=false,align='start'}={}){
  const layout=attributionLayout(map,{width,fontSize,padding,terrainUsed}),parts=[];
  if(background&&!plotter)parts.push(`<rect x="${num(x)}" y="${num(y)}" width="${num(width)}" height="${num(layout.height)}" fill="${escapeXml(background)}"/>`);
  for(let i=0;i<layout.lines.length;i++){const value=layout.lines[i],baseline=y+padding+layout.fontSize+i*layout.lineHeight;
    if(plotter)parts.push(`<path d="${strokeAttributionText(value,align==='center'?x+width/2-value.length*layout.fontSize*5/12:x+padding,baseline,layout.fontSize)}" fill="none" stroke="${escapeXml(plotterInk)}" stroke-width="0.12" stroke-linecap="round" stroke-linejoin="round"/>`);
    else parts.push(`<text x="${num(align==='center'?x+width/2:x+padding)}" y="${num(baseline)}" ${align==='center'?'text-anchor="middle" ':''}fill="${escapeXml(ink)}" font-family="Arial, Helvetica, sans-serif" font-size="${num(layout.fontSize)}">${escapeXml(value)}</text>`);
  }
  return `<g id="data-attribution" aria-label="${escapeXml(layout.attribution.lines.join(' | '))}">${parts.join('')}</g><metadata id="data-source-notices">${escapeXml(attributionText(map,{terrainUsed}))}</metadata>`;
}

/** Binary STL provides only 80 bytes: pair this ASCII pointer with the TXT. */
export function stlAttributionHeader(map={},options={}){
  const attribution=getAttribution(map,options),source=attribution.osm?'OpenStreetMap ODbL':attribution.overture?'Overture ODbL':'source data';
  return `Omni V3 | mm | ${source} | SOURCE-ATTRIBUTION.txt`.slice(0,80);
}
