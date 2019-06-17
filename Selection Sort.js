var Sorting=function() {
    this.SelectionSort=function(arr , n) {
      for(var i=0;i<n-1;i++) {
        var imin=i;
        for(var j=i+1;j<n;j++) {
          if(arr[j]<arr[imin]) {
            imin=j;
          }
        
         var temp=arr[i];
        arr[i]=arr[imin];
        arr[imin]=temp;
        }
      }
      console.log("After swapping:"+arr);
    }
  }
  var test=new Sorting();
  var arr=[100,90,80,70,60,50,40,30,20,10];
  var n=arr.length;
  console.log("Before swapping:" +arr);
  test.SelectionSort(arr,n);