const { beforeEach, describe, it } = require('mocha');
const { expect } = require('chai');

const bind = require('./functionBind');

describe('bind', () => {
  let alice;

  beforeEach(() => {
    alice = {
      name: 'alice',
      shout() {
        return this.name;
      },
    };
  });

  it('should be a function', () => {
    expect(bind).to.be.a('function');
  });

  it('should accept this parameters', () => {
    let boundShout = bind(alice.shout, alice);
    expect(boundShout()).to.equal('alice');
    boundShout = bind(alice.shout, { name: 'bob' });
    expect(boundShout()).to.equal('bob');
  });

  it('should accept initial parameters', () => {
    const func = (a, b) => (a + b);
    const boundFunc = bind(func, null, 'foo');
    expect(boundFunc('bar')).to.equal('foobar');
  });
});

describe('bind prototype', () => {
  let alice;

  beforeEach(() => {
    alice = {
      name: 'alice',
      shout() {
        return this.name;
      },
    };
  });

  it('should be a function', () => {
    expect(bind).to.be.a('function');
  });

  it('should accept this parameters', () => {
    let boundShout = alice.shout.bind(alice);
    expect(boundShout()).to.equal('alice');
    boundShout = alice.shout.bind({ name: 'bob' });
    expect(boundShout()).to.equal('bob');
  });

  it('should accept initial parameters', () => {
    const func = (a, b) => (a + b);
    const boundFunc = func.bind(null, 'foo');
    expect(boundFunc('bar')).to.equal('foobar');
  });
});
