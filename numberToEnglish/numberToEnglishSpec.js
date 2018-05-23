describe('numberToEnglish', () => {
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

  it('should write hundreds', () => {
    expect(100 .toEnglish()).to.equal('one hundred');
    expect(500 .toEnglish()).to.equal('five hundred');
    expect(700 .toEnglish()).to.equal('seven hundred');

    expect(100 .toEnglish()).to.equal('one hundred');
    expect(500 .toEnglish()).to.equal('five hundred');
    expect(700 .toEnglish()).to.equal('seven hundred');

    expect(275 .toEnglish()).to.equal('two hundred seventy-five');
    expect(630 .toEnglish()).to.equal('six hundred thirty');
    expect(922 .toEnglish()).to.equal('nine hundred twenty-two');
  });

  it('should write thousands', () => {
    expect(1000 .toEnglish()).to.equal('one thousand');
    expect(50000 .toEnglish()).to.equal('fifty thousand');
    expect(700000 .toEnglish()).to.equal('seven hundred thousand');

    expect(5625 .toEnglish()).to.equal('five thousand six hundred twenty-five');
    expect(17490 .toEnglish()).to.equal('seventeen thousand four hundred ninety');
    expect(355003 .toEnglish()).to.equal('three hundred fifty-five thousand three');
    expect(845913 .toEnglish()).to.equal('eight hundred forty-five thousand nine hundred thirteen');
  });

  it('should write millions', () => {
    expect(1000000 .toEnglish()).to.equal('one million');
    expect(2385024 .toEnglish()).to.equal('two million three hundred eighty-five thousand twenty-four');
    expect(973563700 .toEnglish()).to.equal('nine hundred seventy-three million five hundred sixty-three thousand seven hundred');
  });
});