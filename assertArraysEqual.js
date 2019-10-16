const args = process.argv.slice(2);
let actual = args[0]
// console.log(actual)
let expected = args[1]
// console.log(expected)
const eqArrays = function (actual, expected){
  let match = true
  for(let i =0; i < actual.length; i ++){
  if (actual[i] !== expected[i]) {
    match = false   
  }  
} return match

}
const assertArrayEqual = function(actual, expected) {
  let equivalentArrays = eqArrays(actual, expected);
  if (equivalentArrays === true) {
    console.log(`😃😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (equivalentArrays ===false) {
    console.log(`😡😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArrayEqual(actual, expected);