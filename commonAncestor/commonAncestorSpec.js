describe('commonAncestor', () => {
  let grandma;
  let mom;
  let me;
  let brother;
  let uncle;
  let potato;

  beforeEach(() => {
    grandma = new Tree();
    mom = new Tree();
    me = new Tree();
    potato = new Tree();

    grandma.addChild(mom);
    grandma.addChild(uncle);
    mom.addChild(me);
    mom.addChild(brother);
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

  it('should be mom for sibling', () => {
    expect(me.getClosestCommonAncestor(brother)).to.equal(mom);
  });

  it('should be grandma for uncle', () => {
    expect(me.getClosestCommonAncestor(uncle)).to.equal(grandma);
  });
});