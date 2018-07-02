/*
 * Design and implement an LRU, or Least Recently Used, cache.
 *
 * An LRU cache gives O(1) get(key) and set(key, val) operations,
 * much like a hashtable, but once it reaches its limit for stored
 * number of items, removes the least recently used (i.e. the oldest
 * by get-date) item from the cache in O(1) time.
 *
 * For instance:
 *
 * var cache = new LRUCache(3); // limit of 3 items
 * cache.set("item1", 1);
 * cache.set("item2", 2);
 * cache.set("item3", 3);
 * cache.set("item4", 4);
 *
 * cache.get("item3") //=> 3
 * cache.get("item2") //=> 2
 * // item1 was removed because it was the oldest item by insertion/usage
 * cache.get("item1") //=> null
 *
 * // item4 is removed to make room, because it is the oldest by usage,
 * // which takes priority.
 * cache.set("item5", 5);
 *
 * // item3 is also removed, because it was retrieved before item2 was
 * // last retrieved.
 * cache.set("item6", 6);
 *
 * You will need a doubly-linked list (provided).
 */

const List = function List() {
  this.head = null;
  this.tail = null;
};

const ListNode = function ListNode(prev, val, next) {
  this.prev = prev || null;
  this.val = val;
  this.next = next || null;
};

// Insert at the head of the list.
List.prototype.unshift = function unshift(val) {
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = new ListNode(null, val, null);
    this.tail = this.head;
  // Not empty list.
  } else {
    this.head = new ListNode(null, val, this.head);
    this.head.next.prev = this.head;
  }

  return this.head;
};

// Delete at the head of the list.
List.prototype.shift = function shift() {
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  }

  // Not empty list.
  const { head } = this;
  this.head = this.head.next;
  head.delete();
  return head.val;
};

// Insert at the end of the list.
List.prototype.push = function push(val) {
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = new ListNode(null, val, null);
    this.tail = this.head;
  // Not empty list.
  } else {
    this.tail = new ListNode(this.tail, val, null);
    this.tail.prev.next = this.tail;
  }

  return this.tail;
};

// Delete at the end of the list.
List.prototype.pop = function pop() {
  // Empty list
  if (this.head === null && this.tail === null) {
    return null;
  }

  // Not empty list.
  const { tail } = this;
  this.tail = this.tail.prev;
  tail.delete();
  return tail.val;
};

// Move a node to the front of the List
List.prototype.moveToFront = function moveToFront(node) {
  if (node === this.tail) {
    this.pop();
  } else if (node === this.head) {
    return;
  } else {
    node.delete();
  }

  node.prev = null;
  node.next = null;

  // Don't delegate to shift, since we want to keep the same
  // object.

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = node;
    this.tail = this.head;
    return;
  }

  // At least one node.
  this.head.prev = node;
  node.next = this.head;
  this.head = node;
};

// Move a node to the end of the List
List.prototype.moveToEnd = function moveToEnd(node) {
  if (node === this.head) {
    this.shift();
  } else if (node === this.tail) {
    return;
  } else {
    node.delete();
  }

  // Don't delegate to push, since we want to keep the same
  // object.

  node.prev = null;
  node.next = null;

  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = node;
    this.tail = this.head;
  // At least one node.
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

ListNode.prototype.delete = function Listdelete() {
  if (this.prev) { this.prev.next = this.next; }
  if (this.next) { this.next.prev = this.prev; }
};

const LRUCache = function LRUCache(limit) {
  this.listSize = 0;
  this.limit = limit;
  this.list = new List();
};

const LRUCacheItem = function LRUCacheItem(key, val) {
  this.val = val;
  this.key = key;
};

LRUCache.prototype.size = function size() {
  return this.listSize;
};

LRUCache.prototype.get = function get(key) {
  let item = this.list.head;

  while (item !== null) {
    if (item.val.key === key) {
      this.list.moveToFront(item);
      return item.val.val;
    }

    item = item.next;
  }

  // Not in LRUCache
  return null;
};

LRUCache.prototype.set = function set(key, val) {
  // If already set
  let item = this.list.head;

  while (item !== null) {
    if (item.val.key === key) {
      item.val.val = val;
      this.list.moveToFront(item);
      return;
    }

    item = item.next;
  }

  while (this.listSize + 1 > this.limit) {
    this.list.pop();
    this.listSize -= 1;
  }

  this.list.unshift(new LRUCacheItem(key, val));
  this.listSize += 1;
};

if (window.DEBUG) {
  module.exports = LRUCache;
}
