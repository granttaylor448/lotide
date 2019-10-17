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

//assertArrayEqual(actual, expected);

const words = ["ground", "control", "to", "major", "tom"];
  
const map = function(array, callback) {
  const results = [];
  for (let item of array){
    results.push(callback(item))
  }
  return results;
}
const results1 = map(words, word => word[1]);
//console.log(results1);

assertArrayEqual(results1, [ 'r', 'o', 'o', 'a', 'o' ]);