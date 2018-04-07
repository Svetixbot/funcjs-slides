const twitterHandles = (authors, company) => {
  const result = [];
  authors.forEach((author) => {
    if (author.company === company) {
      const handle = author.twitterHandle;
      if (handle !== null) {
        result.push(handle);
      }
    }
  });
  return result;
};

module.exports = twitterHandles;

