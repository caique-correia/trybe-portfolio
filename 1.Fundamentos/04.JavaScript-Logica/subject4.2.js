// ARRAYS
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu [1];
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


function dice () { 
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
  d2 = dice();
}