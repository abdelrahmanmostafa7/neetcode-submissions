class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (grid.length === 0) return 0;

        let count = 0;
        const rows = grid.length;
        const cols = grid[0].length;

        const dfs = (row, col) => {
            if (
                row < 0 ||
                row >= rows ||
                col < 0 ||
                col >= cols ||
                grid[row][col] === "0"
            ) {
                return;
            }

            // Mark the cell as visited
            grid[row][col] = "0";

            // Explore all four directions
            dfs(row - 1, col); // Up
            dfs(row + 1, col); // Down
            dfs(row, col - 1); // Left
            dfs(row, col + 1); // Right
        };

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] === "1") {
                    count++;
                    dfs(row, col);
                }
            }
        }

        return count;
    }
}