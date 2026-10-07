export const LOCATION_MAP = '/assets/source/7ac0440d1f-Frame-206.png';
export function restoreLocationMap(html = '') {
  const linkedRatings = html.replace(/<a\b[^>]*>\s*(<img\b[^>]*src="[^"]*valoracion[^"]*"[^>]*>)\s*<\/a>|(<img\b[^>]*src="[^"]*valoracion[^"]*"[^>]*>)/g, (_, linked, plain) => `<a href="https://maps.app.goo.gl/vnSHLWkojk3SfG7x5" target="_blank" rel="noopener noreferrer" aria-label="Ver reseñas en Google Maps">${linked || plain}</a>`);
  return linkedRatings.replace(/(<h[23]\b[^>]*>[^]*?<\/h[23]>)([^]*?)(?=<h[23]\b|$)/g, (section, heading, body) => {
    if (!/d[oó]nde\s+estamos/i.test(heading.replace(/<[^>]+>/g, ''))) return section;
    const corrected = body.replace(/<img\b[^>]*src="[^"]*(?:bd7f288b|Captura-de-pantalla-2025-01-28)[^"]*"[^>]*>/g, `<img class="location-map" src="${LOCATION_MAP}" alt="Mapa de las zonas de servicio en Bizkaia" loading="lazy">`);
    return heading + (/<img\b/.test(corrected) ? corrected : `<figure class="location-map-figure"><img class="location-map" src="${LOCATION_MAP}" alt="Mapa de las zonas de servicio en Bizkaia" loading="lazy"></figure>` + corrected);
  });
}
