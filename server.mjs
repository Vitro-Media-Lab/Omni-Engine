import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.md':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png'};
const server = http.createServer(async (req,res) => {
  try {
    const requested = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const absolute = path.resolve(root, '.'+ (requested === '/' ? '/index.html' : requested));
    if (!absolute.startsWith(root+path.sep) && absolute !== root) {res.writeHead(403);return res.end('Forbidden');}
    const content = await fs.readFile(absolute);
    res.writeHead(200,{'Content-Type':mime[path.extname(absolute)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    res.end(content);
  } catch {res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}
});
server.listen(5183,'127.0.0.1',()=>process.stdout.write('Omni Engine V3: http://127.0.0.1:5183\n'));
