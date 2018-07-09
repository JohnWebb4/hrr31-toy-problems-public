import { describe, it } from 'mocha';
import { expect } from 'chai';

import commonCharacters from './commonCharacters';

describe('commonCharacters', () => {
  it('should be a function', () => {
    expect(commonCharacters).to.be.a('function');
  });

  it('should return a string', () => {
    expect(commonCharacters('hi', 'hi')).to.be.a('string');
  });

  it('should return common characters', () => {
    expect(commonCharacters('hi', 'hello')).to.equal('h');
    expect(commonCharacters('test', 'test')).to.equal('tes');
  });

  it('should handle empty strings', () => {
    expect(commonCharacters('', '')).to.equal('');
    expect(commonCharacters('test', '')).to.equal('');
    expect(commonCharacters('', 'test')).to.equal('');
  });

  it('should have no common characters', () => {
    expect(commonCharacters('hi', 'test')).to.equal('');
    expect(commonCharacters('something', 'xyz')).to.equal('');
  });
});
