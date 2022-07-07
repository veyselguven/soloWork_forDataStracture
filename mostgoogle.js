const maxPathSum = (root) => {
  if (!root) return -Infinity;
  if (root.right === null && root.left === null) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

module.exports = {
  maxPathSum,
};
