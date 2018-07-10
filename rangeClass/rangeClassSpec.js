import { describe, it } from 'mocha';
import { expect } from 'chai';

import Range from './rangeClass';

describe('Range', () => {
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
});
