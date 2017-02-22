'use strict';

/**
 * For each rotation, shift everything down an index.
 */
function rotate(array, d) {
  const length = array.length;
  let numRotations = 0;
  while (numRotations < d) {
    const temp = array[0];
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i+1];
    }
    array[array.length - 1] = temp;
    numRotations++;
  }
  console.log(`rotated:${array}`);
}
 
 /**
  * We perform faster by just doing the shift once, but need extra buffer to store the values
  * to rotate to the end of the array.
  */
 function rotateConstant(array, d) {
  const rotateMe = [];
  for (let i = 0; i < d; i++) {
    rotateMe[i] = array[i];
  }
  for (let j = d; j < array.length; j++) {
    array[j-d] = array[j];
  }
  for (let i = 0; i < d; i++) {
    const index = array.length - d + i;
    array[index] = rotateMe[i];
  }
  console.log(`rotated:${array}`);
 }

 const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
 rotateConstant(array, 2);

 /**
  * The sweet answer without extra storage / in place: 
  * http://articles.leetcode.com/rotating-array-in-place/
  * Reverse the array 3 times: first time is the entire array
  * g f e d c b a
  * Next reverse 0 to k-1 (let's use k = 4)
  * e f g d c b a
  * Next k to n-1
  * e f g a b c d
  */

function reverse(inputArray) {
  for (let i = 0; i < inputArray.length / 2; i++) {
    const tail = inputArray.length - i - 1;
    const temp = inputArray[i];
    inputArray[i] = inputArray[tail];
    inputArray[tail] = temp;
  }

  return inputArray;
}

function rotate(inputArray, numRotations) {
  inputArray = reverse(inputArray);
  const pivot = inputArray.length - numRotations;
  const left = inputArray.slice(0, pivot);
  const right = inputArray.slice(pivot, inputArray.length);

  return reverse(left).concat(reverse(right));
}


const values = [1, 2, 3, 4, 5];
const result = rotate(values, 4);
console.log(result);
console.log(result.join(' '));
