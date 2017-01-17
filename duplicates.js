'use strict';

// https://www.hackerrank.com/challenges/reduced-string

function processData(input) {
//  console.log(`processData:${input}`);
  if (input === '') {
    console.log('Empty String');
    return;
  }

  let chars = input.split('');
  let length = chars.length;
  for (let i = 0; i < length; i++) {
    if (chars[i] === chars[i+1]) {
      // Move all elements down two indices.
      for (let j = i; j < length; j++) {
        chars[j] = chars[j+2];
      }
      delete(chars[length-2]);
      delete(chars[length-1]);
      const updated = chars.join('');
      return processData(updated);
    }
  }

  console.log(input);
} 

processData('aaabccddd');
processData('baab');
