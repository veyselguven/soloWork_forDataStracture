// function containsNearbyDuplicate(nums, k) {
//   //debugger;
//   var map = {};
//   for (var i = 0; i < nums.length; i++) {
//     if (map[nums[i]] >= 0 && i - map[nums[i]] <= k) return true;
//     map[nums[i]] = i;
//   }
//   return false;
// }

// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
function getTotalX(a, b) {
  // debugger;
  let validCount = 0;

  for (let x = 1; x <= 100; x++) {
    if (a.every((int) => x % int == 0)) {
      if (b.every((int) => int % x == 0)) {
        validCount++;
      }
    }
  }

  return validCount;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
