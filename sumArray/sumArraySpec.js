describe('sumArray', () => {
  var tests;
  var results;

  beforeEach(() => {
    tests = [
      [1, 2, 3], // => 6
      [1, 2, 3, -4], // 6
      [1, 2, 3, -4, 5], // 7
      [4, -1, 5], // => 8
      [10, -11, 11] // 11
    ];

    results = [
      6, 6, 7, 8, 11
    ];

  });

  it('should be a function', () => {
    expect(sumArray).to.be.a('function');
  });

  it('should not mutate the input array', () => {
    var aTest = tests[0].slice();
    sumArray(aTest);
    expect(aTest).to.eql(tests[0]);
  });

  it('should return a number', () => {
    expect(sumArray(tests[0])).to.be.a('number');
  });

  it('should get largest contiguous sum', () => {
    tests.forEach((testArray, index) => {
      expect(sumArray(testArray)).to.equal(results[index]);
    });
  });
});