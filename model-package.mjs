// Keep the physical model and its required source notices in one download.
// Stored ZIP entries need no compression library and preserve the STL bytes.
const crcTable=Uint32Array.from({length:256},(_,i)=>{for(let n=0;n<8;n++)i=(i&1)?0xedb88320^(i>>>1):i>>>1;return i>>>0;});
const crc32=bytes=>{let crc=0xffffffff;for(const byte of bytes)crc=crcTable[(crc^byte)&255]^(crc>>>8);return (crc^0xffffffff)>>>0;};
const encoder=new TextEncoder();

export function modelPackage(result,filename='model-mm.stl'){
  if(!(result?.buffer instanceof ArrayBuffer)||!result.attributionText)throw new Error('The model package needs STL geometry and source notices.');
  if(!/^[a-z\d_.-]+\.stl$/i.test(filename))throw new Error('Invalid model filename.');
  const entries=[{name:filename,bytes:new Uint8Array(result.buffer)},{name:'SOURCE-ATTRIBUTION.txt',bytes:encoder.encode(result.attributionText)}],parts=[],central=[];let offset=0;
  for(const entry of entries){
    const name=encoder.encode(entry.name),size=entry.bytes.length,crc=crc32(entry.bytes);
    if(size>0xffffffff||offset+size+30+name.length>0xffffffff)throw new Error('This model exceeds the package size limit.');
    const local=new Uint8Array(30+name.length),v=new DataView(local.buffer);
    v.setUint32(0,0x04034b50,true);v.setUint16(4,20,true);v.setUint16(6,0x800,true);v.setUint16(12,33,true);v.setUint32(14,crc,true);v.setUint32(18,size,true);v.setUint32(22,size,true);v.setUint16(26,name.length,true);local.set(name,30);
    const header=new Uint8Array(46+name.length),c=new DataView(header.buffer);
    c.setUint32(0,0x02014b50,true);c.setUint16(4,20,true);c.setUint16(6,20,true);c.setUint16(8,0x800,true);c.setUint16(14,33,true);c.setUint32(16,crc,true);c.setUint32(20,size,true);c.setUint32(24,size,true);c.setUint16(28,name.length,true);c.setUint32(42,offset,true);header.set(name,46);
    parts.push(local,entry.bytes);central.push(header);offset+=local.length+size;
  }
  const directorySize=central.reduce((sum,header)=>sum+header.length,0),end=new Uint8Array(22),e=new DataView(end.buffer);
  e.setUint32(0,0x06054b50,true);e.setUint16(8,entries.length,true);e.setUint16(10,entries.length,true);e.setUint32(12,directorySize,true);e.setUint32(16,offset,true);
  return new Blob([...parts,...central,end],{type:'application/zip'});
}
