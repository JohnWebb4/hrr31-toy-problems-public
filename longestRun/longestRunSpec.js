import { describe, it } from 'mocha';
import { expect } from 'chai';

import { longestRun } from './longestRun';

describe('longestRun', () => {
  it('should be a function', () => {
    expect(longestRun).to.be.a('function');
  });

  it('should return an pair of indices', () => {
    const runIndexies = longestRun('hello');
    expect(runIndexies).to.be.an('array');
    expect(runIndexies.length).to.equal(2);
    expect(runIndexies[0]).to.be.a('number');
    expect(runIndexies[1]).to.be.a('number');
  });

  it('should return null on an empty string', () => {
    expect(longestRun('')).to.equal(null);
  });

  it('should return correct indices', () => {
    expect(longestRun('aaabcd')).to.deep.equal([0, 2]);
    expect(longestRun('aabcc')).to.deep.equal([0, 1]);
    expect(longestRun('aabbbcccc')).to.deep.equal([5, 8]);
    expect(longestRun('aabbbbccc')).to.deep.equal([2, 5]);
  });
});
