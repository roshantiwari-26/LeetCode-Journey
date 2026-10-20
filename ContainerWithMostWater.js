/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   let n = height.length;
//   let slow = 0;
//   let fast = 1;
//   let maxArea = 0;
//   while (slow < n - 1) {
//     let l = Math.min(height[slow], height[fast]);
//     let w = fast - slow;
//     let area = l * w;
//     maxArea = Math.max(maxArea, area);

//     fast++;
//     if (fast === n) {
//       slow++;
//       fast = slow + 1;
//     }
//   }

//   return maxArea;
// };

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let w = right - left;
    let h = Math.min(height[left], height[right]);

    let area = h * w;
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
