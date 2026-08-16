function duplicate(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]) return true;
        }
    }
    return false;
}

console.log(duplicate([1, 2, 3, 6]))


// using set 
function findDuplicate(arr){
    let set= new Set([]);
    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i])){
            return true;
        }
        set.add(arr[i]);
    }
    return false;
}

console.log(findDuplicate([1,2,3,1]))