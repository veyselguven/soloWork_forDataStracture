//console.log("asddv");
const getNodeValue = (head, index) => {
  // todo
  let current = head;
  let counter = 0;

  while (counter !== index) {
    current = current.next;
    if (current === null) return null;
    counter++;
  }
  //console.log(current.val);
  return current.val;
};


/*
//Time O(n); n nodes
//Space 0(1);
const linkedListFind = (head, target) => {
  // todo
  let current=head;
  while(current!==null){
    if(current.val===target){
      return true;
    } 
    current=current.next; 
  } 
return false
};
*/
//O(n) time complextiy
//O(n) space complextiy
const linkedListFind=(head,target)=>{
    if(head===null) return false;
    if(head.val===target)  return true;
    return linkedListFind(head.next,targe   t)
  }


  //0(n);Time
//O(1):Space

const sumList = (head) => {
    // todo
    let sum=0;
    let current=head;
    
    while(current!==null){
      sum+=current.val;
      current=current.next;
    }
    return sum
  };
  
  
  /*
  
  //O(n) time
  //O(1 ) space
  const sumList=(head)=>{
   if(head===null) return 0;
    return head.val+sumList(head.next)
  }
  */


const linkedListValues = (head) => {
    // todo
    let current=head;
    let values=[];
        while(current!==null){
          values.push(current.val)
          current=current.next
        } 
    return values
  };
  /*
  const linkedListValues=(head)=>{
    let values=[];
    fillValues(head,values)
    return values;
  };
  
  
  const fillValues=(head,values)=>{
    if(head===null) return;
   values.push(head.val); 
    fillValues(head.next,values)
  }
  */





  const fiveSort = (nums) => {
    // todo
    //time O(n) n=>length
    //O(1) constant space
    let right=nums.length-1;
    let left=0;
    while(left<=right){
    if(nums[right]===5){
      right--;
    }else if(nums[left]===5){
    [nums[left],nums[right]]=[nums[right],nums[left]]
      //console.log("nums",nums);
    }else{
      left++
    } 
    }
    return nums;
  };