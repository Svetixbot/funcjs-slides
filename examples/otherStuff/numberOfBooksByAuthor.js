const countByAuthor = books => (
  books.map(({ author }) => author)
    .reduce(
      (counts, author) => ({
        ...counts,
        [author]: counts[author] ? counts[author] + 1 : 1,
      }),
      {},
    )
);

const numberOfBooksByAuthor = books => requiredAuthor => countByAuthor(books)[requiredAuthor];

// const numberOfBooksByAuthor = books => requiredAuthor => (
//   books.map(({ author }) => author)
//     .reduce(
//       (counts, author) => ({
//         ...counts,
//         [author]: counts[author] ? counts[author] + 1 : 1,
//       }),
//       {},
//     )[requiredAuthor]
// );

module.exports = { countByAuthor, numberOfBooksByAuthor };

