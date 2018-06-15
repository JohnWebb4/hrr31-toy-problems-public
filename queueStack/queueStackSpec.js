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

    it('should push any data type', () => {
      expect(stack.push(1)).to.equal(1);
      expect(stack.push('test')).to.equal('test');
      expect(stack.push(undefined)).to.equal(undefined);
      expect(stack.push(null)).to.equal(null);
      expect(stack.push({ test: true })).to.eql({ test: true });
      expect(stack.push([1, 2, 3])).to.eql([1, 2, 3]);
    });

    it('should increment size on push', () => {
      stack.push(1);
      stack.push('hi');
      expect(stack.size()).to.equal(2);
    });

    it('should have pop', () => {
      expect(stack.pop).to.be.a('function');
    });

    it('should return value popped', () => {
      stack.push('test');
      expect(stack.pop()).to.equal('test');
    });

    it('should decrement size on pop', () => {
      stack.push('test');
      stack.pop();
      expect(stack.size()).to.equal(0);
    });

    it('should return null for popping an empty stack', () => {
      expect(stack.pop()).to.equal(null);
      expect(stack.size()).to.equal(0);
    });
  });

  describe('queue', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue();
    });

    it('should be a psuedoclassical class', () => {
      expect(Queue).to.be.a('function');
    });

    it('should have size', () => {
      expect(queue.size).to.be.a('function');
    });

    it('should return zero for empty queue', () => {
      expect(queue.size()).to.equal(0);
    });

    it('should have enqueue', () => {
      expect(queue.enqueue).to.be.a('function');
    });

    it('should return item enqueued', () => {
      expect(queue.enqueue(1)).to.equal(1);
    });

    it('should enqueue any data type', () => {
      expect(queue.enqueue(1)).to.equal(1);
      expect(queue.enqueue(true)).to.equal(true);
      expect(queue.enqueue(undefined)).to.equal(undefined);
      expect(queue.enqueue(null)).to.equal(null);
      expect(queue.enqueue('test')).to.equal('test');
      expect(queue.enqueue([1, 2, 3])).to.eql([1, 2, 3]);
      expect(queue.enqueue({ test: true })).to.eql({ test: true });
    });

    it('should have dequeue', () => {
      expect(queue.dequeue).to.be.a('function');
    });
  });
});
