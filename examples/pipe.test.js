const { pipe, percentStringToNumber } = require('./pipe');

describe('pipe', () => {
  it('should act like a pipe', () => {
    const times4 = x => x * 4;
    const add2 = x => x + 2;
    expect(pipe(times4, add2)(10)).toBe(42);
  });
  it('should convert percent string to percent', () => {
    expect(percentStringToNumber('12%')).toBe(0.12);
  });
});
