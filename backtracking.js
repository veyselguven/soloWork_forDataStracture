// console.log("test");

// var groupAnagrams = function (strs) {
//   //debugger;
//   let arr = [];
//   let obj = {};
//   let count = 0;
//   for (let i = 0; i < strs.length; i++) {
//     let str = strs[i].split("").sort().join();
//     if (!obj.hasOwnProperty(str)) {
//       obj[str] = count;
//       arr[count] = [strs[i]];
//       count++;
//     } else {
//       arr[obj[str]].push(strs[i]);
//     }
//   }

//   return arr;
// };

// strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// console.log(groupAnagrams(strs));
// var duplicateZeros = function (arr) {
//   // debugger;
//   let setArry = new Array(arr.length);
//   let i = 0;
//   //    i
//   // [1,0,2,3,0,4,5,0]
//   while (i < setArry.length) {
//     if (arr[i] === 0) {
//       setArry[i] = 0;
//       setArry[i + 1] = 0;
//       i++;
//     } else if (setArry[i] === 0) {
//       setArry[i + 1] = arr[i];
//       i++;
//     } else {
//       setArry[i] = arr[i];
//       i++;
//     }
//   }
//   return setArry;
// };
var duplicateZeros = function (arr) {
  if (arr == null || arr.length == 0) throw new Error("illegal input");
  //move in place, so no extra space
  // debugger;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      //that means must remove last one in arr
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      i++;
    } else {
      continue;
    }
  }
};
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];
const customFlat = (arr, depth = 1) => {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else {
      result.push(ar);
    }
    return result;
  });
};

// [].concat(...arr)
// arr.flat(2)

const data = [
  { name: "Veysel", id: "Naber", completed: false },
  { name: "Alex", id: "Basks", completed: true },
  { name: "Merve", id: "asdf", completed: true },
  { name: "Hatun", id: "sdfsjnadno", completed: true },
  { name: "Robin", id: "asfnofao", completed: true },
];

console.log(...data);
