describe('insertionSort', function() {
  var array;
  var sortedArray;

  beforeEach(function() {
    array = testingTransform([2, 3, 5, 4, 2, 1]);

    sortedArray = [
      {value: 1, i: 5},
      {value: 2, i: 0},
      {value: 2, i: 4},
      {value: 3, i: 1},
      {value: 4, i: 3},
      {value: 5, i: 2}
    ];
  });

  it('should not mutate the input array', function() {
    var copyArray = array.slice();
    insertionSort(array);
    expect(array).to.eql(copyArray);
  });

  it('should return an array', function() {
    expect(insertionSort(array)).to.be.an('array');
  });

  it('should sort array', function() {
    expect(insertionSort(array)).to.eql(sortedArray);
  });

  it('should return the original array', function() {
    var array = testingTransform([3, 2, 1]);
    var result = insertionSort(array);
    expect(array).to.equal(result);
  });
});