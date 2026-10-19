// var firstUniqChar = function (s) {
//   const countMap = new Map();
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];

//     if (countMap.has(char)) {
//       const [firstIndex, count] = countMap.get(char);
//       countMap.set(char, [firstIndex, count + 1]);
//     } else {
//       countMap.set(char, [i, 1]);
//     }
//   }

//   for (let [idx, count] of countMap.values()) {
//     if (count === 1) return idx;
//   }

//   return -1;
// };

var firstUniqChar = function (s) {
  const freq = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (freq[s.charCodeAt(i) - 97] === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
