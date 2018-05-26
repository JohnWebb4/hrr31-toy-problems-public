describe('longestPalindrome', function() {
  var sentence;
  var sentenceEven;
  var resultLongestPalindrome;
  var resultEvenLongestPalindrome;

  beforeEach(function() {
    sentence = 'thisssi a palindrome'
    resultLongestPalindrome = 'isssi';

    sentenceEven = 'thissi a palindrome'
    resultEvenLongestPalindrome = 'issi'
  });

  it('should be a function', function() {
    expect(longestPalindrome).to.be.a('function');
  });

  it('should return a string', function() {
    expect(longestPalindrome(sentence)).to.be.a('string');
  });

  it('should return the longest palindrome', function() {
    expect(longestPalindrome(sentence)).to.equal(resultLongestPalindrome);
  });

  it('should handle even length palindromes', function() {
    expect(longestPalindrome(sentenceEven)).to.equal(resultEvenLongestPalindrome);
  });

  it('should handle the whole string being a palindrome', function() {
    expect(longestPalindrome('yay')).to.equal('yay');
    expect(longestPalindrome('aa')).to.equal('aa');
  })
});