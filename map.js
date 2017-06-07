/*

@see https://github.com/kolodny/exercises/tree/master/map

var map = require('./') // <- this is the file you make;

var numbers = [1, 2, 3];

var doubles = map(numbers, function(number) {
  return number * 2;
});

console.log(doubles); // [2, 4, 6]
*/

function map(array, callback) {
  const result = [];
  array.forEach(element => result.push(callback(element)));

  return result;
}

const numbers = [1, 2, 3];

const doubles = map(numbers, function(number) {
  return number * 2;
});

console.log(doubles); // [2, 4, 6]
