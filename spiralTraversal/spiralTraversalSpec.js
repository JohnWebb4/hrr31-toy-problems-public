import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';

import spiralTraversal from './spiralTraversal';

describe('spiralTraversal', () => {
  let arrayToTraverse;
  let spiralArray;

  beforeEach(() => {
    arrayToTraverse = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    spiralArray = [1, 2, 3, 6, 9, 8, 7, 4, 5];
  });

  it('should be a function', () => {
    expect(spiralTraversal).to.be.a('function');
  });

  it('should return an array', () => {
    expect(spiralTraversal(arrayToTraverse)).to.be.an('array');
  });

  it('should spiral traverse array', () => {
    expect(spiralTraversal(arrayToTraverse)).to.eql(spiralArray);
  });

  it('should handle a non-square matrix', () => {
    expect(spiralTraversal([
      [1, 2],
      [4, 5],
      [7, 8],
    ])).to.eql([1, 2, 5, 8, 7, 4]);
  });
});
