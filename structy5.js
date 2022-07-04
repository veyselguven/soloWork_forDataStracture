// create a linkedList

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/*
["A", "4", "5", "6", "8"];
dummy head - > 4 -> 5 ->
                    c
->current

*/

const createLinkedList = (values) => {
  let dummyHead = new Node(null);
  let current = dummyHead;

  for (value of values) {
    current.next = new Node(value);
    current = current.next;
  }
  return dummyHead.next;
};

const createLinkedListRecursive1 = (values) => {
  debugger;
  if (values.length === 0) return null;

  const head = new Node(values[0]);
  head.next = createLinkedListRecursive1(values.slice(1));
  return head;
};

let vala = ["A", "4", "5", "6", "8"];

console.log(createLinkedListRecursive1(vala));

//console.log(createLinkedList(vala));

//console.log(vala.slice(1));
