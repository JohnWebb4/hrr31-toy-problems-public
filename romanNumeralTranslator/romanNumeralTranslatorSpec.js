describe('romanNumeralTranslator', () => {
  it('should be a function', () => {
    expect(translateRomanNumeral).to.be.a('function');
  });

  it('should return a number', () => {
    expect(translateRomanNumeral('I')).to.be.a('number');
  });
});
