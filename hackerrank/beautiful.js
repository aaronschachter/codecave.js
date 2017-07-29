'use strict';

// https://www.hackerrank.com/challenges/beautiful-binary-string

function findMinNumSteps(input) {
  if (input.length < 3) {
    return 0;
  }
  let numSteps = 0;
  const chars = input.split('');
  for (let i = 2; i < input.length; i++) {
    if (chars[i-2] === '0' && chars[i-1] === '1' && chars[i] === '0') {
      chars[i] = 1;
      numSteps++;
    }
  }
  return numSteps;
}

const test = [
  '0101010',
  '01100',
  '0100101010',
];

test.forEach(string => console.log(`${string}=${findMinNumSteps(string)}`));
