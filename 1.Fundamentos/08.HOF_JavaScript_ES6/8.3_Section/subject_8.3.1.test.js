const {
  booksInfo,
  booksAuthors,
  booksGenre,
  booksAge,
  booksSignature,
} = require('./subject_8.3.1');

const booksReduced = [
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
  }];

describe('Teste "booksInfo" baseada em "books"', () => {
  it('Verifica retorno "Título - Gênero - Autor"', () => {
    expect(booksInfo(booksReduced)).toEqual([
      'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
      'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien'
    ]);
  });
});

describe('Teste "booksAuthors" baseada em "books"', () => {
  it('Verifica retorno "{age: , author: }" ordenado por idade dos autores.', () => {
    expect(booksAuthors(booksReduced)).toEqual([
      { age: 43, author: 'George R. R. Martin', },
      { age: 62, author: 'J. R. R. Tolkien', },
    ]);
  });
});

describe('Teste "booksGenre" baseada em "books"', () => {
  it('Verifica retorno de genero fantasia/ficção científica.', () => {
    expect(booksGenre(booksReduced)).toEqual(booksReduced);
  });
});

describe('Teste "booksAge" baseada em "books"', () => {
  it('Verifica livros com, pelo menos, 60 anos de lançamento, decrescentemente', () => {
    expect(booksAge(booksReduced)).toEqual([ 'O Senhor dos Anéis' ]);
  });
});

describe('Teste "booksSignature" baseada em "books"', () => {
  it('Verifica autor cuja assinatura inicia com três iniciais', () => {
    expect(booksSignature(booksReduced)).toBe('O Senhor dos Anéis');
  })
})