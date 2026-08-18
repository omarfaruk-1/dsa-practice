function maxAvgSub(arr,k){
let left=0,right=k-1,sum=0,average=0,maxAvg=0;
    for(let i=0;i<k;i++){
        sum+=arr[i];
    }
    console.log(sum)
    console.log(arr.length)
    average=sum/k;

    maxAvg=average;
    if(arr.length===1){
        return maxAvg=average;
    }
 
    while(right<arr.length-1){
        sum-=arr[left];
        left++;
        right++;
        sum+=arr[right];
        average=sum/k;
        maxAvg=Math.max(maxAvg,average)
    }
    return maxAvg;
}


console.log(maxAvgSub([5],1));