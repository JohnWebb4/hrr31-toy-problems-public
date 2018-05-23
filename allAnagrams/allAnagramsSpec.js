describe('allAnagrams', function() {
  var string;
  var resultAnagrams;

  beforeEach(function() {
    string = 'abc';
    resultAnagrams = [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ];
  });

  it('should be a function', function() {
    expect(allAnagrams).to.be.a('function');
  });

  it('should return an array', function() {
    expect(allAnagrams(string)).to.be.an('array');
  });

  it('should return all anagrams', function() {
    expect(allAnagrams(string)).to.eql(resultAnagrams);
  });

  it('should return unique anagrams', function() {
    var expected = ['apps', 'apsp', 'aspp', 'paps', 'pasp', 'ppas', 'ppsa', 'psap', 'pspa', 'sapp', 'spap', 'sppa'];
    var match = true;
    var result = allAnagrams('apps');
    expect(result.length).to.equal(expected.length);
  });
});