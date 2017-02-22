'use strict';

function canRansomNote(magazine, ransom) {
  magazine = magazine.split(' ');
  ransom = ransom.split(' ');

  const magazineMap = {};
  for (let i = 0; i < magazine.length; i++) {
      const word = magazine[i];
      if (!magazineMap[word]) {
          magazineMap[word] = 1;
      } else {
          magazineMap[word]++;
      }
  }
  for (let i = 0; i < ransom.length; i++) {
      const word = ransom[i];

      if (!magazineMap[word] || magazineMap[word] === 0) {
          return 'No';
      }
      if (magazineMap[word] > 0) {
          magazineMap[word]--;
      }
  }

  return 'Yes';
}

let magazine = 'give me one grand today night';
let ransom = 'give one grand today'
let result = canRansomNote(magazine, ransom);
console.log(result);

magazine = 'o l x imjaw bee khmla v o v o imjaw l khmla imjaw x';
ransom = 'imjaw l khmla x imjaw o l l o khmla v bee o o imjaw imjaw o';
result = canRansomNote(magazine, ransom);
console.log(result);
