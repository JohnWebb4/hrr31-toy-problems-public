import { describe, it } from 'mocha';
import { expect } from 'chai';

import largestProductOfThree from './largestProductOfThree';

describe('largestProductOfThree', () => {
  it('should be a function', () => {
    expect(largestProductOfThree).to.be.a('function');
  });

  it('should return a number', () => {
    expect(largestProductOfThree([1, 2, 3])).to.be.a('number');
  });

  it('should return the largest product of any three numbers', () => {
    expect(largestProductOfThree([1, 2, 3])).to.equal(6);
    expect(largestProductOfThree([0, 1, 2, 3, 0])).to.equal(6);
    expect(largestProductOfThree([-15, -1, 3, 4])).to.equal(60);
  });
});
