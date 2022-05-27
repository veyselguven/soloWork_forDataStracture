// const n1 = {
//   data: 100,
// };

// const n2 = {
//   data: 200,
// };

// n1.next = n2;
// console.log(n1);

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //insert first Node

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  //insert lastNode
  insertLast(data) {
    let node = new Node(data);
    let current;
    //if it is empty make head
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head; //start beginin
      while (current == null) {}
    }
  }

  //insert at index

  //Get at index

  // Remove at index

  //clear list

  // Print list data

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.printList();
//console.log(ll);

// const n1 = new Node(100);
// const n2 = new Node(200);
// console.log(n1);
// console.log(n2);
