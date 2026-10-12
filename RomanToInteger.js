const romanToInt = function (s) {
  let total = 0;
  let res = s.toUpperCase().split("").reverse();
  res = res.map((e) => {
    if (e === "I") return 1;
    else if (e === "V") return 5;
    else if (e === "X") return 10;
    else if (e === "L") return 50;
    else if (e === "C") return 100;
    else if (e === "D") return 500;
    else return 1000;
  });
  res = res.forEach((e, i) => {
    if (i === 0) total = total + e;
    else if (e >= res[i - 1]) total = e + total;
    else return (total = total - e);
  });
  return total;
};
