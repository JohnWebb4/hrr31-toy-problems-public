import { describe, it } from 'mocha';
import { expect } from 'chai';

require('./isSubsetOf');

describe('isSubsetOf', () => {
  it('should be a function', () => {
    expect(Array.prototype.isSubsetOf).to.be.a('function');
  });

  it('should return boolean', () => {
    const subset = [];
    expect(subset.isSubsetOf([])).to.be.a('boolean');
  });

  it('should return true if array is subset', () => {
    const subset = ['test', 1];
    expect(subset.isSubsetOf(['test', 'something', 1, 2])).to.equal(true);
  });

  it('should return false for non subsets', () => {
    const nonSubset = ['test', 'hi'];
    expect(nonSubset.isSubsetOf(['tests', 'something'])).to.equal(false);
  });

  it('should handle objects and array elements', () => {
    const subset = [['test'], { test: 'something' }];
    const parent = [['test'], { test: 'something' }, ['Another', 'array']];

    expect(subset.isSubsetOf(parent)).to.equal(true);
  });
});
