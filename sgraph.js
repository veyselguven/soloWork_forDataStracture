/* iterative */

const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbor of graph[current]) {
      // console.log(neighbor);
      stack.push(neighbor);
    }
  }
};
/* 
      a
      b
      d
      f
      c
      e
 */

/*  Recursive */

const depthFirstPrintRecursive = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstPrint(graph, neighbor);
  }
};
const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["'f"],
  e: [],
  f: [],
};

depthFirstPrintRecursive(graph, "a"); //abdfce
//depthFirstPrint(graph, "a"); //abdfce

// breadFirstPrint(graph,'a');  //acbedf
