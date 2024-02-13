const express = require('express');
const { google } = require('googleapis');
const { getAllStudentsController, createGradesController } = require('./controller/studentsController');

const app = express();

// read values from all the students in the spreadsheet
app.get('/', async (_request, response) => {
  await getAllStudentsController(_request, response);
});


module.exports = app;
