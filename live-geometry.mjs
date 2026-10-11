import {Earcut} from './lib/Earcut.mjs';
import {buildingFaces,buildingEdges,triangulateFace,detailedBuildings,buildingGroundReference} from './building-shape.mjs';
import {buildingTerrainBase,terrainGrid,terrainContours,terrainRange,sampleTerrain} from './terrain.mjs';
import {buildingBounds} from './building-index.mjs';
import {computeDrawingProjection} from './projection.mjs';
import {waterBoundarySegments} from './water-boundary.mjs';
import {treeHierarchy,treePosition} from './tree-spacing.mjs';
import {isTrail} from './road-style.mjs';
export function computeLiveProjection(map,settings){
  return computeDrawingProjection(map,settings);
}

const open=ring=>ring.length>1&&ring[0][0]===ring.at(-1)[0]&&ring[0][1]===ring.at(-1)[1]?ring.slice(0,-1):ring;
function layer(){return {positions:[],normals:[],baseZ:[],visibility:[],records:[]};}
function vertex(out,p,z,n=[0,0,1],base=0){out.positions.push(p[0],p[1],z);out.normals.push(...n);out.baseZ.push(base);out.visibility.push(1);}
function triangle(out,a,b,c,z,n){vertex(out,a,z,n);vertex(out,b,z,n);vertex(out,c,z,n);}
function line(out,a,b,za=0,zb=za){vertex(out,a,za);vertex(out,b,zb);}
function polygon(out,rings,z=0){
  const flat=[],points=[],holes=[];for(const [i,ring] of rings.map(open).entries()){if(i)holes.push(points.length);for(const p of ring){points.push(p);flat.push(...p);}}
  const ids=Earcut.triangulate(flat,holes,2);for(let i=0;i<ids.length;i+=3)triangle(out,points[ids[i]],points[ids[i+1]],points[ids[i+2]],z);
}
export function buildLiveGeometry(map,settings={}){
  const layers={buildings:layer(),edges:layer(),planBuildings:layer(),planEdges:layer(),roads:layer(),trails:layer(),parks:layer(),water:layer(),waterEdges:layer(),waterSeams:layer(),trees:layer(),terrain:layer(),contours:layer()};
  const terrain=settings.terrain!==false?map.terrain:null,minimum=terrainRange(terrain).min;
  const ground=p=>{const value=sampleTerrain(terrain,p);return value===null?0:value-minimum;};
  for(const b of detailedBuildings(map,{detail:settings.roofDetails!==false})){
    const start=layers.buildings.visibility.length,edgeStart=layers.edges.visibility.length,base=buildingTerrainBase(terrain,buildingGroundReference(map.groundSource||map,b)),shape=buildingFaces(b,{base,detail:settings.roofDetails!==false});
    for(const face of shape.faces)if(face.kind!=='bottom')for(const [a,b,c] of triangulateFace(face)){
      const u=b.map((v,i)=>v-a[i]),v=c.map((n,i)=>n-a[i]),n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],length=Math.hypot(...n)||1,normal=n.map(v=>v/length);
      for(const p of [a,b,c])vertex(layers.buildings,p,p[2],normal,base);
    }
    for(const [a,b] of buildingEdges(shape.faces)){vertex(layers.edges,a,a[2],[0,0,1],base);vertex(layers.edges,b,b[2],[0,0,1],base);}
    const parent=b.parentBuilding||b;layers.buildings.records.push({start,end:layers.buildings.visibility.length,building:parent});layers.edges.records.push({start:edgeStart,end:layers.edges.visibility.length,building:parent});
  }
  for(const b of map.buildings){
    const planStart=layers.planBuildings.visibility.length,planEdgeStart=layers.planEdges.visibility.length;
    polygon(layers.planBuildings,b.rings,0);
    for(const ring of b.rings.map(open))for(let i=0;i<ring.length;i++){
      const p=ring[i],q=ring[(i+1)%ring.length];
      line(layers.planEdges,p,q,0);
    }
    layers.planBuildings.records.push({start:planStart,end:layers.planBuildings.visibility.length,building:b});layers.planEdges.records.push({start:planEdgeStart,end:layers.planEdges.visibility.length,building:b});
  }
  for(const road of map.roads||[])for(let i=1;i<road.points.length;i++)for(const p of [road.points[i-1],road.points[i]]){const z=ground(p)+.03;vertex(layers[isTrail(road)?'trails':'roads'],p,z,[0,0,1],z);}
  for(const kind of ['parks','water'])for(const area of map[kind]||[]){const flat=[],points=[],holes=[];area.rings.map(open).forEach((ring,i)=>{if(i)holes.push(points.length);for(const p of ring){points.push(p);flat.push(...p);}});const ids=Earcut.triangulate(flat,holes,2);for(const id of ids){const p=points[id],z=ground(p)+(kind==='water'?.01:.02);vertex(layers[kind],p,z,[0,0,1],z);}}
  for(const [kind,seams] of [['waterEdges',false],['waterSeams',true]])for(const [a,b] of waterBoundarySegments((map.groundSource||map).water,{seams,extent:map.chunkBounds}))for(const p of [a,b]){const z=ground(p)+.015;vertex(layers[kind],p,z,[0,0,1],z);}
  const treeSamples=treeHierarchy((map.groundSource||map).trees);
  for(const tree of map.trees||[]){const p=treePosition(tree);if(!p||!Number.isFinite(p[0])||!Number.isFinite(p[1]))continue;const z=ground(p)+.04;vertex(layers.trees,p,z,[0,0,1],z);layers.trees.visibility[layers.trees.visibility.length-1]=treeSamples.clearance.get(tree)||0;}
  const grid=terrainGrid(terrain,2);if(grid)for(let i=0;i<grid.indices.length;i+=3){const triangle=[0,1,2].map(j=>Array.from(grid.positions.slice(grid.indices[i+j]*3,grid.indices[i+j]*3+3))),[a,b,c]=triangle,u=b.map((v,j)=>v-a[j]),v=c.map((n,j)=>n-a[j]),n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],length=Math.hypot(...n)||1;for(const p of triangle)vertex(layers.terrain,p,p[2],n.map(v=>v/length),p[2]);}
  const contourMinimum=terrainRange(map.terrain).min;for(const contour of terrainContours(map.terrain,settings.contourInterval??10))for(let i=1;i<contour.points.length;i++)for(const p of [contour.points[i-1],contour.points[i]])vertex(layers.contours,p,contour.height-contourMinimum+.04,[0,0,1],contour.height-contourMinimum+.04);
  for(const item of Object.values(layers)){item.positions=new Float32Array(item.positions);item.normals=new Float32Array(item.normals);item.baseZ=new Float32Array(item.baseZ);item.visibility=new Float32Array(item.visibility);}
  return layers;
}
export function buildingInBoundary(building,projection,circle){
  const [cx,cy]=projection.center,[sx,sy]=projection.span,r=projection.radius;
  const bounds=buildingBounds(building);
  if(!circle&&projection.pageAligned){const e=projection.viewportExtent;return bounds[0]<=e[2]&&bounds[1]<=e[3]&&bounds[2]>=e[0]&&bounds[3]>=e[1];}
  if(!circle)return bounds[0]>=cx-sx/2-1e-7&&bounds[1]>=cy-sy/2-1e-7&&bounds[2]<=cx+sx/2+1e-7&&bounds[3]<=cy+sy/2+1e-7;
  const farX=Math.max(Math.abs(bounds[0]-cx),Math.abs(bounds[2]-cx)),farY=Math.max(Math.abs(bounds[1]-cy),Math.abs(bounds[3]-cy)),inner=r*Math.cos(Math.PI/256);
  if(farX*farX+farY*farY<=inner*inner)return true;
  const nearX=Math.max(bounds[0]-cx,0,cx-bounds[2]),nearY=Math.max(bounds[1]-cy,0,cy-bounds[3]);if(nearX*nearX+nearY*nearY>r*r)return false;
  for(const ring of building.rings)for(const [x,y] of ring){
    const dx=x-cx,dy=y-cy;
    if(circle){const sector=Math.PI/128,local=((Math.atan2(dy,dx)+Math.PI*2)%sector)-sector/2;const limit=r*Math.cos(sector/2)/Math.cos(local);if(dx*dx+dy*dy>limit*limit+1e-7)return false;}
    else if(Math.abs(dx)>sx/2+1e-7||Math.abs(dy)>sy/2+1e-7)return false;
  }return true;
}
