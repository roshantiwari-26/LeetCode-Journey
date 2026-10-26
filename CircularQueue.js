class CircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.k = k;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(val) {
    if ((this.rear + 1) % this.k === this.front) {
      console.log("Queue is full");
      return false;
    }

    if (this.front === -1) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.k;
    this.queue[this.rear] = val;
    return true;
  }

  dequeue() {
    if (this.front === -1) {
      console.log("Queue is empty");
      return null;
    }

    let removedVal = this.queue[this.front];
    this.queue[this.front] = undefined;

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.k;
    }

    return removedVal;
  }

  peek() {
    if (this.front === -1) {
      console.log("Queue is empty");
      return null;
    }
    return this.queue[this.front];
  }
}
