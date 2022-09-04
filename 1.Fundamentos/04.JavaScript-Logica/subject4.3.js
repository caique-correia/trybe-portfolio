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
let anagramString = '';

for (let i = word.length - 1; i >= 0; i -= 1) {
  anagramString += word[i]
}

// console.log(anagramString);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let length = array[0];
for (let i = 0; i < array.length; i += 1) {
  switch (true) {
    case array[i].length > length.length:
      length = array[i];
  }
}

// console.log(length);

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
// const square = document.getElementById('square')
// const right = document.getElementById('right');
// const rightReverse = document.getElementById('rightReverse');
// const equil = document.getElementById('equil');
// const equilEmpty = document.getElementById('equilEmpty');

const edge = 5;
const newEdge = 7;
const mediumEdge = Math.ceil(edge / 2);
const newMediumEdge = Math.ceil(newEdge / 2);

for (let i = 0; i < edge; i += 1) {
  let square = '';
  for (let j = 0; j < edge; j += 1) {
    square += '*';
  }
  console.log(square);
}

for (let i = 0; i < edge; i += 1) {
  let right = '';
  for (let j = 0; j < edge; j += 1) {
    if (j <= i) {
      right += '*';
    }
  }
  console.log(right);
}

for (let i = 0; i < edge; i += 1) {
  let rightRev = '';
  for (let j = edge - 1; j >= 0; j -= 1) {
    if (j <= i) {
      rightRev += '*';
    } else {
      rightRev += ' ';
    }
  }
  console.log(rightRev);
}

for (let i = 1; i <= mediumEdge; i += 1) {
  let equil = '';
  for (let j = mediumEdge; j > i; j -= 1) {
    equil += ' ';
  } for (let k = 1; k <= (i * 2) - 1; k += 1) {
    equil += '*';
  }
  console.log(equil);
}

for (let i = 1; i <= newMediumEdge; i += 1) {
  let equilEmpty = '';
  if (i !== newMediumEdge) {
    for (let j = newMediumEdge; j > i; j -= 1) {
      equilEmpty += ' ';
    }
    equilEmpty += '*';
    for (let k = 1; k <= (i * 2) - 3; k += 1) {
      equilEmpty += ' ';
    }
    if (i > 1) {
      equilEmpty += '*';
    }
  } else {
    for (let l = 1; l <= newEdge; l += 1) {
      equilEmpty += '*';
    }
  }
  console.log(equilEmpty);
}

const inputPrime = 37;
let flag = true;
console.log(!!test);

for (let i = 2; i < inputPrime; i += 1) {
  if (inputPrime % i === 0) {
    flag = false;
  }
}

if (flag) {
  console.log(`${inputPrime} is prime`);
} else {
  console.log(`${inputPrime} is NOT prime`);
}
