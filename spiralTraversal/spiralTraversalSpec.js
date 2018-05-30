describe('spiralTraversal', () => {
  let arrayToTraverse;
  let spiralArray;

  beforeEach(() => {
    arrayToTraverse = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    spiralArray = [1, 2, 3, 6, 9, 8, 7, 4, 5];
  });

  it('should be a function', () => {
    expect(spiralTraversal).to.be.a('function');
  });

  it('should return an array', () => {
    expect(spiralTraversal(arrayToTraverse)).to.be.an('array');
  });
});