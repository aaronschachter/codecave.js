'use strict';

function removeDuplicates(input) {
  const chars = input.split('');
  let charMap = {};
  let inputLength = chars.length;

  for (let i = 0; i < inputLength; i++) {
    let currentChar = chars[i];
    console.log(`currentChar:${currentChar}`);

    // If we haven't encountered this character yet:
    if (!charMap[currentChar]) {
      console.log(`set charMap[${currentChar}]`);
      charMap[currentChar] = true;
      // Otherwise, we'll want to remove it.. which means shifting all elements down an index.
    } else {
      console.log(`charMap[${currentChar}] exists`);
      // Set current character to the next one, shift everything down.
      for (let j = i; j < inputLength - 1; j++) {
        chars[j] = chars[j+1];
      }
      // Backtrack to make sure the newly replaced character isn't a duplicate too. 
      i--;
      inputLength--;
    }
  }
  const numUniqueChars = Object.keys(charMap).length;
  const uniqueChars = chars.splice(0, numUniqueChars);
  console.log(uniqueChars);
  const removed = uniqueChars.join('')
  console.log(`removedDuplicates:${removed}`);
}

removeDuplicates('schachter');
removeDuplicates('aaaabbbbb');