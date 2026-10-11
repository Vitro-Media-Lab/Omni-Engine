/** Group our generated, absolute-coordinate pen paths by ink for pen changes.
 * Input is internal SvgWriter markup: no transforms, clips or inherited styles. */
export function colorPenLayers(markup) {
  const pens = new Map();
  for (const [path] of markup.matchAll(/<path\b[^>]*\/>/g)) {
    const color = path.match(/\bstroke="(#[a-f\d]{6})"/i)?.[1].toLowerCase();
    if (!color || !path.includes('fill="none"')) throw new Error('Color plot contains an unsupported pen path.');
    if (!pens.has(color)) pens.set(color, []);
    pens.get(color).push(path);
  }
  const layers = [...pens].map(([color, paths], index) => ({number:index+1, color, paths:paths.length, markup:paths.join('')}));
  return {
    markup:layers.map(pen=>`<g id="pen-${pen.number}" inkscape:groupmode="layer" inkscape:label="${pen.number} Pen ${pen.color}" data-pen-color="${pen.color}">${pen.markup}</g>`).join('\n'),
    pens:layers.map(({number,color,paths})=>({number,color,paths}))
  };
}
