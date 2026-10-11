import {Earcut} from './lib/Earcut.mjs';
import {cropMap} from './crop.mjs';
import {buildingFaces,triangulateFace,detailedBuildings,buildingGroundReference} from './building-shape.mjs';
import {buildingTerrainBase} from './terrain.mjs';
import {terrainSolid} from './terrain-solid.mjs';
import {getAttribution,attributionText,stlAttributionHeader} from './attribution.mjs';

export function download(content, filename, type) {
  const blob = content instanceof Blob ? content : new Blob([content], {type});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href=url; link.download=filename; document.body.append(link);link.click();link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}

export async function rasterizeSVG(svg, sheet, dpi=300) {
  const width = Math.round(sheet.width/25.4*dpi), height = Math.round(sheet.height/25.4*dpi);
  const url = URL.createObjectURL(new Blob([svg], {type:'image/svg+xml'}));
  try {
    const image = new Image(); image.src=url; await image.decode();
    const canvas = document.createElement('canvas'); canvas.width=width;canvas.height=height;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Image export is unavailable in this browser.');
    context.drawImage(image,0,0,width,height);
    return await new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('Image could not be saved.')),'image/png'));
  } finally {URL.revokeObjectURL(url);}
}

function openRing(ring) {
  const result = ring.map(p=>[p[0],p[1]]);
  if (result.length>1 && result[0][0]===result.at(-1)[0] && result[0][1]===result.at(-1)[1]) result.pop();
  return result.filter((p,i)=>!i||p[0]!==result[i-1][0]||p[1]!==result[i-1][1]);
}
function area(ring) {return ring.reduce((a,p,i)=>{const q=ring[(i+1)%ring.length];return a+p[0]*q[1]-q[0]*p[1];},0)/2;}
function normal(a,b,c) {
  const u=b.map((v,i)=>v-a[i]),v=c.map((v,i)=>v-a[i]);
  const n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];
  const length=Math.hypot(...n);return length?n.map(v=>v/length):[0,0,0];
}

// STL has no unit field. Coordinates below are explicitly model millimetres.
// Each building is a closed shell. The base/building intersections are left
// for the slicer's union operation; this is not a constructive solid union.
export function buildSTL(map,{width=180,base=3,minHeight=.8,buildings=true,crop='rectangle',cropRadius=0,viewRadius=0,centerX,centerY,terrain=true,roofDetails=true,heightFactor=1}={}) {
  if(!Number.isFinite(width)||width<50||width>400||!Number.isFinite(base)||base<1||base>10||!Number.isFinite(minHeight)||minHeight<.5||minHeight>5) throw new Error('Use a model width of 50–400 mm, base of 1–10 mm, and minimum height of 0.5–5 mm.');
  const sourceMap=map;
  // Physical models only use building solids and the base boundary.
  map=cropMap({...map,roads:[],parks:[],water:[],trees:[]},{crop,cropRadius,viewRadius,centerX,centerY});
  const [minX,minY,maxX,maxY]=map.extent;
  const factor=width/(maxX-minX),depth=(maxY-minY)*factor;
  const triangles=[],shellRanges=[];
  const vertex=(p,z)=>[(p[0]-minX)*factor,(p[1]-minY)*factor,z];
  const push=(a,b,c)=>{if(Math.hypot(...normal(a,b,c))>0) triangles.push([a,b,c]);};
  function extrude(source,z0,z1) {
    const rings=source.map(openRing).filter(r=>r.length>=3 && Math.abs(area(r))>.001);
    if(!rings.length)return false;
    rings.forEach((ring,i)=>{if((area(ring)>0)!==(i===0))ring.reverse();});
    const flat=[],points=[],holes=[];
    rings.forEach((ring,i)=>{if(i)holes.push(points.length);for(const p of ring){flat.push(...p);points.push(p);}});
    const faces=Earcut.triangulate(flat,holes,2);
    if(!faces.length)return false;
    function capTriangle(a,b,c){
      push(vertex(a,z1),vertex(b,z1),vertex(c,z1));
      push(vertex(c,z0),vertex(b,z0),vertex(a,z0));
    }
    function edgePoints(p,q){
      const dx=q[0]-p[0],dy=q[1]-p[1],length2=dx*dx+dy*dy,stops=[{t:0,p}];
      for(const r of points){const t=((r[0]-p[0])*dx+(r[1]-p[1])*dy)/length2;if(t<=1e-8||t>=1-1e-8)continue;if(Math.abs(dx*(r[1]-p[1])-dy*(r[0]-p[0]))<=1e-7*Math.sqrt(length2))stops.push({t,p:r});}
      stops.sort((a,b)=>a.t-b.t);return stops.filter((s,i)=>!i||s.t-stops[i-1].t>1e-8).map(s=>s.p);
    }
    for(let i=0;i<faces.length;i+=3) {
      let ids=faces.slice(i,i+3); const a=points[ids[0]],b=points[ids[1]],c=points[ids[2]];
      const cross=(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
      if(Math.abs(cross)<1e-8)continue;
      if(cross<0)ids.reverse();
      const triangle=ids.map(j=>points[j]),boundary=[];
      // Earcut can create a long diagonal opposite multiple collinear edges.
      // Preserve all existing vertices on each cap edge so both sides share
      // identical subdivisions, including courtyard bridges and wall seams.
      for(let edge=0;edge<3;edge++){
        boundary.push(...edgePoints(triangle[edge],triangle[(edge+1)%3]));
      }
      if(boundary.length===3)capTriangle(...triangle);
      else {
        const center=[triangle.reduce((n,p)=>n+p[0],0)/3,triangle.reduce((n,p)=>n+p[1],0)/3];
        for(let j=0;j<boundary.length;j++)capTriangle(center,boundary[j],boundary[(j+1)%boundary.length]);
      }
    }
    for(const ring of rings) for(let i=0;i<ring.length;i++) {
      const end=ring[(i+1)%ring.length],stops=[...edgePoints(ring[i],end),end];
      // Wall seams need the same subdivisions as their cap edges.
      for(let j=1;j<stops.length;j++){const p=stops[j-1],q=stops[j];
        push(vertex(p,z0),vertex(q,z0),vertex(q,z1));
        push(vertex(p,z0),vertex(q,z1),vertex(p,z1));
      }
    }
    return true;
  }
  extrude([map.cropBoundary?.ring||[[minX,minY],[maxX,minY],[maxX,maxY],[minX,maxY]]],0,base);
  shellRanges.push({kind:'base',id:'base',start:0,count:triangles.length});
  let count=0,omitted=map.cropBoundary?.omittedBuildings||0,maxHeight=base,detailedRoofs=0,unsupportedRoofs=0,estimatedRoofs=0,terrainTriangles=0;
  if(terrain&&map.terrain){const relief=terrainSolid(map.terrain,map.cropBoundary,{factor,base}),start=triangles.length;for(const triangle of relief){const model=triangle.map(p=>[(p[0]-minX)*factor,(p[1]-minY)*factor,p[2]]);push(...model);for(const p of model)maxHeight=Math.max(maxHeight,p[2]);}terrainTriangles=triangles.length-start;if(terrainTriangles)shellRanges.push({kind:'terrain',id:'terrain',start,count:terrainTriangles});}
  if(buildings) for(const building of detailedBuildings(map,{detail:roofDetails})) {
    // Omit whole boundary buildings; never slice a solid with a centroid test.
    if(building.rings.flat().some(p=>p[0]<minX||p[0]>maxX||p[1]<minY||p[1]>maxY)){omitted++;continue;}
    const ground=terrain?buildingTerrainBase(map.terrain,buildingGroundReference(sourceMap,building)):0;
    const buildingFactor=Number.isFinite(heightFactor)?heightFactor:1,floor=Math.max(0,Math.min((building.height||9)-.1,building.minHeight||0)),mappedThickness=Math.max(.1,(building.height||9)-floor)*buildingFactor*factor,thicknessFactor=Math.max(1,minHeight/mappedThickness),floorZ=ground+floor*buildingFactor;
    const shape=buildingFaces(building,{base:ground,detail:roofDetails,heightFactor:buildingFactor});
    if(thicknessFactor>1){
      // Radial roofs share vertex objects between adjacent facets. Apply the
      // printable minimum thickness once per vertex, or repeated transforms
      // pull those facets away from their separately constructed wall edges.
      const transformed=new Set();
      for(const face of shape.faces)for(const ring of face.rings3D)for(const point of ring){if(transformed.has(point))continue;transformed.add(point);point[2]=floorZ+(point[2]-floorZ)*thicknessFactor;}
    }
    const edgeVertices=shape.faces.flatMap(face=>face.rings3D.flat()),start=triangles.length;
    for(const face of shape.faces)for(const triangle of triangulateFace(face,edgeVertices)){const model=triangle.map(p=>[(p[0]-minX)*factor,(p[1]-minY)*factor,base-.1+p[2]*factor]);push(...model);for(const p of model)maxHeight=Math.max(maxHeight,p[2]);}
    if(triangles.length>start){shellRanges.push({kind:'building',id:building.id,sourceId:building.sourceId,start,count:triangles.length-start});count++;if(shape.roofMode!=='flat')detailedRoofs++;if(shape.unsupported)unsupportedRoofs++;if(shape.estimated)estimatedRoofs++;}else omitted++;
  }
  const data = new ArrayBuffer(84+triangles.length*50),view=new DataView(data);
  const sourceOptions={terrainUsed:terrain&&terrainTriangles>0};
  const header = new TextEncoder().encode(stlAttributionHeader(sourceMap,sourceOptions));
  new Uint8Array(data,0,80).set(header.slice(0,80));view.setUint32(80,triangles.length,true);
  let offset=84;
  for(const face of triangles){for(const v of [...normal(...face),...face.flat()]){view.setFloat32(offset,v,true);offset+=4;}view.setUint16(offset,0,true);offset+=2;}
  return {buffer:data,shellRanges,attribution:getAttribution(sourceMap,sourceOptions),attributionText:'STL units: millimetres. Closed base/building shells intersect; slicer union is required.\n\n'+attributionText(sourceMap,sourceOptions),attributionFilename:'SOURCE-ATTRIBUTION.txt',stats:{triangles:triangles.length,buildings:buildings?map.buildings.length:0,massingParts:count,omitted,width,depth,height:maxHeight,scale:1/factor*1000,crop,detailedRoofs,unsupportedRoofs,estimatedRoofs,terrainTriangles}};
}
