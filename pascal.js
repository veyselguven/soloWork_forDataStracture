//[
//     [1],
//    [1,1],
//   [1,2,1],
//  [1,3,3,1],
// [1,4,6,4,1]
//]

/*
Base Case : The value at the begginning or end of a row is always 1.
triangle[row][col]=triangle[row-1][col-1]+triangle[row-1][col]

3                  = 2                   +      1


1-) pascalTriangel -> declare an array of size (numsRows)
2-) generate row by row
3-) row[0]=1.    row[row.length-1]=1 
    [1--------1]
4-) genearte value between 1 and  1 look at the row above (previous row)

rowAbove=pascalTriganle[i-1]
then add
row[j]+rowAbove[j-1]


5-)

*/
var generate = function (numRows) {
  let pascalTriangle = new Array(numRows);
  console.log(pascalTriangle); // [ <5 empty items> ]
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      let rowAbove = pascalTriangle[i - 1];
      row[j] = rowAbove[j] + rowAbove[j - 1];
    }
    pascalTriangle[i] = row;
  }

  return pascalTriangle;
};
