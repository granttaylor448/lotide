// index
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArrayEqual: assertArrayEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};