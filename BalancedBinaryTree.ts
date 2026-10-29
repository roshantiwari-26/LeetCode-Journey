// function isBalanced(root: TreeNode | null): boolean {
//   if (!root) return true;

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

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  function checkHeight(node: TreeNode | null): number {
    if (!node) return 0;
    return 1 + Math.max(checkHeight(node.left), checkHeight(node.right));
  }

  const leftHeight = checkHeight(root.left);
  const rightHeight = checkHeight(root.right);

  return (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}
