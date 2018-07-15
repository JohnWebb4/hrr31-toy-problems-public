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
});
