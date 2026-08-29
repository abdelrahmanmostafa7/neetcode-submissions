class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
     characterReplacement = (s, k) => {
    const count = {};

    let left = 0;
    let maxFrequency = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        count[char] = (count[char] || 0) + 1;

        maxFrequency = Math.max(maxFrequency, count[char]);

        while (right - left + 1 - maxFrequency > k) {
            count[s[left]]--;
            left++;
        }

        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
};
}
