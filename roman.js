var intToRoman = function (num) {
  let numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";
  for (let numeral in numerals) {
    let numberSymbol = Math.floor(num / numerals[numeral]);
    if (numberSymbol !== 0) result += numeral.repeat(numberSymbol);
    num = num % numerals[numeral];
  }
  return result;
};
// water
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    result = Math.max(result, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};
