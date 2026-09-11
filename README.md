# Form to Google Sheet

This project exposes a simple Express API that accepts form submissions and appends them to a Google Sheet using a Google Service Account.

## Features

- Express server
- POST endpoint at `/submit`
- Server-side validation for email, phone, and gender
- Appends rows to a Google Sheet
- Adds a server-generated timestamp as the first column
- Uses environment variables for config
- Includes a simple local HTML test form

## Project structure

- `server.js` — Express server and Google Sheets logic
- `test-form.html` — simple standalone HTML form for local testing
- `.env` — local environment configuration
- `.env.example` — example env file
- `package.json` — dependencies and scripts

## 1) Create a Google Cloud project

1. Go to the Google Cloud Console: https://console.cloud.google.com/
2. Create a new project or select an existing one.
3. In the left sidebar, open "IAM & Admin" > "Service Accounts".
4. Click "Create Service Account".
5. Give it a name, for example: `sheet-writer`.
6. Finish the creation process.

## 2) Enable the Google Sheets API

1. In the Google Cloud Console, go to "APIs & Services" > "Library".
2. Search for "Google Sheets API".
3. Click it and press "Enable".

## 3) Create and download the service account JSON key

1. In "IAM & Admin" > "Service Accounts", open the service account you created.
2. Go to the "Keys" tab.
3. Click "Add Key" > "Create new key".
4. Choose JSON and download it.
5. Save the JSON file in a safe location on your machine.

Example path:

`C:/Users/Mohammed/Desktop/Expedition/Passion/Web Design/Backend/form-to-sheet-508112-5cd485e5f68b.json`

## 4) Place the JSON key path in `.env`

Create a `.env` file in the project root and set:

```env
PORT=3001
GOOGLE_SHEET_ID=your_google_sheet_id_here
GOOGLE_APPLICATION_CREDENTIALS=C:/path/to/your/service-account-key.json
```

Use the full absolute path to the downloaded JSON file.

## 5) Share the Google Sheet with the service account

This is required. Otherwise the API call will fail with permission errors.

1. Open your target Google Sheet.
2. Click the "Share" button in the top-right corner.
3. Add the service account email from the JSON file.
4. Give it at least "Editor" access.
5. Save the sharing settings.

The service account email usually looks like this:

`your-service-account-name@your-project-id.iam.gserviceaccount.com`

## 6) Get the Google Sheet ID

The Google Sheet ID is the long value in the URL:

`https://docs.google.com/spreadsheets/d/PASTE_SHEET_ID/edit`

Copy the `PASTE_SHEET_ID` value and set it in `.env`.

## 7) Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open the local test form in a browser:

```text
test-form.html
```

4. Fill out the form and submit. The request will be sent to:

```text
http://localhost:3001/submit
```

5. The server validates the data and appends the row to the Google Sheet.

## API contract

### POST `/submit`

Request body:

```json
{
  "email": "name@example.com",
  "phone": "+964 770 000 0000",
  "gender": "Man"
}
```

The server adds a timestamp before saving as:

```text
Timestamp | Email | Phone | Gender
```

## Notes

- The Sheets API must be enabled for the project.
- The service account must have access to the target sheet.
- The `.env` file is not committed to source control.
