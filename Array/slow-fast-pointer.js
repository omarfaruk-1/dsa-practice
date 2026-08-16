function slowAndFastPointer(arr){
    let slow=0,fast=1;
    
    while(fast<arr.length){
        if(arr[slow]===arr[fast]){
            fast++;
        }else{
            slow++;
            arr[slow]=arr[fast];
            fast++
        }
    }
    return slow+1;
}

console.log(slowAndFastPointer([1, 1, 2, 2, 3, 3, 4]))