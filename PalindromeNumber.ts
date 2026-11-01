function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  const num: string = x.toString();
  let i: number = 0;
  let j: number = num.length - 1;

  while (i < j) {
    if (num[i] !== num[j]) return false;
    i++;
    j--;
  }

  return true;
}
