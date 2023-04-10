/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let inOrder = [];

  return checkTree(root);

  function checkTree(root) {
    if (root === null) {
      return inOrder;
    }

    checkTree(root.left);
    inOrder.push(root.val);
    return checkTree(root.right);
  }
};
