/*

Reverse the digits of an integer

Example1: x = 123, return 321
Example2: x = -123, return -321

The input is assumed to be a 32-bit signed integer. 
Your function should return 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let string = x.toString().split('');
  console.log(string);

  let isNegative = false;
  let offset = 0;
  if (string[0] === '-') {
    offset = 1;
  }
  const finish = Math.ceil(string.length / 2);
  console.log(`finish:${finish}`);

  for (let i = offset; i < string.length / 2; i++) {
    console.log(`i:${i}`);
    const temp = string[i];
    const tail = string.length + offset - i - 1;
    console.log(`temp index:${temp} value:${string[i]} tail index:${tail} value:${string[tail]}`);
    string[i] = string[tail];
    string[tail] = temp;
  }
  console.log(string);
  if (offset) {
    string[0] = '-';
  }
  const reversed = parseInt(string.join('')) | 0;
  if (!reversed) {
    return 0;
  }
  return reversed;
};
console.log(`MAX_VALUE:${Number.MAX_VALUE}`);

let result = reverse(123);
console.log(result);
console.log('--------');
result = reverse(-123);
console.log(result);
console.log('--------');
result = reverse(1534236469);
console.log(result);
console.log('--------');
