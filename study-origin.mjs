/** A corrected local datum centers the study at zero; downloaded bounds can
 * remain asymmetric because their original geographic coverage is preserved. */
export function studyCenter(map = {}) {
  if (map.provenance?.originCorrection) return [0, 0];
  const extent = map.extent?.length === 4 && map.extent.every(Number.isFinite) ? map.extent : [-500, -500, 500, 500];
  return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
}
