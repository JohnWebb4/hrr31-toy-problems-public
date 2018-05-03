describe('treeCountLeaves', function() {
  var tree;

  beforeEach(function() {
    tree = new Tree(0);
  });

  it('should work for one leaf', function() {
    expect(tree.countLeaves()).to.equal(1);
  });

  it('should work for direct leaves', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);

    expect(tree.countLeaves()).to.equal(3);
  });

  it('should work for indirect leaves', function() {
    tree.addChild(1);
    tree.children[0].addChild(2);
    tree.children[0].addChild(3);

    expect(tree.countLeaves()).to.equal(2);
  });

  it('should work for direct and indirect leaves', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[1].addChild(4);
    tree.children[2].addChild(5);
    tree.children[2].children[0].addChild(6);

    expect(tree.countLeaves()).to.equal(3);
  });

  it('should handle varying data types', function() {
    tree.addChild(1);
    tree.addChild(undefined);
    tree.addChild(null);
    tree.children[1].addChild([1, 2, 3]);
    tree.children[2].addChild({a: true});
    tree.children[2].children[0].addChild(true);

    expect(tree.countLeaves()).to.equal(3);
  });
});