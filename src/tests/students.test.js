const { statusCalculator, mappedStudents, getAllStudents } = require('../service/studentsServices');
const { mockedStudents } = require('./mockStudents');

describe('Students Service Tests', function () {
  describe('statusCalculator', function () {
    it('should return "Aprovado" when final grade is 70 or more', function () {
      const result = statusCalculator(70, 70, 70, 0);
      expect(result.message).toBe('Aprovado');
      expect(result.grade).toBe(0);
    });
    it('should return "Exame Final" when final grade is between 50 and 70', function () {
      const result = statusCalculator(50, 50, 50, 15);
      expect(result.message).toBe('Exame Final');
      expect(result.grade).toBe(50);
    });
    it('should return "Reprovado por Falta" when absences higher than 25%', function () {
      const result = statusCalculator(50, 50, 50, 16);
      expect(result.message).toBe('Reprovado por Falta');
      expect(result.grade).toBe(0);
    });
    it('should return "Reprovado por Nota" when final grade is less than 50', function () {
      const result = statusCalculator(49, 49, 49, 0);
      expect(result.message).toBe('Reprovado por Nota');
      expect(result.grade).toBe(0);
    });
  });
  describe('mappedStudents', function () {
    it('should return the first student', async function () {
      const result = await mappedStudents();
      const firstStudent = result[0];
      expect(firstStudent).toEqual(mockedStudents[0]);
    });
    it('should return the student object with correct keys', async function () {
      const result = await mappedStudents();
      const firstStudent = result[0];
      expect(firstStudent).toHaveProperty('matricula');
      expect(firstStudent).toHaveProperty('nome');
      expect(firstStudent).toHaveProperty('faltas');
      expect(firstStudent).toHaveProperty('p1');
      expect(firstStudent).toHaveProperty('p2');
      expect(firstStudent).toHaveProperty('p3');
      expect(firstStudent).toHaveProperty('situação');
      expect(firstStudent).toHaveProperty('notaAprovaçãoFinal');
    });
  });
});
