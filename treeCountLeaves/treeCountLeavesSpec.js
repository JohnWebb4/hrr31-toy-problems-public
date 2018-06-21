const { beforeEach, describe, it } = require('mocha');
const { expect } = require('chai');

const Tree = require('./treeCountLeaves');

describe('treeCountLeaves', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree();
  });

  it('should work for one leaf', () => {
    expect(tree.countLeaves()).to.equal(1);
  });

  it('should work for direct leaves', () => {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);

    expect(tree.countLeaves()).to.equal(3);
  });

  it('should work for indirect leaves', () => {
    tree.addChild(1);
    tree.children[0].addChild(2);
    tree.children[0].addChild(3);

    expect(tree.countLeaves()).to.equal(2);
  });

  it('should work for direct and indirect leaves', () => {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[1].addChild(4);
    tree.children[2].addChild(5);
    tree.children[2].children[0].addChild(6);

    expect(tree.countLeaves()).to.equal(3);
  });

  it('should handle varying data types', () => {
    tree.addChild(1);
    tree.addChild(undefined);
    tree.addChild(null);
    tree.children[1].addChild([1, 2, 3]);
    tree.children[2].addChild({ a: true });
    tree.children[2].children[0].addChild(true);

    expect(tree.countLeaves()).to.equal(3);
  });

  it('should not count non-tree children', () => {
    tree.addChild(1);

    tree.children.push(1);
    tree.children.push(true);
    tree.children.push(undefined);
    tree.children.push(null);
    tree.children.push({ this: 'is not a valid child' });
    tree.children.push(['this', 'also', 'doesn\'t', 'count']);

    expect(tree.countLeaves()).to.equal(1);
  });
});
