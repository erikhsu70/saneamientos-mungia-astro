import fullData from '../data/full-data.json';
import supplementalPages from '../data/supplemental-pages.json';
import reviewedServices from '../data/services-bilbao.json';
import editorial from '../data/city-service-editorial.json';
import areas from '../data/service-areas.json';
import redirects from '../data/service-redirects.json';
import { BILBAO_URGENT_ALTERNATE, BILBAO_URGENT_PATH } from './bilbao-urgent.js';

const normalize = (path) => path.replace(/\/+$/, '') + '/';
const routes = new Set([...fullData.pages, ...supplementalPages].map(({ path }) => normalize(path)));
const areaAliases = { 'urduna-orduna': 'urduna' };
const familyAliases = { 'canalizacion-de-arquetas': 'canalizacion-arquetas' };
const publicResources = {
  muskiz: ['Canal municipal de incidencias de Muskiz', 'https://www.lineaverdemuskiz.org/lv/incidencias_online.asp'],
  vitoria: ['Aguas Municipales de Vitoria-Gasteiz (AMVISA)', 'https://www.vitoria-gasteiz.org/wb021/was/contenidoAction.do?idioma=es&uid=65c21a87_117e9336274__7fbb'],
};

function relatedService(service, area) {
  const candidates = [`/servicios/${service}/${area}/`];
  if (area === 'urduna' || area === 'urduna-orduna') {
    candidates.push(`/servicios/${service}/${area === 'urduna' ? 'urduna-orduna' : 'urduna'}/`);
  }
  if (service === 'canalizacion-arquetas') candidates.push(`/servicios/canalizacion-de-arquetas/${area}/`);
  for (const candidate of candidates) {
    const href = candidate === BILBAO_URGENT_ALTERNATE ? BILBAO_URGENT_PATH : redirects[candidate] || candidate;
    if (routes.has(href) || href === BILBAO_URGENT_PATH) {
      return { href, label: `${editorial[service].name} en ${areas[areaAliases[area] || area][0]}` };
    }
  }
  const generic = `/servicios/${service}/`;
  return { href: redirects[generic] || generic, label: editorial[service].name };
}

export function cityService(path) {
  const match = /^\/servicios\/([^/]+)\/([^/]+)\/$/.exec(path);
  if (!match || redirects[path] || path === BILBAO_URGENT_ALTERNATE) return null;
  const [, family, area] = match;
  const content = editorial[familyAliases[family] || family];
  const region = areas[areaAliases[area] || area];
  if (!content || !region) throw new Error(`Falta contenido de servicio local para ${path}`);
  const [name, access, type = 'City'] = region;
  const title = `${content.name} en ${name}`;
  const description = `${title}. ${content.summary}`;
  const familyPath = `/servicios/${family}/`;
  const general = reviewedServices[redirects[familyPath] || familyPath];
  const technicalSections = general?.details.slice(-4, -1) || [];
  return {
    ...content,
    title,
    description,
    area: { name, access, type },
    technicalSections,
    related: content.related.map((service) => relatedService(service, area)),
    publicResource: family === 'red-saneamiento-municipal' ? publicResources[area] : undefined,
  };
}

// Remove only the repeated catalog of figure, heading and description cards.
export function cleanCityBody(html) {
  const updatedLinks = html.replace(/href="([^"]+)"/g, (original, href) => {
    const target = redirects[href];
    return target ? `href="${target}"` : original;
  });
  return updatedLinks.replace(/<h2\b[^>]*>(?:(?!<\/h2>)[\s\S])*?Nuestros Servicios(?:(?!<\/h2>)[\s\S])*?<\/h2>(?:\s*<figure\b[^>]*>[\s\S]*?<\/figure>\s*<h3\b[^>]*>[\s\S]*?<\/h3>\s*<p(?!\sclass="source-button")[^>]*>[\s\S]*?<\/p>(?:\s*<p class="source-button">[\s\S]*?<\/p>)?){2,}/gi, '');
}
