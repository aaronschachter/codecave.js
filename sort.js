'use strict';

const array = [3, 1, 23, 9, 200, 32, 20, 11, 800];

function insertionSort(array) {
  console.log(array);

  if (array.length === 0) {
    return array;
  }
  for (let i = 1; i < array.length; i++) {
    console.log(`----\ni=${i}`);

    for (let j = i; j > 0; j--) {
      console.log(`j=${j}: array[${j-1}]:${array[j-1]}, array[${j}]:${array[j]}`);

      if (array[j] < array[j-1]) {
        console.log('swap');
        const temp = array[j-1];
        array[j-1] = array[j];
        array[j] = temp;
      } else {
        continue;
      }
    }
    console.log(array);
  }
}

// insertionSort(array);
const array2 = [23, 234, 21, 22, 2093104231, 22, 1, 2, 90, 2341, 231423, 8];
insertionSort(array2);
