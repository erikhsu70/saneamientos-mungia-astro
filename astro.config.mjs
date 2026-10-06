import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://saneamientosmungia.com',
  base: '/saneamientos-mungia-astro',
  output: 'static',
  trailingSlash: 'always',
});
