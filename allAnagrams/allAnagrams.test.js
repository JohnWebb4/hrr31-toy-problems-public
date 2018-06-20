const { beforeEach, describe, it } = require('mocha');
const { expect } = require('chai');
const allAnagrams = require('./allAnagrams.js');

describe('allAnagrams', () => {
  let string;
  let resultAnagrams;

  beforeEach(() => {
    string = 'abc';
    resultAnagrams = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
  });

  it('should be a function', () => {
    expect(allAnagrams).to.be.a('function');
  });

  it('should return an array', () => {
    expect(allAnagrams(string)).to.be.an('array');
  });

  it('should return all anagrams', () => {
    expect(allAnagrams(string)).to.eql(resultAnagrams);
  });

  it('should return unique anagrams', () => {
    const expected = ['apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas', 'ppsa', 'psap', 'pspa', 'sapp', 'spap', 'sppa'];
    const result = allAnagrams('apps');
    expect(result.length).to.equal(expected.length);
  });
});
