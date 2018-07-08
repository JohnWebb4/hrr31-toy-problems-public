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
});
