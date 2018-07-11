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

  it('should return true for valid parenthesis', () => {
    expect(balancedParens('()')).to.equal(true);
    expect(balancedParens('(){}[]()')).to.equal(true);
    expect(balancedParens('({[()]})')).to.equal(true);
    expect(balancedParens('((()))')).to.equal(true);
    expect(balancedParens('({}[])()')).to.equal(true);
  });

  it('should return false for invalid parenthesis', () => {
    expect(balancedParens('(]')).to.equal(false);
    expect(balancedParens('()[}{]')).to.equal(false);
    expect(balancedParens('({[}])()')).to.equal(false);
  });
});
