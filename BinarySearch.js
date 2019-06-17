var Searches=function() {
    this.BinarySearch=function(arr,key) {
    var low=0;
    var high=arr.length-1;
        while(low<=high) {
             var mid=Math.floor((low+high)/2);
        if(arr[mid]===key) {
            console.log("The value found at" +( mid+1));
            }
        else if(arr[mid]>key) {
            //return this.BinarySearch(arr,key,mid+1,high);
            high=mid-1;
            }
        else if(arr[mid]<key) {
            //return this.BinarySearch(arr,key,low,mid+1);
            
            low=mid+1;
            }
        }
        console.log("The element not found");
         }
    }
    var test=new Searches();
    var n=prompt('enter number of elements');
    var arr=[];
    for(var i=0;i<n;i++) {
         arr.push(prompt('enter elements'));
        }
    var key=prompt("enter key to be searched");
    test.BinarySearch(arr,key);