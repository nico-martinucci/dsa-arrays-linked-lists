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
    if (this.length === 0) throw new Error("list is empty!")

    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    const temp = this.tail;
    currentNode.next = null;
    this.tail = currentNode;
    this.length--;

    return temp.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) throw new Error("list is empty!")

    const temp = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) this.tail = null;

    return temp.val;
  }

  /** getAt(idx): get val at idx. */

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
    if (idx > this.length || idx < 0) throw new Error();

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let prevNode = this.getByIdx(idx - 1);
      let tempNode = prevNode.next;

      prevNode.next = newNode;
      newNode.next = tempNode;

      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // if (idx > this.length - 1 || idx < 0) throw new Error();

    if (idx === 0) {
      const tempVal = this.head.val;
      this.head = this.head.next;
      this.length--;

      return tempVal;
    }

    let prevNode = this.getByIdx(idx - 1);

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
    if (this.length === 0) return 0;

    let sum = 0;
    let current = this.head;

    while (current !== null) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }

  getByIdx(idx) {
    if (idx > this.length - 1 || idx < 0) throw new Error("invalid index!");

    let currentNode = this.head;

    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }

    return currentNode
  }
}

module.exports = LinkedList;
