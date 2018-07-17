import { describe, it } from 'mocha';
import { expect } from 'chai';

import toFracton from './fractionConverter';

describe('fractionConverter', () => {
  it('should be a function', () => {
    expect(toFracton).to.be.a('function');
  });
});
