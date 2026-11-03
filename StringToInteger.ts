function myAtoi(s: string): number {
  s = s.trim();
  if (s.length === 0) return 0;

  let sign = 1;
  let index = 0;
  let result = 0;

  if (s[index] === "-") {
    sign = -1;
    index++;
  } else if (s[index] === "+") {
    index++;
  }

  const INT_MIN = -2147483648; // -2^31
  const INT_MAX = 2147483647; // 2^31 - 1

  while (index < s.length) {
    const char = s[index];

    if (char < "0" || char > "9") {
      break;
    }

    const digit = char.charCodeAt(0) - "0".charCodeAt(0);
    result = result * 10 + digit;

    if (result * sign >= INT_MAX) return INT_MAX;
    if (result * sign <= INT_MIN) return INT_MIN;

    index++;
  }

  return result * sign;
}
