import { describe, it } from 'mocha';
import { expect } from 'chai';

import bubbleSort from './bubbleSort';

describe('bubble sort', () => {
  it('should be a function', () => {
    expect(bubbleSort).to.be.a('function');
  });
});
