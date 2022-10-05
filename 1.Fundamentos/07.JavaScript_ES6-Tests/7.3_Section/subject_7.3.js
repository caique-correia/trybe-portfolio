// QUESTION 1;
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// QUESTION 2;
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// QUESTION 3;
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// QUESTION 4;
const vogais = ['a', 'e', 'i', 'o', 'u'];
const code = [1, 2, 3, 4, 5];

function encode(text) {
  const caracters = text.split('');
  caracters.forEach((letra, i) => {
    vogais.forEach((vogal, k) => {
      caracters[i] = (letra === vogal) ? code[k] : caracters[i];
    });
  });

  return caracters.join('');
}

function decode(text) {
  const caracters = text.split('');
  caracters.forEach((caracter, i) => {
    code.forEach((num, k) => {
      caracters[i] = (caracter === num.toString()) ? vogais[k] : caracters[i];
    });
  });

  return caracters.join('');
}

// QUESTION 5;

function techList(abilities, name) {
  if (abilities.length === 0) { return 'Vazio!'; }
  abilities.sort();
  const answer = [];
  abilities.forEach((skill) => {
    answer.push({
      tech: skill,
      name,
    });
  }); return answer;
}

// QUESTION 6; 
function hydrate(request) {
  let answer = 0;
  const process = request.split(' ').forEach((n) => {
    if (!isNaN(Number(n))) { answer += Number(n) }
  }); if (answer === 1) { return `${answer} copo de água` };
  return `${answer} copos de água`
}

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
}