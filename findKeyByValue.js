const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value){
 return Object.keys(object).find(key => object[key] === value);
  } 
  

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
// let v = Object.keys(bestTVShowsByGenre)
// console.log(v)

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);