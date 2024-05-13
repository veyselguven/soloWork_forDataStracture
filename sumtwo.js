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

var reversePrefix = function (word, ch) {
  let getIndex = word.indexOf(ch);
  console.log(getIndex);
  if (getIndex < 0) {
    return word;
  }
  const getSlice =
    word
      .slice(0, getIndex + 1)
      .split("")
      .reverse()
      .join("") + word.slice(getIndex + 1);
  console.log(getSlice);
  return getSlice;
};
var reversePrefix2 = function (word, ch) {
  const index = word.indexOf(ch);
  if (index === -1) return word;
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (i <= index) {
      result = word[i] + result;
    } else {
      result += word[i];
    }
  }

  return result;
};
