const assertArrayEqual = require('../assertArraysEqual.js');
const eqArrays = require('../eqArrays.js');
const middle = require('../middle.js')


assertArrayEqual(middle([1,2,3]), [2])
assertArrayEqual(middle([1,2]), [])