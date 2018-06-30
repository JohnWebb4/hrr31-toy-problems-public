import { describe, it } from 'mocha';
import { expect } from 'chai';

import nthFibonacci from './nthFibonacci';

describe('nthFibonacci', () => {
  it('should be a function', () => {
    expect(nthFibonacci).to.be.a('function');
  });
});
