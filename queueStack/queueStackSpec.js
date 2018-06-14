describe('queueStack', () => {
  describe('stack', () => {
    it('should be a psuedoclassical class', () => {
      expect(Stack).to.be.a('function');
    });
  });

  describe('queue', () => {
    it('should be a psuedoclassical class', () => {
      expect(Queue).to.be.a('function');
    });
  });
});
