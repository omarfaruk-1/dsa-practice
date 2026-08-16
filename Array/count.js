

function countEven(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count++;
        }
    }
    return count;
}

console.log("Even count: ",countEven([10, 15, 22, 7, 30, 41, 18]));


function negativeCount(arr){
    let count =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++;
        }
    }
    return count;
}
console.log("Negative count: ",negativeCount([10, -5, 7, -2, -8, 20, -1]));