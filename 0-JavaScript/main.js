// Welcome! This will be a practice sheet for working with JavaScript

// Part 1: Types and Variables
// Example: Make a reassignable variable, named bruh, that equals a string "bruh"
let bruh = "bruh";
// TODO 1: Make a reassignable variable, named five, that equals a number 5
let five = 5;

// TODO 2: Make a nonreassignable variable, named isTrue, that equals a boolean true
const isTrue = true;

// Part 2: Functions
// Example: Write an empty function (no parameter, no output)
const someFunction = () => {};
function someOtherFunction() {}

// TODO 3: Write your own empty function
const func = () => {};

// TODO 4: Finish this function, that takes an array of numbers and returns the sum of all the numbers
const sumOfArray = (numbers) => {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
};

// Very nice, les go into typescript after
export {};
