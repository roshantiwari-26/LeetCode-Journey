/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// function isValidBST(root: TreeNode | null): boolean {
//   if (!root) return true;
//   let maxLimit: number = root.val;

//   function isValidLeft(node: TreeNode | null, limit: number): boolean {
//     if (!node) return true;
//     if (node.val > limit || node.val > maxLimit) return false;
//     if (
//       !isValidLeft(node.left, node.val) ||
//       !isValidRight(node.right, node.val)
//     )
//       return false;

//     return true;
//   }

//   function isValidRight(node: TreeNode | null, limit: number): boolean {
//     if (!node) return true;
//     if (node.val < limit || node.val < maxLimit) return false;
//     if (
//       !isValidLeft(node.left, node.val) ||
//       !isValidRight(node.right, node.val)
//     )
//       return false;

//     return true;
//   }

//   if (!isValidLeft(root.left, root.val) || !isValidRight(root.right, root.val))
//     return false;

//   return true;
// }

function isValidBST(root: TreeNode | null): boolean {
  function validate(
    node: TreeNode | null,
    min: number | null,
    max: number | null,
  ): boolean {
    if (!node) return true;

    if (min !== null && node.val <= min) return false;

    if (max !== null && node.val >= max) return false;

    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  }

  return validate(root, null, null);
}
