const express = require('express');
const { google } = require('googleapis');
const { getAllStudentsController } = require('./controller/studentsController');

const app = express();

// read values from all the students in the spreadsheet
app.get('/', async (_request, response) => {
  await getAllStudentsController(_request, response);
});

// route to add values to the spreadsheet

app.post('/add', async (_request, response) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });
  const spreadsheetId = '1U1b_4SezsFwMLbEgEtVPwGjCEUWbIqkOKMRqpHrUSGs';
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: 'v4', auth: client });

  const createData = await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: 'engenharia_de_software!A:B',
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [
                        
      ],
    },
    
  });
  response.send(createData);
}); 

module.exports = app;
