//https://tsafaelmali.medium.com/binary-search-tree-nedir-2e6fb0621d9

//Binary tree’de her bir verinin Node olarak isimlendirildiğini söylemiştik.
//Her bir Node’un da left ve right olmak üzere child node’ları olabilir.
//Bu yüzden öncelikle bir Node Sınıfı oluşturalım.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//Şimdi Binary Tree’miz için bir sınıf oluşturalım.
//Bir Binary Tree’de ilk olarak bize root bir değer gerekeceği için bir root property’si tanımlayalım.
class BST {
  constructor() {
    this.root = null;
  }
  create(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      this.insertNode(this.root, newNode);
    }
    return this;
  }
  insertNode(currentNode, node) {
    if (node.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = node;
      }
    }
  }
}
