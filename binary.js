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
    // eger Rootumuz yoksa ilk seyi root a atiyoruz
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    // varsa insertNode function i ile node atiyoruz
    else {
      this.insertNode(this.root, newNode);
    }
    return this;
  }
  // insertNode ile bearaber hemde yeni node ve currentNode u
  // parametre olarak atiyoruz
  insertNode(currentNode, node) {
    if (node.value < currentNode.value) {
      // eger yeni node parent node(currentNode) tan kucukse
      if (currentNode.left === null) {
        // left i bossa left e atar
        currentNode.left = node;
      } else {
        // left i bos degilse lefttekini parent node olarak ata,yeniden dondur fonksiyonu
        this.insertNode(currentNode.left, node);
      }
    } else {
      // eger burda parent node yani currentnode tan buyukse ve currentNode right ta
      // deger yoksa right a ata.
      if (currentNode.right == null) {
        currentNode.right = node;
      } else {
        // right bos degilse righttaki degeri parent node olarak ata,yeniden dondur fonksiyonu
        this.insertNode(currentNode.right, node);
      }
    }
  }

  // bu fonksiyonumuz ile specifik olarak belirtilen node u bulma islemi gercelestiriyoruz
  find(value) {
    if (!this.root) {
      return "There is no Robot";
    } else {
      const found = this.findNode(this.root, value);
      if (!found) {
        return "There is so such node in this tree";
      }
      return found;
    }
  }
  findNode(currentNode, value) {
    if (currentNode.value === value) {
      return currentNode;
    } else if (value < currentNode.value && currentNode.left !== null) {
      return this.findNode(currentNode.left, value);
    } else if (value > currentNode.value && currentNode.right !== null) {
      return this.findNode(currentNode.right, value);
    }
    return null;
  }
  //en buyuk ve en kucuk degeri bulma;
  // en kucuk sayilar tree nin sol tarafinda bulunur
  findMinNode() {
    if (!this.root) return null;
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
}

const tree = new BST();
tree.create(10).create(21).create(5).create(32).create(2);
console.log("min", tree.findMinNode());
const abc = tree.find(5);
console.log(tree);
console.log("abc", abc);
