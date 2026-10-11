# Data attribution and redistribution

Reviewed against the primary sources linked below on 10 October 2026. These are data-source obligations; they do not assign a licence to Omni's application code or the user's original design.

## Public drawings and physical products

The optional **Annotations → Print source credits** control places readable source credit on SVG artwork. PNG and print/PDF inherit that choice. It is off by default; full notices remain in SVG metadata, saved projects and the downloadable source-credits text. Pen-plot exports draw the credit with actual single-stroke paths, including lowercase URL paths; a metadata-only notice would not appear on the plotted sheet. When printed credits are enabled, changing the theme, hiding the title or choosing transparency preserves that choice. The source notice identifies only declared providers, and credits elevation only when it contributes to the output.

OSM credits include OpenStreetMap, the data licence and the printed `openstreetmap.org/copyright` address. Printed maps and PDFs need that visible address. For clothing or other merchandise, retain the credit at the point of sale and on packaging; put it on the item or its label where practical. A file's embedded metadata does not replace those physical notices. These placement requirements come from the [OpenStreetMap Foundation's attribution guidelines](https://osmfoundation.org/wiki/Licence/Attribution_Guidelines), including the printed-map and clothing sections.

The physical-model button creates one ZIP download containing the STL and `SOURCE-ATTRIBUTION.txt`. The 80-byte binary STL header identifies the data source and points to that accompanying text. Keep both files together when sharing the package, and show its notices on the model's download/sale page and physical packaging/label. An STL header is not visible on a printed object. Retain the source notices when sharing a saved project or extracted geometry.

`drawing-worker.mjs` prepares the model off the interface thread, then transfers its STL buffer together with the attribution fields returned by `buildSTL`. `model-package.mjs` stores those exact STL bytes and the source notice in the ZIP. Worker execution changes neither the source obligations nor the notices; the package keeps them in a single download.

## Sharing source data versus sharing artwork

OSM data and Overture's Buildings theme use ODbL 1.0. A public derivative database needs the licence URI and preserved source notices. If a derivative database is publicly used, including through an artwork made from it, ODbL can also require offering either the derivative database or a machine-readable alteration file/method. Online access to that offer must be free. Merely adding a credit to a picture does not fulfil that separate data obligation. A produced image does not itself become an ODbL database simply because it uses one. These distinctions are in [ODbL sections 4.2–4.6](https://opendatacommons.org/licenses/odbl/1-0/).

For a public distribution of this app's prepared map snapshots, keep the JSON provenance and notices with the data, offer the prepared derivative snapshots or the reproducible preparation inputs/method under ODbL where applicable, and retain accessible licence references. Do not label the entire app or the user's artwork ODbL solely because it contains an ODbL map.

Overture's Buildings licence does not erase upstream notices: some contributors supply CC BY material. Determine the providers from the exact source release/feature records and retain their notices. Overture currently documents OSM, Microsoft, Esri, Google and other building sources in its [official licensing page](https://docs.overturemaps.org/attribution/). Do not indiscriminately claim all these providers were used in a particular imported map.

For CC BY components, preserve supplied creator/copyright notices, identify modifications, retain source references where practical, and provide the relevant licence address in a manner suited to the medium. The [CC BY 4.0 legal code, section 3](https://creativecommons.org/licenses/by/4.0/legalcode.en), explains these duties. Provider-specific or older CC versions must remain correctly identified.

## Current source inventory and limits

The active bundled catalog uses OSM snapshots. Five earlier interiors combined OSM and Overture without retaining the original release and provider-level licence manifest. Those interiors have been replaced from the cached OSM source and remain only as recoverable historical inputs. They are not active catalog sources. Recover the original manifests before redistributing those legacy mixed inputs. An explicitly declared Overture import still receives an Overture credit and a provenance note when its provider manifest is missing.

All 39 active elevation caches now retain their exact tile-source manifests: 223 tile references to 201 unique original PNGs. On 10–11 October 2026, `recover-terrain-provenance.mjs` read the public AWS `x-amz-meta-x-imagery-sources` headers and verified that each single-part ETag matched the cached PNG's MD5, while its SHA-256 matched the original retrieval record. This associates the recovered source names with the unchanged cached bytes. Each terrain JSON carries the contributing raster filenames, source URLs, hashes and provider identities, so saved projects retain them too. Original headers, AWS version IDs and verification evidence also remain beside the PNGs and in each study's `source-cache` provenance file.

The [AWS dataset registry](https://registry.opendata.aws/terrain-tiles/) directs users to [Tilezen's provider terms](https://github.com/tilezen/joerd/blob/master/docs/attribution.md). Its [source documentation](https://github.com/tilezen/joerd/blob/master/docs/data-sources.md) describes these imagery headers and a downloadable footprint database. The verified cache contains USGS 3DEP/NED, SRTM and GMTED2010; NOAA ETOPO1; Copernicus EU-DEM; UK Environment Agency LIDAR; and the old ArcticDEM/PGC 5 m mosaic inputs. `terrain-attribution.mjs` uses the actual provider list instead of guessing sources from a country's bounding box. A tile's component list describes its composited input rasters, not a claim to exact per-pixel ownership; preserving all contributors is conservative without naming unrelated countries.

USGS inputs are public domain with requested acknowledgement and modification notices; NOAA's US-government-material notice is retained. EU-DEM retains the Copernicus/European Union notice and [Copernicus data-policy reference](https://eur-lex.europa.eu/eli/reg_del/2013/1159/oj). UK inputs retain the 2015 Environment Agency statement and [Open Government Licence 3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). The cached 2017 ArcticDEM v2 mosaic retains Tilezen's original DigitalGlobe/NSF acknowledgement plus Polar Geospatial Center credit. These old inputs must not be relabelled as ArcticDEM v4.1 or assigned the current commercial-imagery rules for newer source images. There is no blanket CC BY licence for this combined cache.

The old missing-provider-manifest blocker is resolved for this bundled catalog. Future terrain fetches must run `recover-terrain-provenance.mjs`, then `prepare-terrain-notices.mjs` and `verify-terrain-provenance.mjs` before publication. An unknown provider or changed tile fails preparation rather than inheriting guessed terms. Imports without these records still show the provenance warning. Keep provider notices and manifests with distributed terrain or prepared source data; the renderer does not replace the source-specific conditions.

Imported GeoJSON preserves declarations at its root, `metadata`, `properties`, and supported features: `source`/`provider`, `attribution`/`credit`/`credits`/`copyright`, `license`/`licence`, source URLs and licence URLs. Notice records inherit their enclosing provider and licence unless explicitly overridden. Separate hero imports merge their notices with the map's notices, and saving/opening a project retains both. Source rights must still be supplied by the importer. A visual theme or an ODbL-only declaration cannot establish an OSM/Overture source, and an uncredited hero remains explicitly uncredited even when its base map is OSM.

Accepted notices retain their exact text. Imports reject declarations beyond 512 characters per notice, 16 distinct notices, or 1,024 total visible-credit characters, rather than silently truncating them or allowing feature credits to consume the sheet. Repeated feature notices are deduplicated. Source/licence links must be complete HTTP(S) URLs of at most 512 characters without embedded credentials. When printed credits are enabled, licence addresses are included on paper, PNG, transparent and plotter exports. `verify-import-attribution.mjs` exercises the complete import → hero → project → drawing/plotter/model path, including unsafe links and excessive declarations.

## Helper interfaces

- `getAttribution(map, {terrainUsed})`: source-aware visible lines, licence/source references and provenance notes.
- `attributionLayout(map, {width, fontSize, padding, terrainUsed})`: wraps the band without reducing lettering below 2.1 mm.
- `attributionMarkup(map, {x, y, width, fontSize, padding, ink, background, plotter, terrainUsed, align})`: visible SVG band plus embedded full notices; `x/y` are the band's upper-left corner in millimetres. Transparent output passes no background; plotter output uses only pen paths. Optional `align: 'center'` centers the credit without changing its lettering size.
- `attributionText(map, {terrainUsed})`: reusable project/model/download notice.
- `buildSTL(...)`: returns `attribution`, `attributionText` and `attributionFilename` alongside the mesh buffer.
- `modelPackage(result, filename)`: places the STL buffer and `SOURCE-ATTRIBUTION.txt` in one ZIP Blob. The studio delivers that package after its worker completes; callers that export the STL separately must also deliver the source notice.

Keep full source/licence records with future seeded/imported data. The renderer's footer supports those records; it cannot reconstruct missing historical licences from geometry alone.

Bundled software dependencies have separate licences in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Preserve those notices when distributing the app; the software licences do not require Three.js or Earcut credit on a user's map artwork.

## Prepared data offer in this release

The exact prepared derivative OSM databases are freely downloadable from [data/sources.html](data/sources.html), with the original source notices and ODbL 1.0 reference. Elevation files, exact source manifests and study notices are linked separately under their applicable provider terms. Keep this page and these JSON/TXT assets accessible when publicly serving the application. This data offer does not license the application code, original artwork or combined terrain under ODbL.
