describe('queueStack', () => {
  describe('stack', () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it('should be a psuedoclassical class', () => {
      expect(Stack).to.be.a('function');
    });

    it('should have size', () => {
      expect(stack.size).to.be.a('function');
    });

    it('should return zero for empty stack', () => {
      expect(stack.size()).to.equal(0);
    });

    it('should have push', () => {
      expect(stack.push).to.be.a('function');
    });

    it('should return item pushed', () => {
      expect(stack.push(1)).to.equal(1);
    });

    it('should increment size on push', () => {
      stack.push(1);
      stack.push('hi');
      expect(stack.size()).to.equal(2);
    });
  });

  describe('queue', () => {
    it('should be a psuedoclassical class', () => {
      expect(Queue).to.be.a('function');
    });
  });
});
