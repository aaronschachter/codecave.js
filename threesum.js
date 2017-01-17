'use strict';

const values = [2, 4, 7, 1, -3, 2, -6];

// For i = 0 to values.length - 3
// For j = i+1 to values.length - 2
// for k = j+1 to values.length - 1
// if i + j + k === 0, store (i, j, k)

for (let i = 0; i < values.length - 3; i++) {
  for (let j = i+1; j < values.length - 2; j++) {
    for (let k = j+1; k < values.length - 1; k++) {
      if (values[i] + values[j] + values[k] === 0) {
        console.log(`[${values[i]}, ${values[j]}, ${values[k]}]`);
      }
    }
  }
}
