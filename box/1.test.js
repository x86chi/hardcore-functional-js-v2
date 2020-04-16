const nextCharForNumberString = require('./1');

describe('64 next char is', () => {
  test('A', () => {
    expect(nextCharForNumberString('64')).toBe('A');
  });
});
