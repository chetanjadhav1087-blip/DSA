const array = [64, 34, 25, 12, 22, 11, 90];

//Before sorting
console.log("Unsorted array: ");
console.log(array);

// Bubble sort algorithm compares two adjacent elements and swaps them if they are in the 
// wrong order and dont swap if thew are in correct order.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function bubbleSort(array) {
    const arrayLength = array.length;
    //Outer loop for first emement till second last element
    for (let i = 1; i< arrayLength - 1; i++) {
        //Inner loop for second element till last element
        for (let j = 0; j <arrayLength - 2; j++){
            if (array[j] > array[i]){
                [array[j], array[i]] = [array[i], array[j]];
            }
        }
    }
    console.log("Sorted array using Bubble Sort: ");
    console.log(array);
}

bubbleSort(array);

//Recursive Bubble Sort

//Time Complexity: O(N2), (where N = size of the array), for the worst, and average cases.
// Space Complexity: O(N) auxiliary stack space.

let sizeOfArray = array.length;

function RecursiveBubbleSort(array, sizeOfArray) {  
    //Base case
    if(sizeOfArray == 1){
        return;
    }

    // Push the largest element to the end
    for(let i = 0; i < sizeOfArray - 1; i++){
        if(array[i] > array[i + 1]){
            // Swap arr[i] and arr[i + 1]
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
        }
    }

    // Recurse for the remaining unsorted array
    RecursiveBubbleSort(array, sizeOfArray-1);
}
RecursiveBubbleSort(array, sizeOfArray-1);
console.log("Sorted array using Recursive Bubble Sort: ");
console.log(array);