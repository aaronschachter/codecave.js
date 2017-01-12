'use strict';

module.exports.printMatrix = function (matrix) {
  matrix.forEach((row) => {
    const rowString = row.join(' ');
    console.log(row);
  })
}
