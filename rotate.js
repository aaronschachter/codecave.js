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
