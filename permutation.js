// permutation

// find the peak number

// next largest number to the right of the peak

//flip peak-1 and largest number to right of peak

// reverse from peak ro end of  arr

console.log("afsdfbb");

function pairwise(arr, arg) {
  // debugger;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg) {
        currentSum += i + j;
      }
    }
    total += currentSum;
  }
  return total;
}

pairwise([1, 4, 2, 3, 0, 5], 7);
let v = [1, 2, 4, 5, 6, 7, 3];

console.log(v.slice(0));

const body = 50;
if (50 > 49) {
  const water = 1.4;
  console.log(`${body} naberrr ${water}`);
}
//console.log(body);
console.log(`${body}fdg`);
