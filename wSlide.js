var summaryRanges = function (nums) {
  //debugger;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let end = i;
    //  [0,1,2,4,5,7];
    while (nums[end + 1] === nums[end] + 1) {
      end += 1;
    }
    if (end > i) {
      result.push(`${nums[i]}->${nums[end]}`);
    } else {
      result.push(`${nums[i]}`);
    }
    i = end;
  }
  return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));

var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    max = Math.max(currentSum, max);
  }
  return max;
};

// 121. Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
  let buy = prices[0]; //7
  prices[0] = 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
      prices[i] = 0;
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
  }

  return profit;
};
// var maxProfit = function(prices) {
//     let max=-Infinity
//     for(let i=0; i<prices.length; i++){
//         for(let j=i+1; j<prices.length; j++){
//             let currentVal=prices[j]-prices[i]
//             if(prices[i]<prices[j] && (currentVal>max)){
//                 max=currentVal
//             }
//         }
//     };
//     return  max > 0 ? max : 0
// };
