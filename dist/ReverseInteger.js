"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(x) {
    let sign = 1;
    let reversed = 0;
    if (x < 0) {
        x = x * -1;
        sign = -1;
    }
    const INT_MIN = -2147483648; // -2^31
    const INT_MAX = 2147483647; // 2^31 - 1
    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.trunc(x / 10);
    }
    reversed = reversed * sign;
    if (reversed > INT_MAX || reversed < INT_MIN) {
        return 0;
    }
    return reversed;
}
