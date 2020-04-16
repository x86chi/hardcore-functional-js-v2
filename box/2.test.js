const halfTheFirstLargeNumber = require('./2');

describe('bigger then 19,  half of first number', () => {
  test('The answer is 25', () => {
    expect(halfTheFirstLargeNumber([1, 4, 50])).toBe(25);
  });
});
