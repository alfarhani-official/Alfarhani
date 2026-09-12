const SPREADSHEET_ID = '10xp-3o5b0YMDzFfc-FFEFCLaF7WDjOp7N7rS1YZuGqc';

function getSubscriptionsSheet() {
  let spreadsheet;

  if (SPREADSHEET_ID && SPREADSHEET_ID !== 'PASTE_YOUR_SHEET_ID_HERE') {
    spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  } else {
    spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  }

  if (!spreadsheet) {
    throw new Error('Spreadsheet not found. Add your Google Sheet ID in SPREADSHEET_ID.');
  }

  let sheet = spreadsheet.getSheetByName('Subscriptions');
  if (!sheet) {
    sheet = spreadsheet.insertSheet('Subscriptions');
  }

  return sheet;
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const sheet = getSubscriptionsSheet();

    const phone = String(payload.phone || '').trim();
    const email = String(payload.email || '').trim();
    const gender = String(payload.gender || '').trim();
    const source = String(payload.source || 'Home page').trim();
    const submittedAt = String(payload.submittedAt || new Date().toISOString()).trim();

    if (!phone || !email || !gender) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, message: 'Phone, email, and gender are required.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const headers = ['Phone', 'Email', 'Gender', 'Source', 'Date'];
    const existingHeaders = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), headers.length)).getValues()[0];

    if (!existingHeaders || existingHeaders.filter(Boolean).length === 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    } else {
      const headerRow = existingHeaders.map((value) => String(value || '').trim());
      headers.forEach((header) => {
        if (!headerRow.includes(header)) {
          const nextCol = headerRow.length + 1;
          sheet.getRange(1, nextCol).setValue(header);
          headerRow.push(header);
        }
      });
    }

    const nextRow = sheet.getLastRow() + 1;
    const row = [phone, email, gender, source, submittedAt];
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Subscription saved.' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.message || 'Unknown server error.' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: 'Subscription endpoint ready.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
