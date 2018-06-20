const { describe, it } = require('mocha');
const { expect } = require('chai');

const jsonpRequest = require('./jsonpFetcher.js');

describe('jsonpFetcher', () => {
  it('should be a function', () => {
    expect(jsonpRequest).to.be.a('function');
  });

  it('should fetch string', () => {
    jsonpRequest('https://lets-learn-jsonp.herokuapp.com/api/time', (data) => {
      expect(data).to.be.a('string'); // 1733
    });
  });

  it('should fetch different strings', () => {
    jsonpRequest('https://lets-learn-jsonp.herokuapp.com/api/time', (data1) => {
      const string1 = data1;
      jsonpRequest('https://lets-learn-jsonp.herokuapp.com/api/time', (data2) => {
        const string2 = data2;
        expect(string1 === string2).to.equal(false);
      });
    });
  });
});
