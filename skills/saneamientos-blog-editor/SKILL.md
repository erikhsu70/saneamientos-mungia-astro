---
name: saneamientos-blog-editor
description: Investiga, redacta, actualiza, enlaza, previsualiza y prepara para publicación artículos del blog de Saneamientos Mungia. Úsalo para cualquier post nuevo o existente de este repositorio.
---

# Editor del blog de Saneamientos Mungia

Lee también [el registro de feedback](references/feedback-log.md) antes de actuar. Este skill recoge preferencias editoriales, no una plantilla reutilizable.

## Objetivo

Crear artículos útiles, investigados y claramente distintos entre sí. Cada post debe responder a su intención concreta, reflejar de forma natural el trabajo de Saneamientos Mungia y estar listo para copiar, revisar y publicar sin rehacer su arquitectura.

## Antes de redactar

1. Revisa los títulos, slugs, enfoques y enlaces de los artículos existentes para evitar duplicados y canibalización.
2. Investiga el tema con fuentes actuales y fiables. Para cuestiones técnicas, usa fuentes oficiales o primarias. No inventes servicios, zonas, empresas, capacidades ni datos.
3. Decide un ángulo, una arquitectura, un orden y recursos editoriales propios del tema. Compara con los últimos artículos y cambia deliberadamente lo que pueda parecer repetido.
4. Si es una actualización, conserva la URL pública salvo instrucción expresa, preserva la fecha original y actualiza `modified`.

Cuando el usuario pida optimizar un artículo y autorice hacerlo directamente, completa la investigación, edición y preview sin detenerte en otro punto de aprobación intermedio.

## Diferenciación obligatoria

- No reutilices automáticamente la misma introducción, orden de secciones, conclusión, FAQs, tabla, número de elementos, empresas, links o wording.
- No repitas por sistema bloques como “problemas”, “comparación de ofertas” o “cómo elegir”. Inclúyelos solo si ayudan a esa intención de búsqueda.
- La singularidad no consiste en renombrar encabezados. Cambia el enfoque, las preguntas que resuelve, la secuencia y el tipo de evidencia.
- Las reglas de calidad de esta guía son constantes, pero la estructura visible debe variar.

## Formato y arquitectura

- La fuente canónica del artículo es un archivo Markdown real en `content/blog/`.
- Incluye frontmatter y el mismo título como H1 dentro del cuerpo Markdown.
- El título debe ser una sola frase. Si el contenido promete un número de pasos o alternativas, incluye ese número en el título.
- Empieza con una respuesta breve y directa. Si hay una lista que resume pasos, empresas o alternativas, colócala al principio.
- En las listas-resumen iniciales, usa viñetas aunque el título indique cuántos pasos o etapas contiene el desarrollo. Reserva la numeración para los H3 que explican la secuencia.
- Después de una lista-resumen, introduce un H2 específico antes del desarrollo. Usa H3 para los pasos o elementos subordinados.
- No dupliques listas, secciones, resúmenes ni encabezados en distintas partes del artículo.
- No numeres todas las secciones. Numera únicamente pasos, problemas o alternativas cuando la numeración aporte claridad.
- Cuando un H2 agrupe un conjunto cerrado de señales, problemas o criterios, indica la cantidad en ese H2 y numera sus H3 correspondientes.
- Empieza cada elemento de una lista con mayúscula y mantén el mismo criterio de puntuación en toda la lista.
- Antes de las FAQs debe haber un cierre práctico con un título útil, nunca un encabezado genérico llamado “Conclusión”.
- La última sección editorial debe ser exactamente `## Preguntas Frecuentes (FAQs)`.
- El bloque visual de contacto no debe ser un H2 ni aparecer en el índice.
- No uses raya larga para incisos, usa comas o reescribe la frase.

## Saneamientos Mungia

- Incluye una sección propia, extensa y específica sobre cómo interviene Saneamientos Mungia en el problema tratado.
- Menciona también la empresa de manera natural en otros puntos relevantes. No debe aparecer una única vez, de repente, al final.
- No atribuyas a Saneamientos Mungia trabajos que correspondan a un gestor público, una EDAR u otro tercero. Explica con precisión el tramo o servicio en el que participa.
- Evita párrafos comerciales vacíos. Relaciona la empresa con diagnóstico, medios, proceso, límites y siguiente acción.

## Enlaces

- Usa una densidad moderada. Cada enlace debe ampliar una decisión, explicar un concepto o llevar a un servicio directamente relacionado.
- No fijes un número universal. Empieza con pocos enlaces y añade solo los que mejoren el artículo. Si visualmente dominan el texto, sobran.
- No repitas destinos ni anchors dentro de un artículo.
- El anchor debe ser una palabra clave descriptiva, no una palabra vaga como “seguro”, “vivienda”, “raíces” o “arquetas”, ni una oración promocional completa.
- Comprueba que el H1 y el contenido real de cada destino coinciden con lo que promete el anchor.
- Combina enlaces internos relevantes con pocas fuentes externas oficiales. No enlaces dos veces la misma entidad o fuente salvo necesidad real.
- En la copia enriquecida, convierte las rutas internas a URLs absolutas de `https://saneamientosmungia.com/`; nunca copies enlaces de `127.0.0.1`.

## Listicles de empresas

- Investiga empresas reales y adecuadas al servicio y la zona. No inventes alternativas.
- Usa al menos siete alternativas cuando el usuario pida un listado de empresas.
- Cambia las alternativas y su orden respecto de otros posts cuando la investigación lo permita. Si no es posible, prioriza la veracidad.
- Enumera las alternativas individualmente, no todas las secciones del artículo.
- En la lista-resumen inicial, enlaza únicamente Saneamientos Mungia salvo que el usuario indique lo contrario.
- Usa la fórmula “Estas son las mejores empresas a considerar...” cuando corresponda al encargo, no “Estas son ocho empresas...”.

## Copia, preview y publicación

- La función nativa “Copy Markdown” copia sintaxis Markdown. Para copiar con formato, usa el botón `Copiar con formato` de la preview.
- El botón debe copiar H1, H2, H3, listas, tablas, negritas y enlaces como HTML enriquecido, con texto plano como respaldo.
- Después de cada cambio, ejecuta el build, verifica el HTML y entrega una preview actualizada con un parámetro de versión nuevo para evitar caché.
- Si la preview parece antigua, comprueba el servidor local y reinícialo. No asegures que está actualizada sin verificar el HTML generado.
- Al entregar un artículo, proporciona la preview. Proporciona también la URL final pública cuando el usuario la solicite o el artículo se publique.
- No publiques ni hagas `push` hasta que el usuario lo pida expresamente.

## Comprobaciones antes de entregar

- Build correcto.
- Una sola ruta y canonical correctos.
- Un solo H1 en la página renderizada.
- Sin encabezados o secciones duplicados.
- Jerarquía H2/H3 coherente con la arquitectura del artículo.
- `Preguntas Frecuentes (FAQs)` es el último H2 editorial.
- Una sola sección específica de Saneamientos Mungia y menciones naturales adicionales.
- Enlaces relevantes, destinos correctos, anchors descriptivos y sin duplicados.
- El botón de copia produce formato enriquecido y URLs públicas.
- Preview con cache busting entregada después del último cambio.

## Referencias actuales

Estos archivos reflejan el último estado revisado, pero no deben copiarse como plantilla:

- `content/blog/que-hacer-cuando-una-arqueta-rebosa.md`
- `content/blog/como-se-depuran-aguas-residuales.md`
