import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function dynamicCitiesPlugin() {
    const handle = (_req, res) => {
        const citiesDir = path.resolve('public/cache/cities');
        try {
            const cities = fs.readdirSync(citiesDir, { withFileTypes: true })
                .filter(d => d.isDirectory())
                .map(d => {
                    const metaPath = path.join(citiesDir, d.name, 'metadata.json');
                    if (fs.existsSync(metaPath)) {
                        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
                        return { key: d.name, city: meta.city, region: meta.region ?? '' };
                    }
                    return { key: d.name, city: d.name.replace(/_/g, ' '), region: '' };
                });
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(cities));
        } catch {
            res.setHeader('Content-Type', 'application/json');
            res.end('[]');
        }
    };
    return {
        name: 'dynamic-cities',
        configureServer(server)        { server.middlewares.use('/cache/cities/index.json', handle); },
        configurePreviewServer(server) { server.middlewares.use('/cache/cities/index.json', handle); },
    };
}

export default defineConfig({
    plugins: [react(), dynamicCitiesPlugin()],
    server: {
        port: 5173,
        // Serve meta.json and OSM tiles from the project root (parent dir).
        // Adjust the `rewrite` target if your data lives elsewhere.
        proxy: {}
    },
    // three/examples/jsm/... resolves relative to node_modules/three — no alias needed.
    build: {
        target: 'esnext',
        // Keep chunks large; the engine is intentionally one logical module.
        chunkSizeWarningLimit: 4000
    }
});
