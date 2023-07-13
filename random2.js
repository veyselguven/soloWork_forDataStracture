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

/*
Time Complexity: O(n+m)
Space Complexity: O(n+m)
1. Create bannedSet from banned.
2. Create map object.
3. Create wordArray from paragraph.
4. Loop through wordArray.
    a. Condition if current word is not in the bannedSet.
        i. Add it to the map object and increment the count.
5. Create maxCount variable.
6. Create maxWord variable.
7. Loop through each in map.
    a. Condition if the value is greater than the maxCount.
        i. Change the maxWord to the map key.
        ii. Change the maxCount to the key value.
8. Return maxWord.
*/

var mostCommonWord = function (paragraph, banned) {
  let bannedSet = new Set(banned);
  let map = {};
  let wordArray = paragraph.toLowerCase().match(/[a-z]+/g);
  for (let i = 0; i < wordArray.length; i++) {
    if (!bannedSet.has(wordArray[i])) {
      map[wordArray[i]] = (map[wordArray[i]] | 0) + 1;
    }
  }
  let maxCount = 0;
  let maxWord = "";

  for (let key in map) {
    if (map[key] > maxCount) {
      maxWord = key;
      maxCount = map[key];
    }
  }
  return maxWord;
};
