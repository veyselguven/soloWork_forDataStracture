const preOrderTraversal = function (root) {
  if (!root) return [];
  const stack = [root];
  const result = [];
  while (stack.length) {
    let node = stack.pop();

    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};

/* 

var inorderTraversal =function(root){
    if(!root) return null;
    const stack=[root];
    const result=[];
    
    while(stack.length){
        let node=stack.pop();   
    
        if(node.left) stack.push(node.left);
        result.push(node.val);
        if(node.left || node.right) stack.push(node.left)
    return result;
}

*/

var recursivePreOrder = function () {
  if (!root) return null;
  const result = [];

  const preOrder = (node) => {
    if (!node) return null;
    result.push(node.val);
    if (node.left) preOrder(node.left);
    //result.push(node.val); in order
    if (node.right) preOrder(node.right);
    //result.push(node.val); post order
  };
  preOrder(root);
  return result;
};
var inorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const inOrder = (node) => {
    if (!node) return null;
    if (node.left) inOrder(node.left);
    result.push(node.val);
    if (node.right) inOrder(node.right);
  };
  inOrder(root);
  return result;
};

// 0-if no leftchild, go right, skip 1-3
// 1- find predessor
// 2-if cylce, break cycle,then go right
// 3-if no cycle and left child exists
// create a cyle, go left

var inorderTraversal = function (root) {
  let result = [];
  dfs(root);

  function dfs(root) {
    if (root != null) {
      dfs(root.left);
      result.push(root.val);
      dfs(root.right);
    }
  }

  return result;
};
