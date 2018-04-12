// fn = (accumulator, currentValue, [currentIndex], [array] )
const reduce = (array, fn, inititalValue) => {
  let accumulator = inititalValue;
  array.forEach((val, i) => {
    accumulator = accumulator !== undefined
      ? fn(accumulator, val, i, array)
      : val;
  });
  return accumulator;
};

const map = (arr, fn) => reduce(
  arr,
  (acc, val) => acc.concat(fn(val)),
  [],
);

const filter = (arr, fn) => reduce(
  arr,
  (acc, val) => (fn(val) ? acc.concat(val) : acc),
  [],
);
module.exports = {
  reduce,
  map,
  filter,
};

