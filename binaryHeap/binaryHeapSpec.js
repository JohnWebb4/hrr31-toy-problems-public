import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';

import BinaryHeap from './binaryHeap';

describe('binaryHeap', () => {
  let binaryHeap;

  beforeEach(() => {
    binaryHeap = new BinaryHeap();
  });

  it('should get null root for empty._heap', () => {
    expect(binaryHeap.getRoot()).to.equal(undefined);
  });

  it('should insert node at root', () => {
    expect(binaryHeap.insert(1)).to.equal(1);
    expect(binaryHeap.getRoot()).to.equal(1);
  });

  it('should insert child nodes', () => {
    binaryHeap.insert(0);
    binaryHeap.insert(1);
    binaryHeap.insert(2);

    expect(binaryHeap._heap[0]).to.equal(0);
    expect(binaryHeap._heap[1]).to.equal(1);
    expect(binaryHeap._heap[2]).to.equal(2);
  });

  it('should swap nodes with parent', () => {
    binaryHeap.insert(0);
    binaryHeap.insert(-1);
    binaryHeap.insert(1);
    binaryHeap.insert(2);
    binaryHeap.insert(-2);

    expect(binaryHeap._heap[0]).to.equal(-2);
    expect(binaryHeap._heap[1]).to.equal(-1);
    expect(binaryHeap._heap[2]).to.equal(1);
    expect(binaryHeap._heap[3]).to.equal(2);
    expect(binaryHeap._heap[4]).to.equal(0);
  });

  it('should remove a single element._heap', () => {
    binaryHeap.insert(0);
    binaryHeap.removeRoot();
    expect(binaryHeap.getRoot()).to.equal(undefined);
  });

  it('should return removed element', () => {
    binaryHeap.insert(0);
    expect(binaryHeap.removeRoot()).to.equal(0);
  });

  it('should remove a mult-element._heap', () => {
    binaryHeap.insert(0);
    binaryHeap.insert(1);
    binaryHeap.insert(2);
    binaryHeap.insert(3);
    binaryHeap.insert(4);

    binaryHeap.removeRoot();

    expect(binaryHeap._heap[0]).to.equal(1);
    expect(binaryHeap._heap[1]).to.equal(3);
    expect(binaryHeap._heap[2]).to.equal(2);
    expect(binaryHeap._heap[3]).to.equal(4);
  });

  it('should maintain inserting based off _compare', () => {
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(9);
    binaryHeap.insert(8);
    binaryHeap.insert(1);

    const compare = binaryHeap._compare;
    const heap = binaryHeap._heap;

    // heap[0] is the parent of heap[1] and heap[2]
    // heap[1] is the parent of heap[3] and heap[4]
    expect(compare(heap[0], heap[1])).to.equal(true);
    expect(compare(heap[0], heap[2])).to.equal(true);
    expect(compare(heap[1], heap[3])).to.equal(true);
    expect(compare(heap[1], heap[4])).to.equal(true);
  });

  it('should maintain removing based off _compare', () => {
    binaryHeap.insert(4);
    binaryHeap.insert(5);
    binaryHeap.insert(9);
    binaryHeap.insert(8);
    binaryHeap.insert(1);
    binaryHeap.insert(0);
    binaryHeap.removeRoot();

    const compare = binaryHeap._compare;
    const heap = binaryHeap._heap;

    // heap[0] is the parent of heap[1] and heap[2]
    // heap[1] is the parent of heap[3] and heap[4]
    expect(compare(heap[0], heap[1])).to.equal(true);
    expect(compare(heap[0], heap[2])).to.equal(true);
    expect(compare(heap[1], heap[3])).to.equal(true);
    expect(compare(heap[1], heap[4])).to.equal(true);
  });
});
