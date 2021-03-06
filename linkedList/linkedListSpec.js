import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';

import LinkedList from './linkedList';

describe('linkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should be a psuedoclassical linked list', () => {
    expect(linkedList).to.be.an('object');
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should return item added to tail', () => {
    expect(linkedList.addToTail(1)).to.equal(1);
  });

  it('should return item removed from head', () => {
    linkedList.addToTail(1);
    expect(linkedList.removeHead()).to.equal(1);

    // No item in linked list expect undefined
    expect(linkedList.removeHead()).to.equal(null);
  });

  it('should check if value is contained', () => {
    linkedList.addToTail(1);
    expect(linkedList.contains(1)).to.equal(true);
  });

  it('should handle add, removing, and containing together', () => {
    expect(linkedList.tail).to.equal(null);
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
    expect(linkedList.removeHead()).to.equal(4);
    expect(linkedList.tail.value).to.equal(5);
    expect(linkedList.removeHead()).to.equal(5);
    expect(linkedList.removeHead()).to.equal(null);
  });

  it('should remove head and tail, when popping list with one element', () => {
    linkedList.addToTail(4);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);
  });
});
