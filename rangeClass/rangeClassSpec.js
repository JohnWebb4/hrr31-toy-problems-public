import { describe, it } from 'mocha';
import { expect } from 'chai';

import Range from './rangeClass';

describe('range', () => {
  it('should be defined', () => {
    expect(Range).to.be.a('function');
    expect(Range.prototype.each).to.be.a('function');
    expect(Range.prototype.includes).to.be.a('function');
    expect(Range.prototype.size).to.be.a('function');
  });

  it('should create a range', () => {
    // Check default range
    const defaultRange = new Range(1);
    expect(defaultRange.start).to.equal(1);
    expect(defaultRange.end).to.equal(1);
    expect(defaultRange.step).to.equal(1);

    // Check range
    const range = new Range(2, 6, 2);
    expect(range.start).to.equal(2);
    expect(range.end).to.equal(6);
    expect(range.step).to.equal(2);
  });

  it('should return size', () => {
    const range = new Range(2, 6, 2);
    expect(range.size()).to.equal(3);

    // Test range with overstepping range
    const range1 = new Range(1, 4, 2);
    expect(range1.size()).to.equal(2);
  });

  it('should check if includes value', () => {
    const range = new Range(1, 3);

    expect(range.includes(1)).to.equal(true);
    expect(range.includes(2)).to.equal(true);
    expect(range.includes(3)).to.equal(true);

    expect(range.includes(4)).to.equal(false);
  });
});
