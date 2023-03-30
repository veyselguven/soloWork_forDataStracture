//         c
//[-2,1,-3,4,-1,2,1,-5,4]
//
// c  1
//m   6
// var maxSubArray = function (nums) {
//   let currentSum = nums[0];
//   let max = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(currentSum + nums[i], nums[i]);
//     max = Math.max(currentSum, max);
//   }
//   return max;
// };

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
// const arr = [1, 2, 3];

// // const a = arr.toString();
// let result = "";

// for (let a of arr) {
//   result += a;
// }
// console.log(typeof result);
var addToArrayForm = function (num, k) {
  //  debugger;
  let stringNum = "";
  for (let n of num) {
    stringNum += n;
  }
  let abc = Number(stringNum);
  let number = abc + k;
  let result = [];
  for (let n of String(number)) {
    result.push(Number(n));
  }
  return result;
};

let num = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
  k = 516;
//console.log(addToArrayForm(num, k));
console.log(Number("12630717197566440063"));

// let string = "assadfbg";

// for (let s of string) {
//   console.log(s);
// }
