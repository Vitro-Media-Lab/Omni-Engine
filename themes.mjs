/** Shared print and live palettes for architectural drawings. */
export const drawingThemes={
  ink:{paper:'#f7f5ef',ink:'#303139',soft:'#89919a',building:'#dddcd7',roof:'#f2f1ec',wall:'#d8d7d1',park:'#d9e3d9',water:'#a9c5d0',road:'#faf9f6',hatch:'#9aa89d'},
  graphite:{paper:'#f5f3ee',ink:'#55565c',soft:'#999c9e',building:'#deddd7',roof:'#efeee8',wall:'#cecec8',park:'#dfe4d9',water:'#bbc9d1',road:'#faf9f6',hatch:'#9ba39a'},
  blueprint:{paper:'#183963',ink:'#ffffff',soft:'#94b6df',building:'#d2e2f5',roof:'#f2f6ff',wall:'#bad0ed',park:'#254c79',water:'#507bad',road:'#20416b',hatch:'#a5c1e6',buildingInk:'#eff6ff'},
  figure:{paper:'#f7f5ef',ink:'#25282c',soft:'#949aa0',building:'#25282c',roof:'#25282c',wall:'#45494f',park:'#f7f5ef',water:'#c5d4dc',road:'#f7f5ef',hatch:'#949aa0'},
  'survey-london':{paper:'#fafaf7',ink:'#323638',soft:'#adb2b5',building:'#fafaf7',roof:'#f3f4f1',wall:'#d5d8d7',buildingInk:'#adb2b5',park:'#e5ece5',water:'#b7cfd8',road:'#fafaf7',streetInk:'#323638',hatch:'#a1b1ac',streetSolid:true,survey:true,titleInk:'#24292d',titleSoft:'#778189',titleFont:'Georgia, Times New Roman, serif',panel:'#fafaf7'},
  'survey-rome':{paper:'#141821',ink:'#e5e9ed',soft:'#4e5967',building:'#eceff3',roof:'#fafcff',wall:'#c5cbd4',buildingInk:'#cbd5df',park:'#1a2229',water:'#334852',road:'#181d26',streetInk:'#657184',hatch:'#6e7d89',survey:true,titleInk:'#ffffff',titleSoft:'#a5b0bb',titleFont:'Arial, Helvetica, sans-serif',panel:'#141821'},
  'survey-liberty':{paper:'#fafaf7',ink:'#24292f',soft:'#a9b2b9',building:'#292e35',roof:'#292e35',wall:'#505966',buildingInk:'#68737c',park:'#e4eae4',water:'#b3cbd4',road:'#fafaf7',streetInk:'#89949d',hatch:'#a0b0aa',survey:true,titleInk:'#24292f',titleSoft:'#778189',titleFont:'Georgia, Times New Roman, serif',panel:'#fafaf7'}
};
export const liveThemes=Object.fromEntries(Object.entries(drawingThemes).map(([id,t])=>[id,{paper:t.paper,ink:t.ink,building:t.roof,parks:t.park,water:t.water,roads:t.streetInk||t.ink,edges:t.buildingInk||t.ink,soft:t.soft}]));
export function themeForSettings(settings={}){
  const base=drawingThemes[settings.style]||drawingThemes.ink,theme={...base};
  for(const key of ['paper','building','water','park','ink'])if(/^#[a-f\d]{6}$/i.test(settings[`${key}Color`]||''))theme[key]=settings[`${key}Color`];
  if(settings.buildingColor){theme.roof=theme.building;theme.wall=theme.building;}
  if(settings.inkColor)for(const key of ['soft','buildingInk','streetInk','hatch','titleInk','titleSoft'])theme[key]=theme.ink;
  return theme;
}
export function liveThemeForSettings(settings={}){const t=themeForSettings(settings);return {paper:t.paper,ink:t.ink,building:t.building,parks:t.park,water:t.water,roads:t.streetInk||t.ink,edges:t.buildingInk||t.ink,soft:t.soft};}
/** Theme selection changes the palette, preserving every user control. */
export function themeSettings(settings,style){
  if(!drawingThemes[style])throw new Error('Unknown drawing theme.');
  return {...settings,style};
}
// Complete compositions for the prepared survey examples.
export function surveyPreset(style){
  if(!drawingThemes[style]?.survey)return null;
  return {style,view:'plan',titlePanel:true,titleBlock:false,subtitle:'',outline:false,compass:false,hatching:false,terrain:false,contours:style==='survey-rome',trees:false,buildingWeight:style==='survey-london'?.1:.13,contextWeight:style==='survey-london'?.35:.08,contourInterval:20};
}
