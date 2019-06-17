var Sorting=function() {
  this.BubbleSort=function(arr,n) {
    for( var i=0;i<n;i++) {
      for( var j=0;j<n-i-1;j++) {
         if(arr[j]>arr[j+1]) {
           var temp=arr[j];
           arr[j]=arr[j+1];
           arr[j+1]=temp;
         }
      }
    }
    console.log("Elements after sorting:" + arr);
//      for(var i=0;i<n;i++) {
//       console.log(arr[i]);
//  }
   
  
  }
}
var test=new Sorting();
//console.log("Enter size");
//var n=prompt('Enter size');
var arr=[100,90,80,70,60,50,40,30,20,10];
var n=arr.length;
/*for(var i=0;i<n;i++) {
arr=prompt('Enter the elements');
}*/

console.log("Elements before sorting:"+ arr);

/*for(var i=0;i<n;i++) {
     console.log(arr[i]);
}*/

test.BubbleSort(arr,n);