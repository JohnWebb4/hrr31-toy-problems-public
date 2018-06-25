import { describe, it } from 'mocha';
import { expect } from 'chai';

import translateRomanNumeral from './romanNumeralTranslator';

describe('romanNumeralTranslator', () => {
  it('should be a function', () => {
    expect(translateRomanNumeral).to.be.a('function');
  });

  it('should return a number', () => {
    expect(translateRomanNumeral('I')).to.be.a('number');
  });

  it('should convert roman numerals', () => {
    expect(translateRomanNumeral('I')).to.equal(1);
    expect(translateRomanNumeral('VII')).to.equal(7);
    expect(translateRomanNumeral('XXVI')).to.equal(26);
    expect(translateRomanNumeral('LX')).to.equal(60);
    expect(translateRomanNumeral('CL')).to.equal(150);
    expect(translateRomanNumeral('DCCC')).to.equal(800);
    expect(translateRomanNumeral('MD')).to.equal(1500);
    expect(translateRomanNumeral('MMXVIII')).to.equal(2018);
  });

  it('should handle subtractive numerals', () => {
    expect(translateRomanNumeral('IX')).to.equal(9);
    expect(translateRomanNumeral('CIV')).to.equal(104);
  });
});
