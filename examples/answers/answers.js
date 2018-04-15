const fp = require('lodash/fp');

const twitterHandles = (authors, company) =>
  authors
    .filter(author => author.company === company)
    .filter(({ twitterHandle }) => twitterHandle)
    .map(({ twitterHandle }) => twitterHandle);

const findAuthors = books => [...new Set(books.map(({ author }) => author))];

const countOfBooks = books => (
  books.map(({ author }) => author)
    .reduce(
      (counts, author) => ({
        ...counts,
        [author]: counts[author] ? counts[author] + 1 : 1,
      }),
      {},
    )
);

/* with lodash */
const createGroup = fp.curry(fp.groupBy)(book => book.author);
const countBooks = fp.curry(fp.mapValues)(value => value.length);

const countOfBooks2 = (books) =>
  countBooks(createGroup(books))

const countOfBooks3 = (books) =>
  fp.flow([createGroup, countBooks])(books)


module.exports = { twitterHandles, findAuthors, countOfBooks, countOfBooks2, countOfBooks3 };
