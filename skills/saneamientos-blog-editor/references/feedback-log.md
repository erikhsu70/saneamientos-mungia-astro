# Registro de feedback editorial

Actualizado: 18 de noviembre de 2026.

## Investigación, originalidad y canibalización

- Investigar cada artículo seriamente y redactarlo de forma distinta.
- No inventar empresas, servicios, capacidades ni zonas atendidas.
- Revisar lo ya publicado antes de proponer o escribir un tema nuevo.
- Evitar temas iguales o demasiado parecidos que puedan canibalizarse.
- No repetir empresas cuando existan alternativas reales y pertinentes; tampoco mantener siempre el mismo orden.
- No repetir constantemente las mismas secciones, temas, comparaciones o problemas como si fueran una plantilla.
- Los títulos, wording, estructura, secciones y enlaces deben ser únicos para cada post.

## Formato, títulos y jerarquía

- Trabajar en Markdown real porque el usuario quiere conservar una fuente editable.
- Incluir el título también como H1 dentro del cuerpo Markdown.
- Los títulos deben ser una frase, no dos fragmentos separados por dos puntos.
- Cuando el artículo desarrolla pasos, indicar el número en el título.
- Colocar la lista-resumen de pasos al principio y retirar su copia de la ubicación anterior.
- Introducir un H2 antes de desarrollar una serie de pasos y usar H3 para cada paso.
- No usar subheadings de forma plana o incoherente.
- No enumerar todas las secciones, únicamente las alternativas, pasos o problemas que lo necesiten.
- No usar raya larga para incisos; usar comas o reformular.
- Antes de las FAQs debe existir un cierre práctico más desarrollado, sin llamarlo “Conclusión”.
- El último H2 debe ser `Preguntas Frecuentes (FAQs)`.
- La sección de contacto visual no cuenta como sección editorial y no debe ser H2.

## Respuestas iniciales y listas

- La respuesta inicial debe ser corta. La ampliación debe ir debajo de la lista o en el desarrollo.
- Las listas-resumen iniciales deben usar viñetas aunque el título anuncie un número de pasos o etapas. La numeración se conserva en los H3 del desarrollo.
- Cuando una sección presenta un conjunto cerrado, como cuatro señales, incluir la cantidad en el H2 y numerar cada H3 subordinado.
- Comenzar los elementos de las listas con mayúscula y mantener una puntuación uniforme.
- En el artículo de depuración, el resumen de las siete etapas se convirtió en un párrafo breve situado primero; la lista aparece a continuación.
- En el artículo de arquetas, la lista de seis pasos se movió debajo del H1 y se eliminó de su posición anterior.
- Evitar dos listas iniciales que expliquen esencialmente lo mismo.

## Saneamientos Mungia

- Incluir una sección propia y extensa de Saneamientos Mungia con detalles concretos del proceso de trabajo.
- Mencionar a Saneamientos Mungia de forma natural a lo largo del texto, no una sola vez ni de forma repentina.
- Mantener claras las fronteras entre los trabajos de la empresa y los de gestores públicos o instalaciones de depuración.

## Enlaces

- Los anchors deben ser palabras clave suficientemente descriptivas.
- Un anchor de una sola palabra como “seguro” o “vivienda” resulta irrelevante; se corrigió a expresiones como “condiciones del seguro”.
- No repetir anchors ni destinos dentro del mismo artículo.
- Verificar que cada enlace lleva a una página cuyo H1 y contenido coinciden con el anchor.
- No sobreenlazar. En el artículo de depuración, 25 enlaces fueron excesivos, 14 y nueve siguieron pareciendo demasiados; la versión aceptada se redujo a cinco.
- Añadir fuentes externas cuando aporten autoridad, priorizando organismos oficiales como MITECO, CDC, EPA o INSST.
- No repetir dos veces el mismo organismo, anchor o URL sin una razón editorial.
- En preview, los enlaces se resuelven contra `127.0.0.1`; al copiar deben convertirse en URLs finales de `saneamientosmungia.com`.

## Listicles de empresas

- Usar como mínimo siete alternativas.
- Enumerar las alternativas, no todas las secciones.
- En la lista inicial, enlazar únicamente Saneamientos Mungia.
- Preferir “Estas son las mejores empresas a considerar...” frente a una frase centrada solo en el número de empresas.
- No reutilizar siempre las mismas empresas ni el mismo orden, salvo que la investigación no permita alternativas fiables.

## Preview y copia

- Cuando el usuario pida optimizar un post y confirme que se haga directamente, ejecutar la reescritura completa sin solicitar otra aprobación intermedia.
- Entregar siempre una preview después de cualquier cambio.
- Usar una URL con parámetro de versión para evitar que el navegador enseñe una copia antigua.
- Si el usuario sigue viendo la versión anterior, comprobar si el servidor local se ha detenido y reiniciarlo.
- “Copy Markdown” copia el código fuente con `#`, `##` y frontmatter; no sirve para pegar con formato visual.
- El botón `Copiar con formato` debe copiar HTML enriquecido e incluir el título, encabezados, listas, tablas, negritas y links finales.

## Incidencias corregidas que no deben repetirse

- Una sustitución heredada del HTML insertó dos veces la sección “Cómo actúa Saneamientos Mungia ante una arqueta que rebosa”. Las sustituciones antiguas no deben aplicarse a artículos renderizados desde Markdown.
- Una lista de pasos quedó repetida en el inicio y dentro de su sección. Debe existir una sola lista-resumen y después el desarrollo en H3.
- El navegador mostró una preview antigua porque el servidor local se había detenido. Verificar servidor, build y cache busting antes de entregar el enlace.

## Últimas versiones de referencia

- Arquetas: `content/blog/que-hacer-cuando-una-arqueta-rebosa.md`, última arquitectura aprobada tras mover los seis pasos al inicio y eliminar duplicados.
- Depuración: `content/blog/como-se-depuran-aguas-residuales.md`, última densidad aprobada de cinco enlaces totales.
