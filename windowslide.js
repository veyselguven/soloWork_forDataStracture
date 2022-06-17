/* 
Using for finding subarrays in an array that satisfy given conditions
maintain a subset of items as your window and resize and moce that window
within the larger list untill you find a solution
Time complexity:0(n)= linear time
Space complexity:0(1)= constant space
you identfy sliding window problems amongst subarray/substring related questions
*/

function maxSubArraySum(nums, size) {
  if (size < 0 || size > nums.length) return null;
  let currentSum = 0;
  let maxSumSeen = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (i >= size - 1) {
      maxSumSeen = Math.max(currentSum, maxSumSeen);
      currentSum -= nums[i - (size - 1)];
    }
  }
  return max;
}

const arr1 = [1, 2, 3, 5, 4, 8, 6, 2];

console.log(maxSubArraySum(arr1, 3));
