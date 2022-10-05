const {
  sum, myRemove, myFizzBuzz, encode, decode,
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

describe('Question 5', () => {
  it('', () => {
    expect().toBe();
  });
});

describe('Question 6', () => {
  it('', () => {
    expect().toBe();
  });
});