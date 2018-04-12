const isAnElementof = arr => elem => arr.includes(elem);

const isInAlphabet = isAnElementof('abcdefghijklmnopqrstuvwxyz');
const isNumber = isAnElementof('1234567890');

isInAlphabet('a'); // true
isInAlphabet('1'); // false

isNumber('1'); // true
