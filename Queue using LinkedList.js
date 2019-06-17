var QueueLinkedList=function() {
  this.rear=null;
  this.front=null;
  this.count=0;
  
  var Node=function(data) {
    this.data=data;
    this.next=null;
  }
  
  this. enqueue=function(data) {
    var newNode=new Node(data);
    if(this.rear===null) {
      this.rear=newNode;
      this.front=this.rear;
    }
    else {
      var temp=this.rear;
      temp.next=newNode;
      this.rear=temp.next;
    }
    this.count++;
  }
  
  this. dequeue=function() {
    if(this.front===null) {
      console.log("The queue is empty");
    }
    else {
      var temp=this.front;
      console.log("the deleted element: "+temp.data);
      this.front=this.front.next;
      this.count--;
    }
  }
  this. len =function() {
    return this.count;
  }
  this. lastInserted=function() {
    console.log("The last inserted element:" + this.rear.data);
  }
}
var test= new QueueLinkedList();
console.log("size is: "+test.len());
test.enqueue(10);
test.enqueue(20);
test.enqueue(30);
console.log("size is: "+test.len());
test.dequeue();
test.lastInserted();
test.dequeue();
console.log("size is: "+test.len());