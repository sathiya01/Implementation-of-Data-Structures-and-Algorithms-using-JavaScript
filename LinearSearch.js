var Searches=function() {
    this.LinearSearch=function(key) {
      var arr=[];
      var flag=false;
      var n= prompt("enter the number of elements")
      
      for( var i=0;i<n;i++) {
        arr.push(prompt('Enter the numbers:'));
      }
      console.log(arr);
      for(var i=0;i<n;i++) {
        if(arr[i]==key) {
         console.log("The element is found at: "+(i+1));
          flag=true;
        }
      }
      if(flag===false) {
      console.log("The element is not found");
      }
    }
    }
    var test=new Searches();
    var key=prompt('Enter key value');
    console.log("The key element is:" + key);
    test.LinearSearch(key);
    
    
    