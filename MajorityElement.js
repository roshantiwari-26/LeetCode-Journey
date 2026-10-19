/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   let majorityElement = null;
//   let n = nums.length;
//   if (n === 0) return;
//   const eleCount = {};
//   for (let i of nums) {
//     eleCount[i] = (eleCount[i] || 0) + 1;
//   }
//   for (let key in eleCount) {
//     if (eleCount[key] > n / 2) {
//       majorityElement = Number(key);
//       break;
//     }
//   }

//   return majorityElement;
// };

var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};
