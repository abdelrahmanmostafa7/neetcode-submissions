
class Solution {
    combinationSum(nums, target) {
        const result = [];
        const current = [];

        const backtrack = (start, remaining) => {
            if (remaining === 0) {
                result.push([...current]);
                return;
            }

            if (remaining < 0) {
                return;
            }

            for (let i = start; i < nums.length; i++) {
                current.push(nums[i]);

                // Same index is allowed: reuse the number
                backtrack(i, remaining - nums[i]);

                // Undo the choice before trying the next number
                current.pop();
            }
        };

        backtrack(0, target);

        return result;
    }
}
