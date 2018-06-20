const { beforeEach, describe, it } = require('mocha');
const { expect } = require('chai');

const makeHashTable = require('./hashTable');

describe('hashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = makeHashTable();
  });

  it('should make a hash table with insert, retrieve, and remove', () => {
    hashTable = makeHashTable();
    expect(hashTable).to.be.an('object');
    expect(hashTable.insert).to.be.a('function');
    expect(hashTable.retrieve).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
  });

  it('should return inserted item', () => {
    expect(hashTable.insert('key', 1)).to.equal(1);
  });

  it('should retrieve value', () => {
    hashTable.insert('key', 1);
    expect(hashTable.retrieve('key')).to.equal(1);
  });

  it('should handle collisions', () => {
    for (let i = 0; i < 2000; i += 1) {
      hashTable.insert(i, i);
    }

    for (let i = 0; i < 2000; i += 1) {
      expect(hashTable.retrieve(i)).to.equal(i);
    }
  });

  it('should remove values', () => {
    hashTable.insert(1, 1);
    hashTable.remove(1);
    expect(hashTable.retrieve(1)).to.equal(undefined);
  });
});
