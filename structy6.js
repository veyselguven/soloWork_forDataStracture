// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// //   39
// // + 47
// // ----
// //   86

// // 9 -> 3

// // 7 -> 4

// // 6 -> 8

// //first reversed all heads
// // initialze let head1Val="39"
// //initialze let head2Val="47";
// // let sum= Number(head1Val)+Number(head2Val)=86
// //String(86).split("")
// //dummyhead
// // return dummyhead.next
// // 8->6
// // reverse this

// //          c  n
// //  <- a <- b  c -> d ->e
// //     p
// const reversedHelper = (head) => {
//   let prev = null;
//   let current = head;
//   while (current) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// };

// const addLists = (head1, head2) => {
//   let reversedHead1 = reversedHelper(head1);
//   let reversedHead2 = reversedHelper(head2);
//   // console.log("reversedHead1", reversedHead1);
//   let current1 = reversedHead1;
//   let sumHead1 = "";
//   while (current1) {
//     sumHead1 += String(current1.val);
//     current1 = current1.next;
//   }
//   console.log("sumHead1", sumHead1);
//   let current2 = reversedHead2;
//   let sumHead2 = "";
//   while (current2) {
//     sumHead2 += String(current2.val);
//     current2 = current2.next;
//   }
//   console.log("sumHead2", sumHead2);
//   let totalSum = Number(sumHead1) + Number(sumHead2);
//   console.log("totalSum", totalSum);

//   let arrays = String(totalSum).split("");
//   console.log(arrays);

//   let dummyHead = new Node(null);
//   let current = dummyHead;
//   for (array of arrays) {
//     current.next = new Node(Number(array));
//     current = current.next;
//   }
//   let newLinkedList = dummyHead.next;
//   console.log("newLinkedList", newLinkedList);
//   return reversedHelper(newLinkedList);
// };

// //   621
// // + 354
// // -----
// //   975

// const a1 = new Node(1);
// const a2 = new Node(2);
// const a3 = new Node(6);
// a1.next = a2;
// a2.next = a3;
// // 1 -> 2 -> 6

// const b1 = new Node(4);
// const b2 = new Node(5);
// const b3 = new Node(3);
// b1.next = b2;
// b2.next = b3;
// // 4 -> 5 -> 3

// addLists(a1, b1);
// // 5 -> 7 -> 9

const addLists = (head1, hea2) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  let carry = 0;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null || current2 !== null || carry === 1) {
    const val1 = current1 == null ? 0 : current1.val;
    const val2 = current2 == null ? 0 : current1.val;
    const sum = val1 + val2 + carry;

    carry = sum > 9 ? 1 : 0;
    const digit = sum % 10;
    tail.next = new Node(digit);
    tail = tail.next;
  }
  return dummyHead.next;
};
