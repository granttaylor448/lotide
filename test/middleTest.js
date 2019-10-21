
const middle = require('../middle.js')
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 2 given an array [1,2,3]", () => {
    const array = [1,2,3];
    assert.deepEqual(middle(array), [2]);
  });
  it("returns [] given an array [1,2]", () => {
    const array = [1,2];
    assert.deepEqual(middle(array), []);
  });
  it("returns [] given an array [1,2,3,4,5,6]", () => {
    const array = [1,2,3,4,5,6];
    assert.deepEqual(middle(array), [3,4]);
  });

});
