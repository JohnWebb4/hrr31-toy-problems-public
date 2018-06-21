const { beforeEach, describe, it } = require('mocha');
const { expect } = require('chai');

const telephoneWords = require('./telephoneWords');

describe('telephoneWords', () => {
  let phoneNumber;
  let possiblePhoneWords;

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
      '01CF',
    ];
  });

  it('should be a function', () => {
    expect(telephoneWords).to.be.a('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(telephoneWords(phoneNumber))).to.equal(true);
  });

  it('should return all word combinations', () => {
    expect(telephoneWords(phoneNumber)).to.eql(possiblePhoneWords);
  });
});
