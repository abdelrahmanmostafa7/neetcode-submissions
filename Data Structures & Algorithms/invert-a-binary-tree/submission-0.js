/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    invertTree(root) {
        // Base case
        if (root === null) {
            return null;
        }

        // Swap left and right
        [root.left, root.right] = [root.right, root.left];

        // Invert left subtree
        this.invertTree(root.left);

        // Invert right subtree
        this.invertTree(root.right);

        return root;
    }
}
