const express = require('express');
const { getAllStudentsController } = require('./controller/studentsController');

const app = express();

// read values from all the students in the spreadsheet
app.get('/', async (_request, response) => {
  await getAllStudentsController(_request, response);
});

module.exports = app;
