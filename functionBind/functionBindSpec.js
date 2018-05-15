describe('bind', function() {
  var alice;

  beforeEach(function() {
    alice = {
      name: 'alice',
      shout: function(){
        return this.name;
      }
    }
  });

  it('should be a function', function() {
    expect(bind).to.be.a('function');
  });

  it('should accept this param', function() {
    var boundShout = bind(alice.shout, alice);
    expect(boundShout()).to.equal('alice');
    boundShout = bind(alice.shout, {name: 'bob'});
    expect(boundShout()).to.equal('bob');
  });
});