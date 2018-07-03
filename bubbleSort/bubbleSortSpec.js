import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';

import bubbleSort from './bubbleSort';

describe('bubble sort', () => {
  let array;
  let sortedArray;

  beforeEach(() => {
    array = [
      1,
      0,
      -1,
      1.5,
      -2.5,
    ];

    sortedArray = [
      -2.5,
      -1,
      0,
      1,
      1.5,
    ];
  });

  it('should be a function', () => {
    expect(bubbleSort).to.be.a('function');
  });

  it('should not mutate input array', () => {
    let testArray = [1, -1];
    bubbleSort(testArray);
    expect(testArray).to.eql([1, -1]);
  });
});
