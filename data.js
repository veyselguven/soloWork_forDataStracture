// const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];

// module.exports = characters;

var findIntersectionValues = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);

  let count1 = 0;
  for (let num of nums1) {
    if (set2.has(num)) {
      count1++;
    }
  }

  let count2 = 0;
  for (let num of nums2) {
    if (set1.has(num)) {
      count2++;
    }
  }

  return [count1, count2];
};

// var findIntersectionValues = function (nums1, nums2) {
//     let n1 = 0, n2 = 0
//     for (let i = 0; i < nums1.length; i++) {
//         if (nums2.includes(nums1[i])) n1++
//     }
//     for (let j = 0; j < nums2.length; j++) {
//         if (nums1.includes(nums2[j])) n2++
//     }
//     return [n1, n2]
// };
