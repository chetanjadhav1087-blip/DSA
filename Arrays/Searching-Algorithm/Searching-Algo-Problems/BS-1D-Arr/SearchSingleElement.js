// Problem Statement: Given an array of N integers. Every number in the 
// array except one appears twice. Find the single number in the array.

// Examples
// Input : arr[] = {1,1,2,2,3,3,4,5,5,6,6}
// Output: 4
// Explanation: Only the number 4 appears once in the array.

//BRUTE FORCE APPROACH 1
// Time Complexity: O(N), N = size of the given array.We are traversing 
// the entire array.
// Space Complexity: O(1) as we are not using any extra space.
const arr = [1,1,1,2,2,3,3,4,4,4,5]
const n = arr.length;
let single;
function findSingleElement(){
    for(let i = 0; i < arr.length; i++){
         // Check if it's the first element and not equal to the next
            if (i === 0) {
                if (arr[i] !== arr[i + 1])
                    return arr[i];
            }

            // Check if it's the last element and not equal to the previous
            else if (i === n - 1) {
                if (arr[i] !== arr[i - 1])
                    return arr[i];
            }

            // Check if the current element is not equal to both neighbors
            else {
                if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1])
                    return arr[i];
            }
    }
    // return single;
}

// console.log(findSingleElement());

//OPTIMAL APPROACH

function findSingleElementOptimal(){
    let n = arr.length;
    let low = 1;
    let high = n - 2;

    //First elenent is unique
    if(arr[0] != arr[1]){
        return arr[0]
    }
    //Last elenent is unique
    if(arr[n-1] != arr[n-2]){
        return arr[n-1]
    }
    while(low <= high){
        let mid = Math.floor((high + low) / 2);

        if(arr[mid] != arr[mid-1] && arr[mid] != arr[mid+1]){
            return arr[mid];
        }

        if((mid % 2 === 1 && arr[mid] === arr[mid-1]) ||
            (mid %2 === 0 && arr[mid] === arr[mid+1])
        ){
            low = mid + 1;
        } else {
            high = mid -1;
        }
    }
    return -1;
}

console.log(findSingleElementOptimal());