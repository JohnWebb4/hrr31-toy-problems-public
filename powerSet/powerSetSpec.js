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
    const expected = ['', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];
    const actual = powerSet(string);

    expected.forEach(set => expect(actual).to.include(set));
  });

  it('should get power set for "jump"', () => {
    const string = 'jump';
    const expected = ['', 'j', 'ju', 'jm', 'jp', 'jmu', 'jmp', 'jpu',
      'jmpu', 'u', 'm', 'p', 'mu', 'mp', 'pu', 'mpu'];
    const actual = powerSet(string);

    expected.forEach(set => expect(actual).to.include(set));
  });

  it('should remove duplicates', () => {
    // Get power set results
    const string = 'aaaa';
    const expected = ['', 'a'];
    const actual = powerSet(string);

    // Compare
    expected.forEach(set => expect(actual).to.include(set));

    expect(actual).to.not.includes('aa');
  });
});
