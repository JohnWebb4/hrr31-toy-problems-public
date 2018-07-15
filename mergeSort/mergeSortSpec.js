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

  it('should sort large array of random integers', () => {
    const input = [];
    const n = 1000000;

    for (let i = 0; i < n; i += 1) {
      const number = Math.floor(Math.random() * n);
      input.push(number);
    }

    const sorted = input.sort((a, b) => a - b); // sort numerically, not lexicographically

    const result = mergeSort(input);

    // using .eql can cause an n-line error message to print, so we do it by hand
    for (let i = 0; i < n; i += 1) {
      expect(result[i]).to.equal(sorted[i]);
    }
  }).timeout(5000);
});
