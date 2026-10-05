import fullData from '../data/full-data.json';
import { blogPageCount, blogPageUrl } from '../lib/blog.js';
import { canonicalUrl } from '../lib/seo.js';

export const prerender = true;
const escapeXml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export function GET() {
  const paths = [...fullData.pages.map((page) => page.path), ...Array.from({ length: blogPageCount - 1 }, (_, i) => blogPageUrl(i + 2))];
  const urls = [...new Set(paths.map(canonicalUrl))];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
