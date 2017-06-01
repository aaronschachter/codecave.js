'use strict';

function bString(input) {
  if (input < 0) {
    return null;
  }

  let scope = input;
  const result = [];

  while (scope > 0) {
    result.push(scope % 2);
    scope = Math.floor(scope / 2);
  }

  return result.reverse().join('');
}

const input = [12, 8, 3, 239, 1029];

input.forEach((string) => {
  console.log(`${string} ${bString(string)}`);
});
