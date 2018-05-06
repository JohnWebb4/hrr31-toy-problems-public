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

  it('should handle very large prime numbers', function() {
    expect(primeTester(7919)).to.be.true;
    expect(primeTester(17389)).to.be.true;
    expect(primeTester(32452843)).to.be.true;
  });
});

describe('primeSieve', function() {
  it('should return an array', function() {
    expect(primeSieve(1, 100)).to.be.an('array');
  });

  it('should return an array of size 25', function() {
    expect(primeSieve(1, 100).length).to.equal(25);
  });

  it('should return first 5 prime numbers', function() {
    expect(primeSieve(1, 11)).to.eql([2, 3, 5, 7, 11]);
  });
});
