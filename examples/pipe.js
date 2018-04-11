const { reduce } = require('./reduce');

const pipe = (...fns) => x => reduce(fns, (acc, fn) => fn(acc), x);


const removePercentSign = str => str.replace('%', '');
const toNumber = str => Number(str);
const toPercent = num => num / 100;

const percentStringToNumber = pipe(removePercentSign, toNumber, toPercent);

module.exports = {
  pipe,
  percentStringToNumber,
};
