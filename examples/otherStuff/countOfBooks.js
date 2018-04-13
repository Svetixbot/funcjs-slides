const fp = require('lodash/fp');

const count = books => (
  books.map(({ author }) => author)
    .reduce(
      (counts, author) => ({
        ...counts,
        [author]: counts[author] ? counts[author] + 1 : 1,
      }),
      {},
    )
);

// lodash way
// const count = (books) =>
//   fp.mapValues(
//       (value) => value.length,
//       fp.groupBy((book) => book.author, books))

module.exports = count;
