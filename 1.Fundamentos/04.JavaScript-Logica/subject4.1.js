// VARIÁVEIS;
let myName = 'Caíque';
const birthCity = 'Salvador';
const birthYear = '1998'

// birthYear = birthYear + 32; 

// console.log(myName, birthCity, birthYear);

// TP, TD, OA; 
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

// !!#2;
const base = 5;
let height = 8;

const area = base * height;
const perimeter = 2 * (base + height);

// console.log(area);
// console.log(perimeter);

//CONDIÇÕES IF/ELSE;
const score = 72;

if (score >= 80) {
  // console.log('Parabéns, você foi aprovado(a)');
} else if (score < 80 && score >= 60) {
  // console.log('Você está na nossa lista de espera');
} else if (score < 60) {
  // console.log('Você foi reprovado(a)');
} else {
  // console.log(ERROR);
};

// OPERADORES LÓGICOS;
const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  // console.log('Muito obrigado pela refeição :)');
} else {
  // console.log('Acho que houve um engano com meu pedido');
}


const bebidaPrincipal = 'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  // console.log("Obrigado por me atender :D")
} else {
  // console.log("Ei, eu não pedi isso!");
}

// SWITCH AND CASE;
let faixaEtaria = 'idoso';

switch (faixaEtaria) {
  case 'adolescente':
    // console.log('Consulte a classificação do filme');
    break;
  case 'adulto':
    // console.log('A pessoa adulta é classificada para assistir qualquer filme');
    break;
  case 'idoso':
    // console.log('A pessoa idosa é classificada para assistir qualquer filme');
    break;
  default:
  // console.log('só pode assistir filmes livres');
}



mes = 'Trybe';
let estacaoDoAno = '?';

switch (mes) {
  case 'janeiro':
  case 'fevereiro':
  case 'março':
    estacaoDoAno = 'Verão';
    break;
  case 'abril':
  case 'maio':
  case 'junho':
    estacaoDoAno = 'Outono';
    break;
  case 'julho':
  case 'agosto':
  case 'setembro':
    estacaoDoAno = 'Inverno';
    break;
  case 'outubro':
  case 'novembro':
  case 'dezembro':
    estacaoDoAno = 'Primavera';
}

// console.log(estacaoDoAno); // 'Outono'


let state = 'aprovada';
let report = 'não se aplica';

switch (state) {
  case 'aprovada':
    report = 'aprovada';
    break;
  case 'lista':
    report = 'lista';
    break;
  case 'reprovada':
    report = 'reprovada';
    break;
}

// console.log(report);

// AGORA À PRÁTICA!
let a = 12;
let b = 4;
let c = 3;
let operators = [];
let biggerOfTwo = 'undefined';
let biggerOfThree = 'undefined';
let tendency = 'undefined';
let triangle = 'undefined';
let chessInput = 'Rook';
let chessOutput = 'undefined';
let scoreInput = 70
let scoreOutput = 'undefined';
let evenOutput = 'undefined';
let oddOutput = 'undefined';
let priceOutput = 'undefined';
const priceBuy = 10;
const priceSell = 20;


operators.push(a + b);
operators.push(a - b);
operators.push(a * b);
operators.push(a / b);
operators.push(a % b);

switch (true) {
  case a > b:
    biggerOfTwo = 'a is bigger';
    break;
  case a < b:
    biggerOfTwo = 'b is bigger';
}

switch (true) {
  case a > b:
    switch (true) {
      case a > c:
        biggerOfThree = 'a is bigger';
        break
      case a < c:
        biggerOfThree = 'c is bigger';
    } break;
  case a < b:
    switch (true) {
      case b > c:
        biggerOfThree = 'b is bigger';
        break;
      case b < c:
        biggerOfThree = 'c is bigger';
    }
}


switch (true) {
  case a > 0:
    tendency = 'positive';
    break;
  case a < 0:
    tendency = 'negative';
    break;
  case a == 0:
    tendency = 'zero';
}


switch (true) {
  case (a + b + c) === 180:
    triangle = 'this can be a triangle';
    break;
  case (a + b + c) > 180 || (a + b + c) < 180:
    triangle = 'this can NOT be a triangle'
}


switch (chessInput.toLowerCase()) {
  case 'pawn':
  case 'rook':
    chessOutput = 'Vertical and Horizontal';
    break;
  case 'bishop':
    chessOutput = 'Diagonals';
    break;
  case 'knight':
    chessOutput = 'L shape';
    break;
  case 'queen':
  case 'king':
    chessOutput = 'Vertical, Horizontal and Diagonals';
    break;
  default:
    chessOutput = 'Unidentifiable piece';
}


switch (true) {
  case scoreInput > 100 || scoreInput < 0:
    scoreOutput = 'Invalid Score!'
  case scoreInput >= 90:
    scoreOutput = 'A';
    break;
  case scoreInput >= 80:
    scoreOutput = 'B';
    break;
  case scoreInput >= 70:
    scoreOutput = 'B';
    break;
  case scoreInput >= 60:
    scoreOutput = 'B';
    break;
  case scoreInput >= 50:
    scoreOutput = 'B';
    break;
  case scoreInput >= 0:
    scoreOutput = 'B';
}


if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  evenOutput = true;
} else {
  evenOutput = false;
}


if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  oddOutput = true;
} else {
  oddOutput = false;
}

priceSell - priceBuy * 1.2
switch (true) {
  case priceSell < 0 || priceBuy < 0:
    priceOutput = 'Negative value(s) unaccepted';
    break;
  case priceSell > 0 && priceBuy > 0:
    priceOutput = priceSell - priceBuy * 1.2;
}

console.log(operators);
console.log(biggerOfTwo);
console.log(biggerOfThree);
console.log(tendency);
console.log(triangle);
console.log(chessOutput);
console.log(scoreOutput);
console.log(evenOutput);
console.log(oddOutput);
console.log(priceOutput);
