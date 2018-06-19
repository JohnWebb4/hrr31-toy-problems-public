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
});
