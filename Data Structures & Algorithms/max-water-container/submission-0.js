class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea = (heights) => {
    let left = 0;
    let right = heights.length - 1;
    let max = 0;

    while (left < right) {
        const width = right - left;
        const height = Math.min(heights[left], heights[right]);

        const area = width * height;

        max = Math.max(max, area);

        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};
}
