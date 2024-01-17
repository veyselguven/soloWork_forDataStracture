const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (root.right === null && root.left === null) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

module.exports = {
  maxPathSum,
};

var reverseWords = function (s) {
  s = s.split(" ");
  // console.log(s) // [ "Let's", 'take', 'LeetCode', 'contest' ]
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let value = s[i].split("").reverse().join("");
    console.log(value);
    result.push(value);
  }
  return result.join(" ");
};

var isBoomerang = function (points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;
  return (y1 - y2) * (x1 - x3) != (y1 - y3) * (x1 - x2);
};

var rotate1 = function (nums, k) {
  let a = nums.slice(-k);
  // console.log(a)//[ 5, 6, 7 ]
  let b = nums.slice(0, k);
  //  console.log(b)//[ 1, 2, 3, 4 ]
  //[5,6,7,1,2,3,4]
  let c = a.concat(b);
  // console.log(c);
  return c;
};
let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
// let nums = [-1, -100, 3, 99],
//   k = 2;
console.log(rotate1(nums, k));

const revNums = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  k = k % nums.length;
  console.log(k);
  nums.reverse();
  revNums(nums, 0, k - 1);
  revNums(nums, k, nums.length - 1);
};

console.log(2 % 4);
