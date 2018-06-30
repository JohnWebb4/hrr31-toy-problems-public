import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';
import makeChange from './coinSums';

describe('coinSum', () => {
  let changeTotals;
  let changeResults;

  beforeEach(() => {
    changeTotals = [
      0, 1, 2, 3,
    ];
    changeResults = [
      1, 1, 2, 2,
    ];
  });

  it('should be a function', () => {
    expect(makeChange).to.be.a('function');
  });

  it('should return a number', () => {
    expect(makeChange(changeTotals[0])).to.be.a('number');
  });

  it('should get total number of combinations for change', () => {
    changeTotals.forEach((total, index) => {
      expect(makeChange(total)).to.equal(changeResults[index]);
    });
  });
});
