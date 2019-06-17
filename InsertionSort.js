var Sorting=function() {
    this.InsertionSort=function(arr,n) {
      var i, value, index;  
      for (i = 1; i < n; i++) 
      {  
          value = arr[i];  
          index = i - 1; 
          while (index >= 0 && arr[index] > value) 
          {  
              arr[index + 1] = arr[index];  
              index = index - 1;  
          }  
          arr[index + 1] = value;  
      }
      console.log("Elements after sorting: "+ arr);
    }
    
  }
  var test=new Sorting();
  var arr=[100,90,80,70,60,50,40,30,20,10];
  var n=arr.length;
  console.log("Elements before sorting:" + arr);
  test.InsertionSort(arr,n);