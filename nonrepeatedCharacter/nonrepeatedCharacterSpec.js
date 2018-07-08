import { describe, it } from 'mocha';
import { expect } from 'chai';

import firstNonRepeatedCharacter from './nonrepeatedCharacter';

describe('firstNonRepeatedCharacter', () => {
  it('should be a function', () => {
    expect(firstNonRepeatedCharacter).to.be.a('function');
  });

  it('should return a string', () => {
    expect(firstNonRepeatedCharacter('test')).to.be.a('string');
  });

  it('should return first non-repeated character', () => {
    expect(firstNonRepeatedCharacter('ABA')).to.equal('B');
    expect(firstNonRepeatedCharacter('ABABC')).to.equal('C');
  });

  it('should return null for all repeated characters', () => {
    expect(firstNonRepeatedCharacter('AAAA')).to.equal(null);
  });
});
