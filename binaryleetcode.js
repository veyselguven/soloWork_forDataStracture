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

var recursivePreOrder = function () {
  if (!root) return null;
  const result = [];

  const preOrder = (node) => {
    if (!node) return null;
    result.push(node.val);
    if (node.left) preOrder(node.left);
    //result.push(node.val); on order
    if (node.right) preOrder(node.right);
    //result.push(node.val); post order
  };
  preOrder(root);
  return result;
};
