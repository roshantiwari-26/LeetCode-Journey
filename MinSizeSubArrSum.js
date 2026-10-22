/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function (target, nums) {
//   let minCount = nums.length;
//   let left = 0;
//   let right = 0;
//   let totalCount = 0;
//   let count = 0;

//   while (right < nums.length) {
//     totalCount += nums[right];
//     count = count + nums[right];

//     while (count >= target) {
//       minCount = Math.min(minCount, right - left + 1);
//       count -= nums[left++];
//     }

//     right++;
//   }

//   if (totalCount < target) return 0;
//   return minCount;
// };

var minSubArrayLen = function (target, nums) {
  let minCount = Infinity;
  let left = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    count += nums[right];

    while (count >= target) {
      minCount = Math.min(minCount, right - left + 1);
      count -= nums[left];
      left++;
    }
  }

  return minCount === Infinity ? 0 : minCount;
};

console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
