import { describe, it } from 'mocha';
import { expect } from 'chai';

import Tree from './treeDFSelect';

describe('treeDFSelect', () => {
  it('should be a psuedoclassical class', () => {
    expect(Tree).to.be.a('function');
  });
});
