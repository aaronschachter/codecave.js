'use strict';

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
 
 const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
 rotate(array, 4);
