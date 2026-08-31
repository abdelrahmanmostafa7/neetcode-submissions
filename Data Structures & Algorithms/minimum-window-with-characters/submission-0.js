class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const countT = {};
        const countWindow = {};

        // Count characters required from t
        for (const char of t) {
            countT[char] = (countT[char] || 0) + 1;
        }

        let left = 0;

        let have = 0;
        let need = Object.keys(countT).length;

        let minLength = Infinity;
        let result = "";

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            countWindow[char] = (countWindow[char] || 0) + 1;

            // Character has reached the required frequency
            if (
                countT[char] &&
                countWindow[char] === countT[char]
            ) {
                have++;
            }

            // Window is valid
            while (have === need) {
                const windowLength = right - left + 1;

                // Save the smallest valid window
                if (windowLength < minLength) {
                    minLength = windowLength;
                    result = s.slice(left, right + 1);
                }

                // Remove the left character
                const leftChar = s[left];

                countWindow[leftChar]--;

                if (
                    countT[leftChar] &&
                    countWindow[leftChar] < countT[leftChar]
                ) {
                    have--;
                }

                left++;
            }
        }

        return result;
    }
}