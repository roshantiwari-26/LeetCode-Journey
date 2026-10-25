// var RecentCounter = function () {
//   this.requests = [];
// };

// RecentCounter.prototype.ping = function (t) {
//   this.requests.push(t);

//   let timeFrame = t - 3000;
//   let i = -1;
//   let reqCount = 0;
//   while (this.requests.at(i) >= timeFrame) {
//     reqCount++;
//     i = i - 1;
//   }

//   return reqCount;
// };

var RecentCounter = function () {
  this.queue = [];
};

RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);

  while (this.queue.length > 0 && this.queue[0] < t - 3000) {
    this.queue.shift();
  }

  return this.queue.length;
};
