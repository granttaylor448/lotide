# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @granttaylor448/lotide`

**Require it:**

`const _ = require('@granttaylor448/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `const assertArrayEqual = function(actual, expected)`: Is passed two arrays and determines if they are equal or not.
* `const assertEqual = function(actual, expected)`: Is passed two strings or numbers and determines if they are equal or not. 
* `const assertObjectsEqual = function(actual, expected)`: Is passed two objects and determines if they are equal or not. 
* `const countLetters = function (string)`: Takes in a string and counts the number of letters in it.
* `const countOnly = function(allItems, itemsToCount)`: Takes in an array of strings and only returns what the object itemsToCount specifies.
* `const eqArrays = function (actual, expected)`: Takes two arrays and outputs whether or not they are equal to each other.
* `const eqObjects = function(object1, object2)`: Takes two objects and outputs if they are equal or not.
* `const findKey = function(object, callback)`: Takes an object and a key: value and returns its key.
* `const findKeyByValue = function (object, value)`: Takes an object and a value and returns the key for that value.
* `const flatten = function(array)`: Given an array with embedded arrays inside of it it will return a single array.
* `const head = function(actual)`: Returns the first item in an array.
* `const letterPositions = function(sentence)`: Takes in a string and returns an object that tells when each letter in the string occurs.
* `const map = function(array, callback)`: Takes in an array of strings or numbers and returns a value for each item in the array of that index.
* `const middle = function(array)`: Takes in an array and returns the middle value. If the array length is even it will return the two middle values.
* `const tail = function(actual)`: Takes in an array and returns the last value in the array.
* `const takeUntil = function(array, callback)`: Takes in an array and returns a new array that stops where the callback indicates.
* `const without = function(array, remove)`: Takes in an array and an item to remove from the array and returns a new array without that item.


