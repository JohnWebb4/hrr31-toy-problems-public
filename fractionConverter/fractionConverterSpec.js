import { describe, it } from 'mocha';
import { expect } from 'chai';

import toFraction from './fractionConverter';

describe('fractionConverter', () => {
  it('should be a function', () => {
    expect(toFraction).to.be.a('function');
  });

  it('should return a string', () => {
    expect(toFraction(1.0)).to.be.a('string');
  });

  it('should return a fraction', () => {
    expect(toFraction(0.5)).to.equal('1/2');
    expect(toFraction(0.25)).to.equal('1/4');
    expect(toFraction(0.2)).to.equal('1/5');
  });

  it('should handle mixed fractions and whole numbers', () => {
    // Whole numbers
    expect(toFraction(3.0)).to.equal('3/1');
    expect(toFraction(5.0)).to.equal('5/1');

    // Mixed fractions
    expect(toFraction(1.5)).to.equal('3/2');
    expect(toFraction(2.5)).to.equal('5/2');
  });
});
