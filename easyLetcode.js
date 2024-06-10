var pivotIndex = function (nums) {
  //debugger;
  var sum = nums.reduce((a, b) => a + b);
  let leftSum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum = sum - nums[i];

    if (leftSum === sum) {
      return i;
    }

    leftSum = leftSum + nums[i];
  }

  return -1;
};

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

// abba     even

// aba      odd

var longestPalindrome = function (str) {
  if (str.length < 1 || str === null) return "";
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    let addPalindrom = expandFromCenter(str, i, i);
    let evenPalindrom = expandFromCenter(str, i - 1, i);

    if (addPalindrom.length > longest.length) {
      longest = addPalindrom;
    }
    if (evenPalindrom.length > longest.length) {
      longest = evenPalindrom;
    }
  }
  return longest;
};
// // a  a b  b  a  a
// //      ^  ^
// const expandFromCenter = (str, left, right) => {
//   let i = 0;
//   while (str[left - i] && str[left - i] === str[right + i]) {
//     i++;
//   }
//   i--;
//   return str.slice(left - i, right + i + 1);
// };
/* 


*/

// abba     even
// aba      odd

// var longestPalindrome = function (s) {
//   let longest = "";

//   for (let i = 0; i < s.length; i++) {
//     let oddPal = isPal(s, i, i);
//     let evenPal = isPal(s, i, i + 1);

//     let longestPal = oddPal.length > evenPal.length ? oddPal : evenPal;
//     if (longestPal.length > longest.length) {
//       longest = longestPal;
//     }
//   }

//   return longest;
// };

// function isPal(s, left, right) {
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;
//     right++;
//   }
//   return s.slice(left + 1, right);
// }

var lengthOfLIS = function (nums) {
  // debugger;
  if (!nums.length) return 0;

  // dynamic length because JavaScript is awesome like that :)
  // hence we don't need to track of the current running length of tails
  const tails = [];
  //  [10,9,2,5,3,7,101,18]
  tails[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // replace current nums[i] with head if it's smaller
    if (nums[i] < tails[0]) {
      tails[0] = nums[i];
      // if current nums[i] is bigger than the largest value we've recorded
      // we can extend our tails by current nums[i]
    } else if (nums[i] > tails[tails.length - 1]) {
      tails.push(nums[i]);
    } else {
      // using binary search to find the insertion point of current nums[i]
      // return r because we're looking to replace index of tail that's greater than nums[i]
      let l = 0;
      let r = tails.length - 1;
      while (l < r) {
        const mid = ((l + r) / 2) >> 0;
        if (tails[mid] >= nums[i]) {
          r = mid;
        } else {
          l = mid + 1;
        }
      }
      tails[r] = nums[i];
    }
  }

  return tails.length;
};
console.log(lengthOfLIS([4, 18, 20, 10, 12, 15, 19]));

// const lengthOfLIS = (nums) => {
//   debugger;
//   let dp = new Array(nums.length).fill(1);
//   let longest = 1;
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//         longest = Math.max(longest, dp[i]);
//       }
//     }
//   }
//   return longest;
// };

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

var majorityElement = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  console.log(map);
  let maxValue = Math.max(...Object.values(map));
  console.log(maxValue);
  for (let i in map) {
    if (map[i] === maxValue) {
      return i;
    }
  }
};
