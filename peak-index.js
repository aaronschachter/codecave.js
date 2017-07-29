'use strict';

function findPeak(array, start, end) {
  console.log(`start=${start} end=${end}`);
  if (array.length === 1) {
    return 0;
  }

  if (end === start) {
    return end;
  }

  if (end === start + 1) {
    if (array[start] > array[end]) {
      return start;
    }
    return end;
  }

  const midLeftIndex = Math.floor((start + end) / 2);
  const middleLeft = array[midLeftIndex];
  const middleRight = array[midLeftIndex + 1];
  if (middleLeft > middleRight) {
    return findPeak(array, start, midLeftIndex);
  }

  return findPeak(array, midLeftIndex + 1, end);
}

function findPeakIndex(array) {
  const result = findPeak(array, 0, array.length - 1);
  console.log(array);
  console.log(result);
}

let test = [1, 2, 3, 4, 5, 6, 7, 8, 2, 1, 0];
findPeakIndex(test);

test = [1, 2, 3];
findPeakIndex(test);
test = [3, 2, 1, 0];
findPeakIndex(test);

test = [5];
findPeakIndex(test);

