import { describe, it } from 'mocha';
import { expect } from 'chai';

import deepEquals from './deepEquality';

describe('deepEquals', () => {
  it('should be a function', () => {
    expect(deepEquals).to.be.a('function');
  });

  it('should return a boolean', () => {
    expect(deepEquals({}, {})).to.be.a('boolean');
  });
});
