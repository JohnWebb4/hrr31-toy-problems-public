describe('lruCache', () => {
  let lruCache;

  beforeEach(() => {
    lruCache = new LRUCache(3);
  });

  it('should have a size function', () => {
    expect(lruCache.size).to.be.a('function');
  });

  it('should get size', () => {
    expect(lruCache.size()).to.equal(0);
  });
});
