/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  n = Array.from(String(n), Number);
  let seen = new Set();

  let x = [...n];
  while (true) {
    if (x.length === 1 && x[0] === 1) break;
    let sum = x.map((val) => val * val).reduce((acc, curr) => acc + curr);

    if (seen.has(sum)) {
      return false;
    }
    seen.add(sum);

    x = Array.from(String(sum), Number);
  }
  return x[0] === 1 ? true : false;
};

console.log(isHappy(7));

// var isHappy = function (n) {
//   const getNext = (num) => {
//     let sum = 0;
//     while (num > 0) {
//       let digit = num % 10;
//       sum += digit * digit;
//       num = Math.floor(num / 10);
//     }
//     return sum;
//   };

//   let seen = new Set();

//   while (n !== 1 && !seen.has(n)) {
//     seen.add(n);
//     n = getNext(n);
//   }

//   return n === 1;
// };
