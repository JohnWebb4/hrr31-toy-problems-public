/**
  *
  * Implement a `DFSelect` method on this Tree class.
  *
  * DFSelect accepts a filter function, calls that function on each of the nodes
  * in Depth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.DFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 5, 3, 7]
  *
  *   root1.DFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

const Tree = function Tree(value) {
  this.value = value;
  this.children = [];
};

/**
 * Filter using depth first selection
 * @param {(value: *, depth: number) => 0 | 1} filter Filter function
 * @param {number} [depth=0] The current depth
 * @returns {[*]} Filtered values
 */
Tree.prototype.DFSelect = function DFSelect(filter, depth = 0) {
  // Store filtered values
  let filtered = [];

  // Filter current node
  if (filter(this.value, depth)) {
    filtered.push(this.value);
  }

  // Go through all children
  this.children.forEach((child) => {
    // Filter children
    filtered = filtered.concat(child.DFSelect(filter, depth + 1));
  });

  // Return all filtered values
  return filtered;
};


/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function addChild(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function isDescendant(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  }
  for (let i = 0; i < this.children.length; i += 1) {
    if (this.children[i].isDescendant(child)) {
      // `child` is descendant of this tree
      return true;
    }
  }
  return false;
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function removeChild(child) {
  const index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

if (window.DEBUG) {
  module.exports = Tree;
}
