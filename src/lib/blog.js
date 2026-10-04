import fullData from '../data/full-data.json';

export const POSTS_PER_PAGE = 12;
export const blogPosts = fullData.pages
  .filter((page) => page.kind === 'post')
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
export const blogPageCount = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
export const blogPageUrl = (page) => page === 1 ? '/blog/' : `/blog/page/${page}/`;
export const blogFallbackImages = fullData.pages
  .find((page) => page.path === '/blog/')?.blocks
  ?.filter((block) => block.type === 'image')
  .slice(0, 6)
  .map((block) => block.src) || [];
