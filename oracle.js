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

function sortSentence(s) {
  // Split the sentence into words
  const words = s.split(" ");

  // Create an array to hold words in the correct order
  const result = [];

  // Loop through each word
  for (let word of words) {
    // Get the position from the last character of the word
    const position = parseInt(word[word.length - 1]);
    console.log(position);
    // Remove the last character (the number) and store it in the correct position
    result[position - 1] = word.slice(0, -1);
  }

  // Join the words together to form the sentence
  return result.join(" ");
}
// time O(n), where n is the length of the string, since we only traverse the string twice.
// space O(n), due to the use of additional arrays (result and finalResult) for intermediate steps.
function minRemoveToMakeValid(s) {
  // Step 1: Remove invalid closing parentheses
  let result = [];
  let openCount = 0;

  // Traverse the string to remove invalid closing parentheses
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openCount++; // Count opening parentheses
      result.push(s[i]); // Keep the opening parenthesis
    } else if (s[i] === ")") {
      if (openCount > 0) {
        openCount--; // Found a matching '(' for this ')'
        result.push(s[i]); // Keep the closing parenthesis
      }
      // If there's no matching '(' for the ')', we skip it
    } else {
      result.push(s[i]); // Keep non-parenthesis characters
    }
  }

  // Step 2: Remove unmatched opening parentheses
  let finalResult = [];
  let closeCount = 0;

  // Traverse the result array from right to left
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] === ")") {
      closeCount++; // Count closing parentheses
      finalResult.push(result[i]); // Keep the closing parenthesis
    } else if (result[i] === "(") {
      if (closeCount > 0) {
        closeCount--; // Found a matching ')' for this '('
        finalResult.push(result[i]); // Keep the opening parenthesis
      }
      // If there's no matching ')' for the '(', we skip it
    } else {
      finalResult.push(result[i]); // Keep non-parenthesis characters
    }
  }

  // Reverse finalResult to restore the correct order
  return finalResult.reverse().join("");
}

// Example usage:
console.log(minRemoveToMakeValid("lee(t(c)o)de)")); // Output: "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d")); // Output: "ab(c)d"
console.log(minRemoveToMakeValid("))((")); // Output: ""
