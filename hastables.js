// var duplicateZeros = function (arr) {
//     if (arr == null || arr.length == 0) throw new Error("illegal input");
//     //move in place, so no extra space
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 0) {
//             //that means must remove last one in arr
//             for (let j = arr.length - 1; j > i; j--) {
//                 arr[j] = arr[j - 1];
//             }
//             i++;
//         }
//         else {
//             continue;
//         }
//     }
// };

// const repeatedCharacter = s => {
//     const set = new Set();

//     for (let i = 0; i < s.length; i += 1) {
//         const currentLetter = s[i]
//         if(set.has(currentLetter)) {
//              return currentLetter
//         }
//         set.add(currentLetter);
//     }
// };

// var repeatedCharacter = function (s) {
//   const hashMap = {};

//   for (let char of s) {
//     if (!hashMap[char]) {
//       hashMap[char] = 1;
//     } else {
//       return char;
//     }
//   }
// };

// var firstUniqChar = function(string) {
// let map={};
//     for(s of string){
//         if(!(s in map)){
//             map[s]=1
//         }else{
//             map[s]++
//         }
//     }
// console.log(map);
// let getValue="";
//     for(let i in map){
//     if(map[i]==1){
//          getValue+= i
//          break
//         }
//     }
// console.log(getValue);
//     for(let i=0; i<string.length; i++){
//         if(string[i]===getValue){
//             return i
//         }
//     }
// return -1
// };
// var firstUniqChar = function(s) {
//     for(i=0; i<s.length; i++)
//         if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
//     return -1
// };

// var firstUniqChar = function(s) {
//     let map = {}

//     for (let char of s) {
//         map[char] ? map[char]++ : map[char] = 1
//     }

//     for (let i = 0; i < s.length; i++) {
//         if (map[s[i]] === 1) return i
//     }

//     return -1
// };


