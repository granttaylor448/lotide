const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//function needs to return a function
const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]){
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

module.exports = countOnly;