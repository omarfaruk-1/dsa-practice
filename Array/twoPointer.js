function twoPointer(arr,target){
    let left=0;
    let right=arr.length-1;
    let sum=0;
    while(left<right){
        sum=arr[left]+arr[right];
        if(sum===target){
            return true
        }else if(arr[left]+arr[right]<target){
            left++;
        }else{
            right--
        }
    }
    return false;
}

console.log(twoPointer([1, 2, 3, 4, 6, 8],20))