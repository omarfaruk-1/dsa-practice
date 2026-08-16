function sumArr(arr){
    let sum=0;
    for(let element of arr){
        sum+=element
    }
    return sum;
}

console.log(sumArr([5, 10, 15, 20, 25]))