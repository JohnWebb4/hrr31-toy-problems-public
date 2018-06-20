const { beforeEach, describe, it } = require('mocha');
const { expect } = require('chai');
const Tree = require('./commonAncestor');

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

    it('should return an array', () => {
      expect(grandma.getAncestorPath(mom)).to.be.an('array');
    });

    it('should be [me] for path with myself', () => {
      expect(me.getAncestorPath(me)).to.eql([me]);
    });

    it('should be [mom, me] for path with mom and myself', () => {
      expect(mom.getAncestorPath(me)).to.eql([mom, me]);
    });

    it('should be [grandma, mom, me] for path with grandma and me', () => {
      expect(grandma.getAncestorPath(me)).to.eql([grandma, mom, me]);
    });

    it('should be null for no ancestor path', () => {
      expect(potato.getAncestorPath(me)).to.equal(null);
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
      expect(me.getClosestCommonAncestor(me, me)).to.equal(me);
    });

    it('should be me for direct parent', () => {
      expect(mom.getClosestCommonAncestor(me, mom)).to.equal(mom);
    });

    it('should be grandma for indirect parent', () => {
      expect(grandma.getClosestCommonAncestor(me, grandma)).to.equal(grandma);
    });

    it('should be mom for sibling', () => {
      expect(mom.getClosestCommonAncestor(me, brother)).to.equal(mom);
    });

    it('should be grandma for uncle', () => {
      expect(grandma.getClosestCommonAncestor(me, uncle)).to.equal(grandma);
    });

    it('should return null when no common ancestor', () => {
      expect(grandma.getClosestCommonAncestor(me, potato)).to.equal(null);
    });

    it('should get closest common ancestor', () => {
      expect(grandma.getClosestCommonAncestor(me, brother)).to.equal(mom);
    });
  });
});
