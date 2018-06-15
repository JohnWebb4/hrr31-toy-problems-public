describe('hashTable', () => {
  it('should have makeHashTable', () => {
    expect(makeHashTable).to.be.a('function');
  });

  it('should make a hash table with insert, retrieve, and remove', () => {
    const hashTable = makeHashTable();
    expect(hashTable).to.be.an('object');
    expect(hashTable.insert).to.be.a('function');
    expect(hashTable.retrieve).to.be.a('function');
    expect(hashTable.remove).to.be.a('function');
  });
});
