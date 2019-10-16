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
const flatten = function(array){
  let newArray = []
for (let i =0; i < array.length; i ++){
  
  if (Array.isArray(array[i])){
    for(let j=0; j < array[i].length; j ++){
      
      newArray.push(array[i][j])
    } 
  } else{
    newArray.push(array[i])
  }
}  return (newArray)
}
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
assertArrayEqual(flatten([[1, 2], [3, 4], [5], [6]]), [1, 2, 3, 4, 5, 6])