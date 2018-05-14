describe('telephoneWords', () => {
  var phoneNumber;
  var numberPossibilities;

  beforeEach(() => {
    phoneNumber = '0123';
    possiblePhoneWords = [
      '01AD',
      '01AE',
      '01AF',
      '01BD',
      '01BE',
      '01BF',
      '01CD',
      '01CE',
      '01CF'
    ];
  });

  it('should be a function', () => {
    expect(telephoneWords).to.be.a('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(telephoneWords(phoneNumber))).to.be.true;
  });
});