class Solution {
   lengthOfLongestSubstring = (s) => {
    const container = new Set();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (container.has(s[right])) {
            container.delete(s[left]);
            left++;
        }

        container.add(s[right]);

        maxLength = Math.max(maxLength, container.size);
    }

    return maxLength;
};
}
