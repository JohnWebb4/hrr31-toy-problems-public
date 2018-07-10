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
});
