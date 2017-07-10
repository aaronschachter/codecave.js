'use strict';

function getCharacterCounts(input) {
  // First find the count of all distinct characters to determine which chars to try deleting,
  // and how many characters we'll need to delete.
  const map = {};
  for (let i = 0; i < input.length; i++) {
    const currentChar = input.charAt(i);
    if (!map[currentChar]) {
      map[currentChar] = 1;
    } else {
      map[currentChar]++;
    }
  }
  return map;
}

function maxTwoCharRepeating(input) {
  let currentMax = '';
  const map = getCharacterCounts(input);
  const chars = Object.keys(map);
//  console.log(chars);
  for (let i = 0; i < chars.length - 1; i++) {
    const first = chars[i];
    const result = [];
    for (let j = i + 1; j < chars.length; j++) {
      const second = chars[j];
      const result = getTwoCharsResult(input, first, second);
      if (result.length > currentMax.length) {
        currentMax = result;
      }
    }
  }

//  console.log(`currentMax=${currentMax}`);

  return currentMax;
}

function getTwoCharsResult(input, firstChar, secondChar) {
//  console.log(`getTwoCharsResult first=${firstChar} second=${secondChar}`);
  const result = [];
  for (let i = 0; i < input.length; i++) {
    const current = input.charAt(i);
    if (current === firstChar || current === secondChar) {
      if (result.length === 0) {
        result.push(current);
        continue;
      }
      const last = result[result.length - 1];
      if (last === current) {
        return '';
      } else {
        result.push(current);
      }
    }
  }
  const string = result.join('');
//  console.log(`getTwoCharsResult=${string}`);
  return string;
}

const input = 'beabeefeab';

const result = maxTwoCharRepeating(input);
console.log(result.length);
