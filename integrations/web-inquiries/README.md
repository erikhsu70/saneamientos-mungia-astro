# Consultas web

El componente compartido envía a un Cloudflare Worker. El Worker verifica la solicitud y la envía a Google Apps Script. Apps Script guarda una fila en la pestaña `Consultas` de Google Sheets antes de enviar el aviso a `mungia@saneamientosmungia.com`. El correo permite responder al remitente. La referencia evita duplicar la fila cuando se reintenta el mismo envío.

Configura `SPREADSHEET_ID` e `INGRESS_TOKEN` en las propiedades del proyecto de Apps Script. Publica `Code.gs` como aplicación web que ejecuta el propietario. Activa un disparador periódico de `retryPendingEmails` para los avisos pendientes. Conserva el acceso restringido a la hoja.

Publica `worker.mjs` y configura `APPS_SCRIPT_URL` e `INGRESS_TOKEN` como secretos del Worker. Usa la misma clave en ambos servicios. La URL pública del Worker se pasa a Astro como `PUBLIC_INQUIRY_ENDPOINT`. Confirma el envío con una consulta de prueba antes de publicar la compilación en Hostinger. Mientras no se configure esa variable, ambos formularios abren el correo del visitante con los mismos campos y la URL de origen.

La columna «Aviso por correo» indica cuándo se ha enviado el aviso. Una fila guardada se conserva si se produce un error temporal de correo.
