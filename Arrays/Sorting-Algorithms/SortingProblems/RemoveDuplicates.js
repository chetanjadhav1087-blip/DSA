let array = [1,2,2,3,4,4,4,3,2,2,1,1,2,1]
let sortedArray = [1,1,2,2,2,2,2,,3,3,3,3,4,4,4,4,5,6,6,6,8,8];

// METHOD : 1

// Removing duplicates using Set data structure.

// Time Complexity = O(N)
// Space Complexity = O(N)
function removeDuplicateUsingSet(array){
    const seen = new Set();
    let index = 0;
    for(let i=0; i < array.length; i++){
        if(!seen.has(array[i])){
            seen.add(array[i]);
        }
    }
    // console.log(seen.keys());
    // console.log(seen.values());
    console.log(seen)
    console.log(seen.size);
}
// removeDuplicate(array);

// METHOD : 2

// Removing duplicate elements without using set.
// Implement a two pointer strategy to optimize the space. Since the array is sorted, we know 
// that all the duplicate values will be adjacent to each other.

// Begin at the first position, which will always be part of the final unique list.
// Move through the list one item at a time, comparing the current item with the most recently kept unique item.
// If the current item is the same as the last kept one, skip it because it’s a duplicate.
// If it’s different, place it right after the last kept unique item to keep all unique values grouped at the front.

function removeDuplicateUsingPointers(array){
    let i = 0;
    for(let j = 1; j < array.length-1; j++){
        if(array[j] !== array[i]) {
            // console.log(array[i],' ', array[j]);
            i++;
           array[i] = array[j];
        }
    }
    console.log(i );
}
removeDuplicateUsingPointers(sortedArray);
