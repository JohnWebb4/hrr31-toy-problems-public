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

  it('should have a get function', () => {
    expect(lruCache.get).to.be.a('function');
  });

  it('should return null for missing item', () => {
    expect(lruCache.get('test')).to.be.null;
  });

  it('should have a set function', () => {
    expect(lruCache.set).to.be.a('function');
  });

  it('should get a set value', () => {
    lruCache.set('test', 'value');
    expect(lruCache.get('test')).to.equal('value');
  });

  it('should increment size on setting a value', () => {
    lruCache.set('test', 'value');
    expect(lruCache.size()).to.equal(1);
  });
});
