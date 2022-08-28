var averageOfLevels = function (root) {
  if (!root) return [];

  const result = [];
  const stack = [{ node: root, level: 0 }];

  while (stack.length > 0) {
    let currentNode = stack.pop();
    // console.log("currentNode==>",currentNode)
    if (result.length === currentNode.level) {
      result.push([currentNode.node.val]);
    } else {
      result[currentNode.level].push(currentNode.node.val);
    }
    if (currentNode.node.right)
      stack.push({
        node: currentNode.node.right,
        level: currentNode.level + 1,
      });
    if (currentNode.node.left)
      stack.push({ node: currentNode.node.left, level: currentNode.level + 1 });
  }
  console.log(result);

  let final = [];

  for (let i = 0; i < result.length; i++) {
    let sum = 0;
    for (let j = 0; j < result[i].length; j++) {
      sum += result[i][j];
    }
    let av = sum / result[i].length;
    final.push(av);
  }
  return final;
};
