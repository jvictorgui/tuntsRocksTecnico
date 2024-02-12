const express = require('express');
const { google } = require('googleapis');



const app = express();


app.get('/', async (_request, response) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: 'v4', auth: client });
    const spreadsheetId = '1U1b_4SezsFwMLbEgEtVPwGjCEUWbIqkOKMRqpHrUSGs';

    const dados = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
        
    })

    // read values from the spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: 'engenharia_de_software'
    })

    // create values in the spreadsheet
    const createData = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: 'engenharia_de_software!A:B',
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [
                ['25', 'Joaquim'],
                ['26', 'Maria'],
            ]
        }
      });
    
        response.send(getRows.data);    
        
});
    






module.exports = app;
