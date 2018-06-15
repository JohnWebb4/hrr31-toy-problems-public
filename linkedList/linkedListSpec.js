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
});
