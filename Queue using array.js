var Queue=function() {
    this.front=-1;
    this.rear=-1;
    this.arr={};
    
    this.enqueue=function(value) {
      if(this.rear===this.arr.length-1) {
        console.log("Full");
      }
      else if(this.front===-1 && this.rear===-1) {
        this.front++;
        this.rear++;
        this.arr[this.rear]=value;
        console.log("Added element:"+ this.arr[this.rear]);
      }
      else {
        this.rear++;
        this.arr[this.rear]=value;
        console.log("Added element:"+ this.arr[this.rear]);
      }
    }
    this.dequeue=function() {
      if(this.front===-1) {
        console.log("Empty");
      }
      else {
      console.log("Deleted element:"+ this.arr[this.front]);
      this.front++;
      }
    }
    this.lastElement=function() {
      console.log("After deleting first element of queue is :" + this.arr[this.front]);
    }
  }
  var test=new Queue();
  test.enqueue(10);
  test.enqueue(20);
  test.enqueue(30);
  test.lastElement();
  test.dequeue();
  test.lastElement();
  