// Rural trails are distinct from paved streets, footways and the access causeway.
export const isTrail=road=>/^(path|track|bridleway)$/.test(road.kind||'');
export const roadVisible=(road,settings)=>isTrail(road)?settings.trails===true:settings.roads!==false;
