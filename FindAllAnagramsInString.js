/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// var findAnagrams = function (s, p) {
//   let subStrPosArr = [];
//   if (s.length < p.length) return subStrPosArr;
//   p = p.split("");
//   let left = 0;
//   let right = p.length - 1;

//   function isAnagram(l, r) {
//     let arr = [...p];
//     for (let i = l; i <= r; i++) {
//       if (arr.includes(s[i])) {
//         arr.splice(arr.indexOf(s[i]), 1);
//       }
//     }

//     return arr.length === 0;
//   }

//   while (right !== s.length) {
//     if (isAnagram(left, right)) {
//       subStrPosArr.push(left);
//     }
//     left++;
//     right++;
//   }

//   return subStrPosArr;
// };

var findAnagrams = function (s, p) {
  let result = [];
  if (s.length < p.length) return result;

  let pCount = new Array(26).fill(0);
  let sCount = new Array(26).fill(0);

  const getIndex = (char) => char.charCodeAt(0) - 97;

  for (let i = 0; i < p.length; i++) {
    pCount[getIndex(p[i])]++;
    sCount[getIndex(s[i])]++;
  }

  const matches = (arr1, arr2) => {
    for (let i = 0; i < 26; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  if (matches(pCount, sCount)) result.push(0);

  let left = 0;
  for (let right = p.length; right < s.length; right++) {
    // Naya character window ke andar aaya (right pointer)
    sCount[getIndex(s[right])]++;

    sCount[getIndex(s[left])]--;

    left++;

    if (matches(pCount, sCount)) {
      result.push(left);
    }
  }

  return result;
};

console.log(findAnagrams("cbaebabacd", "abc"));
