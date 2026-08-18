function subArrayAvgThreshold(arr,k,threshold){
    let left=0,right=k-1,sum=0,average=0,count=0;
    for(let i=0;i<k;i++){
        sum+=arr[i];
    }
    average=sum/k;
    if(average>=threshold){
            count++;
    }
    
    while(right<arr.length-1){
        sum-=arr[left];
        left++;
        right++;
        sum+=arr[right];
        average=sum/k;
        if(average>=threshold){
            count++;
        }
    }
    return count;
}

console.log(subArrayAvgThreshold([11,13,17,23,29,31,7,5,2,3],3,5))