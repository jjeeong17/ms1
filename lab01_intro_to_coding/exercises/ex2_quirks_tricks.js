/*
  Exercise 2
  JavaScript quirks and tricks
*/

var schoolName = 'Parsons';
var schoolYear = 1936;

// Task
// What is the value of test3?
var test1;
if (1 == true) {
  test1 = true;
} else {
  test1 = false;
}
console.log(test1);

console.log('-------------');

var test2;
if (1 === true) {
  test2 = true;
} else {
  test2 = false;
}

console.log(test2);

console.log('-------');

var test3 = test1 === test2;

console.log(test3);

console.log('-------');

// Task
// Change this code so test4 is false and test5 is true. Use console.log() to confirm your cod works.

var test4 = 0 == '1';
var test5 = 1 === 1;

console.log('test4 is', test4, 'and test 5 is', test5);

console.log('---------');

// Task
// What are the values of p, q, and r? Research what is going on here.
var w = 0.1;
var x = 0.2;
var y = 0.4;
var z = 0.5;

var p = w + x; // 0.30000000000000004

var q = z - x; // 0.3

var r = y - w; //0.30000000000000004
// binary
