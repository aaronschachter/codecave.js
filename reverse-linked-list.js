'use strict';

/**
 * https://www.hackerrank.com/challenges/reverse-a-linked-list
 */

const LinkedList = require('./lib/LinkedList');
const Node = require('./lib/LinkedListNode');

const list = new LinkedList([3, 5, 6, 7, 9]);

/**
 * Creating new nodes
 */
function reverseListHack(head) {
  let result = new Node(head.data);
  let current = head;

  while (current && current.next) {
    current = current.next;

    const temp = result;
    result = new Node(current.data);
    result.next = temp;
  }

  return result;
}


/**
 * Without creating new nodes.
 */
function reverseList(head) {
  let previous = null;
  let current = head;

  while (current && current.next) {
    const next = current.next;
    console.log(`current.data=${current.data}`);
    console.log(`next.data=${next.data}`);
    if (previous) {
      console.log(`previous.data=${previous.data}`);
    }
   
    current.next = previous;
    previous = current;
    console.log('***');
    current = next;
  }
  current.next = previous;

  return current;
}

const output = LinkedList.traverse(list.head);
console.log(output);

const reverse = reverseList(list.head);

console.log(LinkedList.traverse(reverse));
