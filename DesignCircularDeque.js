var MyCircularDeque = function (k) {
  this.deque = new Array(k);
  this.k = k;
  this.front = 0;
  this.rear = k - 1;
  this.count = 0;
};

MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;

  this.front = (this.front - 1 + this.k) % this.k;
  this.deque[this.front] = value;
  this.count++;
  return true;
};

MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;

  this.rear = (this.rear + 1) % this.k;
  this.deque[this.rear] = value;
  this.count++;
  return true;
};

MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;

  this.front = (this.front + 1) % this.k;
  this.count--;
  return true;
};

MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;

  this.rear = (this.rear - 1 + this.k) % this.k;
  this.count--;
  return true;
};

MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;
  return this.deque[this.front];
};

MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;
  return this.deque[this.rear];
};

MyCircularDeque.prototype.isEmpty = function () {
  return this.count === 0;
};

MyCircularDeque.prototype.isFull = function () {
  return this.count === this.k;
};
