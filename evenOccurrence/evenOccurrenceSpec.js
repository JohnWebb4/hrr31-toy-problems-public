const { describe, it } = require('mocha');
const { expect } = require('chai');

const evenOccurrence = require('./evenOccurrence');

describe('evenOccurrence', () => {
  it('should handle empty array', () => {
    expect(evenOccurrence([])).to.equal(null);
  });

  it('should return even occurrence 1', () => {
    expect(evenOccurrence([1, 2, 1, 3])).to.equal(1);
  });

  it('should return first even occurrence 1', () => {
    expect(evenOccurrence([1, 2, 1, 2, 3, 3])).to.equal(1);
  });

  it('should handle random order', () => {
    expect(evenOccurrence([2, 1, 3, 2, 57])).to.equal(2);
  });

  // Spectator tests
  it('should return the first even occurrence of an array of numbers', () => {
    expect(evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5])).to.equal(2);
  });

  it('should return the first even occurrence of a mixed array', () => {
    expect(evenOccurrence(['meow', 1, 1, 'meow'])).to.equal('meow');
  });

  it('should return the first even occurrence in an array with multiple even occurrences', () => {
    const array = ['doublerainbow', 'grumpycat', 'grumpycat', 'doublerainbow'];
    expect(evenOccurrence(array)).to.equal('doublerainbow');
  });
});
