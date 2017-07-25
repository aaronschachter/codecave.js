'use strict';

// https://www.hackerrank.com/contests/w34/challenges/once-in-a-tram

function getLuckyNumber(int) {
  let input = int.toString();
  console.log(`input:${input}`);

  input = input.split('');
  console.log(`input:${input}`);

  const first = input.slice(0, 3);
  let firstSum = 0;
  first.map(digit => firstSum += Number(digit));
  const second = input.slice(3, 6);

  let secondSum = 0;
  second.map(digit => secondSum += Number(digit));
  const diff = firstSum - secondSum;

  return int + diff;
}

// Works
// const test = 165901;
const test = 555555;
const result = getLuckyNumber(test);
console.log(result);
