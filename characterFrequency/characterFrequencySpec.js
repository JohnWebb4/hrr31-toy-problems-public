describe('characterFrequency', () => {
  var characterString;
  var resultFrequency;

  beforeEach(() => {
    characterString = 'because';
    resultFrequency = [
      ['e', 2],
      ['a', 1],
      ['b', 1],
      ['c', 1],
      ['s', 1],
      ['u', 1]
    ];
  });

  it('should be function', () => {
    expect(characterFrequency).to.be.a('function');
  });

  it('should return an array of tuples', () => {
    var frequencyArray = characterFrequency(characterString);
    expect(Array.isArray(frequencyArray)).to.be.true;
    expect(Array.isArray(frequencyArray[0])).to.be.true;
  });

  it('should get character frequency', () => {
    expect(characterFrequency(characterString)).to.eql(resultFrequency);
  });

});