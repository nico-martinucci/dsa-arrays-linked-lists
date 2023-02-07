/** Node: node for a doubly linked list. */

class Node {
  val = null;
  next = null;
  prev = null;

  constructor(val) {
    this.val = val;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** get(idx) returns a node at the given index */

  _get(idx) {
    if (idx > this.length - 1 || idx < 0) throw new Error("invalid index!");
    let currentNode = this.head;

    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }

    return currentNode
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;

    newNode.prev = this.tail;
    this.length++;
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head !== null) {
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    if (this.tail === null) this.tail = newNode;
    this.length++;

    this.head = newNode;
  }

  /** pop(): remove last item & return its value */

  pop() {

  }

  /** shift(): remove first item & return its value */

  shift() {

  }

  /** getAt(idx): get val at idx.*/

  getAt(idx) {
    return this.getByIdx(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.getByIdx(idx);
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** return average (mean) of list values. */

  average() {

  }
}

module.exports = DoublyLinkedList;
