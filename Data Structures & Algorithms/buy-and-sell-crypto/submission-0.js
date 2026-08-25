class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * 
     * So we get arr of prices / day 
     * we need to get lowest price and get highest price 
     * make sure that lowest value index is < highest value index
     * then return highest value - lowest value
     * 
     * 
     */
     maxProfit = (prices) => {
    let lowest = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];

        // 1. Find the lowest buying price
        if (price < lowest) {
            lowest = price;
        }

        // 2. Calculate today's possible profit
        const profit = price - lowest;

        // 3. Keep the biggest profit
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};
}
