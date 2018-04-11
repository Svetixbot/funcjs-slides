const { reduce, map, filter } = require('./reduce');

describe('reduce', () => {
  it('should be able to sum things', () => {
    const add = (a, b) => a + b;

    expect(reduce([20, 20, 2, 3], add, 10)).toBe(55);
  });
  it('should be able to flatten arrays', () => {
    const flattened = reduce([
      [0, 1],
      [2, 3],
      [4, 5],
    ], (acc, value) => acc.concat(value));
    expect(flattened).toEqual([0, 1, 2, 3, 4, 5]);
  });
});
describe('map', () => {
  it('should be able to apply a function to each element', () => {
    const plus1 = a => a + 1;
    const numbersPlus1 = map([1, 2, 3, 4, 5], plus1);
    expect(numbersPlus1).toEqual([2, 3, 4, 5, 6]);
  });
});

describe('filter', () => {
  const isGreaterThan5 = num => num > 5;
  const numbersGreaterThan5 = filter([3, 8, 4, 8, 2, 4, 7, 37, 1], isGreaterThan5);
  expect(numbersGreaterThan5).toEqual([8, 8, 7, 37]);
});
