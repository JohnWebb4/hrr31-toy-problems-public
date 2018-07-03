import { describe, it } from 'mocha';
import { expect } from 'chai';

import bubbleSort from './bubbleSort';

describe('bubble sort', () => {
  it('should be a function', () => {
    expect(bubbleSort).to.be.a('function');
  });

  it('should not mutate input array', () => {
    const testArray = [1, -1];
    bubbleSort(testArray);
    expect(testArray).to.eql([1, -1]);
  });

  it('should sort integers', () => {
    expect(bubbleSort([1, -1, -2, -3])).to.eql([-3, -2, -1, 1]);
  });

  it('should sort numbers with decimals', () => {
    expect(bubbleSort([1.2, -1.5, -2.1, -3.999, -3.998])).to.eql([-3.999, -3.998, -2.1, -1.5, 1.2]);
  });
});
