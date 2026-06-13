const array = [64, 25, 12, 22, 11];

//Selection Sort Algorithm the comparing pointer starts from the 0th index and then compared to the elements which are at the 
//right of it. The smallest element is selected and swapped with the element at the 0th index. This process is repeated for the 
//rest of the array until the entire array is sorted.  

// Time Complexity: O(n^2)
// Space Complexity: O(1)
//Before sorting
console.log("Unsorted array: ");
console.log(array);

const n = array.length;

for (let i = 0; i < n - 1; i++) {
    let min_ptr = i;
    for (let j = i + 1; j < n; j++) {
        if (array[j] < array[min_ptr]) {
            min_ptr = j;

        }

    }
    // Swap the found minimum element with the first element
    let temp = array[i];
    array[i] = array[min_ptr];
    array[min_ptr] = temp;

    console.log(array);
}

//After sorting
console.log("Sorted array: ");
console.log(array);

