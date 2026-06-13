import quickSort from '../Sorting-Algorithms/QuickSort.js';

const array = [2,3,1,8,3,8,4,10,12,15,18,20];
const target = 10;

// In Binary Search, the array must be sorted. We repeatedly divide the search interval in half.
// If the value of the target is less than the item in the middle of the interval, we narrow the interval to the lower half.
// Otherwise, we narrow it to the upper half. We continue until the value is found or the interval is empty.

// Time Complexity: O(log n)
// Space Complexity: O(1)

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    // Ensure the array is sorted before performing binary search
    if (arr !== quickSort(arr)) {
        console.log('Array is not sorted. Sorting the array first.');
        arr = quickSort(arr);
        console.log('Sorted Array:', arr);
    } 

    // Perform binary search
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(`Checking middle index ${mid}, value ${arr[mid]}`);
        if (arr[mid] === target) {
            return console.log(`Element found at index ${mid}`);
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return console.log('Element not found');
}

binarySearch(array, target);