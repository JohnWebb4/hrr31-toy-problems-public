import { describe, it } from 'mocha';
import { expect } from 'chai';

import Tree from './treeDFSelect';

describe('treeDFSelect', () => {
  it('should be a psuedoclassical class', () => {
    expect(Tree).to.be.a('function');
    expect(Tree.prototype.DFSelect).to.be.a('function');
  });

  it('should return an array', () => {
    // Define tree
    const tree = new Tree(1);
    expect(tree.DFSelect(value => (value === 1 ? 1 : 0))).to.be.an('array');
  });

  it('should return filtered values', () => {
    // Define tree
    const tree = new Tree(1);
    const branch2 = tree.addChild(2);
    const branch3 = tree.addChild(3);
    branch2.addChild(4);
    branch2.addChild(5);
    branch3.addChild(6);
    branch3.addChild(7);

    // Tests
    expect(tree.DFSelect(value => value % 2)).to.eql([1, 5, 3, 7]);
    expect(tree.DFSelect((value, depth) => depth === 1)).to.eql([2, 3]);
  });
});
