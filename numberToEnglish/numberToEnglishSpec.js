xdescribe('numberToEnglish', () => {
  it('should be a function', () => {
    expect(Number.prototype.toEnglish).to.be.a('function');
  });

  it('should handle single digits', () => {
    expect(0 .toEnglish()).to.equal('zero');
    expect(1 .toEnglish()).to.equal('one');
    expect(2 .toEnglish()).to.equal('two');
    expect(3 .toEnglish()).to.equal('three');
    expect(4 .toEnglish()).to.equal('four');
    expect(5 .toEnglish()).to.equal('five');
    expect(6 .toEnglish()).to.equal('six');
    expect(7 .toEnglish()).to.equal('seven');
    expect(8 .toEnglish()).to.equal('eight');
    expect(9 .toEnglish()).to.equal('nine');
  });
});