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
