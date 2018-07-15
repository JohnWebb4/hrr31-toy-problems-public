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

  it('should return sorted array', () => {
    expect(mergeSort([])).to.deep.equal([]);
    expect(mergeSort([1])).to.deep.equal([1]);
    expect(mergeSort([2, 1])).to.deep.equal([1, 2]);
    expect(mergeSort([3, 2, 1])).to.deep.equal([1, 2, 3]);
  });

  it('should handle large arrays', () => {
    const sortedArray = [...Array(100000).keys()];
    const array = sortedArray.slice().reverse();

    // Expect sorts large array
    expect(mergeSort(array)).to.deep.equal(sortedArray);
  });
});
