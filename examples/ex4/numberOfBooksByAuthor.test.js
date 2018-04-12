const numberOfBooksByAuthor = require('./numberOfBooksByAuthor');

describe.skip('numberOfBooksByAuthor', () => {
  it('should find unique authors from books', () => {
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
    expect(numberOfBooksByAuthor(books)('James Joyce')).toEqual(2);
    expect(numberOfBooksByAuthor(books)('Martin Fowler')).toEqual(1);
  });
});

