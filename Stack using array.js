var Stack=function() {
  this.top=-1;
  this.arr={};
  
  this.push=function(value) {
    if(this.top===this.arr.length-1) {
      console.log("Full");
    }
    else {
      this.top++;
      this.arr[this.top]=value;
    }
  }
  this.pop=function() {
    if(this.top===-1) {
      console.log("Empty");
    }
    else {
      console.log("The deleted element:" + this.arr[this.top]);
      this.top--;
    }
  }
  this.length=function() {
    console.log("The size of stack is:" + this.top);
  }
  this.peek=function() {
    console.log("The top element is"+ this.arr[this.top]);
  }
}
var test=new Stack();
test.length();
test.push(30);
test.push(20);
test.push(10);
test.length();
test.peek();
test.pop();
test.peek();
test.pop();
