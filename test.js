// // console.log("Naber");
// const map1 = new Map();
// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);

// console.log(map1); //{'a' => 1, 'b' => 2, 'c' => 3}
// console.log(map1.size); //3
// console.log(map1.get("a")); //1

const myArray = [1, 2, 3, 4, 5, 5, 5, 5, 3, 3, 2, 1];

const mySet = new Set(myArray);

console.log(myArray);
// use Set for removing all duplicate value in array
console.log(mySet); // Set(5) {1, 2, 3, 4, 5}

const uniqueArray = [...mySet];

console.log(uniqueArray);

console.log("--------------------");

const myArray2 = [5, 6, 7, 8, 9];
const mySet2 = new Set(myArray2);

mySet2.add("6");
mySet2.add({ channelName: "JS Mastery" });
mySet2.add([1, 2, 3, 4, 5]);
mySet2.delete("6");
// mySet2.clear();
console.log(mySet2);
console.log(mySet2.has(5));
console.log(mySet2.size); //7

/* 
An array is an ordered list of objects you can acces the elements
of an array by  referencing its integer position in the list.
console.log(myArray2[3]) :4 

An Set is an unordered pool of unique elements since its unordered 
there is no integer index you can use to acces a specific element of
a set.
console.log(mySet2[3]) : undefined


When is it better to use a set over an array firstly
set is different from array, it is not meant to replace
array entirely but to provide additional support type 
to complete what array is missing since set only contains distinct elements
it makes life much easer if we know in advance we want to avoid saving
duplicate data our structure  as we seen before it can easily remove duplicates
*/

console.log("--------------------");
console.log("--------------------");
console.log("--------------------");

// var containsNearbyDuplicate = function (nums, k) {
//   //debugger;
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (i - map.get(nums[i]) <= k) {
//       return true;
//     }
//     map.set(nums[i], i);
//   }
//   return false;
// };

// function containsNearbyDuplicate(nums, k) {
//   //  debugger;
//   let set = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) return true;
//     set.add(nums[i]);
//     if (set.size > k) set.delete(nums[i - k]);
//   }
//   return false;
// }

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));

const shallow = { a: 1, b: { c: 2 } };
const copy = { ...shallow };

console.log(copy);
////////////////////
///////////////////
///////////////////
///////////////////
///////////////////

// map object holds key value pairs and
// remembers the original insertion order of the key
