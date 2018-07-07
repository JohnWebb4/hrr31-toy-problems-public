import { describe, it } from 'mocha';
import { expect } from 'chai';

import { compose, pipe } from './composePipe';

describe('composePipe', () => {
  it('should be a function', () => {
    expect(compose).to.be.a('function');
    expect(pipe).to.be.a('function');
  });
});
