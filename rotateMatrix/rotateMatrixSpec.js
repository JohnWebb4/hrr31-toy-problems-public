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

  it('should rotate n-n matrix', () => {
    expect(rotateMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 'A', 'B', 'C'],
      ['D', 'E', 'F', 'G'],
    ])).to.deep.equal([
      ['D', 9, 5, 1],
      ['E', 'A', 6, 2],
      ['F', 'B', 7, 3],
      ['G', 'C', 8, 4],
    ]);
  });
});
