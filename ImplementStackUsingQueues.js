class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x) {
    this.queue1.push(x);
  }

  pop() {
    this._shiftQueues();
    const poppedElement = this.queue1.shift();
    this._swapQueues();
    return poppedElement;
  }

  top() {
    this._shiftQueues();
    const topElement = this.queue1.shift();
    this.queue2.push(topElement);
    this._swapQueues();
    return topElement;
  }

  empty() {
    return this.queue1.length === 0 && this.queue2.length === 0;
  }

  _shiftQueues() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
  }

  _swapQueues() {
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
