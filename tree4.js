/*  var searchInsert = function (nums, target) {
        // debugger;
        let index = 0;
        for (let i = 0; i < nums.length; i++) {
          if (nums[i] == target) {
            return i;
          } else if (target > nums[i]) {
            index = i + 1;
            if (target < nums[i + 1]) {
              return index;
            }
          }
        }
        return index;
      }; */
var searchInsert = function (nums, target) {
  // debugger;
  let left = 0,
    right = nums.length;
  while (left < right) {
    const mid = Math.floor((right + left) / 2); // const mid =left+ Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
console.log(searchInsert([1, 3, 5, 6], 2));
//console.log(searchInsert([1, 3, 5, 6], 7));
