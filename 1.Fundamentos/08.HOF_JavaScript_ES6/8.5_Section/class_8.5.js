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