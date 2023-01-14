// const triangle = (a) => {
//   let result = [];
//   let square = Math.pow(a, 2);
//   result.push(a);
//   //console.log(square);
//   let floor = Math.floor(square / 2);
//   result.push(floor);
//   let ceil = Math.ceil(square / 2);
//   result.push(ceil);
//   return result;
// };

// // console.log(triangle(3));
// // console.log(triangle(5));
// //console.log(triangle(11));
// //console.log(triangle(3));

// const squareSum = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += Math.pow(i, 2);
//   }
//   return sum;
// };

// //console.log(squareSum(10));

// function factorial(n) {
//   //let sum = 0;
//   if (n <= 1) {
//     return 1;
//   }
//   let s = n * factorial(n - 1);
//   console.log(s);
// }

// factorial(5);

/* 
Find the intersection of any two intervals
(a,b) and (c,d)

Example:
    i=5 i<10
1) (5, 10) and (7, 15)
Output: (7, 10)
*/

//arr1
// [5,6,7,8,9,10]
//arr2
// [7,8,9,10,11,12,13,14,15]

const finIntersection = (arr1, arr2) => {
  let result1 = [];
  let result2 = [];
  let finalResult = [];
  // (5, 10)
  for (let i = arr1[0]; i <= arr1[1]; i++) {
    result1.push(i);
  }
  for (let i = arr2[0]; i <= arr2[1]; i++) {
    result2.push(i);
  }
  for (let i = 0; i < result1.length; i++) {
    if (result2.includes(result1[i])) {
      finalResult.push(result1[i]);
    }
  }
  return finalResult;
};

console.log(finIntersection([5, 10], [7, 15]));
