describe('coinSum', function() {
  var changeTotals;

  beforeEach(function() {
    changeTotals = [
      0, 1, 2, 3,
      10, 20, 30,
      100, 200, 300,
      1000, 2000, 3000
    ];
  });

  it('should be a function', function() {
    expect(makeChange).to.be.a('function');
  });

  it('should return a number', function() {
    expect(makeChange(changeTotals[0])).to.be.a('number');
  });
});