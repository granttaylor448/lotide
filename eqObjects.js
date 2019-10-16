const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function (actual, expected){
  let match = true
  let length = 0;
  if (actual.length > expected.length) {
    length = actual.length
  } else {
    length = expected.length
  }
  for(let i =0; i < length; i ++){
  if (actual[i] !== expected[i]) {
    match = false   
  }  
} return match
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let output = true
  if (Object.keys(object1).length !== Object.keys(object2).length){
    output = false
  }  
    for (const item of Object.keys(object1)){
    //console.log(Object.keys(object1)[item])
    if (object1[item] !== object2[item]){
      output = false
    } 
    if (Array.isArray(object1[item]) === true && Array.isArray(object2[item]) === true){
      if (eqArrays(object1[item], object2[item]) === true){
        //console.log(eqArrays(object1[item], object2[item]))
        output = true
      } else {
        output = false
      }
    }
    }
    return output
  }
  



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
