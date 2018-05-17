describe('sumArray', () => {
  var tests;
  var results;

  beforeEach(() => {
    tests = [
      [1, 2, 3], // => 6
      [1, 2, 3, -4], // 6
      [1, 2, 3, -4, 5], // 7
      [4, -1, 5], // => 8
      [10, -11, 11], // 11
      [1, 2, 3, -4, 5, -4, 5, -4], // 8
      [1, 2, 3, -4, 5, -4, 5, -4, -4], // 8
      [1, 2, 3,- 4, 5, -4, 5, -4, -4, -1] // 8
    ];

    results = [
      6, 6, 7, 8, 11, 8, 8, 8
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

  it('should handle largest sum of all negative numbers', () => {
    expect(sumArray([-7,-6,-9])).to.equal(-6);
    expect(sumArray([-3, -2, -1, -2, -3])).to.equal(-1);
  });
});