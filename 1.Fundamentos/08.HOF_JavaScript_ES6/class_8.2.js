// ARRAY.FIND - PARA FIXAR;
// FIRST;
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((n) => n % 3 === 0 && n % 5 === 0);

console.log(findDivisibleBy3And5);

// SECOND;
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => name.length === 5);

console.log(findNameWithFiveLetters);

// THIRD;
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((index) => index.id === id).title;
};

console.log(findMusic('31031685'));

// ARRAY.SOME/EVERY - PARA FIXAR;
// FIRST;
const names0 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((e) => e === name);
};

console.log(hasName(names0, 'Ana'));

// SECOND;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((e) => e.age >= 18)
};

console.log(verifyAges(people, 18));