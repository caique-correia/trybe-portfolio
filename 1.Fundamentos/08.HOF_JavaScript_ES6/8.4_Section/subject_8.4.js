// BASELINE CONST;
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// QUESTION 1;
function flatten(matrix) {
  return matrix.reduce((a, b) => a.concat(b));
};

// QUESTION 2;
// FIRST;
function concatAuthors(bookList) {
  return bookList.reduce((a, b) => `${a}${b.author.name}, `, '');
};

const reduceNames = (bookList) => {
  const result = concatAuthors(bookList);
  const lastIndex = result.lastIndexOf(', ');
  return `${result.substring(0, lastIndex)}.`
};

// SECOND;
function averageAge(bookList) {
  let count = 0;
  return bookList.reduce((a, b) => {
    count += 1;
    const result = a + (b.releaseYear - b.author.birthYear);
    return result;
  }, 0) / count;
};

// THIRD;
function longestNamedBook(bookList) {
  return bookList.reduce((a, b) => {
    return (b.name.length < a.name.length) ? a : b;
  }, bookList[0]);
};

// QUESTION 3;
function containsA(bookList) {
  return bookList.reduce((a, b) => a + b).toLowerCase().split('a').length - 1;
}

console.log(containsA(names));

// TEST EXPORT;
module.exports = {
  arrays,
  books,
  names,
  flatten,
  reduceNames,
  averageAge,
  longestNamedBook,
  containsA,
};