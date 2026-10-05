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
