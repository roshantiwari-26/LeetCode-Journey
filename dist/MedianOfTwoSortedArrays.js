"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0
        ? (merged[mid - 1] + merged[mid]) / 2
        : merged[mid];
}
