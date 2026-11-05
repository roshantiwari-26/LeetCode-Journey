"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function subsets(nums) {
    let result = [];
    let currentSubset = [];
    function backtrack(index) {
        if (index === nums.length) {
            result.push([...currentSubset]);
            return;
        }
        currentSubset.push(nums[index]);
        backtrack(index + 1);
        currentSubset.pop();
        backtrack(index + 1);
    }
    backtrack(0);
    return result;
}
