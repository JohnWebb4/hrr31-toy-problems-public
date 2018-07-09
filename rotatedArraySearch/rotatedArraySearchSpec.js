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
});
