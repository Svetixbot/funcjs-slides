const authorsWithBooks = require('./authorsWithBooks');

describe('authorsWithBooks', () => {
  it('should return authors with greater than or equal to n books', () => {
    const books = [{
      author: 'Jesus',
      title: 'The Bible',
    }, {
      author: 'James Joyce',
      title: 'Finnegan\'s Wake',
    }, {
      author: 'James Joyce',
      title: 'Ulysses',
    }, {
      author: 'Martin Fowler',
      title: 'Refactoring',
    }];
    expect(authorsWithBooks(books, 2)).toEqual(['James Joyce']);
  });
});
