// Preserve explicit import notices. Geometry, a theme or a licence name alone
// does not establish who supplied the data. Never shorten a copyright notice.
const LIMITS=Object.freeze({records:16,notice:512,total:1024,url:512,source:240});
const clean=value=>typeof value==='string'?value.replace(/[\u0000-\u001f\u007f]/g,' ').trim():'';
const unique=values=>[...new Set(values.filter(Boolean))];
function text(value,label='source notice',limit=LIMITS.notice){
  const result=clean(value);if(result.length>limit)throw new Error(`The ${label} is too long (maximum ${limit} characters). Keep the original notices with the source and supply a concise, complete credit.`);return result;
}
export function safeAttributionURL(value,{strict=false}={}){
  const candidate=clean(value);if(!candidate)return '';
  let result='';try{const parsed=new URL(candidate);if(['http:','https:'].includes(parsed.protocol)&&!parsed.username&&!parsed.password&&candidate.length<=LIMITS.url)result=candidate;}catch{}
  if(!result&&strict)throw new Error('Source and licence links must be complete HTTP or HTTPS addresses without embedded credentials (maximum 512 characters).');return result;
}
const provider=value=>text(typeof value==='string'?value:value?.provider??value?.name??value?.text,'provider',LIMITS.source);
function declarations(container,depth=0,inherited={}){
  if(depth>3)throw new Error('Source notices must use a flat list of text or notice records.');
  if(!container||typeof container!=='object')return [];
  const source=provider(container.source??container.provider??inherited.source),licence=container.license??container.licence??inherited.license;
  const license=text(typeof licence==='string'?licence:licence?.name??licence?.title??licence?.id??licence?.text,'licence');
  const licenseUrl=safeAttributionURL(container.licenseUrl??container.licenseURL??container.licenceUrl??licence?.url??inherited.licenseUrl,{strict:true});
  const url=safeAttributionURL(container.sourceUrl??container.sourceURL??container.url??container.source?.url??inherited.url,{strict:true});
  const out=[];
  const add=(value,nesting=depth)=>{
    if(nesting>3)throw new Error('Source notices must use a flat list of text or notice records.');
    if(Array.isArray(value)){if(value.length>LIMITS.records*2)throw new Error('Too many source notices. Consolidate the required provider credits before importing.');for(const item of value)add(item,nesting+1);return;}
    if(value&&typeof value==='object'){
      const nested=declarations(value,nesting+1,{source,license,licenseUrl,url});if(nested.length){out.push(...nested);return;}
      const explicit=text(value.text??value.credit??value.copyright,'source notice');if(explicit)out.push({text:explicit});return;
    }
    const credit=text(value,'source notice');if(credit)out.push({text:credit,...(source?{provider:source}:{}),...(license?{license}:{}),...(url?{url}:{}),...(licenseUrl?{licenseUrl}:{})});
  };
  for(const value of [container.attribution,container.text,container.credit,container.credits,container.copyright])if(value!==undefined)add(value);
  if(!out.length&&(source||license||licenseUrl||url)){
    const identified=/openstreetmap|\bosm\b|overture/i.test(source),missing=!license&&!licenseUrl&&!identified?' · provider licence not recorded':'';
    out.push({text:(source?`Data: ${source}`:'User-supplied map data')+missing,...(source?{provider:source}:{}),...(license?{license}:{}),...(url?{url}:{}),...(licenseUrl?{licenseUrl}:{})});
  }
  return out;
}
export function normalizeAttributionRecords(records=[]){
  const out=[],seen=new Set();let total=0;
  for(const value of records){
    const record=typeof value==='string'?{text:text(value)}:{text:text(value?.text),...(value?.provider?{provider:provider(value.provider)}:{}),...(value?.license?{license:text(value.license,'licence')}:{}),...(value?.url?{url:safeAttributionURL(value.url,{strict:true})}:{}),...(value?.licenseUrl||value?.licenseURL?{licenseUrl:safeAttributionURL(value.licenseUrl??value.licenseURL,{strict:true})}:{})};
    if(!record.text)continue;
    const key=JSON.stringify(record);if(seen.has(key))continue;seen.add(key);
    total+=noticeText(record).length;if(out.length>=LIMITS.records||total>LIMITS.total)throw new Error('Source credits are too extensive for a readable drawing (maximum 16 notices and 1,024 visible characters). Consolidate complete provider notices before importing.');out.push(record);
  }
  return out;
}
export function noticeText(record){return unique([record.text,record.provider&&!record.text.includes(record.provider)?record.provider:'',record.license,record.licenseUrl]).join(' · ');}
export function importedAttribution(collection,metadata={},features=[]){
  const containers=[collection,collection?.metadata,collection?.properties,metadata],sources=unique(containers.map(item=>provider(item?.source??item?.provider))),records=[],seen=new Set();
  const retain=items=>{for(const item of items){const key=JSON.stringify(item);if(seen.has(key))continue;seen.add(key);records.push(item);if(records.length>LIMITS.records)throw new Error('Too many distinct source notices. Consolidate complete provider credits before importing.');}};
  for(const container of containers)retain(declarations(container));
  // Generic OSM source=survey tags are descriptive, not provider identities.
  // Feature notices are included only when an explicit credit or licence exists.
  for(const feature of features){const item=feature?.properties;if(item&&['attribution','credit','credits','copyright','license','licence','licenseUrl','licenseURL','licenceUrl'].some(key=>item[key]!==undefined))retain(declarations(item));}
  return {source:sources.join('; ').length<=LIMITS.source?sources.join('; ')||'Imported GeoJSON':sources[0],attribution:normalizeAttributionRecords(records)};
}
/** Re-check saved project notices too: their metadata is an import boundary. */
export function checkedMapAttribution(map){
  if(!['attribution','credit','credits','copyright','license','licence','licenseUrl','licenseURL','licenceUrl'].some(key=>map?.[key]!==undefined))return map;
  const records=normalizeAttributionRecords(declarations(map));return records.length?{...map,attribution:records}:map;
}
export function mergedMapAttribution(...maps){
  const records=maps.flatMap(map=>{
    const hasNotices=['attribution','credit','credits','copyright','license','licence','licenseUrl','licenseURL','licenceUrl'].some(key=>map?.[key]!==undefined),declared=hasNotices?declarations(map):[];if(declared.length)return declared;
    if(/openstreetmap|\bosm\b|overture/i.test(clean(map?.source)))return [{text:`Data: ${clean(map.source)}`,provider:clean(map.source)}];
    return [{text:`Data: ${clean(map?.source)||'User-supplied map data'} · provider licence not recorded`}];
  });return normalizeAttributionRecords(records);
}
