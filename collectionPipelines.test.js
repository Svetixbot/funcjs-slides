const { twitterHandles } = require('./collectionPipelines');

describe('authors', () => {
  describe('twitterHandles', () => {
    it('should return twitter handles for authors in a given company', () => {
      const authors = [{
        name: 'Alice',
        twitterHandle: '@alice',
        company: 'ThoughtWorks',
      }, {
        name: 'Bob',
        twitterHandle: '@bob',
        company: 'Bob Enterprises',
      }, {
        name: 'Charlie',
        twitterHandle: null,
        company: 'ThoughtWorks',
      }, {
        name: 'Dan',
        twitterHandle: '@dan',
        company: 'ThoughtWorks',
      }];

      const thoughtWorksTwitterHandles = ['@alice', '@dan'];
      expect(twitterHandles(authors, 'ThoughtWorks')).toEqual(thoughtWorksTwitterHandles);
    });
  });
});

