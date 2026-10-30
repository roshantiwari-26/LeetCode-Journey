"use strict";
// function isBalanced(root: TreeNode | null): boolean {
//   if (!root) return true;
Object.defineProperty(exports, "__esModule", { value: true });
//   function checkHeight(node: TreeNode | null): number {
//     if (!node) return 0;
//     return 1 + Math.max(checkHeight(node.left), checkHeight(node.right));
//   }
//   const leftHeight = checkHeight(root.left);
//   const rightHeight = checkHeight(root.right);
//   return (
//     Math.abs(leftHeight - rightHeight) <= 1 &&
//     isBalanced(root.left) &&
//     isBalanced(root.right)
//   );
// }
function isBalanced(root) {
    function checkHeight(node) {
        if (!node)
            return 0;
        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1)
            return -1;
        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1)
            return -1;
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }
    return checkHeight(root) !== -1;
}
