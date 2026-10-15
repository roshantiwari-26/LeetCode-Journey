var isPalindrome = function (s) {
  let cleanStr = s.replace(/[\W_]/g, "").toLowerCase();
  let reveredStr = cleanStr.split("").reverse().join("");
  return reveredStr === cleanStr ? true : false;
};
