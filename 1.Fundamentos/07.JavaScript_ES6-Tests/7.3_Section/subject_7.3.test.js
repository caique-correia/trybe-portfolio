const {
  sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate
} = require('./subject_7.3');

describe('Question 1', () => {
  it('Return 9 from (4, 5).', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Return 0 from (0, 0).', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Throw Error if string.', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it('Throw Error message if string.', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});

describe('Question 2', () => {
  it('Return expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Not return unexpected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Return expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Question 3', () => {
  it('Expect FizzBuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });
  it('Expect Fizz', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });
  it('Expect Buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });
  it('Expect Num', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  it('Expect False', () => {
    expect(myFizzBuzz('15')).toBeFalsy();
  });
});

describe('Question 4', () => {
  it('Encode & Decode are functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('Vogals to numbers', () => {
    expect(encode('a, e, i, o, u')).toMatch('1, 2, 3, 4, 5');
  });
  it('Numbers to vogals', () => {
    expect(decode('1, 2, 3, 4, 5')).toMatch('a, e, i, o, u');
  });
  it('Only vogals converted', () => {
    expect(encode('jester')).toMatch('j2st2r');
    expect(decode('h3s4k1')).toMatch('hisoka');
  });
  it('To match length', () => {
    expect(encode('toMatchLength').length).toBe(13);
    expect(decode('t4M1tchL2ngth').length).toBe(13);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});