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
