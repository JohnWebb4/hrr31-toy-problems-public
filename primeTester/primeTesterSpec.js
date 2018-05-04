describe('primeTester', function() {
  it('should handle non-prime numbers', function() {
    expect(primeTester(1)).to.be.false;
    expect(primeTester(4)).to.be.false;
    expect(primeTester(6)).to.be.false;
    expect(primeTester(8)).to.be.false;
  });

  it('should handle prime numbers', function() {
    expect(primeTester(2)).to.be.true;
    expect(primeTester(3)).to.be.true;
    expect(primeTester(5)).to.be.true;
    expect(primeTester(7)).to.be.true;
  });

  it('should handle negative numbers and zero', function() {
    expect(primeTester(-1)).to.be.false;
    expect(primeTester(-2)).to.be.false;
    expect(primeTester(0)).to.be.false;
    expect(primeTester(-155)).to.be.false;
  });
});
