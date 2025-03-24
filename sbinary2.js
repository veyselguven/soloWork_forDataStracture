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
    // console.log("current", current);
    // console.log(current.val); // a b c d e c f
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
console.log(a);

//console.log(depthFirstValues(a));

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

// O(n) time
//O(1) time
const breadthFirstValues = (root) => {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();

    //console.log(current);
    result.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    //  console.log(current.val);
  }
  return result;
};
/*
const breadthFirstValues = (root) => {
if(!root) return [];
  let leftNode=depthFirstValues(root.left);//b,d,c
  let rightNode=depthFirstValues(root.right); // c,f
  return [root.val,...leftNode,...rightNode]
}
*/
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

breadthFirstValues(a);
//    -> ['a', 'b', 'c', 'd', 'e', 'f']

var findTarget = function (root, k) {
  let result = [];
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
    result.push(current.val);
  }
  console.log(result);

  let hasMap = {};
  for (let i = 0; i < result.length; i++) {
    let value = result[i];
    let complementPair = k - value;
    if (hasMap[complementPair] !== undefined) {
      return true;
    } else {
      hasMap[value] = i;
    }
  }
  return false;
};
/* 
  for(let i=0; i<result.length; i++){
      for(let j=i+1; j<result.length; j++){
          if(result[i]+result[j]===k){
              return true
          }
      }
  }
  return false
*/

var increasingBST = function (root) {
  let nodes = [];
  inOrder(root);
  function inOrder(root) {
    if (root) {
      inOrder(root.left);
      nodes.push(root);
      inOrder(root.right);
    }
    return;
  }
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].left = null;
    nodes[i].right = nodes[i + 1];
  }
  nodes[nodes.length - 1].left = null;
  nodes[nodes.length - 1].right = null;
  return nodes[0];
};

var getMinimumDifference = function (root) {
  let queue = [root];
  let getArray = [];

  while (queue.length > 0) {
    let currentVal = queue.shift();
    getArray.push(currentVal.val);

    if (currentVal.left) queue.push(currentVal.left);
    if (currentVal.right) queue.push(currentVal.right);
  }
  //console.log(getArray);

  let result = +Infinity;

  for (let i = 0; i < getArray.length; i++) {
    for (let j = i + 1; j < getArray.length; j++) {
      let curentDif = Math.abs(getArray[i] - getArray[j]);
      if (curentDif < result) result = curentDif;
    }
  }
  return result;
};
