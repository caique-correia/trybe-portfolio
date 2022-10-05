const {
  sum, myRemove,
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

// describe('Question 3', () => {
//   it('', () => {
//     expect(myRemove()).toBe();
//   });
//   it('', () => {
//     expect(myRemove()).toBe();
//   });
//   it('', () => {
//     expect(myRemove()).toBe();
//   });
// });