/**
 * First pass at linked list addition. Not ideal - loops through each list when we could cut that 
 * in half by comparing + adding each element per step in the iteration.
 */
function listToNumber(list) {
  let result = 0;
  let current = list.head;
  let numTens = 0;

  while (current) {
    console.log(`current=${current.data} numTens:${numTens}`);
    const increment = current.data * Math.pow(10, numTens);
    console.log(`increment=${increment}`);
    result = result + increment;
    current = current.next;
    numTens++;
  }
  return result;
}

/**
 * @param {number} - Number to render as a LinkedList
 * @return {LinkedList}
 */
function numberToList(number) {
  let result = [];
  let scope = number;

  while (scope > 0) {
    result.push(scope % 10);
    scope = Math.floor(scope / 10);
  }
  return new LinkedList(result);
}

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  print() {
    const output = [];
    let current = this;
    while (current) {
      output.push(current.data);
      current = current.next;
    }
    console.log(output.join(' -> '));
  }
}

class LinkedList {
  constructor(array) {
    let current;
    for (let i = 0; i < array.length; i++) {
      const node = new LinkedListNode(array[i]);
      if (i == 0) {
        this.head = node;
        current = this.head;
      } else {
        current.next = node;
        current = current.next;
      }
    }
  }
  /**
   * Print all elements in the array.
   */

}

let list = new LinkedList([1, 3, 5, 6, 2, 2, 3, 4, 29, 2]);
// list.print();

// list = new LinkedList([3, 9, 3]);
// console.log(listToNumber(list)); 

// list = numberToList(7620);
// list.print();

const list1 = new LinkedList([3, 1, 5]);
const sum1 = listToNumber(list1);
const list2 = new LinkedList([5, 9, 2]);
/*
const sum = listToNumber(list1) + listToNumber(list2);
console.log(`sum=${sum}`);
const result = numberToList(sum);
result.print();
*/

// Recursive solution
function addLists(list1, list2) {
  return addNodes(list1.head, list2.head);
}

function addNodes(node1, node2, carry) {
  if (!node1 && !node2 && !carry) {
    return null;
  }
  if (!node1) {
    node1 = { data: 0 };
  }
  if (!node2) {
    node2 = { data: 0 };
  }
  let sum = node1.data + node2.data
  if (carry) {
    sum = sum + carry;
  }
  
  console.log(`sum:${sum}`);
  const resultNode = new LinkedListNode(sum % 10);
  let resultCarry = 0;
  if (sum > 9) {
    resultCarry = 1;
  }
  resultNode.next = addNodes(node1.next, node2.next, resultCarry);
  return resultNode;
}

const result = addLists(list1, list2);
result.print();
