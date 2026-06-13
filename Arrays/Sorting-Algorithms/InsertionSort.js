const array = [64, 34, 25, 12, 22, 11, 90];

//Before sorting
console.log("Unsorted array: ");
console.log(array);

//Insertion sort algorithm sorts one element at a time by comparing it with the elements 
// before it and inserting it in the correct position. The smallest element will be sorted first

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function insertionSort(array) {
    const arrayLength = array.length;
    for (let i = 1; i < arrayLength; i++) {
        let key = array[i];
        let j = i-1;
        //Move elements of array[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
           
        }
        array[j + 1] = key;
        console.log(array);
    }
    console.log("Sorted array: ");
    console.log(array);
}

insertionSort(array);