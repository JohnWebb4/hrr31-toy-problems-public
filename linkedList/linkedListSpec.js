describe('linkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should be a psuedoclassical linked list', () => {
    expect(linkedList).to.be.an('object');
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should return item added to tail', () => {
    expect(linkedList.addToTail(1)).to.equal(1);
  });

  it('should return item removed from head', () => {
    linkedList.addToTail(1);
    expect(linkedList.removeHead()).to.equal(1);
    // No item in linked list expect undefined
    expect(linkedList.removeHead()).to.equal(undefined);
  });

  it('should check if value is contained', () => {
    linkedList.addToTail(1);
    expect(linkedList.contains(1)).to.be.true;
  });

  it('should handle add, removing, and containing together', () => {
    linkedList.addToTail(1);
    linkedList.addToTail(2);

    expect(linkedList.contains(1)).to.be.true;
    expect(linkedList.contains(2)).to.be.true;

    linkedList.removeHead();

    expect(linkedList.contains(1)).to.be.false;
    expect(linkedList.contains(2)).to.be.true;
  });
});
