/* 
[
  0,0  0,2
 [ 1 2 3],
   1,1
 [4 5 6],
2,0  2,2
 [9 8 9]
]
0,0 + 1,1+ 2,2  (r,c)
0,2 + 1,1 + 2,0

*/
function diagonalDifference(arr) {
  let n = arr.length;
  let dia1 = 0;
  let dia2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        dia1 += arr[i][j];
        //   d2+=arr[i][j];
      }
      if (i + j === n - 1) {
        dia2 += arr[i][j];
      }
    }
  }
  return Math.abs(dia1 - dia2);
}

let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

//console.log(diagonalDifference("arr1", arr1));
// function plusMinus(arr) {
//   // Write your code here
//   let pos = 0;
//   let neg = 0;
//   let zero = 0;
//   let len = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) neg++;
//     if (arr[i] > 0) pos++;
//     if ((arr[i] = 0)) zero++;
//   }
//   return [
//     (pos / len).toFixed(6),
//     (neg / len).toFixed(6),
//     (zero / len).toFixed(6),
//   ];
// }
// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
let counter = [0, 0, 0];

counter.forEach((num) => console.log(num));
