import { expect, assert } from 'chai'
import { example } from './example'

describe('initialization', () => {
  it('just works', () => {
    // expect(example()).to.equal("works")
    assert.equal(example(), "hello world")
  })
});

// var assert = require('assert');
// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });
