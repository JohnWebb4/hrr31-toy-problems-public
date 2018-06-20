describe('rockPaperScissors', () => {
  it('should be a function', () => {
    expect(rockPaperScissors).to.be.a('function');
  });

  it('should return array of arrays of strings', () => {
    const rpsArray = rockPaperScissors(3);
    expect(rpsArray).to.be.an('array');
    expect(rpsArray[0]).to.be.an('array');
    expect(rpsArray[0][0]).to.be.a('string');
  });

  it('should return an empty array for zero rounds', () => {
    expect(rockPaperScissors(0)).to.eql([]);
  });

  function isDeepEqualArrayofArrays(actual, expected) {
    return expected.every(result => (
      actual.some(actualResult => (
        actualResult.every((value, index) => (
          value === result[index]
        ))
      ))
    ));
  }

  it('should return all combinations', () => {
    const expected = [
      ['rock'], ['paper'], ['scissors'],
    ];

    const actual = rockPaperScissors(1);

    expect(isDeepEqualArrayofArrays(actual, expected)).to.equal(true);
  });
});
