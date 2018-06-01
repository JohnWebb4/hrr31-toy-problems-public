describe('commonAncestor', () => {
  let grandma;
  let mom;
  let me;
  let potato;

  beforeEach(() => {
    grandma = new Tree();
    mom = new Tree();
    me = new Tree();
    potato = new Tree();

    grandma.addChild(mom);
    mom.addChild(me);
  });

  it('should be a function', () => {
    expect(grandma.getClosestCommonAncestor).to.be.a('function');
  });

  it('should return a tree', () => {
    expect(grandma.getClosestCommonAncestor(mom)).to.be.an('object');
  });

  it('should be me for ancestor with self', () => {
    expect(me.getClosestCommonAncestor(me)).to.equal(me);
  });

  it('should be mom for direct parent', () => {
    expect(me.getClosestCommonAncestor(mom)).to.equal(mom);
  });

  it('should be grandma for indirect parent', () => {
    expect(me.getClosestCommonAncestor(grandma)).to.equal(grandma);
  });
});