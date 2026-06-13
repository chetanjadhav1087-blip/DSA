/*
PROBLEM STATEMENT: Given a sorted array of N integers, write a program 
to find the index of the last occurrence of the target key. If the target
is not found then return -1. Note: Consider 0 based indexing

Example 1:
Input:
 N = 7, target = 13, array[] = {3, 4, 13, 13, 13, 20, 40}  
Output:
 4
*/

class LastOccuringVal {

    //BRUTE FORCE METHOD
    /*
    ALGORITHM:
        Start traversing the array from the back using a for loop, 
    starting from the last index and moving towards the first.
        Check if the current element matches the target element.
        If the target element is found, break out of the loop and print the result
    ing index where the target was found.
        If the target element is not found after traversing the entire array, 
    print -1 to indicate that the element is not present.

    TIME COMPLEXITY: O(N)
    SPACE COMPLEXITY: O(1);
    */
    searchFun(arr, key){
        
        for(let i = arr.length; i > 0; i--) {
            if(arr[i] === key) {
                return i;
            }
        }
        return -1;
    }

    //OPTIMAL APPROACH
    /*
    
        Given that the array is sorted, we can use binary search to efficiently
    search for the target element.
        Initially, set two pointers: start = 0 and end = n-1, where n is the 
    size of the array. Also, initialize the result variable to -1.
        While start is less than or equal to end, compute the mid index as 
    mid = (start + end) / 2.
        Check if the mid element is equal to the target key:
        If they are equal, store the mid value in the result and move the 
    start pointer to mid + 1 to continue searching in the right half.
        If the key value is less than the mid element, update the end pointer
    to mid - 1 to search the left half.
        If the key value is greater than the mid element, update the start 
    pointer to mid + 1 to search the right half.
        Repeat the process until the start pointer crosses the end pointer or
    the element is found.
        If the element is found, the result will store its index, otherwise,
    it will remain -1 indicating that the target is not present in the array.
    
    TIME COMPLEXITY: O(logN)
    SPACE COMPLEXITY: O(1)
    */
    optimalSearchFun(arr, val){
        let start = 0;
        let end = arr.length - 1;
        let result = -1;

        while ( start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (arr[mid] === key) {
                result = mid;
                start = mid + 1;
            } else if (key < arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return result;
    }
}

const arr = [1,3,3,3,3,3,5,7,9];
const key = 3;

const obj = new LastOccuringVal();
const result = obj.optimalSearchFun(arr, key);
console.log('Last occuring index is ', result);
