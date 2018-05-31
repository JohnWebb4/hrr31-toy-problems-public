describe('implementingOperators', () => {
  describe('multiply', () => {
    it('multiply should be a function', () => {
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
    it('divide should be a function', () => {
      expect(divide).to.be.a('function');
    });

    it('divide should return a number', () => {
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
  });

  describe('modulo', () => {
    it('modulo should be a function', () => {
      expect(modulo).to.be.a('function');
    });
  });
});