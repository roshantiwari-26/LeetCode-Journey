/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const count = {};
  let arr = [];
  for (let val of nums1) {
    count[val] = (count[val] || 0) + 1;
  }
  for (let val of nums2) {
    if (count[val]) {
      arr.push(val);
      count[val]--;
    }
  }

  return arr;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
