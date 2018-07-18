import { describe, it } from 'mocha';
import { expect } from 'chai';

import rotateMatrix from './rotateMatrix';

describe('rotateMatrix', () => {
  it('should be a function', () => {
    expect(rotateMatrix).to.be.a('function');
  });

  it('should return a matrix', () => {
    const outMatrix = rotateMatrix([[1]]);
    expect(outMatrix).to.be.an('array');
    expect(outMatrix[0]).to.be.an('array');
  });
});
