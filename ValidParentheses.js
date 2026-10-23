/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   if (s.length === 0 || s.length === 1) return false;

//   let stack = [];
//   let i = 0;

//   while (i < s.length) {
//     if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
//       stack.push(s[i]);
//     }

//     if (s[i] === "]" && stack.pop() !== "[") {
//       return false;
//     } else if (s[i] === "}" && stack.pop() !== "{") {
//       return false;
//     } else if (s[i] === ")" && stack.pop() !== "(") {
//       return false;
//     } else {
//       i++;
//     }
//   }

//   return stack.length === 0;
// };

var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  let stack = [];
  const hashMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (hashMap[char] !== undefined) {
      let topElement = stack.pop();

      if (topElement !== hashMap[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

console.log(isValid("(("));
