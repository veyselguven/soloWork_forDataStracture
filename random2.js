// let a = [12, 3, 22, 42, 4];
// let count = 0;
// prev = -1;
// let len = a.length;
// index = 2;
// let i = 0;
// while (count < index) {
//   // debugger;
//   prev = a[i]; //node before index
//   //current = current.next; //node after the index
//   count++;
//   i++;
// }

var indexPairs = function (text, words) {
  let res = [];
  words.sort((a, b) => a.length - b.length);
  for (let i = 0; i < text.length; i++) {
    words.forEach((word) => {
      if (text.slice(i, i + word.length) === word) {
        res.push([i, i + word.length - 1]);
      }
    });
  }
  return res;
};
// var findGCD = function(nums) {
//     let getMax=Math.max(...nums);
//     let getMin=Math.min(...nums);
//     let result=1;
//     for(let i=1; i<=getMax; i++){
//         if(getMin%i==0 && getMax%i===0){
//             if(i>result){
//                 result=i
//             }
//         }
//     }
//     return result
// };
var findGCD = function (nums) {
  let res = [];
  let mn = Math.min(...nums);
  let mx = Math.max(...nums);
  for (let j = 1; j <= mn; j++) {
    if (mn % j === 0 && mx % j === 0) {
      res.push(j);
    }
  }
  return Math.max(...res);
};
