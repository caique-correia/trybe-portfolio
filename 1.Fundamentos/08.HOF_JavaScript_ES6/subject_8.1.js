// NOVA PESSOA CONTRATADA;
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const generateEmail = (name) => `${name.toLowerCase().replace(' ', '_')}@trybe.com`;
const newEmployee = (name) => ({ Nome: name, Email: generateEmail(name) });

// console.log(newEmployees(newEmployee));

// SORTEADOR DE LOTERIA;
const randomNumberGenerator = (maxResult) => Math.ceil(Math.random() * maxResult);
const compareLuckyNumber = (luckyNumber, RNG) => luckyNumber === RNG(5) ? 'Parabéns, você ganhou!' : 'Tente novamente...';

// console.log(compareLuckyNumber(5, randomNumberGenerator));

// CORRETOR AUTOMÁTICO DE EXAME;
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  switch (true) {
    case studentAnswer === 'N.A':
      return 0;
    case studentAnswer === rightAnswer:
      return 1;
    default:
      return 0.5;
  }
};

const answersReading = (rightAnswers, studentAnswers, callback) => {
  let result = 0;
  for (let i in rightAnswers) {
    result += callback(rightAnswers[i], studentAnswers[i]);
  }
  return result;
};

console.log(answersReading(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
