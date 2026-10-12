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
    kthSmallest(root, k) {
        const stack = [];
        let current = root;
        let count = 0;

        while (current !== null || stack.length > 0) {
            // 1. Go as far left as possible
            while (current !== null) {
                stack.push(current);
                current = current.left;
            }

            // 2. Visit the next smallest node
            current = stack.pop();
            count++;

            if (count === k) {
                return current.val;
            }

            // 3. Explore the right subtree
            current = current.right;
        }

        return -1;
    }
}

