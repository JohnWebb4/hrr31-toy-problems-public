/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


const LinkedList = function LinkedList() {
  this.head = null;
  this.tail = null;
};

// write methods here!

LinkedList.prototype.addToTail = function addToTail(value) {
  const node = this.makeNode(value);

  if (!this.head) {
    this.head = node;
  }

  if (this.tail) {
    this.tail.next = node;
  }

  this.tail = node;
  return this.tail.value;
};

LinkedList.prototype.removeHead = function removeHead() {
  if (!this.head) {
    return null;
  }

  const { value } = this.head;

  this.head = this.head.next;

  return value;
};

LinkedList.prototype.contains = function contains(value) {
  let node = this.head;

  while (node) {
    if (node.value === value) {
      return true;
    }
    node = node.next;
  }

  return false;
};

LinkedList.prototype.makeNode = function makeNode(value, next) {
  return {
    value, next,
  };
};

module.exports = LinkedList;
