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
});
