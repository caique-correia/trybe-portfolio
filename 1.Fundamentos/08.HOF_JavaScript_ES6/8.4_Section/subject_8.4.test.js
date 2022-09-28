const {
  arrays,
  books,
  names,
  students,
  grades,
  flatten,
  reduceNames,
  averageAge,
  longestNamedBook,
  containsA,
  studentAverage,
} = require('./subject_8.4');

describe('Question 1', () => {
  it('Utilize o reduce para transformar uma matriz em um array.', () => {
    expect(flatten(arrays)).toEqual(['1', '2', '3', true, 4, 5, 6]);
  });
});

describe('Question 2', () => {
  it('Crie uma string com os nomes de todas as pessoas autoras.', () => {
    expect(reduceNames(books)).toEqual("George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");
  });

  it('Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.', () => {
    expect(averageAge(books)).toBe(43);
  });

  it('Encontre o livro com o maior nome.', () => {
    expect(longestNamedBook(books)).toEqual({
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    });
  });
});

describe('Question 3', () => {
  it('Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.', () => {
    expect(containsA(names)).toBe(20);
  });
});

describe('Question 4', () => {
  it('Crie um novo array de objetos a partir das informações de students e grades, no formato { name: , average: }.', () => {
    expect(studentAverage(students, grades)).toEqual([
      { name: 'Pedro Henrique', average: 7.8 },
      { name: 'Miguel', average: 9.2 },
      { name: 'Maria Clara', average: 8.8 },
    ]);
  });
});

