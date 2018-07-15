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
});
