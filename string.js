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
