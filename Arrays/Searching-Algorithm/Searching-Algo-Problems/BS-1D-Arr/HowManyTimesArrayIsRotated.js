/*
PROBLEM STATEMENT: Given an integer array arr of size N, sorted in 
ascending order (with distinct values). Now the array is rotated between 
1 to N times which is unknown. Find how many times the array has been 
rotated.

Input : arr = [4,5,6,7,0,1,2,3]
Result: 4
Explanation: The original array should be [0,1,2,3,4,5,6,7]. So, we can 
notice that the array has been rotated 4 times.

Input : arr = [3,4,5,1,2]
Output : 3
Explanation: The original array should be [1,2,3,4,5]. So, we can notice 
that the array has been rotated 3 times.
*/


// BRUTE FORCE APPROACH: Traversing through complete array
const arr = [3,4,5,6,7,8,1,2];

function findArrRotated(){
    let minIndex = 0;
    let minVal = arr[0];
    let n = arr.length;
    for(let i = 0; i < arr.length; i++){
        for (let i = 1; i < n; i++) {
                // If current element is smaller than minVal, update
                if (arr[i] < minVal) {
                    minVal = arr[i];
                    minIndex = i;
                }
            }

        // The index of smallest element = number of rotations
        return minIndex;
    }
}
/*
Time Complexity: O(n),We scan the entire array once to find the smallest
element, where n is the size of the array.

Space Complexity: O(1),We only use a few extra variables to store the 
minimum value and its index, so the extra space used is constant.
*/

// console.log(findArrRotated())

//BETTER APPROACH

function findArrRotatedBetter(){
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
            // If break point found
            if (arr[i] > arr[i + 1]) {
                // Return index of next element
                return i + 1;
            }
        }
        // No rotation found
        return 0;
}
// console.log(findArrRotatedBetter())
// Time Complexity: O(n),We traverse the array once to find the rotation 
// point, where n is the size of the array.

// Space Complexity: O(1),Only a few extra variables are used regardless 
// of input size, so constant space.

//OPTIMAL APPROACH
// Imagine searching for the break in a long sorted belt by cutting it in
//  halves repeatedly instead of scanning all the way through.
// Initialize low = 0 and high = n - 1.
// While low is less than high:
//  Find mid index.
//  If the element at mid is greater than the element at high, the rotation point is after mid, so update low = mid + 1.
//  Else, the rotation point is at mid or before it, so update high = mid.
// When low meets high, that index is the rotation count (index of smallest element).

function findArrRotatedOptimal(){
    let low = 0;
    let high = arr.length - 1;

     while (low < high) {
        
            let mid = low + Math.floor((high - low) / 2);
            // Key takeaway
            // low + ((high - low) / 2) = safe midpoint calculation
            // Prevents overflow (important in many languages)
            // Conceptually: start at low and move halfway to high

            // If mid element is greater than element at high,
            // smallest element lies to the right of mid
            if (arr[mid] > arr[high]) {
                low = mid + 1;
            } else {
                // Else smallest element is at mid or to the left
                high = mid;
            }
        }

        // When low == high, we found the smallest element
        return low;
}

console.log(findArrRotatedOptimal());


