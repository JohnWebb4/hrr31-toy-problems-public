import { describe, it } from 'mocha';
import { expect } from 'chai';

import longestRun from './longestRun';

describe('longestRun', () => {
  it('should be a function', () => {
    expect(longestRun).to.be.a('function');
  });
});
