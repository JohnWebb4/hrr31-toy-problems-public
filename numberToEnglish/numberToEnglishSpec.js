import { describe, it } from 'mocha';
import { expect } from 'chai';

import toEnglish from './numberToEnglish';

Number.prototype.toEnglish = toEnglish;

describe('numberToEnglish', () => {
  it('should be a function', () => {
    expect(Number.prototype.toEnglish).to.be.a('function');
  });

  it('should handle single digits', () => {
    expect(Number(0).toEnglish()).to.equal('zero');
    expect(Number(1).toEnglish()).to.equal('one');
    expect(Number(2).toEnglish()).to.equal('two');
    expect(Number(3).toEnglish()).to.equal('three');
    expect(Number(4).toEnglish()).to.equal('four');
    expect(Number(5).toEnglish()).to.equal('five');
    expect(Number(6).toEnglish()).to.equal('six');
    expect(Number(7).toEnglish()).to.equal('seven');
    expect(Number(8).toEnglish()).to.equal('eight');
    expect(Number(9).toEnglish()).to.equal('nine');
  });

  it('should write tens', () => {
    expect(Number(10).toEnglish()).to.equal('ten');
    expect(Number(20).toEnglish()).to.equal('twenty');
    expect(Number(30).toEnglish()).to.equal('thirty');
    expect(Number(40).toEnglish()).to.equal('forty');
    expect(Number(50).toEnglish()).to.equal('fifty');
    expect(Number(60).toEnglish()).to.equal('sixty');
    expect(Number(70).toEnglish()).to.equal('seventy');
    expect(Number(80).toEnglish()).to.equal('eighty');
    expect(Number(90).toEnglish()).to.equal('ninety');

    // compounds from 21-99 should be hyphenated
    expect(Number(44).toEnglish()).to.equal('forty-four');
    expect(Number(67).toEnglish()).to.equal('sixty-seven');
    expect(Number(99).toEnglish()).to.equal('ninety-nine');
  });

  it('should write hundreds', () => {
    expect(Number(100).toEnglish()).to.equal('one hundred');
    expect(Number(500).toEnglish()).to.equal('five hundred');
    expect(Number(700).toEnglish()).to.equal('seven hundred');

    expect(Number(100).toEnglish()).to.equal('one hundred');
    expect(Number(500).toEnglish()).to.equal('five hundred');
    expect(Number(700).toEnglish()).to.equal('seven hundred');

    expect(Number(275).toEnglish()).to.equal('two hundred seventy-five');
    expect(Number(630).toEnglish()).to.equal('six hundred thirty');
    expect(Number(922).toEnglish()).to.equal('nine hundred twenty-two');
  });

  it('should write thousands', () => {
    expect(Number(1000).toEnglish()).to.equal('one thousand');
    expect(Number(50000).toEnglish()).to.equal('fifty thousand');
    expect(Number(700000).toEnglish()).to.equal('seven hundred thousand');

    expect(Number(5625).toEnglish()).to.equal('five thousand six hundred twenty-five');
    expect(Number(17490).toEnglish()).to.equal('seventeen thousand four hundred ninety');
    expect(Number(355003).toEnglish()).to.equal('three hundred fifty-five thousand three');
    expect(Number(845913).toEnglish()).to.equal('eight hundred forty-five thousand nine hundred thirteen');
  });

  it('should write millions', () => {
    expect(Number(1000000).toEnglish()).to.equal('one million');
    expect(Number(2385024).toEnglish()).to.equal('two million three hundred eighty-five thousand twenty-four');
    expect(Number(973563700).toEnglish()).to.equal('nine hundred seventy-three million five hundred sixty-three thousand seven hundred');
  });

  it('should write billions', () => {
    expect(Number(1000000000).toEnglish()).to.equal('one billion');
    expect(Number(2385024582).toEnglish()).to.equal('two billion three hundred eighty-five million twenty-four thousand five hundred eighty-two');
    expect(Number(973563700353).toEnglish()).to.equal('nine hundred seventy-three billion five hundred sixty-three million seven hundred thousand three hundred fifty-three');
  });

  it('should write very large numbers', () => {
    expect(Number(1000000000000).toEnglish()).to.equal('one trillion');
    expect(Number(1000000000000000).toEnglish()).to.equal('one quadrillion');
    expect(Number(1000000000000000000).toEnglish()).to.equal('one quintillion');
  });

  it('should write MAX_INT', () => {
    expect(Number(2 ** 53).toEnglish()).to.equal('nine quadrillion seven trillion one hundred ninety-nine billion two hundred fifty-four million seven hundred forty thousand nine hundred ninety-two');
  });
});
