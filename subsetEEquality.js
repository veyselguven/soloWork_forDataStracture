//         c
//[-2,1,-3,4,-1,2,1,-5,4]
//
// c  1
//m   6
var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    max = Math.max(currentSum, max);
  }
  return max;
};

/*
var maxSubArray = function(nums) {
if(nums.length === 1) return nums[0];
    //Keep track of max Value
    let maxValue=nums[0];
    //accumulated number
    let accNum=nums[0];
    
    for(let i=1; i<nums.length; i++){
        let calc=Math.max(nums[i],accNum+nums[i]);
        if(calc>maxValue) maxValue=calc
        
        accNum =calc
    }
        
        
      return maxValue;  
};


//time complextiy =O(n)
//space complexity=0(1)
*/
