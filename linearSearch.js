function linearSearch(arr, i){
    for(let j = 0; j < arr.length; j++) {
        if (arr[j] === i) return j;
        }
    return -1;
  }