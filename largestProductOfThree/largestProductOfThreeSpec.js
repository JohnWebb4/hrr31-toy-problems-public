import { describe, it } from 'mocha';
import { expect } from 'chai';

import largestProductOfThree from './largestProductOfThree';

describe('largestProductOfThree', () => {
  it('should be a function', () => {
    expect(largestProductOfThree).to.be.a('function');
  });
});
