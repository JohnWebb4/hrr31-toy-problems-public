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


/**
 * Creates a linked list
 * @class
 */
const LinkedList = function LinkedList() {
  this.head = null;
  this.tail = null;
};

/**
 * Add element to tail
 * @param {*} value Value to add
 * @returns {*} Value added
 */
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

/**
 * Remove element from head
 * @returns {*} Value removed
 */
LinkedList.prototype.removeHead = function removeHead() {
  if (!this.head) {
    return null;
  }

  const { value } = this.head;

  // If removing the only element in linked list
  if (this.head === this.tail) {
    this.tail = null;
  }

  this.head = this.head.next || null;

  return value;
};

/**
 * Check if list contains element
 * @param {*} value Value to check
 * @returns {boolean} Element exists in list
 */
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

/**
 * Generate a node
 * @param {*} value Value of node
 * @param {*} next Next node in list
 * @returns {*} Node object
 */
LinkedList.prototype.makeNode = function makeNode(value, next) {
  return {
    value, next,
  };
};

if (window.DEBUG) {
  module.exports = LinkedList;
}
