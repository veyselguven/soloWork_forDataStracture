// function staircase(n) {
//   // want to declare a variable that will hold the final output that we will print
//   let output = "";

//   // outer for loop to keep track of the overall number of rows (n)
//   for (let i = 1; i <= n; i++) {
//     // inner for loop to keep track of the preceding spaces on each line
//     // s should start out at n-1 which we can see from the pic I drew
//     // s should be greater than or equal to i because the number of spaces decreases as i increases
//     // decrease s bc the number of spaces decreases as i increases
//     for (let s = n - 1; s >= i; s--) {
//       output += " ";
//     }

//     // inner for loop to keep track of the #s on each line
//     // h should start at one because the first line will always have one #
//     // h should be less than or equal to the row that we are on since h will approach and eventually equal n
//     // h increases since we increment h to equal i which will eventually equal n
//     for (let h = 1; h <= i; h++) {
//       output += "#";
//     }
//     // new line
//     output += "\n";
//   }
//   // log the final result
//   console.log(output);
// }

// staircase(6);

// function staircase(n) {
//   // here we use just one for loop where i tracks the number of rows
//   // the number of rows (i) should be less than or equal to n
//   for (let i = 1; i <= n; i++) {
//     // print out a " " n-i times and append a # i times
//     // console log adds a new line by default

//     console.log(" ".repeat(n - i) + "#".repeat(i));
//   }
// }

let ref = {
  "00": 12,
  "01": 13,
  "02": 14,
  "03": 15,
  "04": 16,
  "05": 17,
  "06": 18,
  "07": 19,
  "08": 20,
  "09": 21,
  10: 22,
  11: 23,
};
function timeConversion(s) {
  // Write your code here
  let splited = s.split(":"); // ["07","05","45PM"]
  if (splited[0] in ref) {
    splited[0] = ref[splited[0]];
  }
  //console.log("splited2", splited[2]);
  splited[2] = splited[2].substring(0, 2);
  console.log("splited2", splited[2]);

  return splited.join(":");
}

timeConversion("07:05:45PM");
