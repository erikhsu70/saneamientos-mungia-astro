# Saneamientos Mungia · migración Astro

Sitio estático en Astro, HTML, CSS y JavaScript nativo. No usa React.

## Vista previa

```sh
npm install
npm run dev
```

Para crear los archivos publicables:

```sh
npm run build
```

El resultado se genera en `dist/`. La base de contenidos está en `src/data/full-data.json` y las imágenes en `public/assets/`.

## Cloudflare Pages

La copia de revisión está publicada en [saneamientos-mungia.pages.dev](https://saneamientos-mungia.pages.dev/). Para actualizarla tras una compilación:

```sh
npm run build
npx wrangler pages deploy dist --project-name=saneamientos-mungia --branch=main
```

Se requiere acceso autorizado a la cuenta de Cloudflare para ejecutar el despliegue. El archivo `public/_headers` indica a los buscadores que no indexen las direcciones de prueba `pages.dev`. El dominio original no está conectado al proyecto.

## Estado

- Hay 1.741 rutas generadas, incluidas 314 entradas del blog y 26 páginas adicionales de paginación.
- Los 314 artículos del blog conservan el texto original completo. Una imagen del artículo sobre empresas de desatrancos urgentes no estaba disponible en la fuente.
- Las 39 páginas de servicios enlazadas desde el footer incorporan ahora el contenido original con sus listas, enlaces e imágenes. La portada, el índice de servicios y el blog mantienen sus diseños propios; las tarjetas del índice de servicios usan sus descripciones originales completas.
- Los cuatro enlaces legales del sitio original respondían 404 y no figuraban en la copia pública de WordPress. Las páginas actuales son textos nuevos, redactados para esta implementación; la empresa debe verificar sus datos y prácticas de tratamiento antes de conectar el dominio definitivo.
- El formulario de contacto abre la aplicación de correo del visitante; requiere un sistema de envío antes de conectar el dominio definitivo.
- El dominio original no se ha modificado. Revisar diseño y contenidos antes de cambiarlo.

## SEO técnico

- `src/pages/sitemap.xml.js` genera automáticamente las 1.740 URLs canónicas, incluidas páginas legales y paginación; `/contacto2/` conserva su ruta y declara `/contacto/` como canónica. `sitemap_index.xml` mantiene disponible la dirección del índice anterior.
- `src/lib/seo.js` genera JSON-LD de Plumber, WebSite, WebPage, Service y BlogPosting con los datos existentes. No se añaden valoraciones, autores ni horarios sin verificar.
- Todas las páginas incluyen título, descripción, canónica y etiquetas para compartir. Las rutas inexistentes reciben una página 404 y no se incluyen en el sitemap.
- La cabecera `noindex` se limita a los dominios de revisión `pages.dev`. Al conectar el dominio definitivo, comprobar las respuestas HTTP y enviar el sitemap en Search Console. La validación local de JSON-LD no equivale a aprobación de resultados enriquecidos por Google.
