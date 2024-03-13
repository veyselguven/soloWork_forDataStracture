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
