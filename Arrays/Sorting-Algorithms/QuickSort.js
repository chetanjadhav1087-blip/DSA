const array = [34, 7, 23, 32, 5, 62];

// In QuickSort Algorithm the last element is chosen as pivot, and elements are compared to the pivot. 
// If an element is greater than the pivot, it is swapped to the right side; otherwise, it remains on the left side.
// This process is repeated recursively for the left and right sub-arrays until the entire array is sorted.

// This code is implementer using Recursion.

//Time Complexity: O(n log n) on average, O(n^2) in the worst case
//Space Complexity: O(log n) due to recursive stack space

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(`Comparing ${arr[i]} with pivot ${pivot}`);
        if (pivot < arr[i]) {
            console.log(`Swapping ${arr[i]} and ${pivot}`);
            right.push(arr[i]);
        } else {
            console.log(`Keeping ${arr[i]} in left side`);
            left.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(array));

export default quickSort;