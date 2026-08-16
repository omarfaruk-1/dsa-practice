function minFind(arr){
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
console.log(minFind([15, 7, 22, 3, 18, 9]))