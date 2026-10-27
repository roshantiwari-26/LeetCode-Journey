/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
  let n = nums.length;
  let dp = new Array(n);
  let deque = [];
  let maxGlobalSum = nums[0];

  for (let i = 0; i < n; i++) {
    if (deque.length > 0 && deque[0] < i - k) {
      deque.shift();
    }

    let maxFromPast = deque.length > 0 ? dp[deque[0]] : 0;
    dp[i] = nums[i] + Math.max(0, maxFromPast);

    maxGlobalSum = Math.max(maxGlobalSum, dp[i]);

    while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[i]) {
      deque.pop();
    }

    deque.push(i);
  }

  return maxGlobalSum;
};
