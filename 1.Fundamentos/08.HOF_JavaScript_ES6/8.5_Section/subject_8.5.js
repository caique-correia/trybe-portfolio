// CONSTS;
const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const myList = [5, 2, 3];

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
     // measurementUnit: unidade de medida
];


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

// QUESTION 1;
const rectangleArea = (width, height) => width * height;
// rectangles.forEach((rectangle) => console.log(rectangleArea(...rectangle)));

// QUESTION 2;
const sum = (...parameter) => parameter.reduce((a, b) => a + b);

// QUESTION 3;
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// QUESTION 4;
const filterPeople = (peopleList) => {
  return peopleList.filter(({ bornIn, nationality }) => {
    return bornIn > 1900 && bornIn < 2001 && nationality === 'Australian';
  });
};

//QUESTION 5;
const swap = ([ a, b, c ]) => [ c, b, a ];

// QUESTION 6;
const toObject = ([ Modelo, Marca, Ano ]) => ({ Modelo, Marca, Ano });

// QUESTION 7;
const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;

// QUESTION 8;
const greet = (name, greeting) => greeting ? `${greeting}, ${name}` : `Hi, ${name}`;

// QUESTION 9;
const createYear = ({ spring, summer, autumn, winter }) => [ ...winter, ...spring, ...summer, ...autumn  ];

// CONSOLE.LOG;
console.log(createYear(yearSeasons));

// EXPORTS;
module.exports = {
  rectangles,
  alex,
  gunnar,
  people,
  myList,
  palio,
  shelbyCobra,
  chiron,
  ships,
  yearSeasons,
  rectangleArea,
  sum,
  personLikes,
  filterPeople,
  swap,
  toObject,
  shipLength,
  greet,
  createYear,
};