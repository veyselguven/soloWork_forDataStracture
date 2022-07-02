const zipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 == null) return head2;
  if (head2 == null) return head1;
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
};

//n->len of list1
//m->len of list2
//Time0(min(n,m))
//O(n)-> Time complexity
//0(1)-> constant space
/*
  const zipperLists = (head1, head2) => {
    let tail=head1;
    let current1=head1.next;
    let current2=head2;
    let count=0
    while(current1 !==null && current2 !==null){
      if(count%2===0){
        tail.next=current2
        current2=current2.next;
      }
      else{
        tail.next=current1;
        current1=current1.next
      }  
        tail=tail.next
      count++;
    }
    if(current1){
      tail.next=current1;
    }
     if(current2){
      tail.next=current2;
    }
    return head1
  }*/

// merge
//N=> len of 1
//M=> len of 2
//Time 0(min(n,m))
//Space 0(1) constant, we are not creating new Node
const mergeLists = (head1, head2) => {
  let dummyHead = new Node(null);
  let tail = dummyHead;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }
  if (current1) {
    tail.next = current1;
  }
  if (current2) {
    tail.next = current2;
  }
  return dummyHead.next;
};

/*
//Time O(N)
//Space 0(1)
const mergeLists=(head1,head2)=>{
  if(head1===null && head2===null) return null;
  if(head1===null) return head2;
  if(head2===null) return head1;
  if(head1.val<head2.val){
    const next1=head1.next
    head1.next=mergeLists(next1,head2);
    return head1;
  }else{
    const next2=head2.next;
    head2.next=mergeLists(head1,next2)
    return head2
  }  
}
*/

const removeNode = (head, targetVal) => {
  if (head.val === targetVal) {
    return head.next;
  }
  let current = head;
  let prev = null;
  while (current !== null) {
    if (current.val === targetVal) {
      prev.next = current.next;
      break;
    }
    prev = current;
    current = current.next;
  }
  return head;
};

//O(n) time
//O(1) space constant
const isUnivalueList = (head) => {
  let current = head;
  let next = current.next;
  while (current && next) {
    if (current.val !== next.val) {
      return false;
    }
    current = current.next;
  }
  return true;
};

/*
//O(2n) ; time
//O(n); space
const isUnivalueList = (head) => {
  // todo
  let results=[];
  let current=head;
  while(current){
    results.push(current.val);
    current=current.next
  }
  let hash={};
  
  for(result of results){
    if(!hash[result]){
      hash[result]=0
    }
      hash[result]++   
  }
  
  console.log(hash)
  let arrayKey=Object.keys(hash);
  if(arrayKey.length===1) {
    return true
  }
  return false
 }; 
  
  */
//for(let i=0; i<result.length; i++){
//  for(let j=i+1; j<result.length; j++){
//   if(result[i]!==result[j]) return false
//   }
// }
//  return true
/* 
/
/ 
/
*/

//O(n) time
//O(1) space
const longestStreak = (head) => {
  // todo
  let maxStr = 0;
  let currentStreak = 0;
  let currentNode = head;
  let prevVal = null;
  while (currentNode) {
    if (currentNode.val === prevVal) {
      currentStreak++;
      //console.log(maxStr);
    } else {
      currentStreak = 1;
    }
    if (currentStreak > maxStr) {
      maxStr = currentStreak;
    }
    prevVal = currentNode.val;

    currentNode = currentNode.next;
    //console.log(max)
  }

  return maxStr;
};
const removeElements = function (head, val) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let prev = dummyNode;
  let current = head;

  while (current) {
    if (current.val == val) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return dummyNode.next;
};

var removeElements2 = function (head, val) {
  let curr = head;
  let prev = null;

  while (curr) {
    if (curr.val === val) {
      if (prev === null) {
        // you might be wondering why this validation, simple reason is to handle => [7,7,7,7] 7
        head = head.next;
      } else {
        prev.next = curr.next;
      }
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
};
