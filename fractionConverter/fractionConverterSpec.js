import { describe, it } from 'mocha';
import { expect } from 'chai';

import toFraction from './fractionConverter';

describe('fractionConverter', () => {
  it('should be a function', () => {
    expect(toFraction).to.be.a('function');
  });

  it('should return a string', () => {
    expect(toFraction(1.0)).to.be.a('string');
  });
});
