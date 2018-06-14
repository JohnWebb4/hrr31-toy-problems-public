describe('queueStack', () => {
  describe('stack', () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    it('should be a psuedoclassical class', () => {
      expect(Stack).to.be.a('function');
    });

    it('should have push', () => {
      expect(stack.push).to.be.a('function');
    });

    it('should return item pushed', () => {
      expect(stack.push(1)).to.equal(1);
    });
  });

  describe('queue', () => {
    it('should be a psuedoclassical class', () => {
      expect(Queue).to.be.a('function');
    });
  });
});
