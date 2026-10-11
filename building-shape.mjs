import {Earcut} from './lib/Earcut.mjs';

const EPS=1e-7;
const standaloneCache=new WeakMap();
const groundParentCache=new WeakMap();
const open=ring=>ring.length>1&&ring[0][0]===ring.at(-1)[0]&&ring[0][1]===ring.at(-1)[1]?ring.slice(0,-1):ring;
const area=ring=>ring.reduce((n,p,i)=>{const q=ring[(i+1)%ring.length];return n+p[0]*q[1]-q[0]*p[1];},0)/2;
const mix=(a,b,t)=>a.map((n,i)=>n+(b[i]-n)*t);
const planeValue=(plane,p)=>plane[0]*p[0]+plane[1]*p[1]+plane[2];
const normal=(a,b,c)=>{const u=b.map((n,i)=>n-a[i]),v=c.map((n,i)=>n-a[i]);return [u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];};
function polygonNormal(ring){const origin=ring[0],result=[0,0,0];for(let i=1;i<ring.length-1;i++){const n=normal(origin,ring[i],ring[i+1]);for(let j=0;j<3;j++)result[j]+=n[j];}return result;}

/** Every mapped part shares its parent ground datum, including partial coverage. */
export function buildingGroundReference(map,building){
  let parents=groundParentCache.get(map.buildings);if(!parents){parents=new Map();for(const candidate of [...(map.buildings||[]),...(map.buildingParts||[])])if(candidate.sourceId&&!parents.has(candidate.sourceId))parents.set(candidate.sourceId,candidate);groundParentCache.set(map.buildings,parents);}
  let reference=building;const visited=new Set();
  while(reference&&!visited.has(reference)){visited.add(reference);const parent=reference.parentBuilding||parents.get(reference.parentSourceId);if(!parent||parent===reference)break;reference=parent;}
  return reference||building;
}
function orientedRings(rings){return rings.map(open).map((ring,i)=>{const copy=ring.map(p=>[p[0],p[1]]);return (area(copy)>0)===(i===0)?copy:copy.toReversed();});}

// Some source "roofs" describe almost the whole structure: a pyramid, tapered
// tower or sloping lattice strut. Flattening those would invent an enclosing
// building box. Only explicitly dimensioned supported primary forms qualify.
function structuralRoof(building){
  const shape=String(building.roofShape||'flat').toLowerCase(),height=Math.max(.1,building.height||9),minimum=Math.max(0,Math.min(height-.1,building.minHeight||0));
  return ['cone','dome','pyramidal','skillion'].includes(shape)&&Number.isFinite(building.roofHeight)&&building.roofHeight>0&&building.roofHeight>=(height-minimum)*.8;
}

// Radial roofs use the mapped perimeter, never a circular replacement footprint.
// A concave outline or courtyard has no single safe radial center; retain the
// reported flat fallback for those cases instead of covering a real opening.
function radialRoof(building,rings,detail){
  const shape=String(building.roofShape||'flat').toLowerCase();
  if(!detail||!['cone','dome'].includes(shape)||rings.length!==1)return null;
  const ring=rings[0];
  if(ring.length<3||ring.some((p,i)=>{const q=ring[(i+1)%ring.length],r=ring[(i+2)%ring.length];return (q[0]-p[0])*(r[1]-q[1])-(q[1]-p[1])*(r[0]-q[0])<-EPS;}))return null;
  let crossSum=0,cx=0,cy=0,minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  for(let i=0;i<ring.length;i++){const p=ring[i],q=ring[(i+1)%ring.length],cross=p[0]*q[1]-q[0]*p[1];crossSum+=cross;cx+=(p[0]+q[0])*cross;cy+=(p[1]+q[1])*cross;minX=Math.min(minX,p[0]);minY=Math.min(minY,p[1]);maxX=Math.max(maxX,p[0]);maxY=Math.max(maxY,p[1]);}
  if(Math.abs(crossSum)<=EPS)return null;
  const height=Math.max(.1,building.height||9),minimum=Math.max(0,Math.min(height-.1,building.minHeight||0)),explicit=Number.isFinite(building.roofHeight)&&building.roofHeight>0;
  const roofHeight=Math.min(height-minimum-.05,explicit?building.roofHeight:Math.min(12,height*.3,Math.min(maxX-minX,maxY-minY)*.2));
  if(!(roofHeight>.01))return null;
  return {center:[cx/(3*crossSum),cy/(3*crossSum)],eave:height-roofHeight,height,roofHeight,roofMode:shape,unsupported:false,estimated:!explicit};
}

function roofPlanes(building,rings,detail){
  const shape=String(building.roofShape||'flat').toLowerCase(),supported=['flat','gabled','skillion','hipped','pyramidal'].includes(shape),height=Math.max(.1,building.height||9),minHeight=Math.max(0,Math.min(height-.1,building.minHeight||0));
  if(!detail||shape==='flat'||!supported)return {planes:[[0,0,height]],roofMode:'flat',unsupported:detail&&!supported,estimated:false};
  // A mapped roof direction points downhill, clockwise from north. Otherwise
  // infer the ridge from the longest footprint edge, respecting along/across.
  let ridge=[1,0],longest=0;for(const ring of rings)for(let i=0;i<ring.length;i++){const p=ring[i],q=ring[(i+1)%ring.length],length=Math.hypot(q[0]-p[0],q[1]-p[1]);if(length>longest){longest=length;ridge=[(q[0]-p[0])/length,(q[1]-p[1])/length];}}
  if(building.roofOrientation==='across')ridge=[-ridge[1],ridge[0]];
  let slope=[-ridge[1],ridge[0]];
  if(Number.isFinite(building.roofDirection)){const angle=building.roofDirection*Math.PI/180;slope=[Math.sin(angle),Math.cos(angle)];ridge=[slope[1],-slope[0]];}
  const bounds=[Infinity,Infinity,-Infinity,-Infinity];for(const ring of rings)for(const p of ring){const u=p[0]*ridge[0]+p[1]*ridge[1],v=p[0]*slope[0]+p[1]*slope[1];bounds[0]=Math.min(bounds[0],u);bounds[1]=Math.min(bounds[1],v);bounds[2]=Math.max(bounds[2],u);bounds[3]=Math.max(bounds[3],v);}
  const [u0,v0,u1,v1]=bounds,halfU=Math.max(.01,(u1-u0)/2),halfV=Math.max(.01,(v1-v0)/2);
  const explicit=Number.isFinite(building.roofHeight)&&building.roofHeight>0,angleHeight=Number.isFinite(building.roofAngle)&&building.roofAngle>0&&building.roofAngle<89?Math.tan(building.roofAngle*Math.PI/180)*(shape==='skillion'?halfV*2:halfV):0;
  const roofHeight=Math.min(height-minHeight-.05,explicit?building.roofHeight:angleHeight||Math.min(12,height*.3,halfV*.4));
  if(!(roofHeight>.01))return {planes:[[0,0,height]],roofMode:'flat',unsupported:false,estimated:!explicit};
  const eave=height-roofHeight,plane=(axis,k,edge)=>[axis[0]*k,axis[1]*k,eave-k*edge];
  let planes;
  if(shape==='skillion')planes=[plane(slope,-roofHeight/(halfV*2),v1)];
  else {const k=roofHeight/halfV;planes=[plane(slope,k,v0),plane(slope,-k,v1)];if(shape==='hipped'||shape==='pyramidal'){const ku=shape==='pyramidal'?roofHeight/halfU:k;planes.push(plane(ridge,ku,u0),plane(ridge,-ku,u1));}}
  return {planes,roofMode:shape,unsupported:false,estimated:!explicit&&!angleHeight};
}

function clipToMinimum(poly,plane,other){
  const value=p=>planeValue(plane,p)-planeValue(other,p),result=[];
  for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length],va=value(a),vb=value(b),insideA=va<=EPS,insideB=vb<=EPS;if(insideA)result.push(a);if(insideA!==insideB)result.push(mix(a,b,va/(va-vb)));}
  return result.filter((p,i)=>!i||Math.hypot(p[0]-result[i-1][0],p[1]-result[i-1][1])>EPS);
}

/** Closed solids with real courtyard holes; roof facets are clipped triangles. */
export function buildingFaces(building,{base=0,detail=true,heightFactor=1}={}){
  const rings=orientedRings(building.rings||[]),height=Math.max(.1,building.height||9),floor=Math.max(0,Math.min(height-.1,building.minHeight||0)),shapeDetail=detail||structuralRoof(building),radial=radialRoof(building,rings,shapeDetail),roof=radial||roofPlanes(building,rings,shapeDetail),faces=[];
  if(!rings.length)return {faces,roofMode:'flat',unsupported:false,estimated:false};
  const z=value=>base+value*heightFactor,top=p=>z(radial?radial.eave:Math.min(...roof.planes.map(plane=>planeValue(plane,p))));
  if(radial){
    const ring=rings[0],levels=radial.roofMode==='dome'?8:1;
    let lower=ring.map(p=>[...p,z(radial.eave)]);
    for(let level=1;level<=levels;level++){
      const angle=level/levels*Math.PI/2,radius=radial.roofMode==='dome'?Math.cos(angle):0,rise=radial.roofMode==='dome'?Math.sin(angle):1;
      if(level===levels){const apex=[...radial.center,z(radial.height)];for(let i=0;i<ring.length;i++)faces.push({kind:'roof',rings3D:[[lower[i],lower[(i+1)%ring.length],apex]]});}
      else {const upper=ring.map(p=>[...mix(radial.center,p,radius),z(radial.eave+radial.roofHeight*rise)]);for(let i=0;i<ring.length;i++)faces.push({kind:'roof',rings3D:[[lower[i],lower[(i+1)%ring.length],upper[(i+1)%ring.length],upper[i]]]});lower=upper;}
    }
  }
  else if(roof.roofMode==='flat')faces.push({kind:'roof',rings3D:rings.map(ring=>ring.map(p=>[...p,z(height)]))});
  else {
    const flat=[],points=[],holes=[];rings.forEach((ring,i)=>{if(i)holes.push(points.length);for(const p of ring){flat.push(...p);points.push(p);}});
    const ids=Earcut.triangulate(flat,holes,2);
    for(let i=0;i<ids.length;i+=3){let triangle=ids.slice(i,i+3).map(id=>points[id]);if(area(triangle)<0)triangle=triangle.toReversed();for(const plane of roof.planes){let polygon=triangle;for(const other of roof.planes)if(other!==plane)polygon=clipToMinimum(polygon,plane,other);if(polygon.length>=3&&Math.abs(area(polygon))>EPS)faces.push({kind:'roof',rings3D:[polygon.map(p=>[...p,z(planeValue(plane,p))])]});}}
  }
  // Split a wall wherever the active roof plane changes so its top edge has
  // exactly the same ridge/hip vertices as the adjacent roof facets.
  const planes=roof.planes||[];
  for(const ring of rings)for(let i=0;i<ring.length;i++){const a=ring[i],b=ring[(i+1)%ring.length],stops=[0,1];for(let j=0;j<planes.length;j++)for(let k=j+1;k<planes.length;k++){const va=planeValue(planes[j],a)-planeValue(planes[k],a),vb=planeValue(planes[j],b)-planeValue(planes[k],b);if(Math.abs(va-vb)<EPS)continue;const t=va/(va-vb);if(t>EPS&&t<1-EPS)stops.push(t);}stops.sort((x,y)=>x-y);const unique=stops.filter((t,j)=>!j||t-stops[j-1]>EPS);for(let j=1;j<unique.length;j++){const p=mix(a,b,unique[j-1]),q=mix(a,b,unique[j]);faces.push({kind:'wall',rings3D:[[[...p,z(floor)],[...q,z(floor)],[...q,top(q)],[...p,top(p)]]]});}}
  faces.push({kind:'bottom',rings3D:rings.map(ring=>ring.toReversed().map(p=>[...p,z(floor)]))});
  return {faces,roofMode:roof.roofMode,unsupported:roof.unsupported,estimated:roof.estimated};
}

/** Parts without a usable source parent still retain their mapped volumes. */
export function standaloneBuildingParts(map){
  if(standaloneCache.has(map))return standaloneCache.get(map);
  const parents=new Set((map.buildings||[]).map(b=>b.sourceId).filter(Boolean)),groundIds=new Set((map.buildings||[]).map(b=>b.sourceId||b.id));
  const standalone=(map.buildingParts||[]).filter(part=>!parents.has(part.parentSourceId)&&!groundIds.has(part.sourceId||part.id));standaloneCache.set(map,standalone);return standalone;
}

/** Structural parts define the building in every roof mode. Roof facet detail
 * belongs to buildingFaces; selecting flat roofs must not revive an envelope. */
export function detailedBuildings(map){
  if(!map.buildingParts?.length)return map.buildings||[];
  const parts=new Map();for(const part of map.buildingParts){if(!part.parentSourceId)continue;if(!parts.has(part.parentSourceId))parts.set(part.parentSourceId,[]);parts.get(part.parentSourceId).push(part);}
  // Complete coverage usually proves that the parent outline can be replaced.
  // A source can explicitly mark an open structure as parts-only even though
  // its ground footprint is sparse. Keep the parent if its mapped parts are lost.
  const validPart=part=>Number.isFinite(part.height)&&part.height>0&&Number.isFinite(part.minHeight??0)&&(part.minHeight??0)>=0&&(part.minHeight??0)<part.height&&Array.isArray(part.rings)&&part.rings.length>0&&part.rings.every(ring=>Array.isArray(ring)&&ring.length>=3&&ring.every(point=>Array.isArray(point)&&Number.isFinite(point[0])&&Number.isFinite(point[1]))&&Math.abs(area(ring))>EPS);
  const replaced=new Map(),seen=new Set(),result=[];
  for(const parent of map.buildings||[]){
    if(parent.partsOnly!==true&&parent.partsCoverFootprint!==true)continue;
    const children=parent.partsOnly===true?parts.get(parent.sourceId)?.filter(validPart):parts.get(parent.sourceId);
    if(!children?.length)continue;
    parts.set(parent.sourceId,children);replaced.set(parent.sourceId,parent);
  }
  function add(building){const key=building.sourceId||building.id;if(seen.has(key))return;seen.add(key);result.push(building);}
  for(const parent of map.buildings||[]){if(parent.isPart&&replaced.has(parent.parentSourceId))continue;const children=replaced.has(parent.sourceId)?parts.get(parent.sourceId):null;if(children)for(const part of children)add({...part,parentBuilding:parent});else {add(parent);for(const part of parts.get(parent.sourceId)||[])if(validPart(part))add({...part,parentBuilding:parent});}}
  for(const part of standaloneBuildingParts(map))add(part);
  return result;
}

/** Triangulate a planar 3D face with matching subdivisions along cap seams. */
export function triangulateFace(face,edgeVertices=[]){
  const rings=face.rings3D,origin=rings[0]?.[0];if(!origin)return [];
  const n=polygonNormal(rings[0]);if(Math.hypot(...n)<=EPS)return [];
  const axis=n.map(Math.abs).indexOf(Math.max(...n.map(Math.abs))),coordinates=[0,1,2].filter(i=>i!==axis),flat=[],points=[],holes=[];rings.forEach((ring,i)=>{if(i)holes.push(points.length);for(const p of ring){points.push(p);flat.push(p[coordinates[0]],p[coordinates[1]]);}});
  const ids=Earcut.triangulate(flat,holes,2),result=[],candidates=[...points,...edgeVertices];
  for(let i=0;i<ids.length;i+=3){let triangle=ids.slice(i,i+3).map(id=>points[id]);const tn=normal(...triangle);if(tn.reduce((sum,value,j)=>sum+value*n[j],0)<0)triangle=triangle.toReversed();const boundary=[];for(let j=0;j<3;j++){const p=triangle[j],q=triangle[(j+1)%3],d=q.map((v,k)=>v-p[k]),length2=d.reduce((sum,v)=>sum+v*v,0),stops=[{t:0,p}];if(length2<=EPS*EPS)continue;for(const r of candidates){const t=r.reduce((sum,v,k)=>sum+(v-p[k])*d[k],0)/length2;if(t<=EPS||t>=1-EPS)continue;const projected=mix(p,q,t);if(Math.hypot(...r.map((v,k)=>v-projected[k]))<=EPS)stops.push({t,p:r});}stops.sort((a,b)=>a.t-b.t);boundary.push(...stops.filter((s,k)=>!k||s.t-stops[k-1].t>EPS).map(s=>s.p));}
    if(boundary.length===3)result.push(boundary);else if(boundary.length>3){const center=triangle[0].map((_,j)=>triangle.reduce((sum,p)=>sum+p[j],0)/3);for(let j=0;j<boundary.length;j++)if(Math.hypot(...normal(center,boundary[j],boundary[(j+1)%boundary.length]))>EPS)result.push([center,boundary[j],boundary[(j+1)%boundary.length]]);}}
  return result;
}

/** Cancel coplanar internal triangulation seams while retaining roof ridges. */
export function buildingEdges(faces){
  const edges=new Map(),key=p=>p.map(v=>Math.round(v*1e6)).join(',');
  for(const face of faces)if(face.kind!=='bottom')for(const ring of face.rings3D){const n=polygonNormal(ring),length=Math.hypot(...n)||1;for(let i=0;i<ring.length;i++){const a=ring[i],b=ring[(i+1)%ring.length],ka=key(a),kb=key(b),id=ka<kb?`${ka}|${kb}`:`${kb}|${ka}`;let edge=edges.get(id);if(!edge){edge={a,b,faces:[]};edges.set(id,edge);}edge.faces.push({kind:face.kind,n:n.map(v=>v/length)});}}
  return [...edges.values()].filter(edge=>edge.faces.length===1||edge.faces.some((face,i)=>i&&Math.abs(face.n.reduce((sum,v,j)=>sum+v*edge.faces[0].n[j],0))<1-1e-6)).map(edge=>[edge.a,edge.b]);
}
