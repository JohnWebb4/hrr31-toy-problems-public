/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
const Stack = function Stack() {
  let length = 0;

  // add an item to the top of the stack
  this.push = function push(value) {
    this[length] = value;
    length += 1;
    return this[length - 1];
  };

  // remove an item from the top of the stack
  this.pop = function pop() {
    if (length === 0) {
      return null;
    }

    length -= 1;
    return this[length];
  };

  // return the number of items in the stack
  this.size = function size() {
    return length;
  };
};

/**
  * Queue Class
  */
const Queue = function Queue() {
  // Use two `stack` instances to implement your `queue` Class
  const inbox = new Stack();
  const outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function enqueue(value) {
    while (outbox.size() > 0) {
      inbox.push(outbox.pop());
    }

    inbox.push(value);

    while (inbox.size() > 0) {
      outbox.push(inbox.pop());
    }

    return value;
  };

  // called to remove an item from the `queue`
  this.dequeue = function dequeue() {
    if (outbox.size() === 0) {
      return null;
    }

    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function size() {
    return outbox.size();
  };
};

if (window.DEBUG) {
  module.exports = {
    Stack,
    Queue,
  };
}
