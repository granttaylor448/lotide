const assertArrayEqual = require('../assertArraysEqual.js');
const eqArrays = require('../eqArrays.js');

// assertArrayEqual(actual, expected)

assertArrayEqual(eqArrays([1, 2, 3], [1,2,3]), true)
// eqArrays(actual, expected)