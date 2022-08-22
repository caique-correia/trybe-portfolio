// CLASS!!!
let sum = 0;

for (let i = 1; i <= 50; i += 1) {
  sum += i;
}

console.log(sum);


let divide = 0

for (let i = 2; i <= 150; i += 1) {
  switch (true) {
    case i % 3 === 0:
      divide += 1;
  }
}

switch (true) {
  case divide === 50:
    divide = '5² * root³(8)';
}

console.log(divide);


let P1;
let P2;
let output = 'undefined';

// switch (true) {
//   case P1 === P2:
//     output = 'Draw';
//     break;
//   case P1 === 'pedra':
//     switch (true) {
//       case P2 === 'papel':
//         output = 'P2 Wins';
//         break;
//       case P2 === 'tesoura':
//         output = 'P1 Wins';
//         break;
//     }
//   case P1 === 'papel':
//     switch (true) {
//       case P2 === 'pedra':
//         output = 'P1 Wins';
//         break;
//       case P2 === 'tesoura':
//         output = 'P2 Wins';
//         break;
//     }
//   case P1 === 'tesoura':
//     switch (true) {
//       case P2 === 'pedra':
//         output = 'P2 Wins';
//         break;
//       case P2 === 'papel':
//         output = 'P1 Wins';
//         break;
//     }

//   }


switch (true) {
  case P1 === P2:
    output = 'Draw';
    break;
  case P1 === 'pedra' && P2 === 'tesoura':
    output = 'P1 Wins';
    break;
  case P1 === 'papel' && P2 === 'pedra':
    output = 'P1 Wins';
    break;
  case P1 === 'tesoura' && P2 === 'papel':
    output = 'P1 Wins';
    break;
  default:
    output = 'P2 Wins';
}

console.log(output)


