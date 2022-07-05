class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const depthFirstValues = (root) => {
  let result = [];
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    //console.log("current", current);
    console.log(current.val); // a b c d e c f
    // result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result;
};
/**
 *
 *
 *
 *
 *
 */
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(depthFirstValues(a));

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//console.log([a]);
//console.log("popppp", [a].pop().val);
const depthFirstValuesRecursive = (root) => {
  if (!root) return [];
  let leftNode = depthFirstValues(root.left);
  let rightNode = depthFirstValues(root.right);
  return [root.val, ...leftNode, ...rightNode];
};
