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
    this.size++;
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
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  //insert at index
  insertAt(data, index) {
    //if index is out of range;
    if (index > 0 && index > this.size) {
      return;
    }
    // if first index
    if (index == 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);

    let current, previous;

    // Set current to first
    current = this.head;

    let count = 0;
    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; //node after the index
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  //Get at index
  getAt(index) {
    // let current = this.head;
    // let count = 0;
    // while (current) {
    //   if (count === index) {
    //     console.log(current.data);
    //   }
    //   count++;
    //   current = current.next;
    // }
    // return null;
    if (index < 0 || index > this.size) {
      return;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    console.log(current.data);
  }

  // Remove at index

  removeAt(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let current = this.head;
    let previous;
    let count = 0;
    //remove first
    if (index == 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  //clear list

  clearList() {
    this.head = null;
    this.size = 0;
  }

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
ll.insertLast(400);
//ll.insertAt(500, 2);
//ll.insertAt(500, 0);
//ll.getAt(2);
///ll.removeAt(3);

ll.clearList();
ll.printList();
//console.log(ll);

// const n1 = new Node(100);
// const n2 = new Node(200);
// console.log(n1);
// console.log(n2);

var deleteNode2 = function (node) {
  let next = node.next.next;
  node.val = node.next.val;
  node.next = next;
};
function deleteNode(llist, position) {
  // Write your code here

  if (position === 0) return llist.next;
  let current = llist;
  let i = 1;
  while (current) {
    if (i === position) {
      current.next = current.next ? current.next.next : null;
      return llist;
    }
    current = current.next;
    i++;
  }
}
