describe('commonAncestor', () => {
  let grandma;
  let mom;
  let me;
  let brother;
  let uncle;
  let potato;

  beforeEach(() => {
    grandma = new Tree();
    uncle = new Tree();
    mom = new Tree();
    me = new Tree();
    brother = new Tree();
    potato = new Tree();

    grandma.addChild(mom);
    grandma.addChild(uncle);
    mom.addChild(me);
    mom.addChild(brother);
  });


  describe('getAncestorPath', () => {
    it('should be a function', () => {
      expect(grandma.getAncestorPath).to.be.a('function');
    });
  });

  describe('getClosestCommonAncestor', () => {
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

    it('should be able to flip tree calling function', () => {
      expect(brother.getClosestCommonAncestor(me)).to.equal(mom);
      expect(uncle.getClosestCommonAncestor(me)).to.equal(grandma);
    });

    it('should return null when no common ancestor', () => {
      expect(me.getClosestCommonAncestor(potato)).to.eql(null);
    });
  });
});
