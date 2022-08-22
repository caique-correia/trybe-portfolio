// ARRAYS
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfólio');

menu.push['Contato'];

// console.log(menuServices);
// console.log(indexOfPortfolio);
// console.log(menu);

// FOR
let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  //   console.log(cars[index]);
}

// EXERCÍCIO;
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (i = 0; i < groceryList.length; i += 1) {
  // console.log(groceryList[i]);
}


let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let i of names) {
  // console.log(i)
}


function dice() {
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
  d2 = dice();
}

// AGORA À PRÁTICA!
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let addition = 0;
let average = 0;
let averageOutput = 'undefined';
let overplace = 0;
let oddNumbers = 0;
let underplace = 0;

for (i = 0; i < numbers.length; i += 1) {
  // console.log(numbers[i]);
}


for (i = 0; i < numbers.length; i += 1) {
  addition += numbers[i];
}

average = addition / numbers.length;

switch (true) {
  case average > 20:
    averageOutput = 'value higher than 20';
    break;
  case average <= 20:
    averageOutput = 'value lower or equal to 20';
}


for (i = 0; i < numbers.length; i += 1) {
  switch (true) {
    case numbers[i] > overplace:
      overplace = numbers[i];
      break;
  }
}


for (i = 0; i < numbers.length; i += 1) {
  switch (true) {
    case numbers[i] % 2 !== 0:
      oddNumbers += 1;
      break;
  }
}

switch (true) {
  case oddNumbers === 0:
    oddNumbers = 'No odd numbers found';
}


for (i = 0; i < numbers.length; i += 1) {
  switch (true) {
    case numbers[i] < numbers[i + 1]:
      underplace = numbers[i];
      break;
  }
}


for (i = 0; i < 25; i += 1) {
  // console.log(i+1);
  // console.log((i+1)/2);
}


// console.log(addition);
// console.log(average);
// console.log(averageOutput);
// console.log(overplace);
// console.log(oddNumbers);
// console.log(underplace);


// BÔNUS!!!
let numbersB = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersC = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let copyB = [];

for (let index = 1; index < numbersB.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbersB[index] > numbersB[secondIndex]) {
      let position = numbersB[index];
      numbersB[index] = numbersB[secondIndex];
      numbersB[secondIndex] = position;
    }
  }
}


for (let i = 1; i < numbersC.length; i += 1) {
  copyB.push(numbersC[i] * numbersC[i - 1])
}

// console.log(numbersB);
// console.log(copyB);
