// Problem Statement: Given an array of N integers. Every number in the 
// array except one appears twice. Find the single number in the array.

//OPTIMAL APPROACH

// Time Complexity: O(logN), N = size of the given array ,as we are basically using the Binary Search algorithm.
// Space Complexity: O(1) as we are not using any extra space.

const arr = [1,1,2,2,3,3,4,4,5,6,6,7,7];

function searchSingleElement(){
    let n = arr.length;
    if (arr[0] !== arr[1]) return arr[0];

    if (arr[n-1] !== arr[n-2]) return arr[n-1];

    let low = 1;
    let high = n-2;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] !== arr[mid+1] && arr[mid] !== arr[mid-1]) return arr[mid];

        if((mid % 2 === 1 && arr[mid] === arr[mid - 1]) || 
           (mid % 2 === 0 && arr[mid] === arr[mid + 1])){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

// console.log(searchSingleElement());

//Bruteforce Approach
// We can simplify the above approach using the XOR operation.
// a ^ a = 0, XOR of two same numbers results in 0.
// a ^ 0 = a, XOR of a number with 0 always results in that number.

function searchSingleElementUsingXOR(){
    let n = arr.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans ^= arr[i];
        // console.log(ans)
    }
    return ans
}

console.log(searchSingleElementUsingXOR())