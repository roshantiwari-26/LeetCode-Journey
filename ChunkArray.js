/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const chunkArr = [];
  if (arr.length === 0) return chunkArr;
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (tempArr.length === size) {
      chunkArr.push(tempArr);
      tempArr = [];
    }
    tempArr.push(arr[i]);
  }
  chunkArr.push(tempArr);
  return chunkArr;
};
