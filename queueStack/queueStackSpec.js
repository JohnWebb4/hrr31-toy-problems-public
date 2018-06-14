describe('queueStack', () => {
  describe('stack', () => {
    it('should be a psuedoclassical class', () => {
      expect(Stack).to.be.a('function');
    });

    it('should have push', () => {
      expect(Stack.push).to.be.a('fuction');
    });
  });

  describe('queue', () => {
    it('should be a psuedoclassical class', () => {
      expect(Queue).to.be.a('function');
    });
  });
});
