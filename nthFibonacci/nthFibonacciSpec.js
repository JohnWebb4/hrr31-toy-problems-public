import { describe, it } from 'mocha';
import { expect } from 'chai';

import nthFibonacci from './nthFibonacci';

describe('nthFibonacci', () => {
  it('should be a function', () => {
    // Test is defined
    expect(nthFibonacci).to.be.a('function');
  });

  it('should return a number', () => {
    // Test a valid number
    expect(nthFibonacci(0)).to.be.a('number');
  });

  it('should return undefined for negative numbers', () => {
    // Test negative numbers
    expect(nthFibonacci(-1)).to.equal(undefined);
    expect(nthFibonacci(-2)).to.equal(undefined);
  });

  it('should return undefined for not a number', () => {
    // Items to test
    const itemsToTestUndefined = [
      undefined,
      null,
      [],
      {},
    ];

    // Test all items
    itemsToTestUndefined.forEach(item => expect(nthFibonacci(item)).to.equal(undefined));
  });

  it('should return the nth Fibonacci', () => {
    const valuesToTest = [
      [0, 0],
      [1, 1],
      [2, 1],
      [3, 2],
      [4, 3],
      [5, 5],
      [6, 8],
    ];
    valuesToTest.forEach(([index, value]) => expect(nthFibonacci(index)).to.equal(value));
  });

  it('should use iterative algorithm for speed', () => (
    new Promise((resolve) => {
      nthFibonacci(200000000);
      resolve();
    })
  )).timeout(1000);
});
