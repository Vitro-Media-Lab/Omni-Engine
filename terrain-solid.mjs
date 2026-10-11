import {terrainGrid} from './terrain.mjs';
const EPS=1e-7;
const mix=(a,b,t)=>a.map((value,i)=>value+(b[i]-value)*t);
function clipTriangle(source,boundary){
  const extent=boundary.extent||[boundary.center[0]-boundary.radius,boundary.center[1]-boundary.radius,boundary.center[0]+boundary.radius,boundary.center[1]+boundary.radius];
  if(Math.max(...source.map(p=>p[0]))<extent[0]||Math.min(...source.map(p=>p[0]))>extent[2]||Math.max(...source.map(p=>p[1]))<extent[1]||Math.min(...source.map(p=>p[1]))>extent[3])return [];
  let polygon=source;
  for(const [nx,ny,origin] of boundary.planes){const input=polygon;polygon=[];for(let i=0;i<input.length;i++){const a=input[i],b=input[(i+1)%input.length],va=nx*(a[0]-origin[0])+ny*(a[1]-origin[1]),vb=nx*(b[0]-origin[0])+ny*(b[1]-origin[1]),insideA=va>=-EPS,insideB=vb>=-EPS;if(insideA)polygon.push(a);if(insideA!==insideB)polygon.push(mix(a,b,va/(va-vb)));}if(polygon.length<3)return [];}
  return polygon.filter((p,i)=>!i||Math.hypot(p[0]-polygon[i-1][0],p[1]-polygon[i-1][1])>EPS);
}

/** A closed relief shell overlaps the flat base by 0.1 model millimetres. */
export function terrainSolid(terrain,boundary,{factor=1,base=3}={}){
  const grid=terrainGrid(terrain,1);if(!grid)return [];
  const triangles=[],boundaryEdges=new Map(),key=p=>p.slice(0,2).map(n=>Math.round(n*1e5)).join(','),top=p=>[p[0],p[1],base+p[2]*factor],bottom=p=>[p[0],p[1],base-.1];
  for(let i=0;i<grid.indices.length;i+=3){const source=[0,1,2].map(j=>Array.from(grid.positions.slice(grid.indices[i+j]*3,grid.indices[i+j]*3+3))),polygon=clipTriangle(source,boundary);if(polygon.length<3)continue;
    for(let j=1;j<polygon.length-1;j++){triangles.push([top(polygon[0]),top(polygon[j]),top(polygon[j+1])]);triangles.push([bottom(polygon[0]),bottom(polygon[j+1]),bottom(polygon[j])]);}
    for(let j=0;j<polygon.length;j++){const a=polygon[j],b=polygon[(j+1)%polygon.length],ka=key(a),kb=key(b);if(ka===kb)continue;const id=ka<kb?`${ka}|${kb}`:`${kb}|${ka}`;if(boundaryEdges.has(id))boundaryEdges.delete(id);else boundaryEdges.set(id,[a,b]);}
  }
  for(const [a,b] of boundaryEdges.values()){triangles.push([bottom(a),bottom(b),top(b)],[bottom(a),top(b),top(a)]);}
  return triangles;
}
