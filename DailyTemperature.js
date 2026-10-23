/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  if (n === 1) return [0];

  let answer = new Array(n).fill(0);

  let pending = [];

  for (let right = 0; right <= n - 1; right++) {
    while (
      pending.length > 0 &&
      temperatures[right] > temperatures[pending.at(-1)]
    ) {
      let poppedIndex = pending.pop();
      answer[poppedIndex] = right - poppedIndex;
    }

    pending.push(right);
  }

  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
