/* 
longestDecrease(nums) - Given an array of integers, return the longest streak of decreasing numbers.
[1, 4, 3, 1, -2, 0, 6, 5] -> 4
*/

// max=1
//c_length=1
//  c  n
// [1, 4, 3, 1, -2, 0, 6, 5]
//
const longestDecrease = (arr) => {
  let max = 1;
  let currentLength = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      currentLength++;
      if (currentLength > max) {
        max = currentLength;
      }
    } else {
      currentLength = 1;
    }
  }
  return max;
};

// console.log(longestDecrease([6, 5, 4, 3, 2]));
// console.log(longestDecrease([1, 4, 3, 1, -2, 0, 6, 5]));
// console.log(longestDecrease([1, 2, 3, 4, 5, 4]));

/* 

majorityTwoElement(nums) - Given an array of integers, return the top two most common elements. If there is a tie, return any valid two.

[1, 2, 3, 4, 5, 3, 4] -> [3, 4] / [4, 3]
[1, 2, 3, 4, 5, 3, 4, 3] -> [3, 4]
[1,1,2,2,3,3] -> 
[1,1,1,2,2,3,3] -> [1,2] / [1,3]

*/

const majorityTwoElement = (nums) => {
  let hashTable = {};
  for (let num of nums) {
    if (!(num in hashTable)) {
      hashTable[num] = 1;
    } else {
      hashTable[num]++;
    }
  }
  //  console.log(hashTable)
  let getValues = Object.values(hashTable);
  // console.log(getValues);
  let getSortedValues = getValues.sort((a, b) => b - a);
  //console.log(getSortedValues);
  let getTwo = getSortedValues.splice(0, 2);
  //console.log(getTwo);
  let result = [];
  for (let i in hashTable) {
    // if (getTwo.includes(hashTable[i])) {
    if (hashTable[i] === getTwo[0] || hashTable[i] === getTwo[1]) {
      result.push(Number(i));
      if (result.length == 2) {
        return result;
      }
    }
  }
};
// {4:2,3:1,5:3}

console.log(majorityTwoElement([4, 3, 4, 5, 5, 5]));
console.log(majorityTwoElement([10, 8, 9, 10, 8, 9, 9]));
console.log(majorityTwoElement([1, 2, 3, 4, 5, 3, 4]));
console.log(majorityTwoElement([4, 5, 6]));
//  [1, 2, 3, 4, 5, 3, 4]
// [4,5,6]

function majorityTwoElement(nums) {
  const hash = {};
  for (let n of nums) {
    if (!(hash[n] in hash)) {
      hash[n] = 1;
    } else {
      hash[n]++;
    }
  }
  let values = Object.values(hash);
  console.log(hash);
  //   console.log(values);
  let max = Math.max(...values);
  let result = [];
  for (let i in hash) {
    if (hash[i] === max) {
      result.push(Number(i));
      if (result.length === 2) {
        return result;
      }
    }
  }
}
console.log(majorityTwoElement([1, 2, 3, 4, 5, 3, 4]));

var interpret = function (command) {
  return command.split("()").join("o").split("(al)").join("al");
  /* let result="";
     for(let i=0; i<command.length; i++){
         if(command[i]==="G"){  
             result+="G"
         }else if(command[i]==="(" && command[i+1] === ")"){
             result+="o"
             i=i+1;
         }else{
             result+="al";
             i=i+3
         }
     }
 return result */
};
