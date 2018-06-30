import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';

import BinaryHeap from './binaryHeap';

describe('binaryHeap', () => {
  let binaryHeap;

  beforeEach(() => {
    binaryHeap = new BinaryHeap();
  });

  it('should get null root for empty heap', () => {
    expect(binaryHeap.getRoot()).to.equal(undefined);
  });

  it('should insert node at root', () => {
    expect(binaryHeap.insert(1)).to.equal(1);
    expect(binaryHeap.getRoot()).to.equal(1);
  });
});
