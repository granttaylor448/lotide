const eqArrays = function (x, y){
  let match = true
  for(let i =0; i < x.length; i ++){
  if (x[i] !== y[i]) {
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
const without = function(array, remove){
  let newArray = array
  
for (let i =0; i <= remove.length; i ++){
  const index = array.indexOf(remove[i])
if (index > -1){
  newArray.splice(index, 1)
} 
}
return newArray
}

//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
assertArrayEqual(without([1, 2, 3], [1]), [2, 3] )
assertArrayEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"] )

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);