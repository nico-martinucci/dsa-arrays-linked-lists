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
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    const temp = this.tail;
    currentNode.next = null;
    this.tail = currentNode;

    return temp;
  }

  /** shift(): return & remove first item. */

  shift() {
    const temp = this.head;
    this.head = this.head.next;
    this.length--;

    return temp;
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
    if (idx === 0) {
      if (idx > this.length - 1 || idx < 0) throw new Error();
      this.unshift(val);

    } else {
      let newNode = new Node(val);
      let prevNode = this.getAt(idx - 1);
      let tempNode = prevNode.next;

      prevNode.next = newNode;
      newNode.next = tempNode;

      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length - 1 || idx < 0) throw new Error();

    let prevNode = this.getAt(idx - 1);

    if (idx === 0) {
      const tempVal = this.head.val;
      this.head = this.head.next;
      this.length--;

      return tempVal;
    }

    if (idx === this.length - 1) {
      const tempVal = this.tail.val;
      prevNode.next = null;
      this.tail = prevNode;
      this.length--;

      return tempVal;
    }

    const tempVal = prevNode.next.val;
    prevNode.next = prevNode.next.next;
    this.length--;
    return tempVal;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let current = this.head;

    while (current.next !== null) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
