describe('coinSum', function() {
  var changeTotals;

  beforeEach(function() {
    changeTotals = [
      0, 1, 2, 3
    ];
    changeResults = [
      0, 1, 2, 2
    ];
  });

  it('should be a function', function() {
    expect(makeChange).to.be.a('function');
  });

  it('should return a number', function() {
    expect(makeChange(changeTotals[0])).to.be.a('number');
  });

  it('should get total number of combinations for change', function() {
    changeTotals.forEach(function(total, index) {
      expect(makeChange(total)).to.equal(changeResults[index]);
    });
  });
});