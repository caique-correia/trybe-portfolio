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

// Q1;
const authorBornIn1947 = () => books
  .find(({ author: { birthYear } }) => birthYear === 1947).author.name;

// Q2;
const smallerName = () => {
  let nameBook = books[0].name;
  books.forEach(({ name }) => name.length < nameBook.length ? nameBook = name : null);
  return nameBook;
};

// Q3;
const getNamedBook = () => books.find(({ name }) => name.length === 26);

// Q4;
const booksOrderedByReleaseYearDesc = () => books.sort((a, b) => b.releaseYear - a.releaseYear);

// Q5;
const everyoneWasBornOnSecXX = () => books
  .every(({ author: { birthYear } }) => birthYear <= 2000 && birthYear > 1900);

// Q6;
const someBookWasReleaseOnThe80s = () => books
  .some(({ releaseYear }) => releaseYear <= 1990 && releaseYear > 1980);

// Q7;
const authorUnique = () =>
  books.every(({author: { name: name1, birthYear: birthYear1 }}) =>
    !books.some(({author: { name: name2, birthYear: birthYear2 }}) =>
      (birthYear1 === birthYear2)
      && (name1 !== name2)));

console.log(
  // authorBornIn1947(),
  // smallerName(),
  // getNamedBook(),
  // booksOrderedByReleaseYearDesc(),
  // everyoneWasBornOnSecXX(),
  // someBookWasReleaseOnThe80s(),
  // authorUnique(),
);
