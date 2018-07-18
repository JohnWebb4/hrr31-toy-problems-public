import { describe, it } from 'mocha';
import { expect } from 'chai';

import rotateMatrix from './rotateMatrix';

describe('rotateMatrix', () => {
  it('should be a function', () => {
    expect(rotateMatrix).to.be.a('function');
  });
});
