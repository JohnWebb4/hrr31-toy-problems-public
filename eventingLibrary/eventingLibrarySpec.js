describe('eventingLibrary / mixEvents', function() {
  var obj;
  var mixObj;

  beforeEach(function() {
    obj = {
      name: 'John',
      accoundId: 1
    };

    mixObj = mixEvents(obj);
  });

  it('should be a function', function() {
    expect(mixEvents).to.be.a('function');
  });

  it('should have events object', function() {
    expect(mixObj.events).to.be.an('object');
  });

  it('should register event', function() {
    mixObj.on('deposit', function() {conosle.log('hi');} );

    expect(mixObj.events.deposit).to.be.an('array');
  });

  it('should trigger event', function() {
    var wasTriggered = false;

    mixObj.on('deposit', function() {wasTriggered = true;});

    mixObj.trigger('deposit');

    expect(wasTriggered).to.be.true;
  });

  it('should trigger multiple listeners on same event', function() {
    var notifyUserTriggered = false;
    var depositTriggered = false;

    mixObj.on('deposit', function() {notifyUserTriggered = true;});
    mixObj.on('deposit', function() {depositTriggered = true;});

    mixObj.trigger('deposit');

    expect(notifyUserTriggered && depositTriggered).to.be.true;
  });

  it('should pass arguments to callback', function() {
    var wasTriggered = false;

    mixObj.on('deposit', function(triggeredState) {wasTriggered = triggeredState;});

    mixObj.trigger('deposit', true);

    expect(wasTriggered).to.be.true;
  });
});