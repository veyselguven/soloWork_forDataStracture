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
