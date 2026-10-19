
class Solution {
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        const dfs = (row, col, index) => {
            // We matched every character
            if (index === word.length) {
                return true;
            }

            // Out of bounds or wrong character
            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols ||
                board[row][col] !== word[index]
            ) {
                return false;
            }

            // Save the character and mark this cell as visited
            const char = board[row][col];
            board[row][col] = "#";

            const found =
                dfs(row + 1, col, index + 1) ||
                dfs(row - 1, col, index + 1) ||
                dfs(row, col + 1, index + 1) ||
                dfs(row, col - 1, index + 1);

            // Backtrack: restore the cell
            board[row][col] = char;

            return found;
        };

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (dfs(row, col, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}

