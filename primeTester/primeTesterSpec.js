const { describe, it } = require('mocha');
const { expect } = require('chai');

const { primeTester, primeSieve } = require('./primeTester');

describe('primeTester', () => {
  it('should handle non-prime numbers', () => {
    expect(primeTester(1)).to.equal(false);
    expect(primeTester(4)).to.equal(false);
    expect(primeTester(6)).to.equal(false);
    expect(primeTester(8)).to.equal(false);
  });

  it('should handle prime numbers', () => {
    expect(primeTester(2)).to.equal(true);
    expect(primeTester(3)).to.equal(true);
    expect(primeTester(5)).to.equal(true);
    expect(primeTester(7)).to.equal(true);
  });

  it('should handle negative numbers and zero', () => {
    expect(primeTester(-1)).to.equal(false);
    expect(primeTester(-2)).to.equal(false);
    expect(primeTester(0)).to.equal(false);
    expect(primeTester(-155)).to.equal(false);
  });

  it('should handle very large prime numbers', () => {
    expect(primeTester(7919)).to.equal(true);
    expect(primeTester(17389)).to.equal(true);
    expect(primeTester(32452843)).to.equal(true);
    expect(primeTester(2760727302517)).to.equal(true);
    expect(primeTester(5665449960167)).to.equal(true);
    expect(primeTester(8624419641811)).to.equal(true);
    expect(primeTester(11618595583891)).to.equal(true);
    expect(primeTester(14638944639703)).to.equal(true);
    expect(primeTester(17680139794171)).to.equal(true);
    expect(primeTester(20738669482799)).to.equal(true);
    expect(primeTester(23812036414963)).to.equal(true);
    expect(primeTester(26898370231697)).to.equal(true);
    expect(primeTester(29996224275833)).to.equal(true);
  });

  it('should handle largest prime number in 1855', () => {
    expect(primeTester(67280421310721));
  });

  it('should handle M127', () => {
    expect(primeTester(170141183460469231731687303715884105727));
  });
});

describe('primeSieve', () => {
  it('should return an array', () => {
    expect(primeSieve(1, 100)).to.be.an('array');
  });

  it('should return an array of size 25', () => {
    expect(primeSieve(1, 100).length).to.equal(25);
  });

  it('should return first 5 prime numbers', () => {
    expect(primeSieve(1, 11)).to.eql([2, 3, 5, 7, 11]);
  });
});
