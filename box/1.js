const Box = require('./box');

const nextCharForNumberString = (str) =>
  Box(str)
    .map((value) => value.trim())
    .map(parseInt)
    .map((number) => number + 1)
    .fold(String.fromCharCode);

const result = nextCharForNumberString('  64 ');

module.exports = nextCharForNumberString;
