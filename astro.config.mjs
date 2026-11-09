import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://saneamientosmungia.com',
  base: process.env.ASTRO_BASE || '/',
  output: 'static',
  trailingSlash: 'always',
});
