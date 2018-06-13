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

  it('should remove unused values', () => {
    lruCache.set('tests', 'value');
    lruCache.set('are', 'value1');
    lruCache.set('the', 'value2');
    lruCache.set('best', 'value3');

    expect(lruCache.get('tests')).to.be.null;
    expect(lruCache.get('are')).to.equal('value1');
    expect(lruCache.get('the')).to.equal('value2');
    expect(lruCache.get('best')).to.equal('value3');

    expect(lruCache.size()).to.equal(3);
  });

  it('should keep values recently searched', () => {
    lruCache.set('tests', 'value');
    lruCache.set('are', 'value1');
    lruCache.set('the', 'value2');

    lruCache.get('tests');

    lruCache.set('best', 'value3');

    expect(lruCache.get('tests')).to.equal('value');
    expect(lruCache.get('are')).to.be.null;
    expect(lruCache.get('the')).to.equal('value2');
    expect(lruCache.get('best')).to.equal('value3');
  });

  it('should keep values recenlty set', () => {
    lruCache.set('tests', 'value');
    lruCache.set('are', 'value1');
    lruCache.set('the', 'value2');

    lruCache.set('tests', 'valueOther');

    lruCache.set('best', 'value3');

    expect(lruCache.get('tests')).to.equal('valueOther');
    expect(lruCache.get('are')).to.be.null;
    expect(lruCache.get('the')).to.equal('value2');
    expect(lruCache.get('best')).to.equal('value3');
  });
});
