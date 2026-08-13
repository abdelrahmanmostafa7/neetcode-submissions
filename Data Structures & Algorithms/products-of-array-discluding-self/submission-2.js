class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
     productExceptSelf = (nums) => {
    const output = new Array(nums.length).fill(1);

    // 1. Store product of everything on the LEFT
    let leftProduct = 1;

    for (let i = 0; i < nums.length; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // 2. Multiply by product of everything on the RIGHT
    let rightProduct = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return output;
};
}