const { describe, it } = require('mocha');
const { expect } = require('chai');

const makeHashTable = require('./hashTableResizing');

describe('hashTableResizing', () => {
  it('should be a function', () => {
    expect(makeHashTable).to.be.a('function');
  });

  it('should resize', () => {
    // if your hashtable isn't resizing, its going to start running more
    // and more slowly with a large number of inserts and retrievals.
    const hashTable = makeHashTable();
    const n = 10;
    let id = 0;
    const diffs = [];
    let endTime;
    let startTime;
    for (let i = 0; i <= n; i += 1) {
      startTime = new Date();
      for (let j = 0; j < 1000; j += 1) {
        hashTable.insert(`userid:${id += 1}`, 'Syd Mead');
      }
      for (let j = 0; j < 100; j += 1) {
        hashTable.retrieve(`userid:${Math.floor(Math.random() * i)}`);
      }
      endTime = new Date();
      diffs.push(endTime - startTime);
    }
    const sum = function sum(arr) {
      let total = 0;
      for (let i = 0; i < arr.length; i += 1) {
        total += arr[i];
      }
      return total;
    };
    // we should expect the first iteration to take up ruffly 1 / n
    // of the total time. we give it some wiggle room by letting it be as
    // low as a 1 / (n*2) of the total duration.
    const ratio = diffs[0] / sum(diffs);
    expect(ratio).to.be.above(1 / (n * 2));
  });

  it('should return stored values', () => {
    const hashTable = makeHashTable();
    hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
    const value = hashTable.retrieve('William Shatner\'s most well known role');
    expect(value).to.be.a('string');
    expect(value).to.equal('Captain Kirk');
  });

  it('should return undefined for incorrect key', () => {
    const hashTable = makeHashTable();
    expect(hashTable.retrieve('echo?')).to.equal(undefined);
  });

  it('should update values', () => {
    const hashTable = makeHashTable();
    hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
    hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
    const value = hashTable.retrieve('Tarantino\'s best movie');
    expect(value).to.not.equal(null);
    expect(value).to.equal('Pulp Fiction');
  });

  it('should remove values', () => {
    const hashTable = makeHashTable();
    hashTable.insert('Spielberg\'s best movie', 'Jaws');
    hashTable.remove('Spielberg\'s best movie');
    const value = hashTable.retrieve('Spielberg\'s best movie');
    expect(value).to.equal(undefined);
  });
});
