const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');

//  eqArrays([1, 2, 3], [1, 2, 3]) // => true
//  eqArrays([1, 2, 3], [3, 2, 1]) // => false
//  eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//  eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false )