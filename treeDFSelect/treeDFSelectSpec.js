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
});
