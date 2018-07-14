import { describe, it } from 'mocha';
import { expect } from 'chai';

import mergeSort from './mergeSort';

describe('mergeSort', () => {
  it('should be a function', () => {
    expect(mergeSort).to.be.a('function');
  });

  it('should return an array', () => {
    expect(mergeSort([1, 2])).to.be.an('array');
  });
});
