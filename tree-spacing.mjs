/** Stable nested tree samples, prepared once and reused by vector/GPU drawing. */
const cache=new WeakMap(),MIN=.25,MAX=65536;
export const treePosition=tree=>Array.isArray(tree)?tree:tree?.position;
const hash=point=>{let h=(Math.round(point[0]*1000)*73856093)^(Math.round(point[1]*1000)*19349663);h=Math.imul(h^(h>>>16),0x45d9f3b);return (h^(h>>>16))>>>0;};
export function treeHierarchy(trees=[]){
  let result=cache.get(trees);if(result)return result;
  let points=trees.map((tree,index)=>({tree,index,p:treePosition(tree)})).filter(({p})=>p&&Number.isFinite(p[0])&&Number.isFinite(p[1]));for(const item of points)item.priority=hash(item.p);points.sort((a,b)=>a.priority-b.priority||a.p[0]-b.p[0]||a.p[1]-b.p[1]||a.index-b.index);
  const clearance=new Map();for(const {tree} of points)clearance.set(tree,0);
  for(let spacing=MIN;spacing<=MAX&&points.length;spacing*=2){const cells=new Map(),next=[];
    for(const item of points){const [x,y]=item.p,cx=Math.floor(x/spacing),cy=Math.floor(y/spacing);let near=false;for(let dx=-1;dx<=1&&!near;dx++)for(let dy=-1;dy<=1&&!near;dy++)for(const other of cells.get(`${cx+dx},${cy+dy}`)||[])if((x-other.p[0])**2+(y-other.p[1])**2<spacing*spacing-1e-9){near=true;break;}
      if(near)continue;const key=`${cx},${cy}`;if(!cells.has(key))cells.set(key,[]);cells.get(key).push(item);next.push(item);clearance.set(item.tree,spacing);
    }points=next;
  }
  result={clearance};cache.set(trees,result);return result;
}
/** Conservative projected spacing also keeps axonometric crowns apart at low elevations. */
export function treeSpacingLevel(projection,settings={}){
  const factor=Math.max(1e-9,projection.factor),radius=Math.max(.6,Math.min(2.3,factor*3)),physical=Math.max(Number.isFinite(settings.treeSpacing)?settings.treeSpacing:2.5,radius*2.15),compression=settings.view==='axon'?Math.max(.01,Math.sin((settings.axonAngle??35)*Math.PI/180)):1,world=physical/(factor*compression);
  return Math.min(MAX,Math.max(MIN,2**Math.ceil(Math.log2(world))));
}
export function spacedTrees(trees=[],sourceTrees=trees,projection,settings={}){const {clearance}=treeHierarchy(sourceTrees),level=treeSpacingLevel(projection,settings);return trees.filter(tree=>(clearance.get(tree)||0)>=level);}
