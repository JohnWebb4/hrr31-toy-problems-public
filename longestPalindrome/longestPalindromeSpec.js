import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';

import longestPalindrome from './longestPalindrome';

describe('longestPalindrome', () => {
  let sentence;
  let sentenceEven;
  let resultLongestPalindrome;
  let resultEvenLongestPalindrome;

  beforeEach(() => {
    sentence = 'thisssi a palindrome';
    resultLongestPalindrome = 'isssi';

    sentenceEven = 'thissi a palindrome';
    resultEvenLongestPalindrome = 'issi';
  });

  it('should be a function', () => {
    expect(longestPalindrome).to.be.a('function');
  });

  it('should return a string', () => {
    expect(longestPalindrome(sentence)).to.be.a('string');
  });

  it('should return the longest palindrome', () => {
    expect(longestPalindrome(sentence)).to.equal(resultLongestPalindrome);
  });

  it('should handle even length palindromes', () => {
    expect(longestPalindrome(sentenceEven)).to.equal(resultEvenLongestPalindrome);
  });

  it('should handle the whole string being a palindrome', () => {
    expect(longestPalindrome('yay')).to.equal('yay');
    expect(longestPalindrome('aa')).to.equal('aa');
  });
});
