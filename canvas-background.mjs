/** Explicit canvas colors leave the drawing palette unchanged. */
export function canvasBackgroundColor(background,paperColor){
  return background==='black'?'#000000':background==='white'?'#ffffff':paperColor;
}
