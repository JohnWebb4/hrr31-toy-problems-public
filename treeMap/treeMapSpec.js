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

  it('should not mutate input tree', () => {
    var copyTree = Object.assign(new Tree(), tree);

    tree.map(multiplyByTwo);

    expect(tree).to.eql(copyTree);
  });

  it('should map the tree', () => {
    expect(tree.map(multiplyByTwo)).to.eql(resultTree);
  });
});

describe('treeMapInPlace', () => {
  var tree;
  var multiplyByTwo;

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


  it('should be a function', () => {
    expect(tree.mapInPlace).to.be.a('function');
  });

  it('should mutate input tree', () => {
    tree.mapInPlace(multiplyByTwo);
    expect(tree).to.eql(resultTree);
  });

  it('should return initial tree', () => {
    expect(tree.mapInPlace(multiplyByTwo)).to.eql(resultTree);
  });
});