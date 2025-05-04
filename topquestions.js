function findTarget(arr, target) {
  // Sort the array first (O(n log n))
  arr.sort((a, b) => a - b);

  // Use binary search to find the target (O(log n))
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found at index mid
    } else if (arr[mid] < target) {
      low = mid + 1; // Search in the upper half
    } else {
      high = mid - 1; // Search in the lower half
    }
  }

  return -1; // Target not found
}
//167. Two Sum II - Input Array Is Sorted
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  // return [-1, -1];
};
// var twoSum = function(numbers, target) {
//     for(let i=0; i<numbers.length; i++){
//         for(let j=i+1; j<numbers.length; j++){
//             if(numbers[i]+numbers[j]==target){
//                 return [i+1,j+1]
//             }
//         }
//     }
// };

function substrings(n) {
  debugger;
  const MOD = 1000000007;
  let totalSum = 0;

  // Tüm alt dizileri oluştur
  for (let i = 0; i < n.length; i++) {
    let numStr = "";
    for (let j = i; j < n.length; j++) {
      numStr += n[j]; // Yeni bir alt dizi oluştur
      totalSum = (totalSum + Number(numStr)) % MOD; // Sayıya çevir ve topla
    }
  }

  return totalSum;
}

// Örnek testler
// console.log(substrings("16")); // 23
// console.log(substrings("42")); // 48
// console.log(substrings("123")); // 164
// console.log(substrings("9999")); // 100000

const array1 = [1, 2, 3, 4, 5];

array1.length = 7;

console.log("array1", array1);

console.log("array1.length", array1.length);

var sumOfTheDigitsOfHarshadNumber = function (x) {
  let stringArray = String(x).split("");
  let total = stringArray.reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);
  console.log(total);
  return x % total === 0 ? total : -1;
};
var arrangeCoins = function (n) {
  if (n <= 0) return 0;
  for (let j = 0; j <= n; j++) {
    n = n - j;
    if (n <= j) {
      return j;
    }
  }
};
// q448
var findDisappearedNumbers = function (nums) {
  let getLength = nums.length;
  console.log(getLength);
  let refArray = [];
  for (let i = 0; i < getLength; i++) {
    refArray.push(i + 1);
  }
  console.log(refArray);
  //[ 1, 2, 3, 4, 5, 6, 7, 8]
  let getResult = [];

  for (let i = 0; i < refArray.length; i++) {
    if (!nums.includes(refArray[i])) {
      getResult.push(refArray[i]);
    }
  }
  // console.log(getResult)
  return getResult;
};
var findDisappearedNumbers = function (nums) {
  let output = [];
  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) < 0) {
      output.push(i);
    }
  }
  return output;
};
