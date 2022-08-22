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
let media = 0;
let mediaOutput = 'undefined';
let overplace = 0;
let oddNumbers = 0;
let underplace = 0;

for (i = 0; i < numbers.length; i += 1) {
  // console.log(numbers[i]);
}


for (i = 0; i < numbers.length; i += 1) {
  addition += numbers[i];
}

media = addition / numbers.length;

switch (true) {
  case media > 20:
    mediaOutput = 'value higher than 20';
    break;
  case media <= 20:
    mediaOutput = 'value lower or equal to 20';
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
// console.log(media);
// console.log(mediaOutput);
// console.log(overplace);
// console.log(oddNumbers);
// console.log(underplace);

