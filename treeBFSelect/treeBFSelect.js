/**
  *
  * Implement a `BFSelect` method on this Tree class.
  *
  * BFSelect accepts a filter function, calls that function on each of the nodes
  * in Breadth First order, and returns a flat array of node values of the tree
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
  *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 3, 5, 7]
  *
  *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/**
 * Basic tree that stores a value.
 */
const Tree = function Tree(value) {
  this.value = value;
  this.children = [];
};

/**
 * Filter items in tree using Breath-First selection
 * @param {(value: *, depth: number) => boolean} filter Filter to apply
 * @param {number} initialDepth Initial depth of node
 * @param {boolean} checkRoot Should check root node
 * @returns {*[]} All selected children
 */
Tree.prototype.BFSelect = function BFSelect(filter) {
  // Declare all selected values
  const selected = [];

  // Declare array of nodes to check
  let treesToCheck = [{ node: this, depth: 0 }];

  while (treesToCheck.length > 0) {
    // Get next node
    const tree = treesToCheck.shift(0);
    if (filter(tree.node.value, tree.depth)) {
      // Value should be selected
      selected.push(tree.node.value);
    }

    if (tree.node.children) {
      // If children add to end of queue
      treesToCheck = treesToCheck.concat(tree.node.children.map(node => (
        {
          node,
          depth: tree.depth + 1,
        }
      )));
    }
  }

  // Return selected elements
  return selected;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  * @param {*} child Child to add to tree
  * @returns {*} The added child
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
  * @param {*} child Child to check
  * @returns {boolean} If child is descendent
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
  * @param {*} child Child to remove
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

// If debug, export
if (window.DEBUG) {
  module.exports = Tree;
}
