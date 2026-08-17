
function threeSum(arr) {
    let sum=0,left,right;
    const result=[]

    arr.sort((a,b)=>a-b);


    for(let i=0;i<arr.length;i++){
        left=i+1;
        right=arr.length-1;
        while(left<right){
            sum=arr[i]+arr[left]+arr[right];
            if(sum===0){
                left++;
                right--;
                result.push([arr[i],arr[left],arr[right]]);
                while(left<right && arr[left]===arr[left-1]){
                    left++;
                }
                while(left<right && arr[right]===arr[right+1]){
                    right--
                }
                
            }else if(sum<0){
                left++
            }else{
                right--;
            }
        }
    }
    return result;
};

console.log(threeSum([-4, -1, -1, 0, 1, 2]))