"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fact(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * fact(n - 1);
}
console.log(fact(5)); // Output: 120
//# sourceMappingURL=FactorialOfANumber.js.map