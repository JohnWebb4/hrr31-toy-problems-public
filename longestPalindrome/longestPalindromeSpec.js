describe('longestPalindrome', function() {
  var sentence;

  beforeEach(function() {
    sentence = 'thissi a palindrome'
  });

  it('should be a function', function() {
    expect(longestPalindrome).to.be.a('function');
  });

  it('should return a string', function() {
    expect(longestPalindrome(sentence)).to.be.a('string');
  });
});