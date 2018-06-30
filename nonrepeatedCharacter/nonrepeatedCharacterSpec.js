import { describe, it } from 'mocha';
import { expect } from 'chai';

import firstNonRepeatedCharacter from './nonrepeatedCharacter';

describe('firstNonRepeatedCharacter', () => {
  it('should be a function', () => {
    expect(firstNonRepeatedCharacter).to.be.a('function');
  });
});
