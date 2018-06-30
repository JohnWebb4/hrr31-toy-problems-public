import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';

import { makeBoard, robotPaths } from './robotPaths';

describe('robotPaths', () => {
  let board;
  let n;
  let i;
  let j;

  beforeEach(() => {
    n = 5;
    i = 0;
    j = 0;
    board = makeBoard(n);
  });

  it('should be a function', () => {
    expect(robotPaths).to.be.a('function');
  });

  it('should return a number', () => {
    expect(robotPaths(n, board, i, j)).to.be.a('number');
  });

  it('should return zero for 0x0 board', () => {
    n = 0;
    expect(robotPaths(n, makeBoard(n), i, j)).to.equal(0);
  });

  it('should return one for 1x1 board', () => {
    n = 1;
    expect(robotPaths(n, makeBoard(n), i, j)).to.equal(1);
  });
});
