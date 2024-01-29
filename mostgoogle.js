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

console.log(rotate);
console.log(2 % 4);

var longestCommonSubsequence = function (text1, text2) {
  let n1 = text1.length;
  let n2 = text2.length;

  let dp = new Array(n1 + 1);

  for (let i = 0; i < n1 + 1; i++) {
    dp[i] = new Array(n2 + 1).fill(0);
  }
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[n1][n2];
};
// var longestCommonSubsequence = function(text1, text2) {
//     let text1Hash=text1.split("").reduce((acc,curr)=>{
//         if(acc[curr]){
//             acc[curr]++
//         }else{
//             acc[curr]=1
//         }
//         return acc
//     },{})
//     console.log(text1Hash)
//     let count=0
//     for(let i=0; i<text2.length; i++){
//         if(text2[i] in text1Hash){
//             count++
//         }
//     }
//     return count
// };

// sort().  nlogn Time
// On.    space
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];
  //console.log(result)
  for (let interval of intervals) {
    let e1 = result[result.length - 1][1];
    //  console.log("e1=>",e1)
    let s2 = interval[0];
    // console.log("s2=>",s2)
    let e2 = interval[1];
    //  console.log("e2=>",e2)
    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2);
    } else {
      result.push(interval);
    }
  }
  return result;
};

var countSegments = function (s) {
  // Split the input string by spaces
  const segments = s.split(" ");

  let count = 0;
  // Iterate through the segments and count non-empty ones
  for (const segment of segments) {
    if (segment !== "") {
      count++;
    }
  }
  return count;
};
let minTimeToVisitAllPoints = function (points) {
  //  points = [[1,1],[3,4],[-1,0]]
  let i = 0;
  let result = 0;
  while (i < points.length - 1) {
    let x = Math.abs(points[i][0] - points[i + 1][0]);
    let y = Math.abs(points[i][1] - points[i + 1][1]);
    result = result + Math.max(x, y);
    i++;
  }

  return result;
};
var flipAndInvertImage = function (images) {
  for (let i = 0; i < images.length; i++) {
    images[i] = images[i].reverse();
    for (let j = 0; j < images[i].length; j++) {
      if (images[i][j] === 1) {
        images[i][j] = 0;
      } else {
        images[i][j] = 1;
      }
    }
  }
  return images;
};

var flipAndInvertImage2 = function (A) {
  return A.map((a) => {
    return a.reverse().map((b) => (b == 1 ? 0 : 1));
  });
};
