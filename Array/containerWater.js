function maxArea(arr){
    
    let left=0,right=arr.length-1,max=0,height=0,width=0,area=0;

    while(left<right){
        width=right-left;
        height=Math.min(arr[left],arr[right]);
        area=width*height;
        if(arr[left]<arr[right]){
            left++;
        }else{
            right--;
        }
        max=Math.max(max,area)
    }
    return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));