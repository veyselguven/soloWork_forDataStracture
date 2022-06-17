var twoSum = function (nums, target) {
  var previousValue = {};
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let neededValue = target - currentNumber;
    let index2 = previousValue[neededValue];
    if (index2 !== undefined) {
      return [index2, i];
    } else {
      previousValue[currentNumber];
    }
  }
};

function two(nums, target) {
  let hasMap = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let complementPair = target - value;
    if (hasMap[complementPair] !== undefined) {
      return [hasMap[complementPair], i];
    } else {
      hasMap[value] = i;
    }
  }
}
let x = "x102";
