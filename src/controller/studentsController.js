const { getAllStudents } = require('../service/studentsServices'); 

// sends the students data to the app.js
const getAllStudentsController = async (_request, response) => {
  const { status, data } = await getAllStudents();
  return response.status(status).json(data);
};

module.exports = {
  getAllStudentsController,
};
