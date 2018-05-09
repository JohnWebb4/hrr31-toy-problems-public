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

  it('should sort array numerically by the value property', function() {
    var array = testingTransform([1, 100, 2, 43, 21]);

    insertionSort(array);

    expect(array).to.eql([{ value: 1, i: 0 }, { value: 2, i: 2 }, { value: 21, i: 4 }, { value: 43, i: 3 }, { value: 100, i: 1 }]);

    array = testingTransform([24.3, 24.7, 23, 9]);
    insertionSort(array);

    expect(array).to.eql([{ value: 9, i: 3 }, { value: 23, i: 2 }, { value: 24.3, i: 0 }, { value: 24.7, i: 1 }]);
  });

  it('should handle presorted arrays', function() {
    var array = testingTransform([5, 4, 3]);

    insertionSort(array);

    expect(array).to.eql([{ value: 3, i: 2 }, { value: 4, i: 1 }, { value: 5, i: 0 }]);

    array = testingTransform([1, 2, 3]);
    insertionSort(array);

    expect(array).to.eql([{ value: 1, i: 0 }, { value: 2, i: 1 }, { value: 3, i: 2 }]);
  });

  it('should handle negative numbers', function() {
    var array = testingTransform([0, 1, -1]);

    insertionSort(array);

    expect(array).to.eql([{ value: -1, i: 2 }, { value: 0, i: 0 }, { value: 1, i: 1 }]);
  });

  it('should be a stable sort', function() {
    var array = testingTransform([1, 5, 1, 5]);

    insertionSort(array);

    expect(array).to.eql([{ value: 1, i: 0 }, { value: 1, i: 2 }, { value: 5, i: 1 }, { value: 5, i: 3 }]);
  });

  it('should sort according to the passed comparator', function() {
    var array = testingTransform([1, 2, 3, 4, 5]);

    insertionSort(array, function (a, b) {
      return b.i - a.i;
    });

    expect(array).to.eql([{ value: 5, i: 4 }, { value: 4, i: 3 }, { value: 3, i: 2 }, { value: 2, i: 1 }, { value: 1, i: 0 }]);

    var array = testingTransform([0, 1, 2, 3, 4, 5]);

    insertionSort(array, function (a, b) {
      var aIsOdd = a.value & 1;
      var bIsOdd = b.value & 1;

      return aIsOdd - bIsOdd;
    });

    expect(array).to.eql([{ value: 0, i: 0 }, { value: 2, i: 2 }, { value: 4, i: 4 }, { value: 1, i: 1 }, { value: 3, i: 3 }, { value: 5, i: 5 }]);
  });

  it('should sort intuitively if no comparator is passed', function() {
    var array = testingTransform([0, 1, 'a', ';', [], {}, undefined, null]);

    insertionSort(array);
    // Welcome to bizarro-world: play with this in your terminal to figure out why it sorts as it does.

    expect(array).to.eql([{ value: 0, i: 0 }, { value: [], i: 4 }, { value: 1, i: 1 }, { value: ';', i: 3 }, { value: {}, i: 5 }, { value: 'a', i: 2 }, { value: undefined, i: 6 }, { value: null, i: 7 }]);
  });
});