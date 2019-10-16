const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

const countLetters = function (string) {
  const results = {}
  // let newString = string.split("")
  // console.log(newString)
  for (const item of string){
      
    if (letters.includes(item)) {
      
      if (results[item]){
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    } 
  }
  return results
}

const actual = countLetters("lighthouse in the house")

assertEqual(actual['l'], 1)
assertEqual(actual[' '], undefined)
