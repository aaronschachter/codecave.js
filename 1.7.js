'use strict';

const helpers = require('./helpers');

/**
 * Write an algorithm such that if an element in an MxN matrix is 0,
 * its entire row and column is set to 0.
 */

/*
3 0 2 3
0 0 0 0
1 0 3 3
*/

function zeroMe(matrix) {
  console.log('zeroMe');
  // TODO: Verify matrix is a two dimensional array.

  const zeroRows = {};
  const zeroCols = {};

  // Loop through rows:
  for (let i = 0; i < matrix.length; i++) {
    // Loop through columns of each row:
    for (let j = 0; j < matrix[i].length; j++) {

      if (matrix[i][j] === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }

    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (zeroRows[i] || zeroCols[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

let matrix = [[3, 4, 2], [5, 6, 8], [2, 0, 3]];
helpers.printMatrix(matrix);
let zeroed = zeroMe(matrix)
helpers.printMatrix(zeroed);

matrix = [[3,2,4,2,1], [0,2,2,1,3], [8,0,1,1,3]];
helpers.printMatrix(matrix);
zeroed = zeroMe(matrix)
helpers.printMatrix(zeroed);

