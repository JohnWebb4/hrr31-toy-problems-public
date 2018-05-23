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

  it('should write tens', () => {
    expect(10 .toEnglish()).to.equal('ten');
    expect(20 .toEnglish()).to.equal('twenty');
    expect(30 .toEnglish()).to.equal('thirty');
    expect(40 .toEnglish()).to.equal('forty');
    expect(50 .toEnglish()).to.equal('fifty');
    expect(60 .toEnglish()).to.equal('sixty');
    expect(70 .toEnglish()).to.equal('seventy');
    expect(80 .toEnglish()).to.equal('eighty');
    expect(90 .toEnglish()).to.equal('ninety');

    // compounds from 21-99 should be hyphenated
    expect(44 .toEnglish()).to.equal('forty-four');
    expect(67 .toEnglish()).to.equal('sixty-seven');
    expect(99 .toEnglish()).to.equal('ninety-nine');
  });
});