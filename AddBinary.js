/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let numA = BigInt("0b" + a);
  let numB = BigInt("0b" + b);

  return (numA + numB).toString(2);
};
