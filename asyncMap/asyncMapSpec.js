import { describe, it } from 'mocha';
import { expect } from 'chai';

import asyncMap from './asyncMap';

describe('asyncMap', () => {
  it('should be a function', () => {
    expect(asyncMap).to.be.a('function');
  });

  it('should pass array to callback', () => {
    asyncMap([], results => expect(results).to.be.an('array'));
  });

  it('should map asynchonous array', () => {
    // Empty array
    asyncMap([], results => expect(results).to.deep.equal([]));

    // Arrays with elements
    asyncMap([
      cb => setTimeout(() => cb('one'), 200),
    ], results => expect(results).to.deep.equal(['one']));

    asyncMap([
      cb => setTimeout(() => cb('one'), 200),
      cb => setTimeout(() => cb('two'), 100),
    ], results => expect(results).to.deep.equal(['one', 'two']));

    asyncMap([
      cb => setTimeout(() => cb('one'), 200),
      cb => setTimeout(() => cb('two'), 100),
      cb => setTimeout(() => cb('three'), 300),
      cb => setTimeout(() => cb('four'), 50),
    ], results => expect(results).to.deep.equal(['one', 'two', 'three', 'four']));
  });
});
