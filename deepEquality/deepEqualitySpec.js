import { describe, it } from 'mocha';
import { expect } from 'chai';

import deepEquals from './deepEquality';

describe('deepEquals', () => {
  it('should be a function', () => {
    expect(deepEquals).to.be.a('function');
  });

  it('should return a boolean', () => {
    expect(deepEquals({}, {})).to.be.a('boolean');
  });

  it('should return deep equals', () => {
    const a = {
      a: 1, b: true, c: undefined, d: null,
    };
    const aSame = {
      a: 1, b: true, c: undefined, d: null,
    };

    // Test deep equal objects
    expect(deepEquals(a, aSame)).to.equal(true);

    const aExtended = Object.assign({}, a);
    aExtended.newThing = 'something';

    // Test extended object
    expect(deepEquals(a, aExtended)).to.equal(false);

    const a3 = Object.assign({}, a);
    a3.a = 3;

    // Test object with different primative values
    expect(deepEquals(a, a3)).to.equal(false);
  });
});
