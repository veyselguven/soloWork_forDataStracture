// let dict = { o: 0, l: 1, z: 2, i: 3, h: 4, s: 5, g: 6, e: 3 };
// // 0(n+m)
// const isValid = (num, words) => {
//   // debugger;
//   let numString = String(num);
//   for (let word of words) {
//     //o(n) n time
//     word = word.split("").reverse().join("");
//     // console.log("word", word);
//     let convertedNumber = "";
//     let isValid = true;
//     for (let i = 0; i < word.length; i++) {
//       //O(n)
//       if (word[i] in dict) convertedNumber += dict[word[i]];
//       else isValid = false;
//     }
//     //console.log(convertedNumber);
//     if (!isValid) continue;
//     if (numString.indexOf(convertedNumber) !== -1) return true;
//   }
//   return false;
// };

// //console.log(isValid(3160061789, ["amazon", "google", "facebook"]));

// console.log("3160061789".indexOf("6"));

// const record = new Array(7);

// console.log("record=>", record);

// const sort = (word) => word.split("").sort().join("");

// function anagrams(word, words) {
//   let token = sort(word);
//   let total = [];

//   for (let x = 0; x < words.length; x++) {
//     if (sort(words[x]) === token) {
//       total.push(words[x]);
//     }
//   }

//   return total;
// }

// // const myA = new Array(2);
// // myA[1] = 1;
// // myA[3] = 3;

// // console.log(myA);

// // const arr = [];

// // try {
// //   arr.push("try");
// //   throw new Error();
// // } catch (e) {
// //   arr.push("cathc");
// // } finally {
// //   arr.push("finaly");
// // }
// // console.log(arr);

// // function* gen1() {
// //   console.log(yield 1);
// //   console.log(yield 2);
// //   console.log(yield 3);
// // }
// // const iterator = gen1();
// // console.log(iterator.next("a".value));
// // console.log(iterator.next("b".value));
// // console.log(iterator.next("c".value));

// // console.log(iterator);

// // function bigSorting(unsorted) {
// //   let result = [];
// //   for (let i = 0; i < unsorted.length; i++) {
// //     result.push(Number(unsorted[i]));
// //   }
// //   result.sort((a, b) => a - b);
// //   let result2 = [];
// //   for (let s of result) {
// //     result2.push(s.toString());
// //   }
// //   return result2;
// // }

// // console.log(bigSorting(["1", "200", "150", "3"]));

// const duplicate = (arr) => {
//   let unique = new Set(arr);
//   return Array.from(unique);
// };

// console.log(duplicate([1, 2, 44, 5, 53, 44, 55, 2, 3, 3, 5]));

// const updatedBooks = books.map((book) => {
//   const books = [
//     { id: 1, title: "Harry P" },
//     { id: 2, title: "Dark" },
//   ];
//   if (book.id === id) {
//     return { ...book, title: newTitle };
//   }

//   return book;
// });

// console.log(updatedBooks(2, "Naber"));



var sortArrayByParityII = function(nums) {
    const result = [];
    console.log(result)
       let even = 0; odd = 1;
       for(let i = 0; i<nums.length; i++) {
               if(nums[i] % 2 == 0) {
                   result[even] = nums[i];
                     even+=2;
               }
               else {
                   result[odd] = nums[i];
                   odd+=2;
               }
   }
       
}
       return result