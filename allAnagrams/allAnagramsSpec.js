describe('allAnagrams', function() {
  var string;
  var resultAnagrams;

  beforeEach(function() {
    string = 'abc';
    var resultAnagrams = [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ];
  });

  it('should be a function', function() {
    expect(allAnagrams).to.be.a('function');
  });

  it('should return an array', function() {
    expect(allAnagrams(string)).to.be.an('array');
  });
});