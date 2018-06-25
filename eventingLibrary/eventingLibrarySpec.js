import { beforeEach, describe, it } from 'mocha';
import { expect } from 'chai';

import mixEvents from './eventingLibrary';

describe('eventingLibrary / mixEvents', () => {
  let obj;
  let mixObj;

  beforeEach(() => {
    obj = {
      name: 'John',
      accoundId: 1,
    };

    mixObj = mixEvents(obj);
  });

  it('should be a function', () => {
    expect(mixEvents).to.be.a('function');
  });

  it('should have events object', () => {
    expect(mixObj.events).to.be.an('object');
  });

  it('should register event', () => {
    mixObj.on('deposit', () => console.log('hi'));

    expect(mixObj.events.deposit).to.be.an('array');
  });

  it('should trigger event', () => {
    let wasTriggered = false;

    mixObj.on('deposit', () => { wasTriggered = true; });

    mixObj.trigger('deposit');

    expect(wasTriggered).to.equal(true);
  });

  it('should trigger multiple listeners on same event', () => {
    let notifyUserTriggered = false;
    let depositTriggered = false;

    mixObj.on('deposit', () => { notifyUserTriggered = true; });
    mixObj.on('deposit', () => { depositTriggered = true; });

    mixObj.trigger('deposit');

    expect(notifyUserTriggered && depositTriggered).to.equal(true);
  });

  it('should pass arguments to callback', () => {
    let wasTriggered = false;

    mixObj.on('deposit', (triggeredState) => { wasTriggered = triggeredState; });

    mixObj.trigger('deposit', true);

    expect(wasTriggered).to.equal(true);
  });
});
