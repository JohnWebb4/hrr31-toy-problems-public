import { describe, it } from 'mocha';
import { expect } from 'chai';

import { compose, pipe } from './composePipe';

describe('composePipe', () => {
  it('should be a function', () => {
    expect(compose).to.be.a('function');
    expect(pipe).to.be.a('function');
  });

  it('should return a function', () => {
    const testFunc = () => {};

    expect(compose(testFunc)).to.be.a('function');
    expect(pipe(testFunc)).to.be.a('function');
  });

  it('should compose functions', () => {
    // Create test functions
    const addThree = num => num + 3;
    const multiplyFive = num => num * 5;
    const divideFour = num => num / 4;

    // Test empty compose
    expect(compose()).to.equal(undefined);

    // Test compose with arguments
    expect(compose(addThree)(4)).to.equal(7);
    expect(compose(multiplyFive)(5)).to.equal(25);

    expect(compose(addThree, divideFour)(4)).to.equal(4);
    expect(compose(multiplyFive, addThree)(2)).to.equal(25);

    expect(compose(multiplyFive, divideFour, addThree)(1)).to.equal(5);
  });

  it('should pipe functions', () => {
    // Create test functions
    const addThree = num => num + 3;
    const multiplyFive = num => num * 5;
    const divideFour = num => num / 4;

    // Test empty pipe
    expect(pipe()).to.equal(undefined);

    // Test pipe with arguments
    expect(pipe(addThree)(4)).to.equal(7);
    expect(pipe(multiplyFive)(5)).to.equal(25);

    expect(pipe(addThree, divideFour)(4)).to.equal(1.75);
    expect(pipe(multiplyFive, addThree)(2)).to.equal(13);

    expect(pipe(multiplyFive, divideFour, addThree)(1)).to.equal(4.25);
  });
});
