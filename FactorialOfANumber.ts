function fact(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * fact(n - 1);
}

console.log(fact(5)); // Output: 120
