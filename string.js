var strStr = function (haystack, needle) {
  //  debugger;
  if (haystack === needle || needle === "") {
    return 0;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let temp = haystack.substring(i, i + needle.length);
      if (temp === needle) {
        return i;
      }
    }
  }
  return -1;
};

let haystack = "sadbutsad",
  needle = "sad";

console.log(strStr(haystack, needle));

var countBinarySubstrings = function (s) {
  //  debugger;
  let count = 0;
  let i = 1;
  let prev = 0;
  let curr = 1;

  while (i < s.length) {
    // "00110011"
    if (s.charAt(i - 1) !== s.charAt(i)) {
      count += Math.min(prev, curr);
      prev = curr;
      curr = 1;
    } else {
      curr++;
    }
    i++;
  }
  return (count += Math.min(prev, curr));
};

console.log(countBinarySubstrings("11000110"));
