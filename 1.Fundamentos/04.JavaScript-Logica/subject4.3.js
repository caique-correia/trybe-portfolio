// FIXANDO APRENDIZADOS;
let sum = 0;

for (let i = 0; i <= 100; i += 1) {
  sum += i;
}

// console.log(sum);


let total = 100;
sub = 0;

for (let i = 1; total > 0; i += 1) {
  total -= 5;
  sub += 1;
}

// console.log(sub);


// AGORA À PRÁTICA;
// Fatorial de 10;
let fatorial = 10;
let fatorialOutput = 1;

for (let i = 1; i <= fatorial; i += 1) {
  fatorialOutput = fatorialOutput * i;
}

// console.log(fatorialOutput);


// Anagramas;
let word = 'tryber';
let anagramArray = [];
let anagramString = '';

// word = ['t', 'r', 'y', 'b', 'e', 'r'];

for (let i = word.length - 1; i >= 0; i -= 1) {
  anagramString += word[i]
}

// for (let i = 0; i < anagramArray.length; i += 1) {
//     anagramString += anagramArray[i];
// }

// console.log(anagramString);


// String.length

// // let a;
// let b = '';
// let c;

// for (let i = 0; i < array.length; i += 1) {
//     let a = array.length[i];
//     for (let ia = 0; ia < array[i].length; ia += 1) {
//         b.concat(a[ia]);
//     }
// }

// console.log(b);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let length = array[0];
for (let i = 0; i < array.length; i += 1) {
  switch (true) {
    case array[i].length > length.length:
      length = array[i];
  }
}

console.log(length);


// PRIME NUMBER INPUT;
// let numberInput = 0;
// let primeOutput = 'Prime!';


// switch (true) {
//   case numberInput < 0:
//     primeOutput = 'Negative unacceptable!';
//     break;
//   case numberInput === 0 || numberInput === 1:
//     primeOutput = 'Haha! Funny... but no.';
//     break;
//   default:
//     for (let i = 2; i < numberInput; i += 1) {
//       switch (true) {
//         case numberInput % i === 0:
//           primeOutput = 'Not prime!';
//       }
//     }
// }

// console.log(primeOutput);


// PRIME NUMBERS INTERVAL;
let primeArray = [];
let primeBigger = 0;

for (let i = 1; i <= 50; i += 1) {
  let primeConfig = true
  for (let j = 2; j < i; j += 1) {
    switch (true) {
      case i % j === 0:
        primeConfig = false;
    }
  }
  if (i > 1 && primeConfig === true) {
    primeArray.push(i);
    if (i > primeBigger) {
      primeBigger = i;
    }
  }
}
// console.log(primeArray);
// console.log(primeBigger);


// BÔNUS!!!
let vertex = '*';
const edge = 5;

for (let i = 0; i < edge; i += 1) {
  let square = '';
  for (let i = 0; i < edge; i += 1) {
    square += vertex;
  }
  console.log(square);
}
