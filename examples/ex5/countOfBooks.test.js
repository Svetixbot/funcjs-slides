const countOfBooks = require('./countOfBooks');

describe.skip('count of books', () => {
  it('should count books by author', () => {
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
    const expectedCounts = {
      Jesus: 1,
      'James Joyce': 2,
      'Martin Fowler': 1,
    };
    expect(countOfBooks(books)).toEqual(expectedCounts);
  });
});
