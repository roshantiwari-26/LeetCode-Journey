/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let stack = [];
  let maxArea = 0;

  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack.at(-1)]) {
      let heightIndex = stack.pop();
      let height = heights[heightIndex];

      let width = stack.length === 0 ? i : i - stack.at(-1) - 1;

      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  heights.pop();

  return maxArea;
};
