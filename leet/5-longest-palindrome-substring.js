'use strict';

function isPalindrome(array) {
    console.log(`isPalindrome array.length=${array.length}`);

    for (let i = 0; i <= array.length / 2; i++) {
        console.log(`isPalindrome i=${i}`);
        if (array[i] != array[array.length - 1 - i]) {
            console.log(`array[${i}]=${array[i]}`);
            console.log(`array[${array.length - 1 - i}]=${array[array.length - 1 - i]}`);
            return false;
        }
    }
    return true;
}

function getLongestPalindromeForArray(array) {
    console.log(`getLongestForArray:${array.length}`);
    if (isPalindrome(array)) {
        console.log('array isPalindrome');
        return array;
    }
    while (array.length > 0) {
        array.pop();
        if (isPalindrome(array)) {
            console.log(`it's a palindrome! array.length=${array.length}`);
            return array;
        }
    }
    return null;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const array = s.split('');
  console.log(`array.length=${array.length}`);
  let longest = [];
  for (let i = 0; i < array.length; i++) {
    const input = array.slice(i);
    console.log(`i=${i}`);
    const result = getLongestPalindromeForArray(input);
    console.log(`length=${result.length}`);
    if (result.length === array.length || result.length >= array.length / 2) {
      return result.join('');
    }
    if (result.length > longest.length) {
      longest = result;
      console.log(`longest.length = ${longest.length}`);
    }
  }
  return longest.join('');
};

//let result = longestPalindrome('cbbd');
let test = 'vbpgvehmsdocuqfnpzsqqsjbjkvzpqsubqbpjhzojdtkjcambviauhsxqvejgehzrhhvrgulubmirbppvbkftvazscxifsxtoarrdeyuihzcenqendvnthfdpotgpegdlaildigloesnfxkjichsxygazrvgbecuzkcdrgextmysxqerrueecpneynciasevytmatvqgleipwlaxwgajijkuceezmbtiigc';
//result = longestPalindrome(test);
//console.log(result);
test = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
longestPalindrome(test);
