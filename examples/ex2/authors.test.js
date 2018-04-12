const authors = require('./authors');

describe.skip('authors', () => {
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
    const expectedAuthors = [
      'Jesus',
      'James Joyce',
      'Martin Fowler',
    ];
    expect(authors(books)).toEqual(expectedAuthors);
  });
});

