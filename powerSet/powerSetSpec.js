import { describe, it } from 'mocha';
import { expect } from 'chai';

import powerSet from './powerSet';

describe('powerSet', () => {
  it('should be a function', () => {
    expect(powerSet).to.be.a('function');
  });

  it('should return one possiblity for empty string', () => {
    expect(powerSet('')).to.eql(['']);
  });

  it('should get power set of "abc"', () => {
    const string = 'abc';
    const result = ['', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];

    expect(powerSet(string)).to.eql(result);
  });
});
