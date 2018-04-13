
const fp = require('lodash/fp');

const createGroup = fp.curry(fp.groupBy)(book => book.author);
const countBooks = fp.curry(fp.mapValues)(value => value.length);

// const count2 = (books) =>
//   fp.compose(createGroup)
//   countBooks(createGroup(books))

// const count3 = (books) =>
//   fp.flow([createGroup, countBooks])(books)

module.exports = () => { };
