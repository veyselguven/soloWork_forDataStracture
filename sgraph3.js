// const makeGraph = (edges) => {
//   //debugger;
//   let graph = {};

//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!graph[a]) graph[a] = [];
//     if (!graph[b]) graph[b] = [];
//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// };

// const edges = [
//   ["w", "x"],
//   ["x", "y"],
//   ["z", "y"],
//   ["z", "v"],
//   ["w", "v"],
// ];

// makeGraph(edges);

let a = new Set();

a.add("adg");
console.log(a);
