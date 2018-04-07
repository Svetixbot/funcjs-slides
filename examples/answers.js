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

const intersection = (arr1, arr2) => arr1.filter(e => arr2.includes(e));

const getReadersOfBooks = (readers, books, date) => {
  const data = getBooksReadOn(date);

  return Object.entries(data)
    .filter(([reader]) => readers.includes(reader))
    .filter(([, booksRead]) => intersection(books, booksRead).length > 0)
    .map(([reader]) => reader);
};

const twitterHandles = (authors, company) =>
  authors
    .filter(author => author.company === company)
    .filter(({ twitterHandle }) => twitterHandle)
    .map(({ twitterHandle }) => twitterHandle);


module.exports = { getReadersOfBooks, twitterHandles };

