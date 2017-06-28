/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

function getPairs(n) {
  if (n === 1) {
    return '()';
  }
  const nested = '(' + getPairs(n - 1) + ')';
}

console.log(getPairs(3));
