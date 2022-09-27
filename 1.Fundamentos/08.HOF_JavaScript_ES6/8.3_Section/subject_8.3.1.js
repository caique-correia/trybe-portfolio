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

// Adicione o código do exercício aqui:
const booksInfo = (bookList) => bookList.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

const booksAuthors = (bookList) => {
  return bookList
    .map((book) => {
      const authorAge = book.releaseYear - book.author.birthYear;
      return ({ age: authorAge, author: book.author.name });
    })
    .sort((a, b) => a.age - b.age);
};

const booksGenre = (bookList) => bookList.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').sort((a, b) => a.name.localeCompare(b.name));

const booksAge = (bookList) => bookList.filter((book) => Number(book.releaseYear) + 60 <= 2022).map((element) => element.name);

const booksSignature = (bookList) => bookList.find((book) => book.author.name.split(' ').filter((piece) => piece.endsWith('.')).length === 3).name;

// const booksSignature = (bookList) => {
//   const first = bookList.map((book) => book.author.name.split('. ').filter((piece, index) => piece.length === 1 && index < 3));
//   return first.filter((e) => e.length === 3)
// }

console.log(booksAge(books));

module.exports = {
  booksInfo,
  booksAuthors,
  booksGenre,
  booksAge,
  booksSignature,
};