/* 
Using for finding subarrays in an array that satisfy given conditions
maintain a subset of items as your window and resize and moce that window
within the larger list untill you find a solution
Time complexity:0(n)= linear time
Space complexity:0(1)= constant space
you identfy sliding window problems amongst subarray/substring related questions
*/

// function maxSubArraySum(nums, size) {
//   if (size < 0 || size > nums.length) return null;
//   let currentSum = 0;
//   let maxSumSeen = -Infinity;
//   for (let i = 0; i < nums.length; i++) {
//     currentSum += nums[i];
//     if (i >= size - 1) {
//       maxSumSeen = Math.max(currentSum, maxSumSeen);
//       currentSum -= nums[i - (size - 1)];
//     }
//   }
//   return maxSumSeen;
// }
function maxSumArr(arr, num) {
  //debugger;
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

// // temp 6
// // max  6
// //
// //[1, 2, 3, 5, 4, 8, 6, 2];

const arr1 = [1, 2, 3, 5, 4, 8, 6, 2];

console.log(maxSumArr(arr1, 3));
/*
 *
 *
 *
 */
function maxSumArr(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  //console.log("tempSum", tempSum);
  maxSum = tempSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // console.log("forSum", tempSum);
    maxSum = Math.max(tempSum, maxSum);
    // console.log("max", maxSum);
  }
  return maxSum;
}
//console.log(maxSumArr([1, 2, 3, 5, 4, 8, 6, 2], 2));
//maxSumArr([1, 2, 3, 5, 4, 8, 6, 2], 3);
// /*
//  *
//  *
//  *
//  *
//  *
//  */

function minSizeSubArray(searchNumber, arr) {
  let result = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum >= searchNumber) {
      result = Math.min(result, i - left + 1);
      sum -= arr[left++];
    }
  }
  return result;
}

// const arr2 = [1, 1, 1, 1, 2, 2, 4];
// //console.log("minsize", minSizeSubArray(4, arr2));

// /*
//  *z
//  *
//  *
//  *
//  */

// var minSubArrayLen = function (s, nums) {
//   debugger;
//   let windowSum = 0;
//   let output = Infinity;
//   let windowStart = 0;
//   for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
//     windowSum += nums[windowEnd];
//     // shrink the window until the windowSum is smaller than s
//     while (windowSum >= s) {
//       output = Math.min(output, windowEnd - windowStart + 1);
//       // subtract the element at the windowStart index
//       windowSum -= nums[windowStart];
//       // change windowStart to the next element
//       windowStart++;
//     }
//   }
//   return output == Infinity ? 0 : output;
// };
// //console.log(minSubArrayLen(4, [1, 1, 1, 2, 3, 5, 4]));

// let obj = { a: 1, b: 2, c: 3 };
// // if ("a" in obj) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }

// let s = "244vbbw";
// console.log(typeof s[0]);

// function miniMaxSum(arr) {
//   //debugger;
//   let currentSum = 0;
//   let maxSum = -Infinity;
//   let minSum = Infinity;
//   for (let i = 0; i < 4; i++) {
//     currentSum += arr[i];
//   }
//   maxSum = currentSum;
//   minSum = currentSum;
//   for (let i = 4; i < arr.length; i++) {
//     currentSum = currentSum - arr[i - 4] + arr[i];
//     maxSum = Math.max(currentSum, maxSum);
//     minSum = Math.min(currentSum, minSum);
//   }
//   return maxSum + minSum;
// }

//console.log(miniMaxSum([2, 3, 45, 3, 5, 775, 4]));

// let aa = [2, 355, 4, 5, 3, 333, 4];
// console.log(aa.sort((a, b) => a - b));

// const abc = [1, 3, 5, 67, 84, 3, 6];
// let sorted = abc.sort((a, b) => b - a);
// //console.log(sorted);

// //console.log(sorted.slice(2));

// let x = [1, 2, 4, 5];
// //console.log(sorted.unshift(16));
// function findArrayQuadruplet(arr, s) {
//   // debugger;
//   if (arr.length < 4) return [];
//   let sum = 0;
//   let currentSum = 0;
//   let result = [];
//   for (let i = 0; i < 4; i++) {
//     sum += arr[i];
//     result.push(arr[i]);
//     if (sum === s) {
//       // let b= arr.slice(0,4)
//       return result.sort((a, b) => a - b);
//     }
//   }
//   //[2, 7, 4, 0, 9, 5, 1, 3]
//   // result=[2,7,4,0,9]
//   currentSum = sum;
//   for (let i = 4; i < arr.length; i++) {
//     currentSum = currentSum + arr[i] - arr[i - 4];
//     result.push(arr[i]);
//     result.shift(0);
//     if (currentSum === s) {
//       // let a= arr.slice(i,i+1)
//       return result.sort((a, b) => a - b);
//     }
//   }
//   return [];
// }

// let arr = [1, 2, 3, 4, 5, 9, 19, 12, 12, 19],
//   s = 20;

// console.log(findArrayQuadruplet(arr, s));
/*
 var lengthOfLongestSubstring = function (s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let first = s[i];
    let second = s[i + 1];
    if (first !== second && !result.includes(first)) {
      result += first;
    }
  }
  return result.length;
}; 
*/

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let windowStart = 0;
  const soFar = {};
  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    soFar[element] = soFar[element] + 1 || 1;
    // if (!soFar[element]) {
    //   soFar[element] = 1;
    // } else if (soFar[element]) {
    //   soFar[element] += 1;
    // }
    while (soFar[element] > 1) {
      let char = s[windowStart];
      if (soFar[char] > 1) {
        soFar[char]--;
      } else {
        delete soFar[char];
      }
      windowStart++;
    }
    max = Math.max(max, i - windowStart + 1);
  }
  return max;
};

var maxPower = function (s) {
  let power = 1;

  let start = 0;
  for (let end = 1; end < s.length; end++) {
    if (s[start] !== s[end]) {
      start = end;
    }

    power = Math.max(power, end - start + 1);
  }

  return power;
};
// time O(n^2) space O(1)
var maxPower2 = function (s) {
  let max = 1;
  let count = 1;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 1;
    }
  }

  return max;
};

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      console.log("prefix cons", prefix);
    }
  }
  return prefix;
};
