/* 
Hiyearsik yapilari gosteren veri yapisidir.

her bir elemana node denir,
her node un altinda 0,1 veya daha fazla node bulunur.
hiyearside en ustteki node a root denir.
Bir node un ustundeki node a parent altindaki node lara child denir.
hiyearside en alttaki(yani kendi cocugu olmayan) nodelara leaf denir
*/

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addNode(data) {
    if ((this.value = data)) {
      this.children[2].children.push("Naber");
    }
  }
}

let root = new Node("Turkiye");
let node1 = new Node("Ankara");
let node2 = new Node("Istanbul");
let node3 = new Node("Izmir");
console.log("node3", node3);
root.children.push(node1, node2, node3);

//console.log("root", root);

root.children.push(new Node("Diyarbakir"), new Node("Bingol"));

root.addNode("Ankara");

console.log("root", root);
