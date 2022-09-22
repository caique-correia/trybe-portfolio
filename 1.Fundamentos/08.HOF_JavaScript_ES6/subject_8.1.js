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
