// fn = (accumulator, currentValue, [currentIndex], [array] )
const reduce1 = (array, fn, inititalValue) => {
  let accumulator = inititalValue;
  array.forEach((val, i) => {
    accumulator = accumulator !== undefined
      ? fn(accumulator, val, i, array)
      : val;
  });
  return accumulator;
};


module.exports = {
  reduce1,
};

