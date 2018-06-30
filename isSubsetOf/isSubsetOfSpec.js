import { describe, it } from 'mocha';
import { expect } from 'chai';

require('./isSubsetOf');

describe('isSubsetOf', () => {
  it('should be a function', () => {
    expect(Array.prototype.isSubsetOf).to.be.a('function');
  });
});
