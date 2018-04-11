const { reduce1 } = require('./reduce');

describe('reduce', () => {
  it('should be able to sum things', () => {
    const add = (a, b) => a + b;

    expect(reduce1([20, 20, 2, 3], add, 10)).toBe(55);
  });
  it('should be able to flatten arrays', () => {
    const flattened = reduce1([
      [0, 1],
      [2, 3],
      [4, 5],
    ], (acc, value) => acc.concat(value));
    expect(flattened).toEqual([0, 1, 2, 3, 4, 5]);
  });
});
