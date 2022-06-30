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