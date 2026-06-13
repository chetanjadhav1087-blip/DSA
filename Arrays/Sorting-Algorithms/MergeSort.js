const array = [64, 25, 12, 22, 11];

//Merge Sort Algorithm: This algorithm divides the array into two halves, recursively sorts each half, 
                        //and then merges the sorted halves back together.

// Time Complexity: O(n log n)
// Space Complexity: O(n)
function mergeSort( array ){
     if(array.length <= 1){
        console.log('Base case reached with array:', array);
        return array;
    }
    let arrayLength = array.length;
    let mid = Math.floor(arrayLength/2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    console.log('Left:', left, 'Right:', right);
    return merge(left, right);
}

function merge(left, right){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
        console.log('Merging:', result);
    }
    console.log(left.slice(i), right.slice(j));
    console.log('Merged result:', result.concat(left.slice(i)).concat(right.slice(j)));
    return result.concat(left.slice(i)).concat(right.slice(j));
}

mergeSort(array);