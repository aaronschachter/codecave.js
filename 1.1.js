// 1.1
// Implement an algorithm to determine if a string has all unique characters.
// What if you can not use additional data structures?

/**
 * @param {string} input
 * @return {boolean}
 */
function hasUniqueChars(input) {
  const charMap = {};

  for (let i = 0; i < input.length ; i++) {
    const current = input.charAt(i);

    if (charMap[current] === true) {
      return false;
    }

    charMap[current] = true;
  }

  return true;
}

function hasUniqueCharsNoMem(input) {
  for (let i = 0; i < input.length; i++) {
    const currentChar = input.charAt(i);
    for (let j = i+1; j < input.length; j++) {
      if (input.charAt(j) === currentChar) {
        return false;
      }
    }
  }

  return true;
}

const input = ['Alabama', 'California', 'igloo', 'bear'];

input.forEach((string) => {
  console.log(`${string} ${hasUniqueChars(string)}`);
  console.log(`${string} ${hasUniqueCharsNoMem(string)}`);
});
