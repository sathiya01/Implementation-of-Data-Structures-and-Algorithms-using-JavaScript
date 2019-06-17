var StackLinkedList=function() {
    this.top=null;
    this.count=0;
var Node=function(data) {
  this.data=data;
  this.next=null;
};
this.push=function(data) {
  var newNode=new Node(data);
  if(this.top===null) {
   this.top=newNode;
  }
  else {
    var temp=this.top;
    newNode.next=temp;
    this.top=newNode;
  }
  this.count++;
}
this.pop=function() {
  if(this.top===null) {
    console.log("No elements to be deleted");
  }
  else {
    var temp=this.top
    console.log("Deleted element:" + temp.data);
    this.top=this.top.next;
    this.count--;
    
   
    
  }
}
this.length=function() {
  /*if(this.top===null) {
    return this.count;
    
  }
  else {
    var temp=this.top;
    while(temp!== null) {
      temp=temp.next;
      this.count++;
    }
    return this.count;
  }*/
  return this.count;
}

}
var test=new StackLinkedList();
console.log("size:" +test.length());
test.push(10);
test.push(20);
test.push(30);
console.log("size:" +test.length());
test.pop();
console.log("size:" +test.length());
test.pop();
test.pop();

