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

const middle = function(array) {
  let centre = Math.floor(array.length / 2)
  let newArray = []
  //for (let i =0; i < array.length; i ++){
    
    //console.log(array[i])
     if (array.length < 3){
      newArray = []
    }else if (array.length % 2 === 0){
      // console.log(array[centre-1], array[centre])
      newArray.push(array[centre-1])
      newArray.push(array[centre])
    } else {
      // console.log(array[centre])
      newArray.push(array[centre])
    }
   return newArray
}
assertArrayEqual(middle([1,2,3]), [2])
assertArrayEqual(middle([1,2]), [])
// console.log(middle([1,2,3]))