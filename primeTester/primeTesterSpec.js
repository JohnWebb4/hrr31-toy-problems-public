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
    expect(primeTester(2760727302517)).to.be.true;
    expect(primeTester(5665449960167)).to.be.true;
    expect(primeTester(8624419641811)).to.be.true;
    expect(primeTester(11618595583891)).to.be.true;
    expect(primeTester(14638944639703)).to.be.true;
    expect(primeTester(17680139794171)).to.be.true;
    expect(primeTester(20738669482799)).to.be.true;
    expect(primeTester(23812036414963)).to.be.true;
    expect(primeTester(26898370231697)).to.be.true;
    expect(primeTester(29996224275833)).to.be.true;
  });

  it('should handle largest prime number in 1855', function() {
    expect(primeTester(67280421310721));
  });

  it('should handle M127', function() {
    expect(primeTester(170141183460469231731687303715884105727));
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
