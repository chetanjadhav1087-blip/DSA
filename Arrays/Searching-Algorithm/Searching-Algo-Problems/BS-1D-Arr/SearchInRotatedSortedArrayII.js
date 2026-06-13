// Problem Statement: Given an integer array arr of size N, sorted in 
// ascending order (may contain duplicate values) and a target value k. 
// Now the array is rotated at some pivot point unknown to you. Return 
// True if k is present and otherwise, return False.

// Example 1:
// Input Format: arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 3
// Result: True
// Explanation: The element 3 is present in the array. So, the answer is True

// First, we identify the sorted half of the array.
// Once found, we determine if the target is located within this sorted half
// If not, we eliminate that half from further consideration.
// Conversely, if the target does exist in the sorted half, we eliminate the other half.
// We basically compare arr[mid] with arr[low] and arr[high] in the following way:
// If arr[low] <= arr[mid]: In this case, we identified that the left half is sorted.
// If arr[mid] <= arr[high]: In this case, we identified that the right half is sorted.

const arr = [7,8,1,2,3,3,3,4,5,6];
const target = 7;

let high = arr.length - 1;
let low = 0;
function searchElement(){
    
    while(low <= high) {
        let mid = Math.floor((high + low) / 2);

        if(arr[mid] === target) return mid;

        // Edge case: Cannot determine sorted side due to duplicates
        if(arr[mid] === arr[high] && arr[mid] === arr[low]) {
            low ++;
            high --;
            continue;
        }

        if(arr[low] < arr[mid]) {
            if(arr[mid] >= target && arr[low] <= target){
                high = mid -1;
            } else {
                low = mid + 1;
            }
        }
        else{

            if(arr[mid] <= target && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}

console.log(searchElement())