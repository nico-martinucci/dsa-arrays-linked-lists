/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;

    this.length++;

    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head !== null) {
      newNode.next = this.head;
    }
    if (this.tail === null) this.tail = newNode;
    this.length++;

    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next
    }
    const temp = this.tail;
    currentNode.next = null;
    this.tail = currentNode;

    return temp
  }

  /** shift(): return & remove first item. */

  shift() {
    const temp = this.head;
    this.head = this.head.next;

    return temp
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx > this.length - 1 || idx < 0) throw new Error();

    let currentNode = this.head;

    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.getAt(idx);

    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length - 1 || idx < 0) throw new Error();

    let newNode = new Node(val);
    let prevNode = this.getAt(idx - 1);
    let tempNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = tempNode;

    if (idx === 0) this.head = newNode;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let prevNode = this.getAt(idx - 1);
    let tempNode = this.getAt(idx + 1);
  }

  /** average(): return an average of all values in the list */

  average() { }
}

module.exports = LinkedList;
