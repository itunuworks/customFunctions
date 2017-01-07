// testing code goes here

'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/main.js');

describe("Test for proper arithmetic functionality", function() {
  it("should return 120 as factorial for 5", function() {
    assert(myApp.computeFactorial(5) == 120);
  })
  it("should return 0 as factorial for 1", function() {
    assert(myApp.computeFactorial(0) == 1);
  })
})
