/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   for (let i = n - 1; i >= 0; i--) {
//     nums1[m + i] = nums2[i];
//   }

//   return nums1.sort((a, b) => a - b);
// };

var merge = function (nums1, m, nums2, n) {
  let r1 = m - 1;
  let r2 = n - 1;
  let writeIdx = nums1.length - 1;

  while (r2 >= 0) {
    if (r1 >= 0 && nums1[r1] > nums2[r2]) {
      nums1[writeIdx] = nums1[r1];
      r1--;
    } else {
      nums1[writeIdx] = nums2[r2];
      r2--;
    }
    writeIdx--;
  }

  return nums1;
};

console.log(merge([0, 0], 0, [2, 5], 2));
