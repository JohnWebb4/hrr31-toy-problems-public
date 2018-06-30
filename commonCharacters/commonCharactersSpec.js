import { describe, it } from 'mocha';
import { expect } from 'chai';

import commonCharacters from './commonCharacters';

describe('commonCharacters', () => {
  it('should be a function', () => {
    expect(commonCharacters).to.be.a('function');
  });
});
