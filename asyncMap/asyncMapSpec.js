import { describe, it } from 'mocha';
import { expect } from 'chai';

import asyncMap from './asyncMap';

describe('asyncMap', () => {
  it('should be a function', () => {
    expect(asyncMap).to.be.a('function');
  });
});
