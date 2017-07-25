'use strict';

// https://www.hackerrank.com/challenges/alternating-characters
const test = [
  'AAAA',
  'BBBBB',
  'ABABABAB',
  'BABABA',
  'AAABBB',
];


function findMinNumDeletions(input) {
  let numDeletions = 0;
  let currentChar = input.charAt(0);
  for (let i = 1; i < input.length; i++) {
    if (input.charAt(i) === currentChar) {
      numDeletions++;
    } else {
      currentChar = input.charAt(i);
    }
  }

  return numDeletions;
}

test.forEach(string => console.log(`${string}=${findMinNumDeletions(string)}`));
