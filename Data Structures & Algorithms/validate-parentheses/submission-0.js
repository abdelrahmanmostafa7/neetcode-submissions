class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const pairs = {
            ")": "(",
            "}": "{",
            "]": "["
        };

        for (const char of s) {
            // Opening bracket
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            }

            // Closing bracket
            else {
                if (stack.length === 0) {
                    return false;
                }

                const lastOpen = stack.pop();

                if (lastOpen !== pairs[char]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}