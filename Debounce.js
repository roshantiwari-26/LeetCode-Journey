var debounce = function (fn, t) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const log = debounce(console.log, 100);

log("Hello 1"); // Cancelled
log("Hello 2"); // Cancelled
log("Hello 3"); // Logged after 100ms of no new calls!
