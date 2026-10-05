import fullData from '../data/full-data.json';
import socialLinks from '../data/social-links.json';

export const SITE_URL = 'https://saneamientosmungia.com';
export const normalizePath = (path) => `${path.replace(/\/+$/, '')}/`;
export const canonicalUrl = (path) => new URL(normalizePath(path === '/contacto2/' ? '/contacto/' : path), SITE_URL).href;
const pages = new Map(fullData.pages.map((page) => [normalizePath(page.path), page]));

export function pageSeo({ path, title, description }) {
  const normalized = normalizePath(path);
  const page = pages.get(normalized);
  const url = canonicalUrl(path);
  const image = new URL(page?.featuredImage || page?.images?.[0] || page?.blocks?.find((block) => block.type === 'image')?.src || '/assets/hero.jpg', SITE_URL).href;
  const businessId = `${SITE_URL}/#business`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${url}#webpage`;
  const isPost = page?.kind === 'post';
  const isService = (normalized.startsWith('/servicios/') && normalized !== '/servicios/') || normalized === '/desatrancos/';
  const graph = [
    {
      '@type': 'Plumber', '@id': businessId,
      name: 'Saneamientos Mungia', legalName: 'Anulaciones Sépticas Mungia, S.L.',
      url: `${SITE_URL}/`, telephone: '+34944460209', email: 'mungia@saneamientosmungia.com',
      sameAs: socialLinks.map((social) => social.url),
      logo: `${SITE_URL}/assets/77f581a8a3068608.png`, image: `${SITE_URL}/assets/hero.jpg`,
      address: { '@type': 'PostalAddress', streetAddress: 'Polígono Pinoa, 2-H', addressLocality: 'Zamudio', addressRegion: 'Bizkaia', postalCode: '48170', addressCountry: 'ES' },
      contactPoint: { '@type': 'ContactPoint', telephone: '+34601004005', contactType: 'Urgencias de saneamiento', availableLanguage: 'es' },
    },
    { '@type': 'WebSite', '@id': websiteId, name: 'Saneamientos Mungia', url: `${SITE_URL}/`, inLanguage: 'es', publisher: { '@id': businessId } },
    {
      '@type': normalized.startsWith('/contacto') ? 'ContactPage' : normalized === '/servicios/' || /^\/blog\/(page\/\d+\/)?$/.test(normalized) ? 'CollectionPage' : 'WebPage',
      '@id': webpageId, url, name: title, description, inLanguage: 'es', isPartOf: { '@id': websiteId },
      ...(isPost || isService ? { mainEntity: { '@id': `${url}#${isPost ? 'article' : 'service'}` } } : {}),
    },
  ];
  if (isPost) graph.push({
    '@type': 'BlogPosting', '@id': `${url}#article`, headline: page.title, description, image,
    mainEntityOfPage: { '@id': webpageId }, publisher: { '@id': businessId }, inLanguage: 'es',
    ...(page.date ? { datePublished: page.date.slice(0, 10) } : {}),
    ...(page.modified ? { dateModified: page.modified.slice(0, 10) } : {}),
  });
  if (isService) graph.push({
    '@type': 'Service', '@id': `${url}#service`, url,
    name: page?.heading || page?.blocks?.find((block) => /^h[1-3]$/.test(block.type))?.text || title.replace(' - Saneamientos Mungia', ''),
    description, provider: { '@id': businessId }, mainEntityOfPage: { '@id': webpageId },
  });
  return { url, image, isPost, structuredData: { '@context': 'https://schema.org', '@graph': graph } };
}
