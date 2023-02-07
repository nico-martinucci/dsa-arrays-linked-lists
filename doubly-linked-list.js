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
    return this.removeAt(this.length - 1);
  }

  /** shift(): remove first item & return its value */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx.*/

  getAt(idx) {
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this._get(idx);
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) throw new Error();

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let prevNode = this._get(idx - 1);
      let tempNode = prevNode.next;

      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = tempNode;
      tempNode.prev = newNode;

      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      const tempVal = this.head.val;
      this.head = this.head.next;
      this.length--;
      if (this.length !== 0) this.head.prev = null;
      if (this.length === 0) this.tail = null;

      return tempVal;
    }

    let currentNode = this._get(idx);

    if (idx === this.length - 1) {
      const tempVal = this.tail.val;
      currentNode.prev.next = null;
      this.tail = currentNode.prev;
      this.length--;

      return tempVal;
    }

    const tempVal = currentNode.val;
    currentNode.prev.next = currentNode.next; // 10's "next" to 20
    currentNode.next.prev = currentNode.prev; // 20's "prev" to 10
    this.length--;

    if (this.length === 0) this.tail = null;

    return tempVal;
  }

  /** return average (mean) of list values. */

  average() {
    if (this.length === 0) return 0;

    let sum = 0;
    let current = this.head;

    while (current !== null) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = DoublyLinkedList;
