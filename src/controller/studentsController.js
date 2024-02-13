const { getAllStudents, createGrades } = require('../service/studentsServices'); 

const getAllStudentsController = async (_request, response) => {
  const { status, data } = await getAllStudents();
  return response.status(status).json(data);
};
const createGradesController = async (request, response) => {
  try {
    const { studentStatus, studentFinalGrade } = request.body;
    const { status, data } = await createGrades(studentStatus, studentFinalGrade);
    return response.status(status).json(data);
  } catch (error) {
    console.error('Error in createGradesController:', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = {
  getAllStudentsController,
  createGradesController,
};
