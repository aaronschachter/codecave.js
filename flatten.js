/*

@see https://github.com/kolodny/exercises/tree/master/flatten

var flatten = require('./') // <- this is the file you make;

var arr = [1, [2], [3, 4, [5]]];

flatten(arr); 
// => [1, 2, 3, 4, 5];
*/

function flatten(input) {
  result = [];
  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    if (!Array.isArray(current)) {
      result.push(current);
    } else {
      result = result.concat(flatten(current));
    }
  }
  return result;
}

let arr = [1, [2], [3, 4, [5]]];
console.log(flatten(arr));

arr = [1, [2, 10], [3, 4, [5]], [6], 7, [10, 12], 40];
console.log(flatten(arr));
