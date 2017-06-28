/*
https://leetcode.com/problems/multiply-strings/#/description

Given two non-negative integers num1 and num2 represented as strings, return 
the product of num1 and num2.

Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/
function debug(input) {
  if (true) {
    console.log(input);
  }
}


function convertStringToNumber(input) {
  let value = 0;
  for (let i = input.length - 1; i >=0; i--) {
    // 0 character starts at ascii code 48.
    value = value + (input.charCodeAt(i) - 48) * (Math.pow(10, input.length - 1 - i));
  }
  console.log(value);
  return value;
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
  const result = convertStringToNumber(num1) * convertStringToNumber(num2);
  console.log(result);

  return `${result}`;
};

console.log(multiply('123456789', '987654321'));
