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

  it('should rotate a n-n matrix', () => {
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

  it('should handle a m-n matrix', () => {
    expect(rotateMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 'A', 'B', 'C'],
    ])).to.deep.equal([
      [9, 5, 1],
      ['A', 6, 2],
      ['B', 7, 3],
      ['C', 8, 4],
    ]);
  });

  it('should rotate clockwise and counter-clockwise', () => {
    // Rotate clockwise
    expect(rotateMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 'A', 'B', 'C'],
      ['D', 'E', 'F', 'G'],
    ], 1)).to.deep.equal([
      ['D', 9, 5, 1],
      ['E', 'A', 6, 2],
      ['F', 'B', 7, 3],
      ['G', 'C', 8, 4],
    ]);

    // Rotate counterclockwise
    expect(rotateMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 'A', 'B', 'C'],
      ['D', 'E', 'F', 'G'],
    ], -1)).to.deep.equal([
      [4, 8, 'C', 'G'],
      [3, 7, 'B', 'F'],
      [2, 6, 'A', 'E'],
      [1, 5, 9, 'D'],
    ]);
  });
});
