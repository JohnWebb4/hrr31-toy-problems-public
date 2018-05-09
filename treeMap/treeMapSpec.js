describe('treeMap', () => {
  var tree;
  var multiplyByTwo;
  var resultTree;

  beforeEach(() => {
    tree = new Tree(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(4);
    tree.children[0].addChild(5);
    tree.children[1].addChild(6);
    tree.children[1].addChild(7);

    multiplyByTwo = function (value) {
       return value * 2;
    };

    resultTree = new Tree(2);
    resultTree.addChild(4);
    resultTree.addChild(6);
    resultTree.children[0].addChild(8);
    resultTree.children[0].addChild(10);
    resultTree.children[1].addChild(12);
    resultTree.children[1].addChild(14);
  });

  it('should return tree', () => {
    expect(tree.map(multiplyByTwo)).to.be.an.instanceOf(Tree);
  });
});