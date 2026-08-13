class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
 longestConsecutive = (nums) => {
    // 1. Create a Set
    const set = new Set(nums);

    // 2. Keep track of the longest sequence
    let longest = 0;

    // 3. Loop through the numbers
    for (const x of set) {

        // 4. Check if x is the START of a sequence
        if (set.has(x - 1)) {
            continue;
        }

        // 5. x is the start, so count forward
        let current = x;
        let count = 1;

        while (set.has(current + 1)) {
            current++;
            count++;
        }

        // 6. Update longest
        longest = Math.max(longest, count);
    }

    // 7. Return the answer
    return longest;
};
}
