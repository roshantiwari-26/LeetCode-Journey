/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let maxDeque = [];
  let minDeque = [];
  let i = 0;
  let maxCount = 0;

  for (let j = 0; j < nums.length; j++) {
    while (maxDeque.length > 0 && maxDeque[maxDeque.length - 1] < nums[j]) {
      maxDeque.pop();
    }
    maxDeque.push(nums[j]);

    while (minDeque.length > 0 && minDeque[minDeque.length - 1] > nums[j]) {
      minDeque.pop();
    }
    minDeque.push(nums[j]);

    while (maxDeque[0] - minDeque[0] > limit) {
      if (nums[i] === maxDeque[0]) maxDeque.shift();
      if (nums[i] === minDeque[0]) minDeque.shift();
      i++;
    }

    maxCount = Math.max(maxCount, j - i + 1);
  }

  return maxCount;
};

console.log(longestSubarray([1, 5, 6, 7, 8, 10, 6, 5, 6], 4));
