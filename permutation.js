// permutation

// find the peak number

// next largest number to the right of the peak

//flip peak-1 and largest number to right of peak

// reverse from peak ro end of  arr

// console.log("afsdfbb");

// function pairwise(arr, arg) {
//   // debugger;
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let currentSum = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === arg) {
//         currentSum += i + j;
//       }
//     }
//     total += currentSum;
//   }
//   return total;
// }

// pairwise([1, 4, 2, 3, 0, 5], 7);
// let v = [1, 2, 4, 5, 6, 7, 3];

// console.log(v.slice(0));

// const body = 50;
// if (50 > 49) {
//   const water = 1.4;
//   console.log(`${body} naberrr ${water}`);
// }
// //console.log(body);
// console.log(`${body}fdg`);
// var permute = function (nums) {
//   debugger;
//   // global result
//   const result = [];

//   // dfs recursive helper
//   const dfs = (i, nums) => {
//     // base case
//     if (i === nums.length) {
//       result.push(nums.slice());
//       return;
//     }
//     // [1,2,3];
//     // dfs recursive case
//     for (let j = i; j < nums.length; j++) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       dfs(i + 1, nums);
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
//   };
//   dfs(0, nums);
//   return result;
// };

// console.log(permute([1, 2, 3]));

// console.log("a" < "b");

// console.log(2 ** 3);

// var global = 2;
// console.log(global);
// console.log(typeof "asfas");

let veysel = "happiness";

console.log(veysel.length);
