const findAuthors = books => [...new Set(books.map(({ author }) => author))];

module.exports = findAuthors;

