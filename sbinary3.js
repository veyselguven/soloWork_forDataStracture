class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/*
  const treeSum = (root) => {
    if(!root) return 0;
   return root.val+ treeSum(root.left) +treeSum(root.right);  
  }
  */

const treeSum = (root) => {
  if (!root) return 0;
  let result = 0;
  let stack = [root];
  while (stack.length > 0) {
    let currentValue = stack.pop();

    result += currentValue.val;

    if (currentValue.left) stack.push(currentValue.left);
    if (currentValue.right) stack.push(currentValue.right);
  }
  return result;
};

/*
  const treeSum=(root)=>{
    if(!root) return 0;
    let values=root.val;
    const stack=[root];
    while(stack.length>0){
      let currentValue=stack.pop();   
      if(currentValue.right){
        stack.push(currentValue.right)
      values+=currentValue.right.val;    
      }
      if(currentValue.left){
        stack.push(currentValue.left)
        values+=currentValue.left.val
      }
    }
    return values
  }
  */

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeSum(a); // -> 21
