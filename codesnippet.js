const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

console.log(characters);

//1-)Get the total mass of all characters

const totalMass = characters.reduce((acc, current) => {
  return (acc += Number(current.mass));
}, 0);
console.log(totalMass); //346

//Get the total height of all characters

const totalHeight = characters.reduce((acc, curr) => {
  return (acc += Number(curr.height));
}, 0);
console.log(totalHeight); // 712

// Get total number of characters by eye color

const charactersByEyeColor = characters.reduce((acc, curr) => {
  console.log(acc); // {}  // {blue:1}  // {blue:1, yellow:1}  // {blue:1, yellow:1, brown:1} // {blue:2 , yellow:1, brown:1}
  const color = curr.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});
console.log(charactersByEyeColor); //{blue: 2, yellow: 1, brown: 1}

//Get the total number of characters in all the character names

const charactersByName = characters.reduce((acc, curr) => {
  return (acc += curr.name.length);
}, 0);

console.log(charactersByName); //52

const runningSum = (nums) => {
  nums.reduce((acc, curr, index, arr) => {
    return (arr[index] += acc);
  });
  return nums;
};

// var runningSum = function(nums) {
//     let result=[nums[0]];
//     let sum=nums[0];

//     for(let i=1; i<nums.length; i++){
//         sum+=nums[i]
//         result.push(sum)
//     }
//     return result
// };

// Array in-place solution || O(1) extra space

// var runningSum = function(nums) {
//     for(let i=1; i<nums.length; i++){
//         nums[i] = nums[i-1] + nums[i];
//     }
//     return nums;
// };

var prefixesDivBy5 = function (nums) {
  let result = [];
  let binary = 0;
  for (let num of nums) {
    binary = (binary % 5) * 2 + num;
    let checkBinary = binary % 5 == 0;
    result.push(checkBinary);
  }
  return result;
};
