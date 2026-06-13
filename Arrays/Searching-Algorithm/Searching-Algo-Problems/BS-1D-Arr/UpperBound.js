/*
PROBLEM STATEMENT: Given a sorted array of N integers and an integer x, 
write a program to find the upper bound of x.

What is Upper Bound?
The upper bound algorithm finds the first or the smallest index in a sorted
array where the value at that index is greater than the given key i.e. x.
The upper bound is the smallest index, ind, where arr[ind] > x.

EXAMPLE:
Input Format: N = 6, arr[] = {3,5,8,9,15,19}, x = 9
Result: 4
Explanation: Index 4 is the smallest index such that arr[4] > x.
*/

class UpperBound {
    
    //BRUTEFORCE APPROACH (linear search algorithm)
    /*
        Time Complexity: O(N), where N = size of the given array.
        Space Complexity: O(1), no extra space used.
    */
    upperBoundFinfer(arr, x) {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > x) {
                return i;
            } 
        }
        return arr.length;
    }

    //OPTIMAL APPROACH (Binary Search algorithm)
    /*
        Time Complexity: O(logn), used for typical binary search
        Space Complexity: O(1), no extra space used
    */
   upperBoundFinferOptimized(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let ans = arr.length;

    while(low <= high) {
        let mid = Math.floor((low + high)/2);

        if(arr[mid] > x) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans
   }
}

const arr = [1,2,3,4,5,6,7,8];
const x = 7;

const finder = new UpperBound();
const ind = finder.upperBoundFinfer(arr, x);
const ans = finder.upperBoundFinferOptimized(arr, x);
console.log('Upper bound is :', ans); 