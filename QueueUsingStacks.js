class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x) {
    this.stack1.push(x);
  }

  pop() {
    this._shiftStacks();
    return this.stack2.pop();
  }

  peek() {
    this._shiftStacks();
    return this.stack2.at(-1);
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  _shiftStacks() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
  }
}
