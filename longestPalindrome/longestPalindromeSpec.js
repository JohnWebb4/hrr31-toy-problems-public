describe('longestPalindrome', function() {
  var sentence;
  var resultLongestPalindrome;

  beforeEach(function() {
    sentence = 'thissi a palindrome'
    resultLongestPalindrome = 'isssi';
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
});