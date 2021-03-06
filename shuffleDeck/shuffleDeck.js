/*
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */

/**
 * Randomly shuffle deck
 * @param {[string]} deck Deck to shuffle
 * @returns {[string]} New randomly shuffled deck
 */
const shuffleDeck = (deck) => {
  // Copy deck
  const shuffDeck = deck.slice();

  // For n size deck perform n shuffles
  // Loop through shuffles
  let shuffleCount = 0;
  while (shuffleCount < shuffDeck.length) {
    // For each shuffle
    // Get two random card indecies
    const index1 = Math.floor(Math.random() * shuffDeck.length);
    const index2 = Math.floor(Math.random() * shuffDeck.length);

    // Swap cards
    const temp = shuffDeck[index1];
    shuffDeck[index1] = shuffDeck[index2];
    shuffDeck[index2] = temp;

    // Increment shuffle cound
    shuffleCount += 1;
  }

  // Return shuffled deck
  return shuffDeck;
};

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)
const orderedDeck = () => {
  const suits = ['♥', '♣', '♠', '♦'];
  const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  const deck = [];

  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push(value + suit);
    });
  });

  return deck;
};

if (window.DEBUG) {
  module.exports = {
    orderedDeck,
    shuffleDeck,
  };
}
