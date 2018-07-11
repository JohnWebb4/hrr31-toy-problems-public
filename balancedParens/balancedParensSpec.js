import { describe, it } from 'mocha';
import { expect } from 'chai';

import balancedParens from './balancedParens';

describe('balanced parenthesis', () => {
  it('should be a function', () => {
    expect(balancedParens).to.be.a('function');
  });

  it('should return a boolean', () => {
    expect(balancedParens('')).to.be.a('boolean');
  });
});
