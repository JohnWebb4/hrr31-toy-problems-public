import { describe, it } from 'mocha';
import { expect } from 'chai';

import { shuffleDeck, orderedDeck } from './shuffleDeck';


describe('shuffleDeck', () => {
  it('should be a function', () => {
    expect(shuffleDeck).to.be.a('function');
    expect(orderedDeck).to.be.a('function');
  });

  it('should return a deck array', () => {
    const deck = orderedDeck();
    expect(deck).to.be.an('array');
    expect(shuffleDeck(deck)).to.be.an('array');
  });
});
