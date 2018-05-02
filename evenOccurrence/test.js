describe('evenOccurrence', function() {

  it('should handle empty array', function() {
    expect(evenOccurrence([])).to.equal(null);
  });

  it('should return even occurrence 1', function() {
    expect(evenOccurrence([1, 2, 1, 3])).to.equal(1);
  });

  it('should return first even occurrence 1', function() {
    expect(evenOccurrence([1, 2, 1, 2, 3, 3])).to.equal(1);
  });

  it('should handle random order', function() {
    expect(evenOccurrence([2, 1, 3, 2, 57])).to.equal(2);
  });
});
