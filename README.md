# Omni Engine V3 delivery package

A drawing-first map studio for paper, pen plots, apparel and physical models. This folder contains the browser runtime, all 39 active prepared studies, elevation data, exact source manifests and required notices. Historical caches, backups, development tools and examples are excluded.

## Preview locally

With Node.js installed, open a terminal in this folder and run `node server.mjs`. Open http://127.0.0.1:5183 and keep the terminal open. If another Omni preview is already running, stop that preview before starting this one.

## Static hosting

Serve this folder over HTTPS using a static host with JavaScript modules, worker modules and JSON files enabled. No build step or API is required for bundled studies. Upload only this package; the development workspace contains excluded historical source inputs. The interface requests Google Fonts remotely and has system-font fallbacks.

## Data and notices

Keep [the prepared data offer](data/sources.html), [ATTRIBUTION.md](ATTRIBUTION.md), [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), and the original licence files accessible. The data page provides the exact ODbL derivative map databases without payment or sign-in and separately describes terrain terms. Exports retain source credits; physical merchandise also needs the source notices at the point of sale and on packaging/labels as applicable.

The application code publication licence and hosting policy remain the owner's decision. This package does not assign them. No deployment was performed. `release-manifest.json` records the exact files, hashes, sizes and source counts for review.
