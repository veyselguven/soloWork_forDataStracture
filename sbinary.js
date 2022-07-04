class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

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

console.log(a.right);

/* 
Node {
  value: 'a',
  right: Node {
    value: 'c',
    right: Node { value: 'f', right: null, left: null },
    left: null
  },
  left: Node {
    value: 'b',
    right: Node { value: 'e', right: null, left: null },
    left: Node { value: 'd', right: null, left: null }
  }
}
*/

/* 
        A   
       / \ 
      B   C 
     / \    \
    D   E    F
*/
