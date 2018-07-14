import { describe, it } from 'mocha';
import { expect } from 'chai';

import mergeSort from './mergeSort';

describe('mergeSort', () => {
  it('should be a function', () => {
    expect(mergeSort).to.be.a('function');
  });
});
