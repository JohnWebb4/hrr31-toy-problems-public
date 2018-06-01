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

  it('should return a boolean', () => {
    expect(grandma.getClosestCommonAncestor(mom)).to.be.a('boolean');
  });

  it('should be true for self', () => {
    expect(me.getClosestCommonAncestor(me)).to.be.true;
  });

  it('should be true for direct parent', () => {
    expect(me.getClosestCommonAncestor(mom)).to.be.true;
  });
});