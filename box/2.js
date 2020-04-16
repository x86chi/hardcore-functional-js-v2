const Box = require('./box');

const first = (xs) => xs[0];

const halfTheFirstLargeNumber = (xs) =>
  Box(xs)
    .map((xs) => xs.filter((x) => x >= 20))
    .fold((found) => first(found) / 2);

const res = halfTheFirstLargeNumber([1, 4, 50]);
console.log(res === 25);

module.exports = halfTheFirstLargeNumber;
