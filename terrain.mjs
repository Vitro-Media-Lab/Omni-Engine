/** Real cached terrain relief, in metres. Raster rows run north to south. */
import {clipLineToCircle} from './crop.mjs';
import {buildingIndex} from './building-index.mjs';
import {studyCenter} from './study-origin.mjs';

const contourCache=new WeakMap();
const buildingBaseCache=new WeakMap(),rangeCache=new WeakMap(),gridCache=new WeakMap();
const envelopeCache=new WeakMap();
export function validateTerrain(terrain){
  if(!terrain||typeof terrain!=='object'||!Number.isInteger(terrain.size)||terrain.size<2||terrain.size>256)throw new Error('The terrain raster size is invalid.');
  if(!Array.isArray(terrain.bounds)||terrain.bounds.length!==4||!terrain.bounds.every(Number.isFinite)||terrain.bounds[2]<=terrain.bounds[0]||terrain.bounds[3]<=terrain.bounds[1])throw new Error('The terrain coverage is invalid.');
  if(!Array.isArray(terrain.data)||terrain.data.length!==terrain.size**2||terrain.data.some(value=>!Number.isFinite(value)||Math.abs(value)>12000))throw new Error('The terrain raster contains invalid elevations.');
  if(typeof terrain.source!=='string'||terrain.source.length>240||typeof terrain.datum!=='string'||terrain.datum.length>240)throw new Error('The terrain provenance is invalid.');
  if(terrain.origin&&(!Number.isFinite(terrain.origin.lat)||!Number.isFinite(terrain.origin.lon)||Math.abs(terrain.origin.lat)>85||Math.abs(terrain.origin.lon)>180))throw new Error('The terrain origin is invalid.');
  return terrain;
}

/** Return null beyond measured raster coverage; never extend the edge elevation. */
export function sampleTerrain(terrain,[x,y]){
  if(!terrain)return null;
  const [west,south,east,north]=terrain.bounds;
  if(!Number.isFinite(x)||!Number.isFinite(y)||x<west||x>east||y<south||y>north)return null;
  const gx=(x-west)/(east-west)*(terrain.size-1),gy=(north-y)/(north-south)*(terrain.size-1);
  const ix=Math.min(terrain.size-2,Math.floor(gx)),iy=Math.min(terrain.size-2,Math.floor(gy)),fx=gx-ix,fy=gy-iy,n=terrain.size,d=terrain.data;
  return d[iy*n+ix]*(1-fx)*(1-fy)+d[iy*n+ix+1]*fx*(1-fy)+d[(iy+1)*n+ix]*(1-fx)*fy+d[(iy+1)*n+ix+1]*fx*fy;
}

export function terrainRange(terrain){
  if(!terrain)return {min:0,max:0};
  let range=rangeCache.get(terrain);if(!range){let min=Infinity,max=-Infinity;for(const value of terrain.data){min=Math.min(min,value);max=Math.max(max,value);}range={min,max};rangeCache.set(terrain,range);}return range;
}

/** Ground to the lowest real raster sample beneath the footprint. */
export function buildingTerrainBase(terrain,building){
  if(!terrain)return 0;
  let cache=buildingBaseCache.get(terrain);if(!cache){cache=new WeakMap();buildingBaseCache.set(terrain,cache);}if(cache.has(building))return cache.get(building);
  const rings=building.rings||[],outer=rings[0]||[],inside=([x,y],ring)=>{let result=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const a=ring[i],b=ring[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])result=!result;}return result;};
  let height=Infinity;for(const point of outer){const sample=sampleTerrain(terrain,point);if(sample!==null)height=Math.min(height,sample);}
  if(outer.length){
    const [west,south,east,north]=terrain.bounds,n=terrain.size,dx=(east-west)/(n-1),dy=(north-south)/(n-1),xs=outer.map(p=>p[0]),ys=outer.map(p=>p[1]);
    const firstColumn=Math.max(0,Math.ceil((Math.min(...xs)-west)/dx)),lastColumn=Math.min(n-1,Math.floor((Math.max(...xs)-west)/dx));
    const firstRow=Math.max(0,Math.ceil((north-Math.max(...ys))/dy)),lastRow=Math.min(n-1,Math.floor((north-Math.min(...ys))/dy));
    for(let row=firstRow;row<=lastRow;row++)for(let column=firstColumn;column<=lastColumn;column++){
      const point=[west+column*dx,north-row*dy];if(inside(point,outer)&&!rings.slice(1).some(ring=>inside(point,ring)))height=Math.min(height,terrain.data[row*n+column]);
    }
  }
  const base=Number.isFinite(height)?Math.max(0,height-terrainRange(terrain).min):0;cache.set(building,base);return base;
}

/** Stable conservative envelope shared by vector and live camera fitting. */
export function terrainHeightEnvelope(map,settings={}){
  let envelope=envelopeCache.get(map);
  if(!envelope){
    const extent=map.extent||[-500,-500,500,500],center=studyCenter(map),local=Number.isFinite(map.defaultViewRadius)&&map.defaultViewRadius>0;
    const radius=map.defaultViewRadius+250,view=local?[center[0]-radius,center[1]-radius,center[0]+radius,center[1]+radius]:extent;
    const parents=local?buildingIndex(map.buildings||[]).query(view):map.buildings||[],parts=local?buildingIndex(map.buildingParts||[]).query(view):map.buildingParts||[];
    let flat=0,details=0;for(const building of parents)flat=Math.max(flat,Math.max(.1,Number(building.height)||9));details=flat;for(const building of parts)details=Math.max(details,Math.max(.1,Number(building.height)||9));
    let relief=0;if(map.terrain){const terrain=map.terrain,range=terrainRange(terrain);if(!local)relief=range.max-range.min;else{const [west,south,east,north]=terrain.bounds,n=terrain.size,firstX=Math.max(0,Math.floor((view[0]-west)/(east-west)*(n-1))),lastX=Math.min(n-1,Math.ceil((view[2]-west)/(east-west)*(n-1))),firstY=Math.max(0,Math.floor((north-view[3])/(north-south)*(n-1))),lastY=Math.min(n-1,Math.ceil((north-view[1])/(north-south)*(n-1)));for(let row=firstY;row<=lastY;row++)for(let column=firstX;column<=lastX;column++)relief=Math.max(relief,terrain.data[row*n+column]-range.min);}}
    envelope={flat,details,relief};envelopeCache.set(map,envelope);
  }
  const height=settings.buildings!==false?envelope.details:0;
  return (settings.terrain!==false?envelope.relief:0)+height*(Number.isFinite(settings.heightFactor)?settings.heightFactor:1);
}

/** Shared indexed terrain grid for GPU previews and model exporters. */
export function terrainGrid(terrain,stride=1){
  if(!terrain)return null;if(!Number.isInteger(stride)||stride<1||stride>16)throw new Error('The terrain mesh stride is invalid.');
  let cache=gridCache.get(terrain);if(!cache){cache=new Map();gridCache.set(terrain,cache);}if(cache.has(stride))return cache.get(stride);
  const coordinates=[];for(let index=0;index<terrain.size-1;index+=stride)coordinates.push(index);coordinates.push(terrain.size-1);
  const side=coordinates.length,positions=new Float32Array(side*side*3),indices=new Uint32Array((side-1)**2*6),[west,south,east,north]=terrain.bounds,min=terrainRange(terrain).min;
  let cursor=0;for(const row of coordinates)for(const column of coordinates){positions[cursor++]=west+column/(terrain.size-1)*(east-west);positions[cursor++]=north-row/(terrain.size-1)*(north-south);positions[cursor++]=terrain.data[row*terrain.size+column]-min;}
  cursor=0;for(let row=0;row<side-1;row++)for(let column=0;column<side-1;column++){const a=row*side+column,b=a+1,c=a+side,d=c+1;indices[cursor++]=a;indices[cursor++]=c;indices[cursor++]=b;indices[cursor++]=b;indices[cursor++]=c;indices[cursor++]=d;}
  const grid={positions,indices,side};cache.set(stride,grid);return grid;
}

function clipTerrainPolygon(points,planes){
  let result=points;
  for(const [nx,ny,p] of planes){const source=result;result=[];if(!source.length)break;
    for(let i=0;i<source.length;i++){const a=source[i],b=source[(i+1)%source.length],da=nx*(a[0]-p[0])+ny*(a[1]-p[1]),db=nx*(b[0]-p[0])+ny*(b[1]-p[1]),insideA=da>=-1e-7,insideB=db>=-1e-7;if(insideA)result.push(a);if(insideA!==insideB){const t=da/(da-db);result.push(a.map((value,j)=>value+(b[j]-value)*t));}}
  }
  return result;
}
const coveragePlanes=([west,south,east,north])=>[[1,0,[west,south]],[0,1,[west,south]],[-1,0,[east,north]],[0,-1,[east,north]]];

/** Terrain surface clipped in geographic space before architectural projection. */
export function terrainCropSurface(terrain,extent,boundary,stride=2){
  if(!terrain)return [];
  const grid=terrainGrid(terrain,stride),p=grid.positions,side=grid.side,planes=boundary?.planes||coveragePlanes(extent),result=[];
  const get=index=>[p[index*3],p[index*3+1],p[index*3+2]];
  const inside=point=>{if(boundary?.shape==='circle'){const x=point[0]-boundary.center[0],y=point[1]-boundary.center[1],step=Math.PI*2/boundary.ring.length,angle=(Math.floor(Math.atan2(y,x)/step)+.5)*step;return x*Math.cos(angle)+y*Math.sin(angle)<=boundary.radius*Math.cos(step/2)+1e-7;}return point[0]>=extent[0]&&point[0]<=extent[2]&&point[1]>=extent[1]&&point[1]<=extent[3];};
  for(let row=0;row<side-1;row++){
    const north=p[row*side*3+1],south=p[(row+1)*side*3+1];if(south>extent[3]||north<extent[1])continue;
    for(let column=0;column<side-1;column++){
      const a=row*side+column,b=a+1,c=a+side,d=c+1,west=p[a*3],east=p[b*3];if(east<extent[0]||west>extent[2])continue;
      for(const ids of [[a,c,b],[b,c,d]]){const triangle=ids.map(get),polygon=triangle.every(inside)?triangle:clipTerrainPolygon(triangle,planes);if(polygon.length>=3)result.push(polygon);}
    }
  }
  return result;
}

/** Sample the real geographic crop edge; a raised site never gains a z=0 outline. */
export function terrainCropPerimeter(terrain,boundary){
  if(!terrain||!boundary?.ring?.length)return [];
  const [west,south,east,north]=terrain.bounds,ring=clipTerrainPolygon(boundary.ring,coveragePlanes(terrain.bounds));if(ring.length<3)return [];
  const spacing=Math.min((east-west)/(terrain.size-1),(north-south)/(terrain.size-1)),minimum=terrainRange(terrain).min,result=[];
  for(let i=0;i<ring.length;i++){
    const a=ring[i],b=ring[(i+1)%ring.length],steps=Math.max(1,Math.ceil(Math.hypot(b[0]-a[0],b[1]-a[1])/spacing));
    for(let j=0;j<steps;j++){const t=j/steps,x=Math.max(west,Math.min(east,a[0]+(b[0]-a[0])*t)),y=Math.max(south,Math.min(north,a[1]+(b[1]-a[1])*t));const z=sampleTerrain(terrain,[x,y]);if(z!==null)result.push([x,y,z-minimum]);}
  }
  return result;
}

/** Marching squares with an asymptotic saddle decider and exact shared edge IDs. */
export function terrainContours(terrain,interval=10){
  if(!terrain)return [];
  if(!Number.isFinite(interval)||interval<1||interval>100)throw new Error('Use a contour interval of 1–100 metres.');
  let cache=contourCache.get(terrain);if(cache?.has(interval))return cache.get(interval);
  validateTerrain(terrain);if(!cache){cache=new Map();contourCache.set(terrain,cache);}
  const n=terrain.size,d=terrain.data,[west,south,east,north]=terrain.bounds,dx=(east-west)/(n-1),dy=(north-south)/(n-1);
  let minimum=Infinity,maximum=-Infinity;for(const value of d){minimum=Math.min(minimum,value);maximum=Math.max(maximum,value);}
  const result=[];
  // A level at a constant raster minimum/maximum creates no meaningful contour.
  for(let level=(Math.floor(minimum/interval)+1)*interval;level<maximum;level+=interval){
    const edges=[],adjacency=new Map();
    const add=(a,b)=>{if(Math.hypot(a.point[0]-b.point[0],a.point[1]-b.point[1])<1e-8)return;const edge={a,b,used:false};edges.push(edge);for(const endpoint of [a,b]){if(!adjacency.has(endpoint.key))adjacency.set(endpoint.key,[]);adjacency.get(endpoint.key).push(edge);}};
    for(let row=0;row<n-1;row++)for(let column=0;column<n-1;column++){
      const index=row*n+column,values=[d[index],d[index+1],d[index+n+1],d[index+n]],mask=values.reduce((bits,value,i)=>bits|(value>=level?1<<i:0),0);
      if(mask===0||mask===15)continue;
      const corners=[[west+column*dx,north-row*dy],[west+(column+1)*dx,north-row*dy],[west+(column+1)*dx,north-(row+1)*dy],[west+column*dx,north-(row+1)*dy]];
      const keys=[`h${row},${column}`,`v${row},${column+1}`,`h${row+1},${column}`,`v${row},${column}`],crossings=[];
      for(let side=0;side<4;side++){
        const next=(side+1)%4,a=values[side],b=values[next];if((a>=level)===(b>=level))continue;
        const t=(level-a)/(b-a),p=corners[side],q=corners[next];
        // Contours exactly through a vertex use a vertex ID on every neighbor.
        const vertexKey=t===0?`p${row+(side>1?1:0)},${column+(side===1||side===2?1:0)}`:t===1?`p${row+(next>1?1:0)},${column+(next===1||next===2?1:0)}`:keys[side];
        crossings.push({side,key:vertexKey,point:[p[0]+(q[0]-p[0])*t,p[1]+(q[1]-p[1])*t]});
      }
      if(crossings.length===2)add(crossings[0],crossings[1]);
      else if(crossings.length===4){
        const determinant=(values[0]-level)*(values[2]-level)-(values[1]-level)*(values[3]-level);
        if(determinant>=0){add(crossings[0],crossings[1]);add(crossings[2],crossings[3]);}
        else{add(crossings[3],crossings[0]);add(crossings[1],crossings[2]);}
      }
    }
    const trace=(edge,start)=>{
      const points=[start.point];let current=edge,endpoint=start;
      while(current&&!current.used){current.used=true;endpoint=current.a.key===endpoint.key?current.b:current.a;points.push(endpoint.key===start.key?start.point:endpoint.point);current=(adjacency.get(endpoint.key)||[]).find(candidate=>!candidate.used);}
      if(points.length>1)result.push({height:level,points});
    };
    // Start open contours at the raster edge before tracing closed loops.
    for(const edge of edges)if(!edge.used){const endpoint=[edge.a,edge.b].find(point=>adjacency.get(point.key).length===1);if(endpoint)trace(edge,endpoint);}
    for(const edge of edges)if(!edge.used)trace(edge,edge.a);
  }
  if(cache.size>=4)cache.delete(cache.keys().next().value);cache.set(interval,result);return result;
}

function clipLineToRect(points,[west,south,east,north]){
  const pieces=[];let current;
  for(let i=1;i<points.length;i++){
    const a=points[i-1],b=points[i],dx=b[0]-a[0],dy=b[1]-a[1];let enter=0,leave=1,accepted=true;
    for(const [p,q] of [[-dx,a[0]-west],[dx,east-a[0]],[-dy,a[1]-south],[dy,north-a[1]]]){
      if(!p){if(q<0){accepted=false;break;}continue;}const t=q/p;if(p<0)enter=Math.max(enter,t);else leave=Math.min(leave,t);if(enter>leave){accepted=false;break;}
    }
    if(!accepted){current=undefined;continue;}
    const start=[a[0]+dx*enter,a[1]+dy*enter],end=[a[0]+dx*leave,a[1]+dy*leave];
    if(current&&Math.hypot(current.at(-1)[0]-start[0],current.at(-1)[1]-start[1])<1e-7)current.push(end);else{current=[start,end];pieces.push(current);}
    if(leave<1)current=undefined;
  }
  return pieces;
}

/** Clip in geographic ground space before projection or plotter export. */
export function contoursInCrop(terrain,interval,extent,boundary){
  const result=[];
  for(const contour of terrainContours(terrain,interval))for(const line of clipLineToRect(contour.points,extent))for(const points of boundary?clipLineToCircle(line,boundary):[line])result.push({height:contour.height,points});
  return result;
}
