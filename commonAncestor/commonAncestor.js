
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

function Tree() {
  this.children = [];
}

/**
  * add an immediate child
  */
Tree.prototype.addChild = function addChild(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */

/* Notes
 * Use isDescendent to check for ancestry

 * Whiteboard
 * I: Tree (called relative)
 * O: Tree or null
 * C: None
 * E: me and my brother, me and myself, me and potato

 * Psuedocode
 * Check if passed relative is descendent
 * If true return self
 * Check if parent is null
 * If null, return false
 * If Tree, recursively call on parent and return result
*/
Tree.prototype.getClosestCommonAncestor = function getClosestCommonAncestor(...relatives) {
  let commonAncestor = null;

  relatives.forEach((relative) => {
    const relativePath = this.getAncestorPath(relative);
  });

  return commonAncestor;
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */

/* Whiteboard
 * I: Tree
 * O: Array of trees
 * C: None
 * E: Me and myself, me and brother, direct parent, indirect parent
*/

/* Psuedocode
 * Check is identical, return [me] if so
 * Check if not a descendant, return null
 * Loop through children and find next relative
 * Recursively call on child
 * Return null if no ancestor path
 * If ancestor path, add current ancestor to beginning and return
 *
*/
Tree.prototype.getAncestorPath = function getAncestorPath(relative) {
  // Base case: Is itself
  if (this === relative) {
    return [this];
  }

  // Termination case: No parent
  if (!this.isDescendant(relative)) {
    return null;
  }

  // Recursive case
  let childAncestor = null;
  this.children.forEach((child) => {
    if (child.isDescendant(relative) || child === relative) {
      childAncestor = child;
    }
  });

  const ancestorPath = childAncestor.getAncestorPath(relative);

  if (!ancestorPath) {
    return null;
  }

  ancestorPath.unshift(this);

  return ancestorPath;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function isDescendant(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (let i = 0; i < this.children.length; i += 1) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
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
