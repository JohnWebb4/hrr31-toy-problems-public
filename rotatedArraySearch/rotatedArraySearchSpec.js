import { describe, it } from 'mocha';
import { expect } from 'chai';

import rotatedArraySearch from './rotatedArraySearch';

describe('rotatedArraySearch', () => {
  it('should be a function', () => {
    expect(rotatedArraySearch).to.be.a('function');
  });

  it('should return a number', () => {
    expect(rotatedArraySearch([1, 2], 2)).to.equal(1);
  });

  it('should return null if not in array', () => {
    expect(rotatedArraySearch([1, 2], 3)).to.equal(null);
  });

  it('should return index in rotated array', () => {
    expect(rotatedArraySearch([4, 5, 1, 2, 3], 5)).to.equal(1);
    expect(rotatedArraySearch([-4, 1, 2, 3], -4)).to.equal(0);
    expect(rotatedArraySearch([1, 2, 3, 4, 5], 4)).to.equal(3);
  });
});
