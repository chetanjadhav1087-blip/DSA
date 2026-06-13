/*
Problem Statement: ou're given an sorted array arr of n 
integers and an integer x. Find the floor and ceiling of 
x in arr[0..n-1]. The floor of x is the largest element in 
the array which is smaller than or equal to x. The ceiling of 
x is the smallest element in the array greater than or equal to x
*/

/*
Example 1:
Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
Result: 4 7
Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.
*/

/*
We will declare the 2 pointers and an ‘ans’ variable 
initialized to -1(If we don’t find any index, we will return -1).

CEIL
Case 1 - If arr[mid] >= x: This condition means that the index arr[mid] 
    may be an answer. So, we will update the ‘ans’ variable with arr[mid] and
    search in the left half if there is any smaller number that satisfies the
    same condition. Here, we are eliminating the right half.
Case 2 - If arr[mid] < x: In this case, arr[mid] cannot be our answer and
    we need to find some bigger element. So, we will eliminate the left half
    and search in the right half for the answer.

FLOOR
Case 1 - If arr[mid] <= x: The index arr[mid] is a possible answer. So, we
 will store it and will try to find a larger number that satisfies the 
 same condition. That is why we will remove the left half and try to find
 the number in the right half.
Case 2 - If arr[mid] > x: arr[mid] is definitely not the answer and we need
 a smaller number. So, we will reduce the search space to the left half by
 removing the right half.
*/

class FloorCeilFinder {
    // Method to find floor
    findFloor(arr, x) {
        let low = 0, high = arr.length - 1;
        let ans = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] <= x) {
                ans = arr[mid]; // Potential floor
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }

    // Method to find ceil
    findCeil(arr, x) {
        let low = 0, high = arr.length - 1;
        let ans = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] >= x) {
                ans = arr[mid]; // Potential ceil
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }

    // Method to return both floor and ceil
    getFloorAndCeil(arr, x) {
        const floor = this.findFloor(arr, x);
        const ceil = this.findCeil(arr, x);
        return [floor, ceil];
    }
}

// Usage
const arr = [3, 4, 4, 7, 8, 10];
const x = 8;
const finder = new FloorCeilFinder();
const [f, c] = finder.getFloorAndCeil(arr, x);
console.log(`The floor and ceil are: ${f} ${c}`);