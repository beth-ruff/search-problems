//function accepts a sorted array and a value
//create a left pointer at the start of the array, and a right pointer at the end of the array
//while left pointer comes before the right pointer:
    //create a pointer in the middle
    //if you find value you want, return index
    //if val is too small, move left pointer up
    //if val is too large, move right pointer down
//if you never find value, return -1

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (arr[middle] !== val && left <= right) {
        if (val < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        let middle = Math.floor((left + right) / 2)
    }
    if (arr[middle] === val) {
        return middle;
    }
    return -1;
}