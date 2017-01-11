'use strict';

// Write a method to replace all spaces in a string with ‘%20’

function replaceSpace(input) {
  const inputChars = input.split('');
  let currentLength = inputChars.length;

  for (let i = 0; i < currentLength; i++) {
    const currentChar = inputChars[i];
    if (currentChar !== ' ') {
      continue;
    }

    for (let j = currentLength + 1; j > i; j--) {
      inputChars[j] = inputChars[j-2];
    }
    inputChars[i] = '%';
    inputChars[i+1] = '2';
    inputChars[i+2] = '0';
    currentLength = currentLength+2;
  }
  const output = inputChars.join('');
  console.log(output);

  return output;
}

replaceSpace('Hello world');
replaceSpace('Welcome to our world welcome to our world');
replaceSpace('   ');
replaceSpace('testing');
