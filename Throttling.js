var throttle = function (fn, t) {
  let isWaiting = false;

  return function (...args) {
    if (isWaiting) return;

    fn(...args);

    isWaiting = true;

    setTimeout(() => {
      isWaiting = false;
    }, t);
  };
};

const log = throttle(console.log, 1000);

log("A");
log("B");
log("C");

setTimeout(() => {
  log("D");
}, 1200);
