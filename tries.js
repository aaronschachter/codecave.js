'use strict';

/**
 * https://www.hackerrank.com/challenges/ctci-contacts
 */

const trie = {};

function addContact(contactName) {
  const firstChar = contactName.charAt(0);
  if (!trie[firstChar]) {
    trie[firstChar] = { count: 1 };
  }
  let parent = trie[firstChar];
  for (let i = 1; i < contactName.length; i++) {
    const currentChar = contactName.charAt(i);
//    console.log(`currentChar=${currentChar}`);

    if (!parent[currentChar]) {
      parent[currentChar] = { count: 1 };
    } else {
      parent[currentChar].count++;
    }

    parent = parent[currentChar];
  }
  parent['*'] = true;
}

function findNumMatches(string) {
  let current = trie;
  for (let i = 0; i < string.length; i++) {
    const currentChar = string.charAt(i);

    if (!current[currentChar]) {
      return 0;
    }
    current = current[currentChar];
  }
  return current.count;
}

/*
function findWords(node) {
  const children = Object.keys(node);
  let result = 0;
  children.forEach((child) => {
    if (child === '*') {
      result++;
    } else {
      result = result + findWords(node[child]);
    }
  });
  return result;
}
*/

let test = 'snow';
addContact(test);
test = 'snowbird';
addContact(test);
addContact('snowyjames');
addContact('brain');
const result = findNumMatches('snow');
console.log(result);

