function maxNumberOfVowels(str,k){
    let left=0,right=k-1,count=0,countMax=0;
    for(let i=0;i<k;i++){
        if("aeiou".includes(str[i])){
            count++;
        }
    }
    countMax=count;

    while(right<str.length-1){
        if("aeiou".includes(str[left])){
            count--;
        }
        left++;
        right++;
        if("aeiou".includes(str[right])){
            count++;
        }
        countMax=Math.max(countMax,count)
    }
    return countMax;
}


console.log(maxNumberOfVowels("abciiidef",3))