describe('implementingOperators', () => {
  it('multiple should be a function', () => {
    expect(multiply).to.be.a('function');
  });

  it('should return a number', () => {
    expect(multiply(1, 1)).to.be.a('number');
  });
});