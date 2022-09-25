// PART I;
// First;
const testingScope = (escopo) => {
  if (escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Second;

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {

  // Seu código aqui.
  return oddsAndEvens.sort((a, b) => a - b); // reduction;
  for (let i = 1; i < oddsAndEvens.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (oddsAndEvens[i] < oddsAndEvens[j]) {
        let numberHold = oddsAndEvens[i];
        oddsAndEvens[i] = oddsAndEvens[j];
        oddsAndEvens[j] = numberHold;
      }
    }
  }
  let numberSpace = `${oddsAndEvens[0]}`
  for (let i = 1; i < oddsAndEvens.length; i += 1) {
    numberSpace += `, ${oddsAndEvens[i]}`
  }
  return `Os números ${numberSpace} se encontram ordenados de forma crescente!`
}

console.log(sortOddsAndEvens()); // será necessário alterar essa linha 😉

// PART II;
// First;
const number = 4;
const factorial = number => {
  let result = number
  for (let i = number - 1; i > 0; i -= 1) {
    result *= i;
  }
  return result
}

const fatorialRecursive = number > 1 ? number * factorial(number - 1) : 1

console.log(`Esse é o fatorial ${factorial(number)}`)
console.log(fatorialRecursive);

// Second; 
const phrase = 'Antônio foi ao banheiro e não sabemos o que aconteceu';

const biggestWord = phrase => {
  const altPhrase = phrase.split(' ');
  let biggerWord = altPhrase[0];
  for (let i = 0; i < altPhrase.length; i += 1) {
    const verifyBiggerWord = (altPhrase[i].length > biggerWord.length) ? biggerWord = altPhrase[i] : false;
  }

  return biggerWord
}

const biggestWordSplit = phrase => phrase.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(biggestWord(phrase));
console.log(biggestWordSplit(phrase));

// // Third;
// const btnClickHere = document.getElementById('btn-click-here');
// const counterSpan = document.getElementById('counter');
// btnClickHere.addEventListener('click', () => counterSpan.innerText = parseInt(counterSpan.innerText) + 1);

// Fourth;
const substituaX = (nome) => {
  const phrase1 = 'Tryber x aqui!';
  return phrase1.replace('x', nome);
};

const minhasSkills = (callback) => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  return `${callback}\nMinhas três principais habilidades são:\n${skills[0]}\n${skills[1]}\n${skills[2]}`

}

console.log(minhasSkills(substituaX('Caíque')));
