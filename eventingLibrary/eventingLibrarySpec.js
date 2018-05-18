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
    console.log('Events', mixObj.events);
    expect(mixObj.events.deposit).to.be.an('array');
  });
});