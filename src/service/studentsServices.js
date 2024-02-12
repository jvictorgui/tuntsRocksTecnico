const { google } = require('googleapis');

// does the request to google sheets API and retrieves the info for all students
const allStudentsData = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });
  const spreadsheetId = '1U1b_4SezsFwMLbEgEtVPwGjCEUWbIqkOKMRqpHrUSGs';
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: 'v4', auth: client });
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: 'engenharia_de_software',
  });
  return { auth, spreadsheetId, client, googleSheets, getRows };
};

// calculates the final grade of the student,
// if the student has more than 25% of absences, he is automatically disapproved
const statusCalculator = (p1, p2, p3, absences) => {
  const finalGrade = Math.ceil((Number(p1) + Number(p2) + Number(p3)) / 3);

  const totalAbsencesLimit = 60 * 0.25;

  const naf = Math.ceil((finalGrade + 50) /2)

  if (absences > totalAbsencesLimit) {
    return {message:'Reprovado por Falta', grade: 0};
  }
  if (finalGrade >= 70) {
    return {message:'Aprovado', grade: 0};
  }
  if (finalGrade >= 50 && finalGrade < 70) {
    return {message:'Exame Final', grade: naf};
  }
  if (finalGrade < 50) {
    return {message:'Reprovado por Nota', grade: 0};
  } 
  return { finalGrade, naf };
}

//mapped the students data to a new and organized array
const mappedStudents = async () => {
  const { getRows } = await allStudentsData(); 
  const filteredStuds = getRows.data.values.slice(3).map((students) => {
    const studentsResults = statusCalculator(students[3], students[4], students[5], students[2]);
    
    return {
      matricula: students[0],
      nome: students[1],
      faltas: students[2],
      p1: students[3],
      p2: students[4],
      p3: students[5],
      situação: studentsResults.message,
      notaAprovaçãoFinal: studentsResults.message === 'Exame Final' ? studentsResults.grade : 0,

    };
  });
  
  return filteredStuds;
};


// gets all the students from the spreadsheet
const getAllStudents = async () => {
  try {
    const students = await mappedStudents();
    console.log(students);

    return { status: 200, data: students };
  } catch (error) {
    console.error('Error getting students data:', error);
    return { status: 500, data: { message: 'Internal Server Error' } };
  }
};

const readStudentStatus = async () => {
    
};

module.exports = {
  getAllStudents,
};