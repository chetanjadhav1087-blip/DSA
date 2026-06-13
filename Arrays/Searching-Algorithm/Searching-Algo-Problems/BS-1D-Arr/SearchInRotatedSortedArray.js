// PROBLEM STATEMENT:
//  Given an integer array nums, sorted in ascending 
// order (with distinct values) and a target value k. The array is rotated
//  at some pivot point that is unknown. Find the index at which k is 
// present and if k is not present return -1.

//Example
// Input:nums = [4, 5, 6, 7, 0, 1, 2], k = 0
// Output :4
// Explanation : Here, the target is 0. We can see that 0 is present in 
// the given rotated sorted array, nums. Thus, we get output as 4, which 
// is the index at which 0 is present in the array.

//Optimal Approach (Binary Search)
// In normal binary search, we rely on the entire array being sorted to 
// decide whether to go left or right. But in this case, we adapt it 
// slightly we don't require the whole array to be sorted, just identify 
// which part is sorted in the current range. Once we know which part is 
// sorted, we check if the target lies inside that sorted section. If it 
// does, we discard the other half. If not, we discard the sorted half and
// search the remaining half. No matter how the array was rotated, the 
// sorted structure on at least one side of any middle point always helps 
// us narrow down where to look next

// Time Complexity: O(log N),We eliminate half of the search space in each 
// iteration using binary search.

// Space Complexity: O(1),We use only a few variables (low, high, mid) no 
// extra space used.

const array = [4,5,6,7,0,1,2];
const target = 0;

function searchElement(){
    let high = array.length - 1;
    let low = 0;

    while(low <= high){
        let mid = Math.floor((high + low)/2);
        console.log(mid)
        if(array[mid] === target){
            return mid;
        }
        if(array[low] < array[mid]){ //Check if left Half is sorted
            if(target >= array[low] && target < array[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        else {
            high = mid - 1;
        }
        
    }
    return -1;
}

console.log(searchElement());