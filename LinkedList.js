class createNode {
    constructor(data,next) {
        this.data=data;
        this.next=next;
    }
}
class linkedList {
    constructor() {
        this.head=null;
        this.size=0;
    }
  display() {
    if(this.head===null) {
        console.log("List empty");
    }
    else {
        let current=this.head;
        console.log("elements are:");
    while(current.next!==null) {
        console.log(current.data);
      current=current.next;
        
    }
      
}
}
     
addAtBegin(value) {
   let newnode = new createNode(value);
  
    if(this.head===null) {
        this.head=newnode;
      console.log("element inserted: " +this.head.data);
        this.size++;
    }
  else {
    
        let current=this.head;
        current.next=this.head;
        current=newnode;
        this.head=current;
        console.log("element inserted: " +this.head.data);
        this.size++;
  }
    
}
addAtEnd(value) {
  newnode = new createNode(value);
    if(this.head===null) {
        this.head=newnode;
        this.size++;
    }
    else {
        current=this.head;
        while(!current.next) {
            current=current.next;
        }
        current.next=newnode;
        current=newnode;
        console.log("element inserted: " +current.data);
        this.size++;
    }
}
addAtPostion(value,position) {
  newnode = new createNode(value);
    if(position===1) {
        this.head=newnode;
        console.log("element inserted: " +this.head.data);
        this.size++;
    }
    else {
        current=this.head;
        prev=null;
        while(current.next!==position+1) {
            prev=current;
            current=current.next;
        }
        prev.next=newnode;
        newnode.next=current;
        current=newnode;
        console.log("element inserted: " +current.data);
        this.size++;
     }

}
length() {
    console.log("size is:" + this.size);
}

}
let ss=new linkedList();
ss.length();
ss.display();
ss.addAtBegin(10);
ss.addAtBegin(20);
ss.addAtBegin(30);
ss.display();
