import { describe, it } from 'mocha';
import { expect } from 'chai';

import nthFibonacci from './nthFibonacci';

describe('nthFibonacci', () => {
  it('should be a function', () => {
    expect(nthFibonacci).to.be.a('function');
  });

  it('should return a number', () => {
    expect(nthFibonacci(0)).to.be.a('number');
  });

  it('should return undefined for negative numbers', () => {
    expect(nthFibonacci(-1)).to.equal(undefined);
    expect(nthFibonacci(-2)).to.equal(undefined);
  });
});
