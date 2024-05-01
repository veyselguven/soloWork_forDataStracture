/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;
        if (j > 0 && grid[i][j - 1] === 1) {
          perimeter -= 2;
        }
        if (i > 0 && grid[i - 1][j] === 1) {
          perimeter -= 2;
        }
      }
    }
  }
  return perimeter;
};

/* 
1.Create perimeter variable
2.Loop through grid
    a.Loop thorugh inner array.
        i.Condition if value is "1".
            1.Add perimeter by 4.
            2.if the block before is "1".
                a.Subsctract perimeter by "2".
            3.if the block above is "1"
                a.Subsctract perimeter by 2
3.Return perimeter   

 */
// let is block scope and we have different i has each different itaration
// since var we have one i for entire for loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// var kidsWithCandies = function(candies, extraCandies) {
//     let getMax=Math.max(...candies);
//     console.log("getMax=>",getMax);
//     let result=[]
//     for(let i=0; i<candies.length; i++){
//         if(candies[i]+extraCandies >= getMax){
//             result.push(true)
//         }else{
//             result.push(false)
//         }
//     }
//     return result
// };

var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((item, index) => item + extraCandies >= max);
};

var luckyNumbers = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    // loop through the every element of the array matrix
    let min = Math.min(...matrix[i]); // initialize min for minimum number from every element of array matrix
    let index = matrix[i].indexOf(min); // initialize index of min in every element of array matrix
    if (matrix.every((arr) => arr[index] <= min)) return [min]; // if every element of array in which every array of index is less than or equal to min then return array of min
  }
  return []; // return empty array
};
