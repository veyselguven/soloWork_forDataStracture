let array = [1, 2, 3, 4, 2, 5, 6, 1];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray);

let array2 = [1, 2, 3, 4, 2, 5, 6, 1];
let uniqueArray2 = array.filter(
  (value, index, self) => self.indexOf(value) === index
);
console.log(uniqueArray2);

let array3 = [1, 2, 3, 4, 2, 5, 6, 1];
let uniqueArray3 = array.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueArray3);

//Any of these methods will give you an array without duplicate numbers. Choose the one that fits your needs and coding style the best.

//This method has a time complexity of O(n^2).

function findDuplicates(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

const myArray = [1, 2, 3, 4, 5, 2, 7, 8, 9, 4];
console.log(findDuplicates(myArray));

function findDuplicates2(arr) {
  let frequency = {};
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]] === undefined) {
      frequency[arr[i]] = 1;
    } else {
      duplicates.push(arr[i]);
    }
  }

  return duplicates;
}

const myArray2 = [1, 2, 3, 4, 5, 2, 7, 8, 9, 4];
console.log(findDuplicates(myArray2));

function findDuplicates3(arr) {
  let uniqueSet = new Set(arr);
  return arr.length !== uniqueSet.size;
}

const myArray3 = [1, 2, 3, 4, 5, 2, 7, 8, 9, 4];
console.log(findDuplicates(myArray));
