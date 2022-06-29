function getCheapestCost(rootNode) {
  // for(let elem of rootNode){
  if (rootNode.children == []) {
    return rootNode.cost;
  } else {
    // We need to first find out smallest path cost amaong all childiren
    //minCost  is where we store the minumum cost we've seen so far
    //if a child's cost is smaller than minCost,we will update minCost to
    // be that child's cost
    let minCost = Max_INT; //10000
    for (let elem of rootNode.children) {
      //what us the cost from elem to customer ?
      // the cost is getCheapestCost(elem)
      const currentCost = getCheapestCost(elem);
      if (currentCost < minCost) {
        minCost = currentCost;
      }
    }
    return minCost + rootNode.cost; // find minimum cost among all the childiren
    //we know we can get the minimum cost of one child
    // by calling this function getCheapestCost (rootNode.children[i])
  }
}

function Node(cost) {
  this.cost = cost;
  this.children = [];
}

/* 

function getCheapestCost(root) {
  
  function dfs(root, minCost) { // Node(5), 0
    minCost += root.cost // 9

    if (!root.children.length) {
      return minCost
    }
    
    let childrenMin = Infinity
    for (let i = 0; i < root.children.length; i++) {
      let childMin = dfs(root.children[i], minCost) // 9
      if (childMin < childrenMin) {
        childrenMin = childMin
      }
    }
    
    return childrenMin
  }
  
  return dfs(root, 0)
}

*/
