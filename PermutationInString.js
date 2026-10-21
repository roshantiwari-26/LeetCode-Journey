/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let result = false;

  if (s1.length > s2.length) return result;

  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);

  const getIndex = (char) => char.charCodeAt(0) - 97;

  for (let i = 0; i < s1.length; i++) {
    s1Count[getIndex(s1[i])]++;
    s2Count[getIndex(s2[i])]++;
  }

  const matches = (arr1, arr2) => {
    for (let i = 0; i < 26; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  if (matches(s1Count, s2Count)) return true;

  let left = 0;
  let right = s1.length;
  while (!result && right !== s2.length) {
    s2Count[getIndex(s2[right])]++;
    s2Count[getIndex(s2[left])]--;
    result = matches(s1Count, s2Count);

    left++;
    right++;
  }
  return result;
};
