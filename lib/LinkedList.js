'use strict';


module.exports = class LinkedList {
  constructor(values) {
    this.head = this.node(values[0]);

    if (values.length < 2) {
      return;
    }

    let current = this.head;
    for (let i = 1; i < values.length; i++) {
      const next = this.node(values[i]);
      current.next = next;
      current = next;
    }
  }
  node(data) {
    return {
      data,
      next: null,
    }
  }
  static traverse(node) {
    let current = node;
    const output = [];
    while (current && current.data) {
      output.push(current.data);
      current = current.next;
    }
    return output;
  }
}
