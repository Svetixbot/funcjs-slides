const getBooksReadOn = (date) => {
  const booksByDate = {
    today: {
      alice: ['Alice in Wonderland'],
      bob: ['Stranger in a Strange Land', 'Seven More Programming Languages in Seven Weeks'],
      charlie: ['and The Chocolate Factory'],
      dan: ['Seven More Programming Languages in Seven Weeks'],
      egg: ['Seven More Programming Languages in Seven Weeks', 'Egg History'],
    },
    tomorrow: {
      alice: ['Through the Looking-Glass'],
      bob: ['Starship Troopers'],
      charlie: ['Alice in Wonderland'],
    },
  };
  return booksByDate[date];
};

const getReadersOfBooks = (readers, books, date) => {
  const result = [];
  const data = getBooksReadOn(date);
  Object.entries(data).forEach(([reader, booksRead]) => {
    books.forEach((bookId) => {
      if (booksRead.includes(bookId) && readers.includes(reader)) {
        result.push(reader);
      }
    });
  });
  return result;
};

module.exports = getReadersOfBooks;
