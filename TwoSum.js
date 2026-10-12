var twoSum = function (nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let neededNum = target - currentNum;

    if (numMap[neededNum] !== undefined) {
      return [numMap[neededNum], i];
    }

    numMap[currentNum] = i;
  }
};
