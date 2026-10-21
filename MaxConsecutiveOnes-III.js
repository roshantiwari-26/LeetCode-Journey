/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let zeroesCount = 0;
  let maxOnescount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroesCount++;
    }

    while (zeroesCount > k) {
      if (nums[left] === 0) {
        zeroesCount--;
      }
      left++;
    }

    maxOnescount = Math.max(maxOnescount, right - left + 1);
  }

  return maxOnescount;
};

console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
);
