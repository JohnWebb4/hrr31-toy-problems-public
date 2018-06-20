const { beforeEach, describe, it } = require('mocha');
const { expect } = require('chai');
const { characterFrequency } = require('./characterFrequency');

describe('characterFrequency', () => {
  let characterString;
  let resultFrequency;

  beforeEach(() => {
    characterString = 'because';
    resultFrequency = [
      ['e', 2],
      ['a', 1],
      ['b', 1],
      ['c', 1],
      ['s', 1],
      ['u', 1],
    ];
  });

  it('should be function', () => {
    expect(characterFrequency).to.be.a('function');
  });

  it('should return an array of tuples', () => {
    const frequencyArray = characterFrequency(characterString);
    expect(Array.isArray(frequencyArray)).to.equal(true);
    expect(Array.isArray(frequencyArray[0])).to.equal(true);
  });

  it('should get character frequency', () => {
    expect(characterFrequency(characterString)).to.eql(resultFrequency);
  });
});
