/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let ptr = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[ptr]) {
      ptr++;
      nums[ptr] = nums[i];
    }
  }

  return ptr + 1;
};

console.log(removeDuplicates([0, 1, 2, 3]));
console.log(removeDuplicates([0, 0, 0, 1, 1]));
