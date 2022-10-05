const {
  sum,
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