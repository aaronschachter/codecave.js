/*
You are given an array of n integers and a number k. Determine whether there is a pair
of elements in the array that sums to exactly k. For example, given the array [1, 3, 7] and
k = 8, the answer is “yes,” but given k = 6 the answer is “no.”
*/
// Coursera version: return the pairs that add up to the number.

function debug(input) {
  if (false) {
    console.log(input);
  }
}

function twoSumExists(input, k) {
  const map = {};

  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    debug(`current:${current}`);

    if (!map[current]) {
      map[current] = 1;
    } else {
      map[current]++;
    }

    if (current === k / 2) {
      if (map[current] > 1) {
        return true;
      }
    } else {
      const diff = k - current;
      debug(`diff:${diff}`);
     
      if (map[current] && map[diff]) {
        return true;
      } 
    }

  }
  return false;
}

const array = [1, 3, 7];
twoSumExists(array, 8) ? console.log('yes') : console.log('no');
twoSumExists(array, 6) ? console.log('yes') : console.log('no');

function twoSumIndices(input, k) {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    if (!map[current]) {
      map[current] = {
        index: i,
        count: 1,
      };
    }

  }
}
