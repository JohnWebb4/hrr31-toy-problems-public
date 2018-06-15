describe('hashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = makeHashTable();
  });

  it('should make a hash table with insert, retrieve, and remove', () => {
    const hashTable = makeHashTable();
    expect(hashTable).to.be.an('object');
    expect(hashTable.insert).to.be.a('function');
    expect(hashTable.retrieve).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
  });

  it('should return inserted item', () => {
    expect(hashTable.insert('key', 1)).to.equal(1);
  });
});
