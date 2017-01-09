'use strict';

/**
 * Remove spaces and return as lowercase.
 */
function sanitize(input) {
  return input.replace(/ /g, '').toLowerCase();
}

/**
 * Write a method to decide if two strings are anagrams or not.
*/
function isAnagram(firstString, secondString) {
  console.log(`isAnagram(${firstString}, ${secondString})`);

  // For now assume our input parameters are sent as strings.
  const firstInput = sanitize(firstString);
  const secondInput = sanitize(secondString);

  // If we don't have equal lengths, they can't be anagrams.
  if (firstInput.length !== secondInput.length) {
    console.log('false: lengths not equal');

    return false;
  }

  const firstChars = firstInput.split('');
  const firstMap = { };

  firstChars.forEach((char) => {
    if (!firstMap[char]) {
      firstMap[char] = 1;
    }
    else {
      firstMap[char]++;
    }
  });

  const secondChars = secondInput.split('');
  const secondMap = { };

  for (let i = 0; i < secondChars.length; i++) {
    const currentChar = secondChars[i];
    if (!firstMap[currentChar]) {
      console.log(`false: ${currentChar} not found in first word`);

      return false;
    }
    if (!secondMap[currentChar]) {
      secondMap[currentChar] = 1;
    }
    else {
      secondMap[currentChar]++;
      if (firstMap[currentChar] < secondMap[currentChar]) {
        console.log(`false: ${currentChar} has smaller count in first word`);

        return false;
      }
    }
  }

  console.log('anagrams!');
  return true;
}

isAnagram('jerryst', 'jeryrst');
isAnagram('Clint Eastwood', 'Old West Action');
isAnagram('Clintt Eastwood', 'Old West Actions');

