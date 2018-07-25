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

  it('should return the correct fraction 1.0', () => {
    expect(toFraction(1.0)).to.equal('1/1');
  });

  it('should return the correct faction for 0.25', () => {
    expect(toFraction(0.25)).to.equal('1/4');
  });

  it('should return the correct faction for 0.88', () => {
    expect(toFraction(0.88)).to.equal('22/25');
  });

  it('should return the correct faction for 0.88', () => {
    expect(toFraction(0.88)).to.equal('22/25');
  });

  it('should return the correct faction for 0.253213', () => {
    expect(toFraction(0.253213)).to.equal('253213/1000000');
  });

  it('should return the correct faction for 1.75', () => {
    expect(toFraction(1.75)).to.equal('7/4');
  });

  it('should return the correct fraction for 0.0', () => {
    expect(toFraction(0)).to.equal('0/1');
  });

  it('should return the correct faction for 82', () => {
    expect(toFraction(82.0)).to.equal('82/1');
  });

  it('should work for negative numbers', () => {
    expect(toFraction(-1.75)).to.equal('-7/4');
  });
});
