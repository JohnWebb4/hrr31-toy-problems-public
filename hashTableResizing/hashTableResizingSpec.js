describe('hashTableResizing', function() {
  it('should be a function', function() {
    expect(makeHashTable).to.be.a('function');
  });

  it('should resize', function() {
    // if your hashtable isn't resizing, its going to start running more
    // and more slowly with a large number of inserts and retrievals.
    var hashTable = makeHashTable();
    var n = 10;
    var id = 0;
    var diffs = [];
    var endTime;
    var startTime;
    for (var i = 0; i <= n; i++) {
      startTime = new Date();
      for (var j = 0; j < 1000; j++) {
        hashTable.insert('userid:' + id++, 'Syd Mead');
      }
      for (j = 0; j < 100; j++) {
        hashTable.retrieve('userid:' + Math.floor(Math.random() * i));
      }
      endTime = new Date();
      diffs.push(endTime - startTime);
    }
    var sum = function sum(arr) {
      var total = 0;
      for (var i = 0; i < arr.length; i++) {
        total += arr[i];
      }
      return total;
    };
    // we should expect the first iteration to take up ruffly 1 / n
    // of the total time. we give it some wiggle room by letting it be as
    // low as a 1 / (n*2) of the total duration.
    var ratio = diffs[0] / sum(diffs);
    expect(ratio).to.be.above(1 / (n * 2));
  });

  it('should return stored values', function() {
    var hashTable = makeHashTable();
    hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
    var value = hashTable.retrieve('William Shatner\'s most well known role');
    expect(value).to.be.a('string');
    expect(value).to.equal('Captain Kirk');
  });

  it('should return undefined for incorrect key', function() {
    var hashTable = makeHashTable();
    expect(hashTable.retrieve('echo?')).to.be.undefined;
  });

  it('should update values', function() {
    var hashTable = makeHashTable();
    hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
    hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
    var value = hashTable.retrieve('Tarantino\'s best movie');
    expect(value).to.not.be.null;
    expect(value).to.equal('Pulp Fiction');
  });

  it('should remove values', function() {
    var hashTable = makeHashTable();
    hashTable.insert('Spielberg\'s best movie', 'Jaws');
    hashTable.remove('Spielberg\'s best movie');
    var value = hashTable.retrieve('Spielberg\'s best movie');
    expect(value).to.be.undefined;
  });
});