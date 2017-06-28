'use strict';

const LinkedList = require('./lib/LinkedList');
const Node = require('./lib/LinkedListNode');


function removeDuplicates(head) {
  const map = {};
  map[head.data] = 1;

  const result = head;
  let current = head;

  while (current && current.next) {
    let next = current.next;
    // No match, set 
    if (!map[next.data]) {
      map[next.data] = 1;
      current = next;
      continue;
    }

    while (next && map[next.data]) {
      next = next.next;
    }
    if (next) {
      map[next.data] = 1;
    }
    current.next = next;
    current = next;
  }

  return result;
}

const list = new LinkedList([1, 1, 1, 1, 1, 1, 1, 1]);
const head = list.head;
const reversed = removeDuplicates(head);

console.log(LinkedList.traverse(reversed));
