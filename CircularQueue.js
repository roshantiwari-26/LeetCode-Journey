class MyCircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.k = k;
    this.front = -1;
    this.rear = -1;
  }

  enQueue(val) {
    if ((this.rear + 1) % this.k === this.front) {
      return false;
    }

    if (this.front === -1) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.k;
    this.queue[this.rear] = val;
    return true;
  }

  deQueue() {
    if (this.front === -1) {
      return false;
    }

    this.queue[this.front] = undefined;

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.k;
    }

    return true;
  }

  Front() {
    if (this.front === -1) {
      return -1;
    }
    return this.queue[this.front];
  }

  Rear() {
    if (this.rear === -1) {
      return -1;
    }
    return this.queue[this.rear];
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.k === this.front;
  }
}
