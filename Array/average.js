function findAverage(arr){
    let average=0;
    let sum=0;
    for(let element of arr){
        sum+=element;
    }
    return average=(sum/arr.length);
}
console.log(findAverage([10, 20, 30, 40, 50]))