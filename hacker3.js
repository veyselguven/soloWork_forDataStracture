console.log("Hello");
function findMedian(arr) {
  // Write your code here
  arr == arr.sort((a, b) => a - b);
  let middle = Math.floor(arr.length / 2);
  if (arr.length % 2 === 1) {
    return arr[middle];
  } else {
    return (arr[middle] + arr[middle - 1]) / 2;
  }
}

console.log(findMedian([1, 3, 3, 6, 7, 8, 9]));
console.log(findMedian([1, 2, 3, 4, 5, 6, 8, 9]));
