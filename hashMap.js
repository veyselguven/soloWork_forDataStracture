function containsNearbyDuplicate(nums, k) {
  //debugger;
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] >= 0 && i - map[nums[i]] <= k) return true;
    map[nums[i]] = i;
  }
  return false;
}

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
