describe('jsonpFetcher', function() {
  it('should be a function', function() {
    expect(jsonpRequest).to.be.a('function');
  });

  it('should fetch string', function() {
    jsonpRequest('https://lets-learn-jsonp.herokuapp.com/api/time', function (data) {
      expect(data).to.be.a('string'); // 1733
    });
  });

  it('should fetch different strings', function() {
    var string1;
    var string2;
    jsonpRequest('https://lets-learn-jsonp.herokuapp.com/api/time', function (data) {
      string1 = data;
      jsonpRequest('https://lets-learn-jsonp.herokuapp.com/api/time', function (data) {
        string2 = data;
        expect(string1 === string2).to.be.false;
      });
    });
  });
});