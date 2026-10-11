// Rasterize the measured SVG in narrow strips. A 1,200 DPI A3 drawing needs
// more than a gigabyte as one canvas; strips keep the working bitmap small.
export const PNG_LIMITS=Object.freeze({maxEdge:32000,maxPixels:512000000,stripPixels:2097152,maxStripHeight:256});

export function pngDimensions(sheet,dpi=600){
  if(!Number.isFinite(sheet?.width)||!Number.isFinite(sheet?.height)||sheet.width<=0||sheet.height<=0)throw new Error('The drawing needs a valid physical page size.');
  if(!Number.isFinite(dpi)||dpi<72||dpi>1200)throw new Error('Choose an image resolution from 72 to 1,200 DPI.');
  const width=Math.round(sheet.width/25.4*dpi),height=Math.round(sheet.height/25.4*dpi),pixels=width*height;
  if(width<1||height<1)throw new Error('The image size is too small.');
  if(width>PNG_LIMITS.maxEdge||height>PNG_LIMITS.maxEdge||pixels>PNG_LIMITS.maxPixels)throw new Error(`This image would be ${width.toLocaleString()} × ${height.toLocaleString()} pixels. Choose a lower DPI or a smaller page (maximum 32,000 pixels per edge and 512 megapixels).`);
  return {width,height,pixels,dpi,megapixels:pixels/1000000};
}

const crcTable=Uint32Array.from({length:256},(_,i)=>{for(let n=0;n<8;n++)i=(i&1)?0xedb88320^(i>>>1):i>>>1;return i>>>0;});
export function pngCRC(bytes){let crc=0xffffffff;for(const byte of bytes)crc=crcTable[(crc^byte)&255]^(crc>>>8);return (crc^0xffffffff)>>>0;}
function uint32(value){const result=new Uint8Array(4);new DataView(result.buffer).setUint32(0,value);return result;}
function pngChunk(type,data=new Uint8Array()){
  const name=new TextEncoder().encode(type),result=new Uint8Array(data.byteLength+12);
  result.set(uint32(data.byteLength));result.set(name,4);result.set(data,8);result.set(uint32(pngCRC(result.subarray(4,-4))),result.length-4);return result;
}
function pngHeader(width,height,dpi){
  const header=new Uint8Array(13),view=new DataView(header.buffer);view.setUint32(0,width);view.setUint32(4,height);header[8]=8;header[9]=6;
  const resolution=new Uint8Array(9),physical=new DataView(resolution.buffer),pixelsPerMeter=Math.round(dpi/.0254);physical.setUint32(0,pixelsPerMeter);physical.setUint32(4,pixelsPerMeter);resolution[8]=1;
  return [new Uint8Array([137,80,78,71,13,10,26,10]),pngChunk('IHDR',header),pngChunk('pHYs',resolution)];
}

// Bands must cover the image from top to bottom and contain unpremultiplied
// RGBA pixels. Up filtering preserves alpha and compresses repeated paper well.
export async function encodeRGBAPNG(bands,{width,height,dpi=600,onProgress}={}){
  if(!Number.isInteger(width)||!Number.isInteger(height)||width<1||height<1||width>PNG_LIMITS.maxEdge||height>PNG_LIMITS.maxEdge||width*height>PNG_LIMITS.maxPixels)throw new Error('Invalid PNG dimensions.');
  if(!Number.isFinite(dpi)||dpi<72||dpi>1200)throw new Error('Invalid PNG resolution.');
  if(typeof CompressionStream!=='function')throw new Error('High-resolution PNG export needs a browser with streaming compression. Print SVG remains available.');
  const parts=pngHeader(width,height,dpi),stride=width*4,previous=new Uint8Array(stride),compression=new CompressionStream('deflate'),writer=compression.writable.getWriter(),reader=compression.readable.getReader();
  // Read concurrently: waiting to read until all writes finish can deadlock on
  // stream backpressure, even when the eventual PNG fits comfortably in memory.
  const output=(async()=>{for(;;){const {value,done}=await reader.read();if(done)break;if(value?.length)parts.push(pngChunk('IDAT',value));}})();
  let completed=0;
  try{
    for await(const rgba of bands){
      if(!(rgba instanceof Uint8Array||rgba instanceof Uint8ClampedArray)||!rgba.length||rgba.length%stride!==0)throw new Error('A PNG strip has incomplete pixel data.');
      const rows=rgba.length/stride;if(completed+rows>height)throw new Error('PNG strips exceed the image height.');
      const filtered=new Uint8Array((stride+1)*rows);
      for(let row=0;row<rows;row++){
        const start=row*stride,destination=row*(stride+1);filtered[destination]=2;
        for(let i=0;i<stride;i++)filtered[destination+i+1]=(rgba[start+i]-previous[i])&255;
        previous.set(rgba.subarray(start,start+stride));
      }
      await writer.write(filtered);completed+=rows;onProgress?.(completed/height);
    }
    if(completed!==height)throw new Error('PNG strips do not cover the full image.');
    await writer.close();await output;parts.push(pngChunk('IEND'));return new Blob(parts,{type:'image/png'});
  }catch(error){await Promise.allSettled([writer.abort(error),reader.cancel(error),output]);throw error;}
  finally{writer.releaseLock();reader.releaseLock();}
}

export function rasterStripSVG(svg,sheet,{width,height,y,totalHeight}){
  if(typeof svg!=='string'||!/^\s*<svg\b/.test(svg))throw new Error('The drawing does not contain a valid SVG.');
  const rootEnd=svg.indexOf('>'),root=svg.slice(0,rootEnd+1),content=svg.slice(rootEnd+1);
  const attributes=root.replace(/\s(?:width|height|viewBox|preserveAspectRatio)\s*=\s*(?:"[^"]*"|'[^']*')/g,'');
  // Keep the physical-to-pixel transform constant for every strip. A nested
  // full-page vector viewport avoids slightly different fractional transforms
  // affecting text hinting and thin strokes at band boundaries.
  return `${attributes.slice(0,-1)} width="${width}" height="${height}" viewBox="0 ${y} ${width} ${height}" preserveAspectRatio="none"><svg width="${width}" height="${totalHeight}" viewBox="0 0 ${sheet.width} ${sheet.height}" preserveAspectRatio="none">${content}</svg>`;
}

export async function rasterizeLargeSVG(svg,sheet,{dpi=600,onProgress,signal}={}){
  const dimensions=pngDimensions(sheet,dpi),{width,height}=dimensions;
  if(typeof document==='undefined'||typeof Image==='undefined')throw new Error('SVG rasterization is available in the browser.');
  const bandHeight=Math.max(1,Math.min(PNG_LIMITS.maxStripHeight,Math.floor(PNG_LIMITS.stripPixels/width))),canvas=document.createElement('canvas');canvas.width=width;
  let context=canvas.getContext('2d',{willReadFrequently:true});if(!context)throw new Error('Image export is unavailable in this browser.');
  async function* strips(){
    for(let y=0;y<height;y+=bandHeight){
      signal?.throwIfAborted();const rows=Math.min(bandHeight,height-y),renderTop=Math.max(0,y-2),renderBottom=Math.min(height,y+rows+2),renderRows=renderBottom-renderTop;canvas.height=renderRows;
      // Changing canvas height clears pixels and restores the default transform.
      context=canvas.getContext('2d',{willReadFrequently:true});if(!context)throw new Error('The image strip could not be allocated. Try a lower DPI.');
      // A small overlap keeps antialiasing for thin diagonals, lettering and
      // curves away from each SVG viewport edge. Encode only the central band.
      const source=rasterStripSVG(svg,sheet,{width,height:renderRows,y:renderTop,totalHeight:height}),url=URL.createObjectURL(new Blob([source],{type:'image/svg+xml'}));
      try{
        const image=new Image();image.src=url;await image.decode();signal?.throwIfAborted();context.drawImage(image,0,0,width,renderRows);
        yield context.getImageData(0,y-renderTop,width,rows).data;
      }finally{URL.revokeObjectURL(url);}
      // Give progress labels, cancellation and other browser tabs a turn.
      await new Promise(resolve=>setTimeout(resolve,0));
    }
  }
  try{
    const blob=await encodeRGBAPNG(strips(),{width,height,dpi,onProgress});signal?.throwIfAborted();return {blob,...dimensions};
  }finally{canvas.width=canvas.height=0;}
}
