const { beforeEach, describe, it } = require('mocha');
const { expect } = require('chai');

const insertionSort = require('./insertionSort');

describe('insertionSort', () => {
  const testingTransform = function testingTransform(array) {
    const transform = [];

    for (let i = 0; i < array.length; i += 1) {
      transform.push({ value: array[i], i });
    }

    return transform;
  };

  let array;
  let sortedArray;

  beforeEach(() => {
    array = testingTransform([2, 3, 5, 4, 2, 1]);

    sortedArray = [
      { value: 1, i: 5 },
      { value: 2, i: 0 },
      { value: 2, i: 4 },
      { value: 3, i: 1 },
      { value: 4, i: 3 },
      { value: 5, i: 2 },
    ];
  });

  it('should return an array', () => {
    expect(insertionSort(array)).to.be.an('array');
  });

  it('should sort array', () => {
    expect(insertionSort(array)).to.eql(sortedArray);
  });

  it('should return the original array', () => {
    array = testingTransform([3, 2, 1]);
    const result = insertionSort(array);

    expect(array).to.equal(result);
  });

  it('should sort array numerically by the value property', () => {
    array = testingTransform([1, 100, 2, 43, 21]);

    insertionSort(array);

    expect(array).to.eql([
      { value: 1, i: 0 },
      { value: 2, i: 2 },
      { value: 21, i: 4 },
      { value: 43, i: 3 },
      { value: 100, i: 1 },
    ]);

    array = testingTransform([24.3, 24.7, 23, 9]);
    insertionSort(array);

    expect(array).to.eql([
      { value: 9, i: 3 },
      { value: 23, i: 2 },
      { value: 24.3, i: 0 },
      { value: 24.7, i: 1 },
    ]);
  });

  it('should handle presorted arrays', () => {
    array = testingTransform([5, 4, 3]);

    insertionSort(array);

    expect(array).to.eql([{ value: 3, i: 2 }, { value: 4, i: 1 }, { value: 5, i: 0 }]);

    array = testingTransform([1, 2, 3]);
    insertionSort(array);

    expect(array).to.eql([{ value: 1, i: 0 }, { value: 2, i: 1 }, { value: 3, i: 2 }]);
  });

  it('should handle negative numbers', () => {
    array = testingTransform([0, 1, -1]);

    insertionSort(array);

    expect(array).to.eql([{ value: -1, i: 2 }, { value: 0, i: 0 }, { value: 1, i: 1 }]);
  });

  it('should be a stable sort', () => {
    array = testingTransform([1, 5, 1, 5]);

    insertionSort(array);

    expect(array).to.eql([
      { value: 1, i: 0 },
      { value: 1, i: 2 },
      { value: 5, i: 1 },
      { value: 5, i: 3 },
    ]);
  });

  it('should sort according to the passed comparator', () => {
    array = testingTransform([1, 2, 3, 4, 5]);

    insertionSort(array, (a, b) => b.i - a.i);

    expect(array).to.eql([
      { value: 5, i: 4 },
      { value: 4, i: 3 },
      { value: 3, i: 2 },
      { value: 2, i: 1 },
      { value: 1, i: 0 },
    ]);

    array = testingTransform([0, 1, 2, 3, 4, 5]);

    insertionSort(array, (a, b) => {
      const aIsOdd = a.value & 1;
      const bIsOdd = b.value & 1;

      return aIsOdd - bIsOdd;
    });

    expect(array).to.eql([
      { value: 0, i: 0 },
      { value: 2, i: 2 },
      { value: 4, i: 4 },
      { value: 1, i: 1 },
      { value: 3, i: 3 },
      { value: 5, i: 5 },
    ]);
  });

  it('should sort intuitively if no comparator is passed', () => {
    array = testingTransform([0, 1, 'a', ';', [], {}, undefined, null]);

    insertionSort(array);

    expect(array).to.eql([
      { value: 0, i: 0 },
      { value: [], i: 4 },
      { value: 1, i: 1 },
      { value: ';', i: 3 },
      { value: {}, i: 5 },
      { value: 'a', i: 2 },
      { value: undefined, i: 6 },
      { value: null, i: 7 },
    ]);
  });
});
