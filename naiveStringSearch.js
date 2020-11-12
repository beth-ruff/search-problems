//loop over longer string
//loop over the shorter string
//if characters don't match, break out of inner loop
//if characters do match, keep going
//if you complete inner loop and find match, increment count of matches
//return the count

function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}