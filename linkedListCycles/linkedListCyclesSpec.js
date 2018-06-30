import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';

import { Node, hasCycle } from './linkedListCycles';

describe('linkedListCycles', () => {
  let linearList;
  let cyclicList;

  beforeEach(() => {
    linearList = Node('A');
    const nodeB = Node('B');
    linearList.next = nodeB;
    const nodeC = Node('C');
    nodeB.next = nodeC;
    const nodeD = Node('D');
    nodeC.next = nodeD;
    const nodeE = Node('E');
    nodeD.next = nodeE;

    cyclicList = Node('A');
    const cNodeB = Node('B');
    cyclicList.next = cNodeB;
    const cNodeC = Node('C');
    cNodeB.next = cNodeC;
    const cNodeD = Node('D');
    cNodeC.next = cNodeD;
    const cNodeE = Node('E');
    cNodeD.next = cNodeE;
    cNodeE.next = cNodeB;
  });

  it('should be a function', () => {
    expect(hasCycle).to.be.a('function');
  });

  it('should return a Boolean', () => {
    expect(hasCycle(linearList)).to.be.a('boolean');
  });

  it('should return false for linear linked list', () => {
    expect(hasCycle(linearList)).to.equal(false);
  });

  it('should return true for cyclic lined list', () => {
    expect(hasCycle(cyclicList)).to.equal(true);
  });
});
