'use strict';

/*
Given a string, find the length of the longest substring without repeating characters.
https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  if (s === '' || !s) {
    return 0;
  }
  // Initialize result to 1, assuming we get at least a 1 character string s.
  let result = 1;
  const chars = s.split('');

  for (let i = 0; i < s.length - 1; i++) {
    // If remaining characters are smaller than our result, we know we can exit
    if (s.length - i < result) {
      break;
    }

    const charMap = { };
    const currentChar = chars[i];
    charMap[currentChar] = true;
    let currentCount = 1;
    for (let j = i + 1; j < s.length; j++) {
      const nextChar = chars[j];
      if (charMap[nextChar]) {
        // We've reached a repeating character.
        if (currentCount > result) {
          result = currentCount;
        }

        break;
      } else {
        charMap[nextChar] = true;
        currentCount++;
        if (j == s.length - 1 && currentCount > result) {
          result = currentCount;
        }
      }
    }
  }
  console.log(`string:${s} result:${result}`);

  return result;
};

lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');
lengthOfLongestSubstring('');
lengthOfLongestSubstring('au');
const b = 'sinxcgpfngxijirkqmvymjdzrlxockguuvuwdlcqsbbdjunbikbvuewnrwcugkqahmxkybbscevnyjoitpfp';
lengthOfLongestSubstring(b);
const c = "rvunutosbjgyopbvbdoieamfqgzqqwjhtdxnylhavnylfzjgexqkyfqqnridnrnhwkwuxeustugyvphcmxom";
lengthOfLongestSubstring(c);
const d = "buhlsdbofdmxjjyyfkroiltuievcffigzrtrvuhcaucldakkldyvprszxnecsmkugendavhapjmukyexdcsutmutzyvumiosmbx";
lengthOfLongestSubstring(d);

