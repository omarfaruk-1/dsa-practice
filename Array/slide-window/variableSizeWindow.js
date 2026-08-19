function variableSizeWindow(arr, t) {
    let left = 0,sum = 0,minLength = Infinity,length;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum >= t) {
            length = right - left + 1;

            minLength = Math.min(minLength, length);

            sum -= arr[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

console.log(variableSizeWindow([2, 3, 1, 2, 4, 3], 7));