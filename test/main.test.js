const chai = require('chai')
const assert = chai.assert
const main = require('../src/main')

// Write your tests below
// make sure your descriptions are not vauge
// Access your function with main.myFunction()



// With no inputs, myFunction returns 0
// myFunction() --> 0

// With a single input, myFunction returns just that input
// myFunction(a) --> a

// With two number inputs, myFunction returns those inputs added together
// myFunction(1,2) --> 3

// With two string inputs, myFunction returns the strings concatenated
// myFunction('Pika', 'chu') --> 'Pikachu'

// Given any number of string inputs, returns all inputs concatenated
// myFunction('This ', 'is ', 'a ', 'string!') --> 'This is a string!'
// myFunction('I ', 'like ', 'turtles!') --> 'I like turtles!'


// Given any number of number inputs, returns all inputs summed.
// myFunction(1,2,3,4,5,6,7,100) --> 128
// myFunction(1,2,3) --> 6

//--------------Stretch------------------
// Write a function that generates a randomish length array of randomish numbers to pass to your function.
// Then write a test that uses that random array as the argument for myFunction
