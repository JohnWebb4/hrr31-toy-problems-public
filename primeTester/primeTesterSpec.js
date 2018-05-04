describe('primeTester', function() {
  it('should handle non-prime numbers', function() {
    expect(primeTester(1)).to.be.false;
    expect(primeTester(4)).to.be.false;
    expect(primeTester(6)).to.be.false;
    expect(primeTester(8)).to.be.false;
  });
});
