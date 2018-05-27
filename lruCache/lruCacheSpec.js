describe('lruCache', () => {
  var lruCache;

  beforeEach(() => {
    lruCache = LRUCache(3);
  });

  it('should be a function', () => {
    expect(LRUCache).to.be.a('function');
  });

  it('should get size', () => {
    expect(lruCache.size()).to.equal(0);
  });
});