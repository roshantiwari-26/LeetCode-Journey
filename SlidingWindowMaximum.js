/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let result = [];
  let deque = [];

  for (let right = 0; right < nums.length; right++) {
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[right]) {
      deque.pop();
    }

    deque.push(right);

    if (deque[0] < right - k + 1) {
      deque.shift();
    }

    if (right >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
