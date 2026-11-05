function subsets(nums: number[]): number[][] {
  let result: number[][] = [];
  let currentSubset: number[] = [];

  function backtrack(index: number) {
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
