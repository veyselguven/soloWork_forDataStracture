//console.log("Hello World");
function divisibleSumPairs(n, k, ar) {
  //    debugger;
  var count = 0;
  for (let i = 0; i < ar.length; i++) {
    ar.slice(i + 1, ar.length).filter((item) => {
      if ((item + ar[i]) % k === 0) {
        count++;
      }
    });
  }

  return count;
}
let n = 6;
let k = 3;
//let ar = [1, 3, 2, 6, 1, 2];
//console.log(divisibleSumPairs(n, k, ar));
function migratoryBirds(arr) {
  let seenBirds = {};
  arr.forEach((bird) => {
    if (!seenBirds[bird]) {
      seenBirds[bird] = 0;
    }
    seenBirds[bird]++;
  });
  //  console.log("seenBirds", seenBirds);

  let birdId = 999;
  let total = 0;

  for (let key in seenBirds) {
    // is it seen more ?
    if (seenBirds[key] > total) {
      total = seenBirds[key];
      birdId = key;
    } else if (seenBirds[key] === total) {
      // is it the same ?
      // is the birds id less than the current birdID
      if (birdId > key) {
        birdId = key;
      }
    }
  }
  return birdId;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
const maximum69Number = (num) => {
  let arr = [...String(num)];
  console.log("num", arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "6") {
      arr[i] = "9";
      return Number(arr.join(""));
    }
  }
  return num;
};

// maximum69Number(9669);

// function closestNumbers(arr) {
//   let finMindDif = +Infinity;
//   arr = arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       finMindDif = Math.min(Math.abs(arr[i] - arr[j]), finMindDif);
//     }
//   }
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (Math.abs(arr[i] - arr[j]) == finMindDif) {
//         result.push(arr[i], arr[j]);
//       }
//     }
//   }
//   return result;
// }

function closestNumbers(arr) {
  arr.sort((a, b) => a - b); // Sort the array

  let minDiff = Infinity;
  let result = [];

  // Iterate through the array to find the minimum difference
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
      result = [arr[i - 1], arr[i]]; // Update result with new pair
    } else if (diff === minDiff) {
      // If there are multiple pairs with the same minimum difference, add them to result
      result.push(arr[i - 1], arr[i]);
    }
  }

  return result;
}
console.log(closestNumbers([5, 2, 3, 4, 1]));
