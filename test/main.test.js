const chai = require('chai')
const assert = chai.assert
const main = require('../src/main')
const should = chai.should();

// Write your tests below
// make sure your descriptions are not vauge
// Access your function with main.myFunction()


describe("myFunction", () => {

// With no inputs, myFunction returns 0
// myFunction() --> 0

context("called with no parameter", () => {
  it("should return 0", () => {
    assert.equal(main.myFunction(), 0, "equals 0");
  });
});

// With a single input, myFunction returns just that input
// myFunction(a) --> a

context("called with one parameter", () => {
  it("should return that parameter", () => {
    assert.equal(main.myFunction(10), 10, "equals 10");
  });
  it("should return that parameter", () => {
    assert.equal(main.myFunction(-4), -4, "equals -4");
  });
});

// With two number inputs, myFunction returns those inputs added together
// myFunction(1,2) --> 3

context("called with two number parameters", () => {
  it("should return the sum of those inputs", () => {
    assert.equal(main.myFunction(10, -4), 6, "equals 6");
  });
  it("should return the sum of those inputs", () => {
    assert.equal(main.myFunction(-3, -14), -17, "equals -17");
  });
});

// With two string inputs, myFunction returns the strings concatenated
// myFunction('Pika', 'chu') --> 'Pikachu'

context("called with two string parameters", () => {
  it("should return the strings concatenated", () => {
    assert.equal(main.myFunction('bob', 'timmy'), 'bobtimmy', "equals 'bobtimmy'");
  });
});

// Given any number of string inputs, returns all inputs concatenated
// myFunction('This ', 'is ', 'a ', 'string!') --> 'This is a string!'
// myFunction('I ', 'like ', 'turtles!') --> 'I like turtles!'

context("called with any number of string parameters", () => {
  it("should return the strings concatenated", () => {
    assert.equal(main.myFunction('This ', 'is ', 'a ', 'string!'), 'This is a string!', "equals 'This is a string!'");
  });
});

// Given any number of number inputs, returns all inputs summed.
// myFunction(1,2,3,4,5,6,7,100) --> 128
// myFunction(1,2,3) --> 6

context("called with any number of number parameters", () => {
  it("should return the sum of the parameters", () => {
    assert.equal(main.myFunction(1,2,3,4,5,6,7,100), 128, "equals 128");
  });
  it("should return the sum of the parameters", () => {
    assert.equal(main.myFunction(1,2,3), 6, "equals 6");
  });
});

//--------------Stretch------------------
// Write a function that generates a randomish length array of randomish numbers to pass to your function.
// Then write a test that uses that random array as the argument for myFunction





});
