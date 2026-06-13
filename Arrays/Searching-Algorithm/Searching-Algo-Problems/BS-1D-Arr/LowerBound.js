/*
PROBLEM STATEMENT: Given a sorted array of N integers and an integer x, 
write a program to find the lower bound of x.

WHAT IS LOWER BOUND?
The lower bound algorithm finds the first or the smallest index in a s
orted array where the value at that index is greater than or equal to a 
given key i.e. x.

Example 2:
Input Format: N = 5, arr[] = {3,5,8,15,19}, x = 9
Result: 3
Explanation: Index 3 is the smallest index such that arr[3] >= x
*/

class LowerBoundFinder {
    
    // BRUTE FORCE APPROACH (linear search algorithm)
    /*
        Time Complexity: O(N), where N = size of the given array.
        Space Complexity: O(1), no extra space used.
    */
    lowerbound(arr, x) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= x) {
                return i;
            }
        }
        return arr.length;
    }

    // OPTIMAL APPROACH (Binary Search algorithm)
    /*
        Time Complexity: O(logn), used for typical binary search
        Space Complexity: O(1), no extra space used
    */
    lowerboundOptimised(arr, x){
        let low = 0;
        let high = arr.length - 1;
        let ans = arr.length;

        while(low <= high) {
            let mid = Math.floor((low + high) / 2);

            if(arr[mid] >= x) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }

}

const arr = [2,3,6,7,9,11];
const x = 11;

const finder = new LowerBoundFinder();
const ind = finder.lowerbound(arr, x);

const ans = finder.lowerboundOptimised(arr, x);

console.log('The Lower Bound is the index: ', ans);