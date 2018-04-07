const readersOfBooks = require('./readersOfBooks');

describe('readersOfBooks', () => {
  it('should return readers who read books on a given day', () => {
    const readers = ['alice', 'bob', 'charlie', 'dan'];
    const books = ['Alice in Wonderland', 'Seven More Programming Languages in Seven Weeks'];
    const expectedReaders = ['alice', 'bob', 'dan'];
    expect(readersOfBooks(readers, books, 'today')).toEqual(expectedReaders);
  });
});
