const minimumIsland = (grid) => {
  const visited = new Set();

  let minSize = Infinity;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      const size = exploreSize(grid, r, c, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }

  return minSize;
};

const exploreSize = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  if (grid[r][c] === "W") return 0;

  const pos = r + "," + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += exploreSize(grid, r - 1, c, visited);
  size += exploreSize(grid, r + 1, c, visited);
  size += exploreSize(grid, r, c - 1, visited);
  size += exploreSize(grid, r, c + 1, visited);
  return size;
};

//0(r) r=rows 0(c) c= colums
//Time O(rxc) //Space O(rxc)
const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited) === true) {
        count += 1;
      }
    }
  }

  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === "W") return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);
  return true;
};
// One Pass O(n) time, O(1) space
var isMonotonic = function (nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    } else if (nums[i] < nums[i - 1]) {
      increasing = false;
    }
  }
  return increasing || decreasing;
};
var checkIfPangram = function (sentence) {
  let s = new Set();
  for (let i = 0; i < sentence.length; i++) {
    s.add(sentence[i]);
  }

  return s.size === 26;
};
// let getMash=sentence.split("").reduce((acc,curr)=>{
//     if(curr in acc){
//         acc[curr]++
//     }else{
//         acc[curr]=1
//     }
//     return acc
// },{})
// console.log(getMash)

var checkIfPangram = function (sentence) {
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alpha.length; i++) {
    // if(sentence.indexOf(alpha[i]) === -1){
    //     return false;
    // }
    if (!sentence.includes(alpha[i])) {
      return false;
    }
  }
  return true;
};
