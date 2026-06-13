// Problem Statement: 
// Given an array of length N, peak element is defined as the element 
// greater than both of its neighbors. Formally, if arr[i] is the peak 
// element, arr[i - 1] < arr[i] and arr[i + 1] < arr[i]. Find the index(0-
// based) of a peak element in the array. If there are multiple peak numbers,
// return the index of any peak number.

// Time Complexity: O(N), we traverse the entire array once to find peak element.
// Space Complexity: O(1), constant additional space is used.

const arr = [1,2,3,4,5,6,7,8,5,1];
let peak = -1;

function findPeakIndex(){
    for(i = 1; i < arr.length-1; i++){
    if(arr[i-1] < arr[i] && arr[i+1] < arr[i]){
        peak = i;
    }
}
return peak;
}

// console.log(findPeakIndex())

//OPTIMAL APPROACH
// A peak element divides the array into two patterns:

// * **Left side:** increasing order
// * **Right side:** decreasing order

// Using this observation:

// * If the current element is greater than its left neighbor, we are in the increasing (left) half.
// * If it is greater than its right neighbor, we are in the decreasing (right) half.

// This helps us eliminate one half of the array while searching for a peak, similar to binary search.

// There are also two special cases:

// * The current element itself is the peak.
// * The current element is where a decreasing sequence changes into an increasing sequence.

// In both situations, either half can still contain a peak element, so we can continue searching in any half.

// Time Complexity: O(log N), we reduce the search space to half at every step using binary search.
// Space Complexity: O(1), constant additional space is used.

function optimalPeakElementSearching(){
    let left = 0;
    let right = arr.length-1;
    
    while(left < right) {
        let mid = Math.floor((left + right)/2);

        if(arr[mid] > arr[mid+1]){
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

console.log(optimalPeakElementSearching())
