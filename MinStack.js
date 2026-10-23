class MinStack {
  stack = [];
  minValue = [];

  push(val) {
    this.stack.push(val);

    if (this.minValue.length === 0 || val <= this.minValue.at(-1)) {
      this.minValue.push(val);
    }
  }

  pop() {
    if (this.stack.length === 0) return;

    let removedValue = this.stack.pop();

    if (removedValue === this.minValue.at(-1)) {
      this.minValue.pop();
    }
  }

  top() {
    return this.stack.at(-1);
  }

  getMin() {
    return this.minValue.at(-1);
  }
}
