// // PART I;
// const valueInput1 = document.getElementById('value1');
// const valueInput2 = document.getElementById('value2');
// const resultP = document.getElementById('result')
// const button = document.getElementById('button');

// const verifyIsEmpty = () => {
//   if (valueInput1.value === '' || valueInput2.value === '') {
//     throw new Error('Todos os campos devem ser preenchidos!');
//   }
// };

// const verifyIsNaN = (value1, value2) => {
//   if (Number.isNaN(value1) || Number.isNaN(value2)) {
//     throw new Error('Válidos apenas caracteres númericos!');
//   }
// };

// const printResult = (value1, value2) => {
//   const result = value1 + value2;
//   resultP.innerHTML = `Resultado: ${result}`;
// };

// const printError = error => resultP.innerHTML = error;

// const resetValues = () => {
//   valueInput1.value = '';
//   valueInput2.value = '';
// };

// const sum = () => {
//   const value1 = Number(valueInput1.value);
//   const value2 = Number(valueInput2.value);

//   try {
//     verifyIsEmpty();
//     verifyIsNaN(value1, value2);
//     printResult(value1, value2);
//   } catch (error) {
//     printError(error);
//     console.warn(error);
//   } finally {
//     resetValues();
//   }
// };

// window.onload = () => {
//   button.addEventListener('click', sum);
// }

// PART II;
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return `Olá, ${order.order.delivery.deliveryPerson}! Entrega para: 
  ${order.name}, Telefone: ${order.phoneNumber}, 
  R. ${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}`;
};

// console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const newCostumer = order.name = 'Luiz Silva';
  const newPrice = order.payment.total = '50';
  const flavors = Object.keys(order.order.pizza);
  return `Olá ${newCostumer}, o total do seu pedido de 
  ${flavors[0]}, ${flavors[1]} e ${order.order.drinks.coke.type} é R$${newPrice},00.`
};

// console.log(orderModifier(order));

// PART III;
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos Jesus',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewKey = (object, key, value) => object.key = value;
const listKeys = (object) => Object.keys(object);
const listValues = (object) => Object.keys(object);
const objectLength = (object) => listKeys(object).length;

const studentCount = (list) => {
  const lessons = Object.keys(list);
  let totalStudents = 0
  for (let i = 0; i < lessons.length; i += 1) {
    let actualLesson = lessons[i];
    totalStudents += Number(list[actualLesson].numeroEstudantes);
  }
  return totalStudents;
};

const searchKey = (object, position) => Object.values(object)[position];

const verifyPairing = (object, key, value) => object[key] === value ? true : false

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(lesson2);
// console.log(addNewKey(lesson2, 'turno', 'noite'));
// console.log(listKeys(lesson2), listValues(lesson2));
// console.log(objectLength(lesson2));
// console.log(allLessons);
// console.log(studentCount(allLessons));
// console.log(searchKey(lesson2, 0));
// console.log(verifyPairing(lesson2, 'materia', 'História'));
// console.log(verifyPairing(lesson2, 'materia', 'Matemática'));

// BONUS!;
const mathStudentsCount = (list) => {
  const keys = Object.keys(list);
  let totalCount = 0
  for (let i = 0; i < keys.length; i += 1) {
    list[keys[i]].materia === 'Matemática' ? totalCount += Number(list[keys[i]].numeroEstudantes) : false;
  }
  return totalCount;
}

const classList = (list, professor) => {
  const keys = Object.keys(list);
  let subjectsList = [];
  for (let i = 0; i < keys.length; i += 1) {
    list[keys[i]].professor === professor ? subjectsList.push(list[keys[i]].materia) : false;
  }
  return subjectsList;
};

const studentsProfessor = (list, professor) => {
  const keys = Object.keys(list);
  let totalCount = 0
  for (let i = 0; i < keys.length; i += 1) {
    list[keys[i]].professor === professor ? totalCount += Number(list[keys[i]].numeroEstudantes) : false;
  }
  return totalCount;
};

const professorApply = (list, professor) => {
  const keys = Object.keys(list);
  for (let i = 0; i < keys.length; i += 1) {
    if (list[keys[i]].professor === professor) {
      return ({
        professor: (list[keys[i]].professor), aulas: classList(list, professor), estudantes: studentsProfessor(list, professor),
      })
    }
  }
};

console.log(mathStudentsCount(allLessons));
console.log(professorApply(allLessons, 'Carlos Jesus'));