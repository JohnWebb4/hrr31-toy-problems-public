import { describe, it } from 'mocha';
import { expect } from 'chai';

require('./isSubsetOf');

describe('isSubsetOf', () => {
  it('should be a function', () => {
    expect(Array.prototype.isSubsetOf).to.be.a('function');
  });

  it('should return boolean', () => {
    const a = [];
    expect(a.isSubsetOf([])).to.be.a('boolean');
  });

  it('should return true if array is subset', () => {
    const a = ['test'];
    expect(a.isSubsetOf(['test', 'something'])).to.equal(true);
  });
});
