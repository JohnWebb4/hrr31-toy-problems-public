describe('linkedListCycles', function() {
  var linearList;
  var cyclicList;

  beforeEach(function() {
    linearList = Node('A');
    var nodeB = linearList.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    cyclicList = Node('A');
    var cNodeB = cyclicList.next = Node('B');
    var cNodeC = cNodeB.next = Node('C');
    var cNodeD = cNodeC.next = Node('D');
    var cNodeE = cNodeD.next = Node('E');
    cNodeE.next = cNodeB;
  });

  it('should be a function', function() {
    expect(hasCycle).to.be.a('function');
  });

  it('should return a Boolean', function() {
    expect(hasCycle(linearList)).to.be.a('boolean');
  });

  it('should return false for linear linked list', function() {
    expect(hasCycle(linearList)).to.be.false;
  });

});