/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let val = init;
  const increment = function () {
    return (val += 1);
  };
  const decrement = function () {
    return (val -= 1);
  };
  const reset = function () {
    return (val = init);
  };

  return {
    increment,
    decrement,
    reset,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
