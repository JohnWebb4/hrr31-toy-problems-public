import { describe, it } from 'mocha';
import { expect } from 'chai';

import Tree from './treeBFSelect';

describe('treeBFSelect', () => {
  it('should be a Tree class', () => {
    expect(Tree).to.be.a('function');
    expect(Tree.prototype.BFSelect).to.be.a('function');
  });

  it('should return an array', () => {
    const tree = new Tree();
    expect(tree.BFSelect(() => true)).to.be.an('array');
  });

  it('should return selected children', () => {
    const root1 = new Tree(1);
    const branch2 = root1.addChild(2);
    const branch3 = root1.addChild(3);
    branch2.addChild(4);
    branch2.addChild(5);
    branch3.addChild(6);
    branch3.addChild(7);

    // Test gets odd numbers in order
    expect(root1.BFSelect(value => value % 2))
      .to.deep.equal([1, 3, 5, 7]);

    // Test gets children or root in order
    expect(root1.BFSelect((value, depth) => depth === 1))
      .to.deep.equal([2, 3]);
  });
});
