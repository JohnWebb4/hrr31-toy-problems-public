import { describe, it } from 'mocha';
import { expect } from 'chai';

import { divide, modulo, multiply } from './implementingOperators';

describe('implementingOperators', () => {
  describe('multiply', () => {
    it('should be a function', () => {
      expect(multiply).to.be.a('function');
    });

    it('should return a number', () => {
      expect(multiply(1, 1)).to.be.a('number');
    });

    it('should return the product of two positive integers', () => {
      expect(multiply(1, 1)).to.equal(1);
    });

    it('should handle 0', () => {
      expect(multiply(1, 0)).to.equal(0);
      expect(multiply(0, 1)).to.equal(0);
    });

    it('should handle negative numbers', () => {
      expect(multiply(-1, 1)).to.equal(-1);
      expect(multiply(3, -2)).to.equal(-6);
    });
  });

  describe('divide', () => {
    it('should be a function', () => {
      expect(divide).to.be.a('function');
    });

    it('should return a number', () => {
      expect(divide(1, 1)).to.be.a('number');
    });

    it('should divide positive integers', () => {
      expect(divide(1, 1)).to.equal(1);
      expect(divide(4, 2)).to.equal(2);
    });

    it('should return NaN for divide by zero', () => {
      expect(divide(1, 0)).to.eql(NaN);
    });

    it('should divide negative numbers', () => {
      expect(divide(-9, 3)).to.equal(-3);
      expect(divide(9, -3)).to.equal(-3);
    });

    it('should divide to three decimal places', () => {
      expect(divide(0, 10)).to.be.below((0 / 10) + 0.001);
      expect(divide(0, 10)).to.be.above((0 / 10) - 0.001);

      expect(divide(2, 3)).to.be.below((2 / 3) + 0.001);
      expect(divide(2, 3)).to.be.above((2 / 3) - 0.001);

      expect(divide(5, 2)).to.be.below((5 / 2) + 0.001);
      expect(divide(5, 2)).to.be.above((5 / 2) - 0.001);

      expect(divide(6, 4)).to.be.below((6 / 4) + 0.001);
      expect(divide(6, 4)).to.be.above((6 / 4) - 0.001);

      expect(divide(35, 8)).to.be.below((35 / 8) + 0.001);
      expect(divide(35, 8)).to.be.above((35 / 8) - 0.001);

      expect(divide(45, 12)).to.be.below((45 / 12) + 0.001);
      expect(divide(45, 12)).to.be.above((45 / 12) - 0.001);

      expect(divide(3782, 80)).to.be.below((3782 / 80) + 0.001);
      expect(divide(3782, 80)).to.be.above((3782 / 80) - 0.001);
    });
  });

  describe('modulo', () => {
    it('should be a function', () => {
      expect(modulo).to.be.a('function');
    });

    it('should return an integer', () => {
      expect(modulo(1, 1)).to.be.a('number');
    });

    it('should handle positibe modulos', () => {
      expect(modulo(1, 1)).to.equal(0);
      expect(modulo(2, 3)).to.equal(2);
      expect(modulo(5, 3)).to.equal(2);
    });

    it('should handle negative modulos', () => {
      expect(modulo(-1, 1)).to.equal(0);
      expect(modulo(-2, 3)).to.equal(-2);
      expect(modulo(-5, 3)).to.equal(-2);
    });

    it('should handle negative modulo dividend', () => {
      expect(modulo(1, -1)).to.equal(0);
      expect(modulo(2, -3)).to.equal(2);
      expect(modulo(-5, -3)).to.equal(-2);
    });

    it('should handle zero modulo dividend', () => {
      expect(modulo(1, 0)).to.eql(NaN);
      expect(modulo(5, 0)).to.eql(NaN);
    });
  });
});
