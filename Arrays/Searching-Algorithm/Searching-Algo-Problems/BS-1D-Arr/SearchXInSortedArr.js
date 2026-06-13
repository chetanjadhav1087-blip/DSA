// ***** Problem statement: You are given a sorted array of 
// integers and a target, your task is to search for the target
// in the given array. Assume the given array does not contain 
// any duplicate numbers. ********

/* Algorithm

    mid = (low+high) // 2 ( ‘//’ refers to integer division)

    If arr[mid] == target: We have found the target. From this 
        step, we can return the index of the target possibly.
    If target > arr[mid]: This case signifies our target is 
        located on the right half of the array. So, the next 
        search space will be the right half.
    If target < arr[mid]: This case signifies our target is 
        located on the left half of the array. So, the next 
        search space will be the left half.
*/

class Solution{

    binarySearch(nums, target) {
        let n = nums.length;
        let low = 0, high = n-1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if(nums[mid] === target) return mid;
            else if (target > nums[mid]) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}

let a = [3, 4, 5, 7, 11, 13, 23, 34];
let target = 3;

let obj = new Solution();
let ind = obj.binarySearch(a, target);

if (ind === -1) console.log('Target is not Present');
else console.log('Target is present at index:', ind);