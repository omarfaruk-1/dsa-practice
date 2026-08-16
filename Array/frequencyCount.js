function frequencyCount(arr,target){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            count++;
        }
    }
    return count;
}

console.log(frequencyCount([2, 5, 2, 8, 2, 5],2))