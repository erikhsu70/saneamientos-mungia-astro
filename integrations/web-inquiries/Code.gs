const INQUIRY_TAB = 'Consultas';
const INQUIRY_RECIPIENT = 'mungia@saneamientosmungia.com';

function doPost(event) {
  try {
    const request = JSON.parse(event.postData.contents);
    const settings = PropertiesService.getScriptProperties();
    const token = settings.getProperty('INGRESS_TOKEN');
    if (!token || request.token !== token) return result({ ok: false });

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.openById(settings.getProperty('SPREADSHEET_ID')).getSheetByName(INQUIRY_TAB);
      const entry = request.entry;
      const lastRow = sheet.getLastRow();
      const existing = lastRow > 1
        ? sheet.getRange(2, 1, lastRow - 1).createTextFinder(entry.id).matchEntireCell(true).findNext()
        : null;
      const row = existing ? existing.getRow() : lastRow + 1;
      if (!existing) {
        const received = Utilities.formatDate(new Date(), 'Europe/Madrid', 'yyyy-MM-dd HH:mm:ss');
        const values = [entry.id, received, 'Nueva', entry.nombre, entry.correo, entry.telefono,
          entry.municipio, entry.asunto, entry.mensaje, entry.origen, 'Pendiente'];
        const cells = sheet.getRange(row, 1, 1, values.length);
        cells.setNumberFormat('@');
        cells.setRichTextValues([values.map(value => SpreadsheetApp.newRichTextValue().setText(value).build())]);
        SpreadsheetApp.flush();
      }

      const emailStatus = sheet.getRange(row, 11);
      if (emailStatus.getValue() !== 'Enviado') {
        const [, , , name, email, phone, city, subject, message, source] = sheet.getRange(row, 1, 1, 11).getDisplayValues()[0];
        try {
          MailApp.sendEmail({
            to: INQUIRY_RECIPIENT,
            replyTo: email,
            name: 'Saneamientos Mungía · Consultas web',
            subject: 'Consulta web · ' + (subject || 'Solicitud de información'),
            body: ['Referencia: ' + entry.id, 'Nombre: ' + name, 'Correo: ' + email,
              'Teléfono: ' + phone, 'Municipio: ' + city, 'Página: ' + source, '', message].join('\n'),
          });
        } catch (error) {
          return result({ ok: true, notified: false });
        }
        emailStatus.setValue('Enviado');
        SpreadsheetApp.flush();
      }
      return result({ ok: true, notified: true });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    return result({ ok: false });
  }
}

function retryPendingEmails() {
  const settings = PropertiesService.getScriptProperties();
  const sheet = SpreadsheetApp.openById(settings.getProperty('SPREADSHEET_ID')).getSheetByName(INQUIRY_TAB);
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return;
  const pending = sheet.getRange(2, 11, lastRow - 1).createTextFinder('Pendiente').matchEntireCell(true).findAll();
  for (const cell of pending.slice(0, 20)) {
    const id = sheet.getRange(cell.getRow(), 1).getDisplayValue();
    doPost({ postData: { contents: JSON.stringify({ token: settings.getProperty('INGRESS_TOKEN'), entry: { id } }) } });
  }
}

function result(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
