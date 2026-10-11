# Third-party software and font notices

Keep this notice and the referenced licence files with redistributed copies of Omni Engine V3. These are software notices; map-data notices are in [ATTRIBUTION.md](ATTRIBUTION.md).

## Three.js r167

`lib/three.module.mjs` identifies revision 167 and retains the header naming the 2010–2024 Three.js authors and MIT licence. Three.js also supplies the JavaScript adaptation used in `lib/Earcut.mjs`.

The complete MIT notice is preserved in [lib/THREE-LICENSE.txt](lib/THREE-LICENSE.txt), matching the [upstream r167 licence](https://github.com/mrdoob/three.js/blob/r167/LICENSE).

## Mapbox Earcut 2.2.4

`lib/Earcut.mjs` identifies its Mapbox Earcut 2.2.4 origin. Preserve both the adaptation's Three.js MIT notice and Mapbox's ISC notice. The complete existing ISC notice, copyright 2016 Mapbox, is in [lib/EARCUT-LICENSE.txt](lib/EARCUT-LICENSE.txt), matching the [upstream 2.2.4 licence](https://github.com/mapbox/earcut/blob/v2.2.4/LICENSE).

The MIT and ISC notices apply to distributing the software. They do not place software-credit text on a separately generated drawing, PNG, pen plot or STL artwork.

## Remotely served interface fonts

`studio.css` requests these interface fonts from Google Fonts (`fonts.googleapis.com`, with font resources served by Google). The repository does not bundle their font files. The current Google Fonts upstream records identify all three as SIL Open Font License 1.1:

| Font | Upstream copyright and reserved name | Licence source |
| --- | --- | --- |
| DM Sans | 2014, The DM Sans Project Authors | [Google Fonts DM Sans OFL](https://github.com/google/fonts/blob/main/ofl/dmsans/OFL.txt) |
| IBM Plex Mono | 2017, IBM Corp.; reserved font name **Plex** | [Google Fonts IBM Plex Mono OFL](https://github.com/google/fonts/blob/main/ofl/ibmplexmono/OFL.txt) |
| Libre Baskerville | 2012, The Libre Baskerville Project Authors; reserved font name **Libre Baskerville** | [Google Fonts Libre Baskerville OFL](https://github.com/google/fonts/blob/main/ofl/librebaskerville/OFL.txt) |

If a future release bundles or self-hosts these font files, include their original copyright notices and complete OFL text with the distributed fonts, and observe reserved-name restrictions for modified fonts. OFL's requirement to retain that licence applies to font software; it does not require a map drawing or document created with a font to use OFL.

Source records checked on 9 October 2026. These links document externally served font dependencies rather than asserting that font binaries are included in this app package.
