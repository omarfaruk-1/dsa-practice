function maxSubArray(arr,k){
    let left=0,right=k-1,sum=0,newMax=0;
    for(let i=0; i<k;i++){
        sum+=arr[i];
    }
    newMax=sum;
    
    while(right<arr.length-1){
        sum-=arr[left];
        left++;
        right++;
        sum+=arr[right];
        newMax=Math.max(sum,newMax);
    }
    return newMax;
}

console.log(maxSubArray([2, 1, 5, 1, 3, 2],3))