function veysel(s) {
  let max = 0;
  let windowStart = 0;
  const soFar = {};
  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    //  soFar[element] = soFar[element] + 1 || 1;
    if (!soFar[element]) {
      soFar[element] = 1;
    } else if (soFar[element]) {
      soFar[element] += 1;
    }
    while (soFar[element] > 1) {
      let char = s[windowStart];
      if (soFar[char] > 1) {
        soFar[char]--;
      } else {
        delete soFar[char];
      }
      windowStart++;
    }
    max = Math.max(max, i - windowStart + 1);
  }
  return max;
}

console.log(veysel("asfdgasfdgfasdaa"));

// var minimumAbsDifference = function (arr) {
//   let result = [];
//   //console.log("beforesorted arr=>",arr)
//   arr.sort((a, b) => a - b);
//   let minDifference = Infinity;
//   for (let i = 1; i < arr.length; i++) {
//     const currentDifference = arr[i] - arr[i - 1];
//     if (currentDifference < minDifference) {
//       minDifference = currentDifference;
//     }
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     const minus = arr[i + 1] - arr[i];
//     if (minus === minDifference) {
//       result.push([arr[i], arr[i + 1]]);
//     }
//   }
//   return result;
// };

var minimumAbsDifference = function (arr) {
  // debugger;
  let minAbsolute = Infinity; // initialize minAbsolute to Infinity
  let result = []; // initialize result to empty array

  arr.sort((a, b) => a - b); // sort the array using sort()
  for (let i = 0; i < arr.length - 1; i++) {
    // loop through the every element of array
    const diff = arr[i + 1] - arr[i]; // find difference of next element to current element
    if (diff < minAbsolute) {
      // if diff is less than minAbsolute
      minAbsolute = diff; // make diff to minAbsolute
      result = [[arr[i], arr[i + 1]]]; // add current element and next element of array arr inside array of result
    } else if (diff === minAbsolute) {
      // else if diff is equal to minAbsolute
      result.push([arr[i], arr[i + 1]]); // push current and next element of array arr to result array
    }
  }

  return result; // return result array
};

minimumAbsDifference([1, 3, 6, 13, 15]);
var uncommonFromSentences = function (s1, s2) {
  s1 = s1.split(" ");
  s2 = s2.split(" ");
  let getObj1 = s1.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  console.log(getObj1);
  let getObj2 = s2.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, getObj1);
  console.log(getObj2);
  let result = [];
  for (let i in getObj2) {
    if (getObj2[i] == 1) {
      result.push(i);
    }
  }
  return result;
};

var uncommonFromSentences2 = function (s1, s2) {
  let a = [...s1.split(" "), ...s2.split(" ")];
  const obj = {};

  for (let i of a) {
    if (i in obj) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }

  a = [];

  for (let i in obj) {
    if (obj[i] == 1) {
      a.push(i);
    }
  }

  return a;
};

var findRestaurant = (list1, list2) => {
  const hashList1 = convertListToObject(list1);
  const hashList2 = convertListToObject(list2);
  const stringIndex = {};
  const res = [];
  let minIndex = Infinity;
  for (let i in hashList1) {
    if (hashList2[i] !== undefined) {
      stringIndex[i] = hashList1[i] + hashList2[i];
    }
  }
  for (let i in stringIndex) {
    if (stringIndex[i] < minIndex) {
      minIndex = stringIndex[i];
    }
  }
  for (let i in stringIndex) {
    if (stringIndex[i] === minIndex) {
      res.push(i);
    }
  }
  return res;
};
const convertListToObject = (arr) => {
  return arr.reduce((acc, curr, index) => {
    acc[curr] = index;
    return acc;
  }, {});
};

var destCity = function (paths) {
  const hashmapStart = {};
  const hashmapEnd = {};

  for (let i = 0; i < paths.length; i++) {
    hashmapStart[paths[i][0]] = 1;
    hashmapEnd[paths[i][1]] = 1;
  }
  const array = Object.keys(hashmapEnd);
  for (let i = 0; i < array.length; i++) {
    if (!hashmapStart[array[i]]) return array[i];
  }
};
