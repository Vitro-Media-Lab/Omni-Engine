/** Dissolve water outlines without changing the measured source polygons. */
const cache=new WeakMap(),EPS=1e-8;
const point=p=>Array.isArray(p)&&Number.isFinite(p[0])&&Number.isFinite(p[1]);
const bounds=points=>points.reduce((b,p)=>[Math.min(b[0],p[0]),Math.min(b[1],p[1]),Math.max(b[2],p[0]),Math.max(b[3],p[1])],[Infinity,Infinity,-Infinity,-Infinity]);
const overlaps=(a,b)=>a[0]<=b[2]+EPS&&a[1]<=b[3]+EPS&&a[2]+EPS>=b[0]&&a[3]+EPS>=b[1];
const mix=(a,b,t)=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];
function inside(p,rings){let wet=false;for(const ring of rings){let enclosed=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const a=ring[i],b=ring[j];if((a[1]>p[1])!==(b[1]>p[1])&&p[0]<(b[0]-a[0])*(p[1]-a[1])/(b[1]-a[1])+a[0])enclosed=!enclosed;}if(enclosed)wet=!wet;}return wet;}
class Index{
  constructor(items,cell){this.items=items;this.cell=cell;this.cells=new Map();for(let i=0;i<items.length;i++)this.visit(items[i].bounds,key=>{if(!this.cells.has(key))this.cells.set(key,[]);this.cells.get(key).push(i);});}
  visit(b,visit){for(let x=Math.floor(b[0]/this.cell);x<=Math.floor(b[2]/this.cell);x++)for(let y=Math.floor(b[1]/this.cell);y<=Math.floor(b[3]/this.cell);y++)visit(`${x},${y}`);}
  query(b){const ids=new Set();this.visit(b,key=>{for(const id of this.cells.get(key)||[])if(overlaps(b,this.items[id].bounds))ids.add(id);});return [...ids].map(id=>this.items[id]);}
}
function splitParameters(a,b,c,d){
  const dx=b[0]-a[0],dy=b[1]-a[1],ex=d[0]-c[0],ey=d[1]-c[1],rx=c[0]-a[0],ry=c[1]-a[1],cross=dx*ey-dy*ex,length2=dx*dx+dy*dy;
  if(Math.abs(cross)>EPS){const t=(rx*ey-ry*ex)/cross,u=(rx*dy-ry*dx)/cross;return t>=-EPS&&t<=1+EPS&&u>=-EPS&&u<=1+EPS?[Math.max(0,Math.min(1,t))]:[];}
  if(Math.abs(rx*dy-ry*dx)>EPS*Math.max(1,Math.sqrt(length2)))return [];
  return [((c[0]-a[0])*dx+(c[1]-a[1])*dy)/length2,((d[0]-a[0])*dx+(d[1]-a[1])*dy)/length2].filter(t=>t>EPS&&t<1-EPS);
}
function prepare(areas){
  const polygons=areas.map(area=>({rings:(area.rings||[]).map(r=>r.filter(point)).filter(r=>r.length>=3)})).filter(area=>area.rings.length),edges=[];
  for(const polygon of polygons){polygon.bounds=bounds(polygon.rings.flat());for(const ring of polygon.rings)for(let i=0;i<ring.length;i++){const a=ring[i],b=ring[(i+1)%ring.length];if(Math.hypot(b[0]-a[0],b[1]-a[1])>EPS)edges.push({a,b,bounds:bounds([a,b])});}}
  const allBounds=bounds(edges.flatMap(edge=>[edge.a,edge.b])),cell=Math.max(50,(allBounds[2]-allBounds[0])/128,(allBounds[3]-allBounds[1])/128),edgeIndex=new Index(edges,cell),polygonIndex=new Index(polygons,cell),merged=[],seen=new Set();
  for(const edge of edges){
    const {a,b}=edge,stops=[0,1],length=Math.hypot(b[0]-a[0],b[1]-a[1]);for(const other of edgeIndex.query(edge.bounds))if(other!==edge)stops.push(...splitParameters(a,b,other.a,other.b));
    stops.sort((a,b)=>a-b);const unique=stops.filter((t,i)=>!i||t-stops[i-1]>EPS),nx=-(b[1]-a[1])/length,ny=(b[0]-a[0])/length;
    for(let i=1;i<unique.length;i++){
      const start=unique[i-1],end=unique[i],mid=mix(a,b,(start+end)/2),offset=Math.min(.000001,length*(end-start)*.001),left=[mid[0]+nx*offset,mid[1]+ny*offset],right=[mid[0]-nx*offset,mid[1]-ny*offset],near=polygonIndex.query(bounds([left,right]));
      if(near.some(area=>inside(left,area.rings))===near.some(area=>inside(right,area.rings)))continue;
      const p=mix(a,b,start),q=mix(a,b,end),key=v=>`${Math.round(v[0]*1e6)},${Math.round(v[1]*1e6)}`,pk=key(p),qk=key(q),id=pk<qk?`${pk}|${qk}`:`${qk}|${pk}`;
      if(!seen.has(id)){seen.add(id);merged.push({a:p,b:q,bounds:bounds([p,q])});}
    }
  }
  return {raw:edges,merged,rawIndex:edgeIndex,mergedIndex:new Index(merged,cell)};
}
/** Exact outer shores and island holes; shared seams and submerged overlaps disappear. */
export function waterBoundarySegments(areas=[],{seams=false,extent}={}){
  let result=cache.get(areas);if(!result){result=prepare(areas);cache.set(areas,result);}const edges=extent?(seams?result.rawIndex:result.mergedIndex).query(extent):(seams?result.raw:result.merged);return edges.map(({a,b})=>[a,b]);
}
