console.log("test");

var groupAnagrams = function (strs) {
  //debugger;
  let arr = [];
  let obj = {};
  let count = 0;
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split("").sort().join();
    if (!obj.hasOwnProperty(str)) {
      obj[str] = count;
      arr[count] = [strs[i]];
      count++;
    } else {
      arr[obj[str]].push(strs[i]);
    }
  }

  return arr;
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
