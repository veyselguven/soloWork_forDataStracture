// var strStr = function (haystack, needle) {
//   //  debugger;
//   if (haystack === needle || needle === "") {
//     return 0;
//   }
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[0]) {
//       let temp = haystack.substring(i, i + needle.length);
//       if (temp === needle) {
//         return i;
//       }
//     }
//   }
//   return -1;
// };

// let haystack = "sadbutsad",
//   needle = "sad";

// console.log(strStr(haystack, needle));

// var countBinarySubstrings = function (s) {
//   //  debugger;
//   let count = 0;
//   let i = 1;
//   let prev = 0;
//   let curr = 1;

//   while (i < s.length) {
//     // "00110011"
//     if (s.charAt(i - 1) !== s.charAt(i)) {
//       count += Math.min(prev, curr);
//       prev = curr;
//       curr = 1;
//     } else {
//       curr++;
//     }
//     i++;
//   }
//   return (count += Math.min(prev, curr));
// };

// console.log(countBinarySubstrings("11000110"));

var numberOfSteps = function (num) {
  debugger;
  let result = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
      result++;
    } else if (num % 2 !== 0) {
      num = num - 1;
      result++;
    }
  }
  return result;
};

console.log(numberOfSteps(12));

var findDifference = function (nums1, nums2) {
  let result = [];
  let result2 = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) {
      if (!result.includes(nums1[i])) {
        result.push(nums1[i]);
      }
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i])) {
      if (!result2.includes(nums2[i])) {
        result2.push(nums2[i]);
      }
    }
  }
  console.log([result, result2]);
  return [result, result2];
};
