
function moveZero(arr){
    let j=0;
    let temp;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            j++;
        }
    }
    return arr;
}

console.log(moveZero([1,2,0,3,4,0,5]));