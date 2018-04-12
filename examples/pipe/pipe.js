const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const removePercentSign = str => str.replace('%', '');
const toNumber = str => Number(str);
const toPercent = num => num / 100;

const percentStringToNumber = pipe(removePercentSign, toNumber, toPercent);

// Ceci n'est pas une pipe.
const percentStringToNumber1 = percent => Number(percent.replace('%', '')) / 100;
const percentStringToNumber2 = percent => toPercent(toNumber(removePercentSign(percent)));

module.exports = {
  pipe,
  percentStringToNumber,
  percentStringToNumber1,
  percentStringToNumber2,
};
