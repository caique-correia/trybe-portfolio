// SPREAD OPERATOR;
const specialFruit = ['Pêra', 'Uva', 'Maçã'];

const additionalItens = ['Salada Mista', 'O Que Você Quer', '!Pista'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

// console.log(fruitSalad(specialFruit, additionalItens));

// OBJECT DESTRUCTURING;
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};


const presentation = (userList, jobIbnfosList) => {
  const completeInfo = { ...userList, ...jobIbnfosList };
  const { name, age, nationality, profession, squad, squadInitials } = completeInfo;
  return `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}.
  I work as a ${profession} and my squad is ${squadInitials}-${squad}.`
};

// console.log(presentation(user, jobInfos));

//ARRAY DESTRUCTURING;
// FIRST;
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [salute, message] = saudacoes;

// saudacoes[1](saudacoes[0]); // Anterior
// message(salute); // Posterior

// SECOND;
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida);

// THIRD;
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

// console.log(numerosPares);

// DEFAULT DESTRUCTURING;
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson));
console.log(getNationality(person));