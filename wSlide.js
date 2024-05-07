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
