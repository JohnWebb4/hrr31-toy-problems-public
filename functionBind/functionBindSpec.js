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

  it('should accept this parameters', function() {
    var boundShout = bind(alice.shout, alice);
    expect(boundShout()).to.equal('alice');
    boundShout = bind(alice.shout, {name: 'bob'});
    expect(boundShout()).to.equal('bob');
  });

  it('should accept initial parameters', function() {
    var func = function(a, b) { return a + b; };
    var boundFunc = bind(func, null, 'foo');
    expect(boundFunc('bar')).to.equal('foobar');
  });
});

describe('bind prototype', function() {
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

  it('should accept this parameters', function() {
    var boundShout = alice.shout.bind(alice);
    expect(boundShout()).to.equal('alice');
    boundShout = alice.shout.bind({name: 'bob'});
    expect(boundShout()).to.equal('bob');
  });

  it('should accept initial parameters', function() {
    var func = function(a, b) { return a + b };
    var boundFunc = func.bind(null, 'foo');
    expect(boundFunc('bar')).to.equal('foobar');
  });
});

