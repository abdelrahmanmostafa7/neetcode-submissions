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
    levelOrder(root) {
        if (root === null) {
            return [];
        }

        const result = [];
        const queue = [root];
        let index = 0;

        while (index < queue.length) {
            const levelSize = queue.length - index;
            const level = [];

            for (let i = 0; i < levelSize; i++) {
                const node = queue[index++];

                level.push(node.val);

                if (node.left !== null) {
                    queue.push(node.left);
                }

                if (node.right !== null) {
                    queue.push(node.right);
                }
            }

            result.push(level);
        }

        return result;
    }
}
