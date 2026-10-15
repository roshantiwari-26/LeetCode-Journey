var isNumber = function (s) {
  if (s === null || s === undefined) return false;

  let str = String(s).trim();
  if (str === "") return false;

  let regex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
  return regex.test(str);
};
